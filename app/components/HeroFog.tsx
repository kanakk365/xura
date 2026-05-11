"use client";

import { useEffect, useRef } from "react";

const VERT = `#version 300 es
in vec2 aPos;
void main(){gl_Position=vec4(aPos,0.0,1.0);}
`;

const FRAG = `#version 300 es
precision highp float;
out vec4 outColor;
uniform float uTime;
uniform vec2 uResolution;

vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}

float snoise(vec3 v){
  const vec2 C=vec2(1.0/6.0,1.0/3.0);
  const vec4 D=vec4(0.0,0.5,1.0,2.0);
  vec3 i=floor(v+dot(v,C.yyy));
  vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz);
  vec3 l=1.0-g;
  vec3 i1=min(g.xyz,l.zxy);
  vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx;
  vec3 x2=x0-i2+C.yyy;
  vec3 x3=x0-D.yyy;
  i=mod289(i);
  vec4 p=permute(permute(permute(
    i.z+vec4(0.0,i1.z,i2.z,1.0))
    +i.y+vec4(0.0,i1.y,i2.y,1.0))
    +i.x+vec4(0.0,i1.x,i2.x,1.0));
  float n_=0.142857142857;
  vec3 ns=n_*D.wyz-D.xzx;
  vec4 j=p-49.0*floor(p*ns.z*ns.z);
  vec4 x_=floor(j*ns.z);
  vec4 y_=floor(j-7.0*x_);
  vec4 x=x_*ns.x+ns.yyyy;
  vec4 y=y_*ns.x+ns.yyyy;
  vec4 h=1.0-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy);
  vec4 b1=vec4(x.zw,y.zw);
  vec4 s0=floor(b0)*2.0+1.0;
  vec4 s1=floor(b1)*2.0+1.0;
  vec4 sh=-step(h,vec4(0.0));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;
  vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x);
  vec3 p1=vec3(a0.zw,h.y);
  vec3 p2=vec3(a1.xy,h.z);
  vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
  p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
  vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);
  m=m*m;
  return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}

float normnoise(float n){return 0.5*(n+1.0);}

float clouds(vec2 uv){
  uv += vec2(uTime*0.035, uTime*0.008);
  return normnoise(
    snoise(vec3(uv* 3.0 + vec2(  50.0,  33.0), uTime*0.18))*0.85 +
    snoise(vec3(uv* 6.0 + vec2(   0.0,   0.0), uTime*0.16))*0.40 +
    snoise(vec3(uv*12.0 + vec2(-300.0,  50.0), uTime*0.10))*0.20 +
    snoise(vec3(uv*24.0 + vec2(-100.0, 200.0), uTime*0.28))*0.10 +
    snoise(vec3(uv*48.0 + vec2( 400.0,-200.0), uTime*0.12))*0.05
  );
}

void main(){
  vec2 uv = gl_FragCoord.xy / uResolution.x;
  vec2 center = vec2(0.5, 0.5*(uResolution.y/uResolution.x));

  // Two atmospheric anchors with gentle drift
  vec2 light1 = vec2(-0.36 + 0.04*sin(uTime*0.40),
                      0.04*cos(uTime*0.32)) + center;
  vec2 light2 = vec2( 0.36 + 0.04*sin(uTime*0.30+2.0),
                      0.05*cos(uTime*0.24+1.0)) + center;

  // Neutral atmospheric fog (no green tint on the page background).
  vec3 colLeft  = vec3(0.92, 0.94, 0.97);
  vec3 colRight = vec3(0.96, 0.96, 0.92);

  float c = clouds(uv);

  float cloud1 = 0.85 * (1.0 - 2.1*distance(uv, light1));
  float beam1  = 0.45 / (1.0 + 220.0*distance(uv, light1)*distance(uv, light1));

  float cloud2 = 0.42 * (1.0 - 2.4*distance(uv, light2));
  float beam2  = 0.18 / (1.0 + 320.0*distance(uv, light2)*distance(uv, light2));

  vec3 col =
    vec3(max(cloud1,0.0)*c)*colLeft  + beam1*colLeft +
    vec3(max(cloud2,0.0)*c)*colRight + beam2*colRight;

  // Subtle gamma to deepen mid-fog and a clamp to keep highlights tasteful
  col = pow(col, vec3(0.95));
  col = clamp(col, 0.0, 1.0);

  outColor = vec4(col, 1.0);
}
`;

export function HeroFog({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl2", {
      alpha: true,
      premultipliedAlpha: false,
      antialias: false,
      powerPreference: "high-performance",
    });
    if (!gl) return;

    const compile = (type: number, src: string) => {
      const sh = gl.createShader(type);
      if (!sh) return null;
      gl.shaderSource(sh, src);
      gl.compileShader(sh);
      if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
        gl.deleteShader(sh);
        return null;
      }
      return sh;
    };

    const vs = compile(gl.VERTEX_SHADER, VERT);
    const fs = compile(gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );
    const aPos = gl.getAttribLocation(program, "aPos");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, "uTime");
    const uRes = gl.getUniformLocation(program, "uResolution");

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let width = 0;
    let height = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const w = Math.max(1, Math.floor(rect.width * dpr));
      const h = Math.max(1, Math.floor(rect.height * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        width = w;
        height = h;
        gl.viewport(0, 0, w, h);
      }
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    let visible = true;
    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry?.isIntersecting ?? true;
      },
      { threshold: 0 }
    );
    io.observe(canvas);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const start = performance.now();
    let raf = 0;
    const tick = () => {
      if (visible) {
        const t = reduced ? 0 : (performance.now() - start) / 1000;
        gl.uniform1f(uTime, t);
        gl.uniform2f(uRes, width, height);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      gl.deleteProgram(program);
      gl.deleteBuffer(buffer);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
