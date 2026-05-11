================================================
FILE: apps/web/components/landing-page/bento-grid/BentoGrid.tsx
================================================
import type { ReactNode } from "react";
import { F1Integrations } from "./F1Integrations";
import { F2WorkflowRunning } from "./F2WorkflowRunning";
import { F3AIModels } from "./F3AIModels";
import { F4Templates } from "./F4Templates";
type BentoShellProps = {
    children: ReactNode;
    outerRadius: string;
    midRadius: string;
    innerRadius: string;
};
function BentoShell({ children, outerRadius, midRadius, innerRadius, }: BentoShellProps) {
    return (<div className={`bg-[#1A1A1A] p-[5px] ${outerRadius}`}>
      <div className={`border border-white/10 p-[2px] ${midRadius}`}>
        <div className={`overflow-hidden border border-white/5 ${innerRadius}`}>
          {children}
        </div>
      </div>
    </div>);
}
export function BentoGrid() {
    return (<div className="relative z-10 w-full max-w-[1200px] xl:max-w-[1240px] mx-auto px-2 sm:px-3 md:px-4 lg:px-0">
      <div className="grid items-start grid-cols-1 lg:grid-cols-[1.12fr_1fr_1.12fr] xl:grid-cols-[1.1fr_1fr_1.1fr] gap-4 md:gap-5 lg:gap-3 xl:gap-4">
        
        <BentoShell outerRadius="rounded-[32px] sm:rounded-[36px] lg:rounded-[42px] xl:rounded-[50px]" midRadius="rounded-[29px] sm:rounded-[33px] lg:rounded-[39px] xl:rounded-[47px]" innerRadius="rounded-[26px] sm:rounded-[30px] lg:rounded-[36px] xl:rounded-[44px]">
          <F1Integrations />
        </BentoShell>

        
        <div className="flex flex-col gap-4 md:gap-5 lg:gap-3 xl:gap-4">
          <BentoShell outerRadius="rounded-[32px] sm:rounded-[36px] lg:rounded-[42px] xl:rounded-[50px]" midRadius="rounded-[29px] sm:rounded-[33px] lg:rounded-[39px] xl:rounded-[47px]" innerRadius="rounded-[26px] sm:rounded-[30px] lg:rounded-[36px] xl:rounded-[44px]">
            <F2WorkflowRunning />
          </BentoShell>
          <BentoShell outerRadius="rounded-[36px] sm:rounded-[40px] lg:rounded-[48px] xl:rounded-[58px]" midRadius="rounded-[33px] sm:rounded-[37px] lg:rounded-[45px] xl:rounded-[55px]" innerRadius="rounded-[30px] sm:rounded-[34px] lg:rounded-[42px] xl:rounded-[52px]">
            <F3AIModels />
          </BentoShell>
        </div>

        
        <BentoShell outerRadius="rounded-[32px] sm:rounded-[36px] lg:rounded-[42px] xl:rounded-[50px]" midRadius="rounded-[29px] sm:rounded-[33px] lg:rounded-[39px] xl:rounded-[47px]" innerRadius="rounded-[26px] sm:rounded-[30px] lg:rounded-[36px] xl:rounded-[44px]">
          <F4Templates />
        </BentoShell>
      </div>
    </div>);
}



================================================
FILE: apps/web/components/landing-page/bento-grid/F1Integrations.tsx
================================================
"use client";
import { useState } from 'react';
export function F1Integrations() {
    const [isActive, setIsActive] = useState(false);
    const handleToggle = () => {
        setIsActive(prev => !prev);
    };
    return (<div className="relative bg-[#111111] rounded-[28px] sm:rounded-[32px] lg:rounded-[38px] xl:rounded-[46px] h-[500px] sm:h-[520px] md:h-[540px] lg:h-[620px] xl:h-[660px] overflow-hidden">
            
            <div className="absolute top-[44px] sm:top-[50px] md:top-[54px] lg:top-[62px] xl:top-[74px] left-1/2 -translate-x-1/2 w-full flex items-center justify-center">
                <div className="relative">
                    
                    <svg viewBox="0 0 241 223" fill="none" xmlns="http://www.w3.org/2000/svg" onPointerEnter={(e) => { if (e.pointerType === 'mouse')
        setIsActive(true); }} onPointerLeave={(e) => { if (e.pointerType === 'mouse')
        setIsActive(false); }} onClick={handleToggle} className="cursor-pointer w-[228px] h-[228px] sm:w-[228px] sm:h-[228px] md:w-[230px] md:h-[230px] lg:w-[252px] lg:h-[252px] xl:w-[280px] xl:h-[280px]">
                        <path transform="matrix(.86603 -.5 .86603 .5 3.122 152.423)" fill="#111" stroke="#fff" d="M.866 0h135.947v135.947H.866z"/>
                        <path transform="matrix(.86603 .5 -.86603 .5 74.557 85.86)" fill="#000" fillOpacity=".6" stroke="#fff" strokeDasharray="5 5" d="M0 0h42.602v42.602H0z"/>
                        <path transform="matrix(.86603 .5 0 1 37.658 107.161)" fill="#000" fillOpacity=".6" stroke="#fff" strokeDasharray="5 5" d="M0 0h42.602v42.602H0z"/>
                        <path transform="matrix(.86603 -.5 0 1 74.557 128.463)" fill="#000" fillOpacity=".6" stroke="#fff" strokeDasharray="5 5" d="M0 0h42.602v42.602H0z"/>
                        <path transform="matrix(.86603 .5 -.86603 .5 170.234 85.86)" fill="#000" fillOpacity=".6" stroke="#fff" strokeDasharray="5 5" d="M0 0h42.602v42.602H0z"/>
                        <path transform="matrix(.86603 .5 0 1 133.338 107.161)" fill="#000" fillOpacity=".6" stroke="#fff" strokeDasharray="5 5" d="M0 0h42.602v42.602H0z"/>
                        <path transform="matrix(.86603 -.5 0 1 170.234 128.463)" fill="#000" fillOpacity=".6" stroke="#fff" strokeDasharray="5 5" d="M0 0h42.602v42.602H0z"/>
                        <path transform="matrix(.86603 .5 -.86603 .5 121.459 58.033)" fill="#000" fillOpacity=".6" stroke="#fff" strokeDasharray="5 5" d="M0 0h42.602v42.602H0z"/>
                        <path transform="matrix(.86603 .5 0 1 84.563 79.332)" fill="#000" fillOpacity=".6" stroke="#fff" strokeDasharray="5 5" d="M0 0h42.602v42.602H0z"/>
                        <path transform="matrix(.86603 -.5 0 1 121.459 100.634)" fill="#000" fillOpacity=".6" stroke="#fff" strokeDasharray="5 5" d="M0 0h42.602v42.602H0z"/>
                        <path transform="matrix(.86603 .5 -.86603 .5 121.459 114.312)" fill="#000" fillOpacity=".6" stroke="#fff" strokeDasharray="5 5" d="M0 0h42.602v42.602H0z"/>
                        <path transform="matrix(.86603 .5 0 1 84.563 135.614)" fill="#000" fillOpacity=".6" stroke="#fff" strokeDasharray="5 5" d="M0 0h42.602v42.602H0z"/>
                        <path transform="matrix(.86603 -.5 0 1 121.459 156.914)" fill="#000" fillOpacity=".6" stroke="#fff" strokeDasharray="5 5" d="M0 0h42.602v42.602H0z"/>
                        <path transform="matrix(.86603 .5 -.86603 .5 121.459 .5)" fill="#000" fillOpacity=".6" stroke="#fff" strokeDasharray="5 5" d="M0 0h42.602v42.602H0z"/>
                        <path transform="matrix(.86603 .5 0 1 84.563 21.802)" fill="#000" fillOpacity=".6" stroke="#fff" strokeDasharray="5 5" d="M0 0h42.602v42.602H0z"/>
                        <path transform="matrix(.86603 -.5 0 1 121.459 43.102)" fill="#000" fillOpacity=".6" stroke="#fff" strokeDasharray="5 5" d="M0 0h42.602v42.602H0z"/>
                        <path transform="matrix(.86603 .5 -.86603 .5 74.557 28.953)" fill="#000" fillOpacity=".6" stroke="#fff" strokeDasharray="5 5" d="M0 0h42.602v42.602H0z"/>
                        <path transform="matrix(.86603 .5 0 1 37.658 50.256)" fill="#000" fillOpacity=".6" stroke="#fff" strokeDasharray="5 5" d="M0 0h42.602v42.602H0z"/>
                        <path transform="matrix(.86603 -.5 0 1 74.557 71.556)" fill="#000" fillOpacity=".6" stroke="#fff" strokeDasharray="5 5" d="M0 0h42.602v42.602H0z"/>
                        <path transform="matrix(.86603 .5 -.86603 .5 170.234 28.953)" fill="#000" fillOpacity=".6" stroke="#fff" strokeDasharray="5 5" d="M0 0h42.602v42.602H0z"/>
                        <path transform="matrix(.86603 .5 0 1 133.338 50.256)" fill="#000" fillOpacity=".6" stroke="#fff" strokeDasharray="5 5" d="M0 0h42.602v42.602H0z"/>
                        <path transform="matrix(.86603 -.5 0 1 170.234 71.556)" fill="#000" fillOpacity=".6" stroke="#fff" strokeDasharray="5 5" d="M0 0h42.602v42.602H0z"/>
                        <path transform="matrix(.86603 .5 -.86603 .5 121.459 58.033)" fill="#000" fillOpacity=".6" stroke="#fff" strokeDasharray="5 5" d="M0 0h42.602v42.602H0z"/>
                        <path transform="matrix(.86603 .5 0 1 84.563 79.332)" fill="#000" fillOpacity=".6" stroke="#fff" strokeDasharray="5 5" d="M0 0h42.602v42.602H0z"/>
                        <path transform="matrix(.86603 -.5 0 1 121.459 100.634)" fill="#000" fillOpacity=".6" stroke="#fff" strokeDasharray="5 5" d="M0 0h42.602v42.602H0z"/>
                        <circle cx="7.504" cy="7.504" r="6.754" transform="matrix(.86603 -.5 .86603 .5 151.781 196.234)" fill="#000" stroke="#ff6200" strokeWidth="1.5" style={{
            filter: isActive ? 'drop-shadow(0 0 8px #ff6200)' : 'none',
            transition: 'filter 0.3s ease'
        }}/>
                        <path transform="matrix(.86603 .5 -.86603 .5 170.469 200.143)" stroke="url(#grad-a)" strokeWidth="1.5" d="M0-.75h37.834" style={{
            filter: isActive ? 'drop-shadow(0 0 8px #ff6200)' : 'none',
            transition: 'filter 0.3s ease'
        }}/>
                        <circle cx="7.504" cy="7.504" r="6.754" transform="matrix(.86603 -.5 .86603 .5 175.543 181.539)" fill="#000" stroke="#ff6200" strokeWidth="1.5" style={{
            filter: isActive ? 'drop-shadow(0 0 8px #ff6200)' : 'none',
            transition: 'filter 0.3s ease'
        }}/>
                        <path transform="matrix(.86603 .5 -.86603 .5 194.225 185.447)" stroke="url(#grad-b)" strokeWidth="1.5" d="M0-.75h37.834" style={{
            filter: isActive ? 'drop-shadow(0 0 8px #ff6200)' : 'none',
            transition: 'filter 0.3s ease'
        }}/>
                        <circle cx="7.504" cy="7.504" r="6.754" transform="matrix(.86603 .5 -.86603 .5 45.941 167.468)" fill="#000" stroke="#ff6200" strokeWidth="1.5" style={{
            filter: isActive ? 'drop-shadow(0 0 8px #ff6200)' : 'none',
            transition: 'filter 0.3s ease'
        }}/>
                        <path transform="matrix(-.86603 .5 -.86603 -.5 39.168 178.255)" stroke="url(#grad-c)" strokeWidth="1.5" d="M0-.75h37.834" style={{
            filter: isActive ? 'drop-shadow(0 0 8px #ff6200)' : 'none',
            transition: 'filter 0.3s ease'
        }}/>
                        <circle cx="7.504" cy="7.504" r="6.754" transform="matrix(.86603 .5 -.86603 .5 71.578 182.791)" fill="#000" stroke="#ff6200" strokeWidth="1.5" style={{
            filter: isActive ? 'drop-shadow(0 0 8px #ff6200)' : 'none',
            transition: 'filter 0.3s ease'
        }}/>
                        <path transform="matrix(-.86603 .5 -.86603 -.5 64.81 193.577)" stroke="url(#grad-d)" strokeWidth="1.5" d="M0-.75h37.834" style={{
            filter: isActive ? 'drop-shadow(0 0 8px #ff6200)' : 'none',
            transition: 'filter 0.3s ease'
        }}/>
                        <defs>
                            <linearGradient id="grad-a" x1="0" y1=".5" x2="37.834" y2=".5" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#ff6200"/>
                                <stop offset="1" stopColor="#993b00" stopOpacity="0"/>
                            </linearGradient>
                            <linearGradient id="grad-b" x1="0" y1=".5" x2="37.834" y2=".5" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#ff6200"/>
                                <stop offset="1" stopColor="#993b00" stopOpacity="0"/>
                            </linearGradient>
                            <linearGradient id="grad-c" x1="0" y1=".5" x2="37.834" y2=".5" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#ff6200"/>
                                <stop offset="1" stopColor="#993b00" stopOpacity="0"/>
                            </linearGradient>
                            <linearGradient id="grad-d" x1="0" y1=".5" x2="37.834" y2=".5" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#ff6200"/>
                                <stop offset="1" stopColor="#993b00" stopOpacity="0"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>

            
            <div className="absolute bottom-0 left-0 right-0 px-5 sm:px-6 lg:px-7 xl:px-8 pb-5 sm:pb-6 lg:pb-7 xl:pb-8">
                <h3 className="text-xl sm:text-2xl lg:text-[30px] xl:text-[36px] leading-snug lg:leading-[34px] xl:leading-[40px] text-white font-normal mb-2 lg:mb-3">
                    Connect everything you already use
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-[#7D7D87] leading-[17px] sm:leading-[19px] lg:leading-[22px]">
                    Bring Slack, GitHub, databases, internal tools, and MCP servers into one workflow.
                </p>
            </div>
        </div>);
}



================================================
FILE: apps/web/components/landing-page/bento-grid/F2WorkflowRunning.tsx
================================================
"use client";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
export function F2WorkflowRunning() {
    const shouldReduceMotion = useReducedMotion();
    const [isHovered, setIsHovered] = useState(false);
    return (<div className="relative bg-[#111111] rounded-[28px] sm:rounded-[32px] lg:rounded-[38px] xl:rounded-[46px] h-[240px] sm:h-[250px] md:h-[270px] lg:h-[295px] xl:h-[320px] overflow-hidden">
            
            <div className="absolute inset-x-0 top-0 bottom-[80px] sm:bottom-[104px] md:bottom-[112px] lg:bottom-[122px] xl:bottom-[130px] flex items-center justify-center cursor-pointer" onPointerEnter={(e) => { if (e.pointerType === 'mouse')
        setIsHovered(true); }} onPointerLeave={(e) => { if (e.pointerType === 'mouse')
        setIsHovered(false); }} onClick={() => setIsHovered(prev => !prev)}>
                <div className="relative translate-y-4 sm:translate-y-0 lg:translate-y-6 xl:translate-y-7 scale-[0.88] sm:scale-[0.78] md:scale-[0.84] lg:scale-[0.88] xl:scale-[0.92]" style={{ width: '230px', height: '180px' }}>
                    
                    <div className="absolute left-[10px] top-0 z-[1]">
                        <svg width="214" height="49" viewBox="0 0 200 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-[45px] w-[201px]">
                            <g clipPath="url(#f2-top-clip)">
                                <rect width="199.512" height="44.183" rx="20" fill="#1e1e1e"/>
                                <path d="M36.204 21.41c0 4.575-3.863 8.285-8.63 8.285-4.765 0-8.629-3.71-8.629-8.285s3.864-8.284 8.63-8.284 8.63 3.709 8.63 8.284" fill="#2d2727"/>
                                <rect x="138.078" y="15" width="48" height="15" rx="7.5" fill="#2d2727"/>
                                <rect x="48.078" y="15" width="78" height="15" rx="7.5" fill="#2d2727"/>
                            </g>
                            <rect x=".5" y=".5" width="198.512" height="43.183" rx="19.5" stroke="url(#f2-top-grad)"/>
                            <defs>
                                <linearGradient id="f2-top-grad" x1="0" y1="22.091" x2="199.512" y2="22.091" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#333"/>
                                    <stop offset="1" stopColor="#999"/>
                                </linearGradient>
                                <clipPath id="f2-top-clip">
                                    <rect width="199.512" height="44.183" rx="20" fill="#fff"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>

                    
                    <motion.div className="absolute left-[10px] top-[45px] sm:top-[48px] z-[2]" animate={shouldReduceMotion ? {} : (isHovered ? { rotate: -5 } : { rotate: 0 })} transition={{
            duration: 0.15,
            ease: [0.25, 0.1, 0.25, 1.0]
        }}>
                        <svg width="201" height="45" viewBox="0 0 201 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x=".5" y=".5" width="200" height="42" rx="19.5" fill="#1e1e1e"/>
                            <rect x=".5" y=".5" width="200" height="42" rx="19.5" stroke="#ff6e00"/>
                            <path d="M172.394 22.42c.529 0 .958-.411.958-.917 0-.507-.429-.917-.958-.917s-.958.41-.958.917c0 .506.429.916.958.916m0-6.416c.529 0 .958-.41.958-.916 0-.507-.429-.917-.958-.917s-.958.41-.958.917c0 .506.429.916.958.916m0 12.833c.529 0 .958-.41.958-.916 0-.507-.429-.917-.958-.917s-.958.41-.958.917c0 .506.429.916.958.916m5.75-6.416c.529 0 .958-.411.958-.917 0-.507-.429-.917-.958-.917s-.958.41-.958.917c0 .506.429.916.958.916m0-6.416c.529 0 .958-.41.958-.916 0-.507-.429-.917-.958-.917s-.958.41-.958.917c0 .506.429.916.958.916m0 12.833c.529 0 .958-.41.958-.916 0-.507-.429-.917-.958-.917s-.958.41-.958.917c0 .506.429.916.958.916" stroke="#fff" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="m154.02 24.253-5.75-5.5-5.75 5.5" stroke="#fff" strokeWidth="1.083" strokeLinecap="round" strokeLinejoin="round"/>
                            <motion.path d="M39.305 21.788a8.25 8.25 0 1 1-5.701-7.847" stroke="#fff" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" animate={shouldReduceMotion ? {} : (isHovered ? {
            rotate: 360,
        } : {})} transition={{
            duration: 1.5,
            ease: "linear",
            repeat: isHovered ? Infinity : 0,
        }} style={{
            transformOrigin: "33.5px 21.5px"
        }}/>
                            <path d="M53.753 26v-.64l2.4-2.627q.423-.461.696-.803.275-.345.405-.646.135-.305.135-.64a1.2 1.2 0 0 0-.184-.663 1.2 1.2 0 0 0-.498-.433 1.6 1.6 0 0 0-.71-.153q-.42 0-.731.174a1.2 1.2 0 0 0-.48.48 1.5 1.5 0 0 0-.167.724h-.838q0-.639.295-1.122t.803-.753q.51-.27 1.147-.27.639 0 1.132.27.494.27.774.728.282.458.281 1.019 0 .4-.145.785-.142.38-.498.848-.352.466-.976 1.137l-1.634 1.747v.057h3.38V26zm11.779-7.273h.88v5.2q0 .695-.255 1.182-.255.486-.72.738-.467.252-1.098.252-.597 0-1.062-.216a1.75 1.75 0 0 1-.732-.625 1.7 1.7 0 0 1-.266-.962h.867q0 .308.152.54.157.227.426.354.27.129.615.128.38 0 .646-.16.267-.159.405-.468a1.8 1.8 0 0 0 .142-.764zm4.748 7.387q-.74 0-1.296-.352a2.4 2.4 0 0 1-.867-.984q-.309-.631-.309-1.477 0-.852.31-1.488.311-.636.866-.987.556-.352 1.296-.352.738 0 1.292.352.558.351.867.987.312.636.312 1.488 0 .846-.312 1.477-.309.633-.867.984-.554.351-1.292.352m0-.753q.561 0 .923-.288t.536-.756.174-1.016-.174-1.019a1.7 1.7 0 0 0-.536-.764q-.362-.29-.923-.29t-.924.29-.536.764a2.9 2.9 0 0 0-.174 1.02q0 .546.174 1.015t.537.756q.362.288.923.288m3.864.639v-7.273h.838v2.685h.071a8 8 0 0 1 .256-.362 1.5 1.5 0 0 1 .476-.398q.312-.178.845-.178.69 0 1.215.345t.82.977q.294.631.295 1.49 0 .869-.295 1.503a2.33 2.33 0 0 1-.817.98q-.523.345-1.204.345-.525 0-.841-.174a1.6 1.6 0 0 1-.487-.402 5 5 0 0 1-.263-.376h-.099V26zm.824-2.727q0 .618.181 1.09.181.469.53.735.347.263.852.263.525 0 .877-.277.355-.28.532-.753.182-.476.182-1.058 0-.576-.178-1.037a1.6 1.6 0 0 0-.529-.735q-.352-.274-.884-.274-.512 0-.86.26-.348.256-.525.717a3 3 0 0 0-.178 1.069m9.137-1.506-.752.213a1.4 1.4 0 0 0-.21-.366q-.135-.18-.37-.298a1.34 1.34 0 0 0-.6-.117q-.5 0-.834.23-.33.228-.33.58 0 .312.227.493t.71.302l.81.199q.73.178 1.09.543.36.363.359.934 0 .47-.27.838a1.8 1.8 0 0 1-.746.583q-.48.213-1.115.213-.834 0-1.381-.363-.548-.362-.693-1.058l.796-.199q.113.441.43.66.318.221.834.221.585 0 .93-.249.348-.252.348-.603a.63.63 0 0 0-.199-.476q-.199-.195-.61-.291l-.91-.213q-.749-.178-1.1-.55-.348-.377-.348-.942 0-.462.259-.817.263-.354.714-.557a2.5 2.5 0 0 1 1.03-.203q.81 0 1.27.355.466.356.661.938M88.28 26v-5.454h.81v.823h.056q.15-.405.54-.657t.88-.252a9 9 0 0 1 .441.014v.853a3 3 0 0 0-.195-.032 2 2 0 0 0-.316-.025q-.399 0-.71.167a1.23 1.23 0 0 0-.668 1.111V26zm7.158-2.23v-3.224h.838V26h-.838v-.923h-.057a1.8 1.8 0 0 1-.596.706q-.405.288-1.023.288-.511 0-.91-.224a1.57 1.57 0 0 1-.624-.681Q92 24.708 92 24.011v-3.465h.839v3.409q0 .596.333.951.338.355.86.355.312 0 .635-.16.327-.16.547-.49.225-.33.224-.841m3.211-1.051V26h-.838v-5.454h.81v.852h.07q.193-.416.583-.668.39-.256 1.009-.256.553 0 .969.228.415.223.646.681.231.455.231 1.151V26h-.838v-3.41q0-.642-.334-1-.334-.363-.916-.363-.401 0-.717.174a1.25 1.25 0 0 0-.494.508q-.18.334-.18.81m5.85 0V26h-.838v-5.454h.809v.852h.071q.192-.416.583-.668.39-.256 1.008-.256.555 0 .97.228.415.223.646.681.231.455.231 1.151V26h-.838v-3.41q0-.642-.334-1-.334-.363-.916-.363-.402 0-.718.174a1.25 1.25 0 0 0-.493.508q-.181.334-.181.81M109.509 26v-5.454h.838V26zm.426-6.364a.6.6 0 0 1-.422-.166.54.54 0 0 0-.174-.402q0-.234.174-.401a.6.6 0 0 1 .422-.167q.246 0 .419.167a.53.53 0 0 1 .178.401.53.53 0 0 1-.178.401.58.58 0 0 1-.419.167m2.785 3.083V26h-.838v-5.454h.81v.852h.071q.192-.416.582-.668.391-.256 1.009-.256.553 0 .969.228.416.223.647.681.23.455.23 1.151V26h-.838v-3.41q0-.642-.333-1-.334-.363-.917-.363-.4 0-.717.174a1.25 1.25 0 0 0-.494.508q-.18.334-.181.81m7.214 5.44q-.607 0-1.044-.156a2.2 2.2 0 0 1-1.187-.938l.668-.468q.114.149.288.34.174.195.476.338.305.146.799.146.66 0 1.09-.32.429-.32.429-1.002v-1.108h-.071q-.092.15-.262.37a1.5 1.5 0 0 1-.483.387q-.313.167-.845.167a2.3 2.3 0 0 1-1.187-.313 2.2 2.2 0 0 1-.827-.909q-.302-.596-.302-1.449 0-.837.295-1.46.294-.624.82-.965.526-.345 1.215-.345.533 0 .845.178.316.174.483.398.17.22.263.362h.085v-.866h.81v5.61q0 .703-.32 1.144a1.8 1.8 0 0 1-.852.65q-.533.21-1.186.21m-.029-2.997q.504 0 .852-.23.348-.232.53-.665.18-.433.181-1.037 0-.59-.178-1.04a1.56 1.56 0 0 0-.525-.707q-.348-.256-.86-.256-.532 0-.888.27a1.65 1.65 0 0 0-.529.725 2.8 2.8 0 0 0-.174 1.008q0 .569.178 1.005.181.433.533.682.355.245.88.245" fill="#fff"/>
                        </svg>
                    </motion.div>

                    
                    <div className="absolute left-[10px] top-[90px] sm:top-[96px] z-0">
                        <svg width="201" height="44" viewBox="0 0 201 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#f2-bot-clip)">
                                <rect width="201" height="44" rx="20" fill="#1e1e1e"/>
                                <path d="M36.474 21.322c0 4.557-3.893 8.25-8.694 8.25s-8.694-3.693-8.694-8.25c0-4.556 3.892-8.25 8.694-8.25 4.801 0 8.694 3.694 8.694 8.25" fill="#2d2727"/>
                                <rect x="138.078" y="15" width="48" height="15" rx="7.5" fill="#2d2727"/>
                                <rect x="48.078" y="15" width="78" height="15" rx="7.5" fill="#2d2727"/>
                            </g>
                            <rect x=".5" y=".5" width="200" height="43" rx="19.5" stroke="url(#f2-bot-grad)"/>
                            <defs>
                                <linearGradient id="f2-bot-grad" x1="0" y1="22" x2="201" y2="22" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#333"/>
                                    <stop offset="1" stopColor="#999"/>
                                </linearGradient>
                                <clipPath id="f2-bot-clip">
                                    <rect width="201" height="44" rx="20" fill="#fff"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>

                    
                    <motion.div className="absolute left-[182px] top-[73px] sm:top-[76px] z-10" animate={shouldReduceMotion ? {} : (isHovered ? {
            y: 2,
            scale: 0.95
        } : {
            y: 0,
            scale: 1
        })} transition={{
            duration: 0.1,
            ease: [0.25, 0.1, 0.25, 1.0]
        }}>
                        <svg width="41" height="42" viewBox="0 0 41 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="f2-cursor-a" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="41" height="42">
                                <path d="M40.367 0H0v41.351h40.367z" fill="#fff"/>
                            </mask>
                            <g mask="url(#f2-cursor-a)">
                                <path d="M14.256 26.362c-.379-.517-.757-1.422-1.514-2.585-.379-.646-1.514-1.938-1.892-2.455-.253-.517-.253-.775-.127-1.292.127-.776.883-1.422 1.766-1.422.631 0 1.262.517 1.767.905.252.258.63.775.883 1.034.252.258.252.387.504.646.252.387.379.646.252.129-.126-.646-.252-1.68-.504-2.714-.126-.775-.252-.904-.379-1.421-.126-.646-.252-1.034-.378-1.68-.126-.388-.252-1.422-.378-1.938-.127-.647-.127-1.81.378-2.327.378-.387 1.135-.516 1.64-.258.63.388 1.01 1.292 1.135 1.68.253.646.505 1.55.631 2.584.252 1.293.63 3.231.63 3.619 0-.517-.126-1.422 0-1.939.127-.387.38-.904.884-1.033.378-.13.757-.13 1.135-.13.378.13.757.388 1.01.646.504.776.504 2.456.504 2.326.126-.516.126-1.55.378-2.067.126-.259.631-.517.883-.646a2.1 2.1 0 0 1 1.262 0c.252 0 .757.387.883.646.252.387.378 1.68.504 2.197 0 .129.127-.517.379-.905.504-.775 2.27-1.034 2.396.775v2.972c0 .518-.126 1.68-.252 2.197-.126.388-.504 1.293-.883 1.81 0 0-1.387 1.55-1.514 2.325-.126.776-.126.776-.126 1.293s.127 1.163.127 1.163-1.01.129-1.514 0c-.505-.13-1.136-1.034-1.262-1.422-.252-.387-.63-.387-.883 0-.252.517-.883 1.422-1.387 1.422-.883.129-2.65 0-3.91 0 0 0 .251-1.293-.253-1.81l-1.388-1.42z" fill="#fff"/>
                            </g>
                            <mask id="f2-cursor-b" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="41" height="42">
                                <path d="M40.367 0H0v41.351h40.367z" fill="#fff"/>
                            </mask>
                            <g mask="url(#f2-cursor-b)">
                                <path d="M14.256 26.362c-.379-.517-.757-1.422-1.514-2.585-.379-.646-1.514-1.938-1.892-2.455-.253-.517-.253-.775-.127-1.292.127-.776.883-1.422 1.766-1.422.631 0 1.262.517 1.767.905.252.258.63.775.883 1.034.252.258.252.387.504.646.252.387.379.646.252.129-.126-.646-.252-1.68-.504-2.714-.126-.775-.252-.904-.379-1.421-.126-.646-.252-1.034-.378-1.68-.126-.388-.252-1.422-.378-1.938-.127-.647-.127-1.81.378-2.327.378-.387 1.135-.516 1.64-.258.63.388 1.01 1.292 1.135 1.68.253.646.505 1.55.631 2.584.252 1.293.63 3.231.63 3.619 0-.517-.126-1.422 0-1.939.127-.387.38-.904.884-1.033.378-.13.757-.13 1.135-.13.378.13.757.388 1.01.646.504.776.504 2.456.504 2.326.126-.516.126-1.55.378-2.067.126-.259.631-.517.883-.646a2.1 2.1 0 0 1 1.262 0c.252 0 .757.387.883.646.252.387.378 1.68.504 2.197 0 .129.127-.517.379-.905.504-.775 2.27-1.034 2.396.775v2.972c0 .518-.126 1.68-.252 2.197-.126.388-.504 1.293-.883 1.81 0 0-1.387 1.55-1.514 2.325-.126.776-.126.776-.126 1.293s.127 1.163.127 1.163-1.01.129-1.514 0c-.505-.13-1.136-1.034-1.262-1.422-.252-.387-.63-.387-.883 0-.252.517-.883 1.422-1.387 1.422-.883.129-2.65 0-3.91 0 0 0 .251-1.293-.253-1.81l-1.388-1.42z" stroke="#000" strokeWidth=".75" strokeLinecap="round" strokeLinejoin="round"/>
                            </g>
                            <mask id="f2-cursor-c" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="41" height="42">
                                <path d="M40.367 0H0v41.351h40.367z" fill="#fff"/>
                            </mask>
                            <g mask="url(#f2-cursor-c)">
                                <path d="M24.725 26.749v-4.393" stroke="#000" strokeWidth=".75" strokeLinecap="round"/>
                            </g>
                            <mask id="f2-cursor-d" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="41" height="42">
                                <path d="M40.367 0H0v41.351h40.367z" fill="#fff"/>
                            </mask>
                            <g mask="url(#f2-cursor-d)">
                                <path d="m22.204 26.749-.126-4.393" stroke="#000" strokeWidth=".75" strokeLinecap="round"/>
                            </g>
                            <mask id="f2-cursor-e" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="41" height="42">
                                <path d="M40.367 0H0v41.351h40.367z" fill="#fff"/>
                            </mask>
                            <g mask="url(#f2-cursor-e)">
                                <path d="M19.68 22.356v4.393" stroke="#000" strokeWidth=".75" strokeLinecap="round"/>
                            </g>
                        </svg>
                    </motion.div>
                </div>
            </div>

            
            <div className="absolute bottom-0 left-0 right-0 z-10 px-5 sm:px-6 lg:px-7 xl:px-8 pb-4 sm:pb-5 lg:pb-6 bg-gradient-to-t from-[#111111] via-[#111111] to-transparent pt-8 sm:pt-9 lg:pt-10">
                <h3 className="text-[18px] sm:text-[20px] lg:text-[22px] xl:text-[24px] leading-[24px] sm:leading-[26px] lg:leading-[28px] xl:leading-[30px] text-white font-normal">
                    Scheduling & Workflows
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-[#7D7D87] leading-[18px] sm:leading-[20px] lg:leading-[22px]">
                    Schedule workflows, trigger them via webhooks, events, or manually.
                </p>
            </div>
        </div>);
}



================================================
FILE: apps/web/components/landing-page/bento-grid/F3AIModels.tsx
================================================
"use client";
import { useState } from 'react';
export function F3AIModels() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const handleToggle = (index: number) => {
        setActiveIndex(prev => prev === index ? null : index);
    };
    return (<div className="relative bg-[#111111] rounded-[32px] sm:rounded-[36px] lg:rounded-[44px] xl:rounded-[54px] h-[260px] sm:h-[270px] md:h-[285px] lg:h-[290px] xl:h-[305px] overflow-hidden">
            
            <div className="absolute top-[38px] sm:top-[24px] lg:top-[28px] xl:top-[32px] left-0 right-0 flex flex-col items-center justify-center gap-3">
                
                <div className="relative scale-[0.9] sm:scale-[0.94] md:scale-[0.98] lg:scale-[1.02] xl:scale-[1.08] origin-top" style={{ width: 155, height: 101 }}>
                    
                    <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" width="240" height="139" viewBox="0 0 240 139" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M134.539 8.72 15.103 77.674M149.468 17.34 30.033 86.295m134.365-60.337L44.962 94.914m134.365-60.336L59.892 103.534m134.365-60.337L74.821 112.153m134.365-60.336L89.751 120.773m134.364-60.337L104.68 129.392m0-120.673 119.435 68.956M89.75 17.34l119.436 68.956M74.821 25.958l119.436 68.956M59.892 34.578l119.435 68.956M44.962 43.197l119.436 68.956M30.033 51.817l119.435 68.956M15.103 60.436l119.436 68.956M119.609.1.174 69.056l119.435 68.956 119.436-68.956z" stroke="#fff" strokeWidth=".5" opacity=".4"/></svg>
                    
                    <div className={`group absolute z-10 transition-transform duration-200 ease cursor-pointer ${activeIndex === 0 ? '-translate-y-1.5' : 'hover:-translate-y-1.5'}`} style={{ left: 38.5, top: 0 }} onClick={() => handleToggle(0)}>
                        <svg width="78" height="57" viewBox="0 0 71 52" fill="none" xmlns="http://www.w3.org/2000/svg"><path transform="matrix(.86603 .5 -.86603 .5 35.365 .5)" fill="#000" stroke="#fff" d="M0 0h39.837v39.837H0z"/><path transform="matrix(.86603 .5 0 1 .865 20.419)" fill="#1f1f1f" stroke="#fff" d="M0 0h39.837v9.959H0z"/><path transform="matrix(.86603 -.5 0 1 35.365 40.338)" fill="#1f1f1f" stroke="#fff" d="M0 0h39.837v9.959H0z"/></svg>
                        <svg className={`absolute inset-0 transition-transform duration-150 delay-75 ease ${activeIndex === 0 ? '-translate-y-1' : 'group-hover:-translate-y-1'}`} width="78" height="57" viewBox="0 0 71 52" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m50.38 18.381-3.264-1.884-9.18 12.173 3.263 1.885zm-9.43-5.444-21.085 5.3 3.328 1.922 4.395-1.132 6.228 3.595-1.961 2.538 3.328 1.921 9.181-12.173zm-9.474 5.089 7.355-1.895-3.282 4.247z" fill="#7d7d87"/></svg>
                    </div>
                    
                    <div className={`group absolute z-10 transition-transform duration-200 ease cursor-pointer ${activeIndex === 1 ? '-translate-y-1.5' : 'hover:-translate-y-1.5'}`} style={{ left: 0, top: 22 }} onClick={() => handleToggle(1)}>
                        <svg width="78" height="57" viewBox="0 0 71 52" fill="none" xmlns="http://www.w3.org/2000/svg"><path transform="matrix(.86603 .5 -.86603 .5 35.365 .5)" fill="#000" stroke="#fff" d="M0 0h39.837v39.837H0z"/><path transform="matrix(.86603 .5 0 1 .865 20.419)" fill="#1f1f1f" stroke="#fff" d="M0 0h39.837v9.959H0z"/><path transform="matrix(.86603 -.5 0 1 35.365 40.338)" fill="#1f1f1f" stroke="#fff" d="M0 0h39.837v9.959H0z"/></svg>
                        <svg className={`absolute inset-0 transition-transform duration-150 delay-75 ease ${activeIndex === 1 ? '-translate-y-1' : 'group-hover:-translate-y-1'}`} width="78" height="57" viewBox="0 0 71 52" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M47.373 12.222c-5.411 3.792-5.461 9.234-.123 12.993.129.09-.082.212-.238.138-6.51-3.083-15.936-3.053-22.505.07-.158.076-.367-.045-.236-.136 5.41-3.792 5.461-9.234.122-12.993-.128-.09.083-.212.24-.138 6.508 3.083 15.935 3.053 22.504-.07.158-.076.367.044.236.136" fill="#7d7d87"/></svg>
                    </div>
                    
                    <div className={`group absolute z-10 transition-transform duration-200 ease cursor-pointer ${activeIndex === 2 ? '-translate-y-1.5' : 'hover:-translate-y-1.5'}`} style={{ left: 77, top: 22 }} onClick={() => handleToggle(2)}>
                        <svg width="78" height="57" viewBox="0 0 71 52" fill="none" xmlns="http://www.w3.org/2000/svg"><path transform="matrix(.86603 .5 -.86603 .5 35.365 .5)" fill="#000" stroke="#fff" d="M0 0h39.837v39.837H0z"/><path transform="matrix(.86603 .5 0 1 .865 20.419)" fill="#1f1f1f" stroke="#fff" d="M0 0h39.837v9.959H0z"/><path transform="matrix(.86603 -.5 0 1 35.365 40.338)" fill="#1f1f1f" stroke="#fff" d="M0 0h39.837v9.959H0z"/></svg>
                        <svg className={`absolute inset-0 transition-transform duration-150 delay-75 ease ${activeIndex === 2 ? '-translate-y-1' : 'group-hover:-translate-y-1'}`} width="78" height="57" viewBox="0 0 71 52" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m30.042 20.115 13.607 1.189c.666.059 1.107.439.849.799-1.355 1.894-4.573 3.254-8.403 3.253-3.829-.002-6.914-1.299-8.396-3.258l-3.894-.826c1.213 3.71 6.494 6.014 12.285 6.016 4.593.002 8.432-1.393 10.588-3.406v.006c3.179-2.95 6.036-3.212 11.886-3.745l.419-.039-6.477-.003.011-.006-22.479.02m-3.015-.124c-.128-3.09 4.39-5.153 9.061-5.151 3.456 0 6.994 1.23 8.431 3.256l3.881.827a4.5 4.5 0 0 0-.818-1.602c-1.873-2.59-6.333-4.414-11.498-4.418-4.97-.002-9.57 1.751-11.486 4.407-1.43 1.985-4.8 2.03-8.193 2.077-1.204.015-2.409.032-3.536.135l14.154.467" fill="#7d7d87"/></svg>
                    </div>
                    
                    <div className={`group absolute z-10 transition-transform duration-200 ease cursor-pointer ${activeIndex === 3 ? '-translate-y-1.5' : 'hover:-translate-y-1.5'}`} style={{ left: 38.5, top: 44 }} onClick={() => handleToggle(3)}>
                        <svg width="78" height="57" viewBox="0 0 71 52" fill="none" xmlns="http://www.w3.org/2000/svg"><path transform="matrix(.86603 .5 -.86603 .5 35.365 .5)" fill="#000" stroke="#fff" d="M0 0h39.837v39.837H0z"/><path transform="matrix(.86603 .5 0 1 .865 20.419)" fill="#1f1f1f" stroke="#fff" d="M0 0h39.837v9.959H0z"/><path transform="matrix(.86603 -.5 0 1 35.365 40.338)" fill="#1f1f1f" stroke="#fff" d="M0 0h39.837v9.959H0z"/></svg>
                        <svg className={`absolute inset-0 transition-transform duration-150 delay-75 ease ${activeIndex === 3 ? '-translate-y-1' : 'group-hover:-translate-y-1'}`} width="78" height="57" viewBox="0 0 71 52" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M46.91 24.797c1.01-.292 1.9-.705 2.61-1.211.712-.507 1.228-1.095 1.513-1.726.444-.947.355-1.952-.254-2.868s-1.706-1.697-3.134-2.23c.068-.65-.107-1.303-.51-1.912-.405-.608-1.03-1.16-1.833-1.619-1.199-.695-2.749-1.153-4.427-1.307s-3.397.004-4.91.45a12 12 0 0 0-3.124-.7 13.6 13.6 0 0 0-3.347.106c-1.643.252-3.104.799-4.174 1.561-1.07.763-1.692 1.701-1.778 2.681-1.01.292-1.901.705-2.613 1.212-.71.506-1.226 1.095-1.512 1.726-.444.947-.355 1.952.254 2.868.61.916 1.707 1.697 3.134 2.23-.067.65.107 1.303.512 1.912.404.608 1.029 1.16 1.832 1.619 1.2.695 2.75 1.153 4.429 1.307s3.4-.004 4.912-.45c.943.358 2.008.597 3.124.7s2.257.066 3.347-.107c1.642-.252 3.102-.799 4.171-1.561s1.692-1.701 1.777-2.68M26.62 26.741c-.988-.57-1.599-1.32-1.724-2.123.053.009.146.025.209.033l7.07 1.093c.177.028.363.029.54.002s.338-.082.467-.157l6.32-3.649.8 1.726a.03.03 0 0 1 .004.026.05.05 0 0 1-.019.025l-5.233 3.021c-1.12.645-2.636 1.007-4.216 1.007s-3.098-.36-4.218-1.005m-5.192-7.469c.36-.778 1.182-1.459 2.324-1.922.013.03.035.084.054.123l1.893 4.082a.63.63 0 0 0 .268.27c.13.075.291.128.468.155l8.632 1.335-2.188 1.263a.1.1 0 0 1-.039.016.2.2 0 0 1-.046.002l-7.148-1.105c-1.527-.237-2.83-.815-3.62-1.606-.79-.79-1.006-1.73-.598-2.613m8.605-6.33c1.348-.21 2.78-.138 4.047.2l-.157.088-5.178 2.99a.63.63 0 0 0-.27.27.36.36 0 0 0 .001.31l2.313 4.984-2.989-.462a.1.1 0 0 1-.042-.012.1.1 0 0 1-.028-.022l-1.914-4.128c-.407-.883-.192-1.822.6-2.612.79-.791 2.09-1.368 3.617-1.605m11.943 11.079-2.312-4.984 2.988.462q.023.003.042.012a.1.1 0 0 1 .027.022l1.916 4.126c.293.633.268 1.3-.072 1.925-.34.624-.981 1.18-1.848 1.601s-1.925.692-3.049.78a10 10 0 0 1-3.296-.286l5.333-3.08a.64.64 0 0 0 .271-.268.36.36 0 0 0 0-.31m4.723-.55-.053-.123-1.894-4.082a.63.63 0 0 0-.268-.27 1.4 1.4 0 0 0-.468-.155l-8.631-1.336 2.188-1.263a.1.1 0 0 1 .038-.015.2.2 0 0 1 .047-.003l7.144 1.107c1.095.17 2.083.515 2.85.997s1.279 1.08 1.478 1.725c.199.644.076 1.307-.354 1.913-.43.605-1.151 1.127-2.077 1.505m-15.753-4.593-.8-1.726a.03.03 0 0 1-.004-.026.05.05 0 0 1 .018-.024l5.234-3.022c.802-.462 1.815-.783 2.922-.925a10.2 10.2 0 0 1 3.325.124c1.066.223 2 .616 2.692 1.134s1.115 1.14 1.218 1.791l-.208-.033-7.071-1.093a1.8 1.8 0 0 0-.54-.001 1.3 1.3 0 0 0-.465.156zm3.249-.687 3.844.595 1.03 2.22-2.813 1.624-3.844-.595-1.03-2.22z" fill="#7d7d87"/></svg>
                    </div>
                </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 px-6 sm:px-7 lg:px-8 xl:px-9 pb-5 sm:pb-6 lg:pb-7 xl:pb-8">
                <h3 className="text-[18px] sm:text-[20px] lg:text-[22px] xl:text-[24px] leading-[22px] sm:leading-[24px] lg:leading-[26px] xl:leading-[28px] text-white font-normal mb-1">
                    AI that understands your workflows
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-[#7D7D87] leading-[17px] sm:leading-[19px] lg:leading-[21px]">
                    Summarize runs, generate insights, and make decisions inside workflows.
                </p>
            </div>
        </div>);
}



================================================
FILE: apps/web/components/landing-page/bento-grid/F4Templates.tsx
================================================
"use client";
import { useState } from 'react';
export function F4Templates() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const handleToggle = (index: number) => {
        setActiveIndex(prev => prev === index ? null : index);
    };
    return (<div className="relative bg-[#111111] rounded-[28px] sm:rounded-[32px] lg:rounded-[38px] xl:rounded-[46px] h-[460px] sm:h-[480px] md:h-[500px] lg:h-[620px] xl:h-[660px] overflow-hidden">
            
            <div className="absolute top-0 left-0 right-0 px-5 sm:px-6 lg:px-7 pt-6 sm:pt-7 lg:pt-[32px] xl:pt-[38px]">
                <h3 className="text-xl sm:text-2xl lg:text-[30px] xl:text-[36px] leading-snug lg:leading-[34px] xl:leading-[40px] text-white font-normal mb-2 lg:mb-3">
                    Start with proven templates
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-[#7D7D87] leading-[17px] sm:leading-[19px] lg:leading-[22px]">
                    Launch common workflows in one click, customize later.
                </p>
            </div>
            
            <div className="absolute inset-0 flex items-center justify-center mt-16 sm:mt-20 md:mt-24 lg:mt-[6.5rem] xl:mt-[7.75rem]">
                <div className="relative scale-[0.92] sm:scale-[0.94] md:scale-[0.98] lg:scale-[1.02] xl:scale-[1.08] origin-top" style={{ width: '250px', height: '256px' }}>
                    
                    <div className={`absolute transition-transform duration-150 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] will-change-transform cursor-pointer ${activeIndex === 3 ? '-translate-y-2' : 'hover:-translate-y-2'}`} style={{ left: '105px', top: '0px', opacity: 0.4 }} onClick={() => handleToggle(3)}>
                        <svg width="128" height="256" viewBox="0 0 128 256" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="109.199" height="177.718" transform="matrix(0.905396 0.424569 0 1 14.6387 29.2432)" fill="#161616"/>
                            <line y1="-0.5" x2="140.083" y2="-0.5" transform="matrix(0.905517 0.424311 -0.57909 0.815264 0 23.7002)" stroke="#B7ADAD"/>
                            <line y1="-0.5" x2="65.1255" y2="-0.5" transform="matrix(0.905396 0.424569 0 1 34.123 96.6475)" stroke="white"/>
                            <line y1="-0.5" x2="65.1255" y2="-0.5" transform="matrix(0.905396 0.424569 0 1 34.123 108.535)" stroke="white"/>
                            <line y1="-0.5" x2="65.1255" y2="-0.5" transform="matrix(0.905396 0.424569 0 1 34.123 120.425)" stroke="white"/>
                            <line y1="-0.5" x2="65.1255" y2="-0.5" transform="matrix(0.905396 0.424569 0 1 31.1973 132.312)" stroke="white"/>
                            <g clipPath="url(#clip4)">
                                <path d="M47.3188 72.9328C47.8411 73.5269 48.2616 74.1349 48.6936 74.7802C48.8064 74.943 48.9192 75.1057 49.0355 75.2734C49.85 76.4564 50.4187 77.3037 50.3948 78.4432C50.146 79.2497 49.3226 79.4721 48.6127 79.7807C48.4855 79.8442 48.3582 79.9076 48.2271 79.973C47.3959 80.3875 47.3959 80.3875 46.9491 80.3875C46.8881 81.6747 46.8271 82.9619 46.7642 84.2881C47.0692 84.4884 47.3742 84.6886 47.6885 84.8949C48.6857 85.9381 49.3707 86.9734 49.672 88.183C49.792 89.2407 49.5166 89.9621 49.0286 90.6159C48.3401 91.0464 47.5631 91.2035 46.4891 90.7821C45.2829 90.2353 44.4294 89.8056 43.507 88.5663C42.7648 87.4755 42.3249 86.551 42.3293 85.501C42.4463 84.3012 42.9809 83.6929 43.9915 83.3346C44.495 83.2791 44.6826 83.312 45.2854 83.5947C45.2974 82.9607 45.2928 82.32 45.2854 81.6768C45.2908 81.4093 45.2908 81.4093 45.2962 81.1364C45.2837 80.1101 45.2837 80.1101 44.7879 79.0002C44.4133 78.5192 44.0288 78.0703 43.6218 77.6136C43.3449 77.238 43.0706 76.8609 42.8015 76.4814C42.6797 76.3105 42.558 76.1397 42.4325 75.9637C42.143 75.5333 42.143 75.5333 41.9581 75.0999C40.5551 74.442 39.1521 73.7841 37.7066 73.1062C37.5236 73.3637 37.3406 73.6211 37.1521 73.8863C36.652 74.181 36.204 74.4092 35.4884 74.3198C35.3054 74.2339 35.1224 74.1481 34.9339 74.0597C34.9339 75.5472 34.9339 77.0346 34.9339 78.5671C35.5439 78.9104 36.1539 79.2537 36.7824 79.6073C37.6653 80.7818 37.8725 81.4404 37.9225 82.5514C37.9247 82.8112 37.9259 83.0704 37.9261 83.3292C37.9284 83.459 37.9306 83.5888 37.933 83.7225C37.9359 84.7436 37.7837 85.4143 37.186 86.0092C36.2492 86.1672 35.3117 85.631 34.206 85.0953C33.9903 84.9975 33.7745 84.8997 33.5522 84.7989C31.7912 83.9637 31.7912 83.9637 31.0975 83.1216C30.3346 81.9202 30.4574 81.1187 30.4513 80.0624C30.4475 79.8995 30.4436 79.7366 30.4397 79.5687C30.4337 78.567 30.526 77.8966 31.052 77.2669C31.8744 77.1212 32.2265 77.2976 33.2702 77.787C33.2702 76.2996 33.2702 74.8121 33.2702 73.2796C32.9652 73.0793 32.6602 72.8791 32.346 72.6728C31.3804 71.6692 30.8171 70.7249 30.4975 69.5523C30.3257 68.2434 30.7094 67.5634 31.4217 66.8651C32.2092 66.4959 32.9739 66.5391 34.0789 67.0168C35.1491 67.5453 35.9141 68.2042 36.7361 69.238C37.1637 69.9175 37.4196 70.5039 37.7066 71.1992C38.388 71.5593 39.0691 71.9031 39.7515 72.2448C39.9434 72.3464 40.1354 72.4481 40.3331 72.5528C41.421 73.0987 41.421 73.0987 42.3616 73.0904C42.6884 72.8922 42.969 72.6629 43.2521 72.4128C44.4865 71.7057 45.4588 71.3876 47.3188 72.9328Z" fill="#B7ADAD"/>
                            </g>
                            <path d="M113.965 255.445L112.999 40.1666" stroke="#B7ADAD"/>
                            <path d="M14.9648 215.281L13.9995 0.00253745" stroke="#B7ADAD"/>
                            <defs>
                                <clipPath id="clip4">
                                    <rect width="26.133" height="22.1905" fill="white" transform="matrix(0.905396 0.424569 0 1 28.6484 62.0977)"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>

                    
                    <div className={`absolute transition-transform duration-150 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] will-change-transform cursor-pointer ${activeIndex === 2 ? '-translate-y-2' : 'hover:-translate-y-2'}`} style={{ left: '65px', top: '5px', opacity: 0.6 }} onClick={() => handleToggle(2)}>
                        <svg width="128" height="256" viewBox="0 0 128 256" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="109.199" height="177.718" transform="matrix(0.905396 0.424569 0 1 14.6387 29.2432)" fill="#161616"/>
                            <line y1="-0.5" x2="140.083" y2="-0.5" transform="matrix(0.905517 0.424311 -0.57909 0.815264 0 23.7002)" stroke="#B7ADAD"/>
                            <line y1="-0.5" x2="65.1255" y2="-0.5" transform="matrix(0.905396 0.424569 0 1 34.123 96.6475)" stroke="white"/>
                            <line y1="-0.5" x2="65.1255" y2="-0.5" transform="matrix(0.905396 0.424569 0 1 34.123 108.535)" stroke="white"/>
                            <line y1="-0.5" x2="65.1255" y2="-0.5" transform="matrix(0.905396 0.424569 0 1 34.123 120.425)" stroke="white"/>
                            <line y1="-0.5" x2="65.1255" y2="-0.5" transform="matrix(0.905396 0.424569 0 1 31.1973 132.312)" stroke="white"/>
                            <g clipPath="url(#clip3)">
                                <path d="M47.3188 72.9328C47.8411 73.5269 48.2616 74.1349 48.6936 74.7802C48.8064 74.943 48.9192 75.1057 49.0355 75.2734C49.85 76.4564 50.4187 77.3037 50.3948 78.4432C50.146 79.2497 49.3226 79.4721 48.6127 79.7807C48.4855 79.8442 48.3582 79.9076 48.2271 79.973C47.3959 80.3875 47.3959 80.3875 46.9491 80.3875C46.8881 81.6747 46.8271 82.9619 46.7642 84.2881C47.0692 84.4884 47.3742 84.6886 47.6885 84.8949C48.6857 85.9381 49.3707 86.9734 49.672 88.183C49.792 89.2407 49.5166 89.9621 49.0286 90.6159C48.3401 91.0464 47.5631 91.2035 46.4891 90.7821C45.2829 90.2353 44.4294 89.8056 43.507 88.5663C42.7648 87.4755 42.3249 86.551 42.3293 85.501C42.4463 84.3012 42.9809 83.6929 43.9915 83.3346C44.495 83.2791 44.6826 83.312 45.2854 83.5947C45.2974 82.9607 45.2928 82.32 45.2854 81.6768C45.2908 81.4093 45.2908 81.4093 45.2962 81.1364C45.2837 80.1101 45.2837 80.1101 44.7879 79.0002C44.4133 78.5192 44.0288 78.0703 43.6218 77.6136C43.3449 77.238 43.0706 76.8609 42.8015 76.4814C42.6797 76.3105 42.558 76.1397 42.4325 75.9637C42.143 75.5333 42.143 75.5333 41.9581 75.0999C40.5551 74.442 39.1521 73.7841 37.7066 73.1062C37.5236 73.3637 37.3406 73.6211 37.1521 73.8863C36.652 74.181 36.204 74.4092 35.4884 74.3198C35.3054 74.2339 35.1224 74.1481 34.9339 74.0597C34.9339 75.5472 34.9339 77.0346 34.9339 78.5671C35.5439 78.9104 36.1539 79.2537 36.7824 79.6073C37.6653 80.7818 37.8725 81.4404 37.9225 82.5514C37.9247 82.8112 37.9259 83.0704 37.9261 83.3292C37.9284 83.459 37.9306 83.5888 37.933 83.7225C37.9359 84.7436 37.7837 85.4143 37.186 86.0092C36.2492 86.1672 35.3117 85.631 34.206 85.0953C33.9903 84.9975 33.7745 84.8997 33.5522 84.7989C31.7912 83.9637 31.7912 83.9637 31.0975 83.1216C30.3346 81.9202 30.4574 81.1187 30.4513 80.0624C30.4475 79.8995 30.4436 79.7366 30.4397 79.5687C30.4337 78.567 30.526 77.8966 31.052 77.2669C31.8744 77.1212 32.2265 77.2976 33.2702 77.787C33.2702 76.2996 33.2702 74.8121 33.2702 73.2796C32.9652 73.0793 32.6602 72.8791 32.346 72.6728C31.3804 71.6692 30.8171 70.7249 30.4975 69.5523C30.3257 68.2434 30.7094 67.5634 31.4217 66.8651C32.2092 66.4959 32.9739 66.5391 34.0789 67.0168C35.1491 67.5453 35.9141 68.2042 36.7361 69.238C37.1637 69.9175 37.4196 70.5039 37.7066 71.1992C38.388 71.5593 39.0691 71.9031 39.7515 72.2448C39.9434 72.3464 40.1354 72.4481 40.3331 72.5528C41.421 73.0987 41.421 73.0987 42.3616 73.0904C42.6884 72.8922 42.969 72.6629 43.2521 72.4128C44.4865 71.7057 45.4588 71.3876 47.3188 72.9328Z" fill="#B7ADAD"/>
                            </g>
                            <path d="M113.965 255.445L112.999 40.1666" stroke="#B7ADAD"/>
                            <path d="M14.9648 215.281L13.9995 0.00253745" stroke="#B7ADAD"/>
                            <defs>
                                <clipPath id="clip3">
                                    <rect width="26.133" height="22.1905" fill="white" transform="matrix(0.905396 0.424569 0 1 28.6484 62.0977)"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>

                    
                    <div className={`absolute transition-transform duration-150 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] will-change-transform cursor-pointer ${activeIndex === 1 ? '-translate-y-2' : 'hover:-translate-y-2'}`} style={{ left: '35px', top: '10px', opacity: 0.8 }} onClick={() => handleToggle(1)}>
                        <svg width="128" height="256" viewBox="0 0 128 256" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="109.199" height="177.718" transform="matrix(0.905396 0.424569 0 1 14.6387 29.2432)" fill="#161616"/>
                            <line y1="-0.5" x2="140.083" y2="-0.5" transform="matrix(0.905517 0.424311 -0.57909 0.815264 0 23.7002)" stroke="#B7ADAD"/>
                            <line y1="-0.5" x2="65.1255" y2="-0.5" transform="matrix(0.905396 0.424569 0 1 34.123 96.6475)" stroke="white"/>
                            <line y1="-0.5" x2="65.1255" y2="-0.5" transform="matrix(0.905396 0.424569 0 1 34.123 108.535)" stroke="white"/>
                            <line y1="-0.5" x2="65.1255" y2="-0.5" transform="matrix(0.905396 0.424569 0 1 34.123 120.425)" stroke="white"/>
                            <line y1="-0.5" x2="65.1255" y2="-0.5" transform="matrix(0.905396 0.424569 0 1 31.1973 132.312)" stroke="white"/>
                            <g clipPath="url(#clip2)">
                                <path d="M47.3188 72.9328C47.8411 73.5269 48.2616 74.1349 48.6936 74.7802C48.8064 74.943 48.9192 75.1057 49.0355 75.2734C49.85 76.4564 50.4187 77.3037 50.3948 78.4432C50.146 79.2497 49.3226 79.4721 48.6127 79.7807C48.4855 79.8442 48.3582 79.9076 48.2271 79.973C47.3959 80.3875 47.3959 80.3875 46.9491 80.3875C46.8881 81.6747 46.8271 82.9619 46.7642 84.2881C47.0692 84.4884 47.3742 84.6886 47.6885 84.8949C48.6857 85.9381 49.3707 86.9734 49.672 88.183C49.792 89.2407 49.5166 89.9621 49.0286 90.6159C48.3401 91.0464 47.5631 91.2035 46.4891 90.7821C45.2829 90.2353 44.4294 89.8056 43.507 88.5663C42.7648 87.4755 42.3249 86.551 42.3293 85.501C42.4463 84.3012 42.9809 83.6929 43.9915 83.3346C44.495 83.2791 44.6826 83.312 45.2854 83.5947C45.2974 82.9607 45.2928 82.32 45.2854 81.6768C45.2908 81.4093 45.2908 81.4093 45.2962 81.1364C45.2837 80.1101 45.2837 80.1101 44.7879 79.0002C44.4133 78.5192 44.0288 78.0703 43.6218 77.6136C43.3449 77.238 43.0706 76.8609 42.8015 76.4814C42.6797 76.3105 42.558 76.1397 42.4325 75.9637C42.143 75.5333 42.143 75.5333 41.9581 75.0999C40.5551 74.442 39.1521 73.7841 37.7066 73.1062C37.5236 73.3637 37.3406 73.6211 37.1521 73.8863C36.652 74.181 36.204 74.4092 35.4884 74.3198C35.3054 74.2339 35.1224 74.1481 34.9339 74.0597C34.9339 75.5472 34.9339 77.0346 34.9339 78.5671C35.5439 78.9104 36.1539 79.2537 36.7824 79.6073C37.6653 80.7818 37.8725 81.4404 37.9225 82.5514C37.9247 82.8112 37.9259 83.0704 37.9261 83.3292C37.9284 83.459 37.9306 83.5888 37.933 83.7225C37.9359 84.7436 37.7837 85.4143 37.186 86.0092C36.2492 86.1672 35.3117 85.631 34.206 85.0953C33.9903 84.9975 33.7745 84.8997 33.5522 84.7989C31.7912 83.9637 31.7912 83.9637 31.0975 83.1216C30.3346 81.9202 30.4574 81.1187 30.4513 80.0624C30.4475 79.8995 30.4436 79.7366 30.4397 79.5687C30.4337 78.567 30.526 77.8966 31.052 77.2669C31.8744 77.1212 32.2265 77.2976 33.2702 77.787C33.2702 76.2996 33.2702 74.8121 33.2702 73.2796C32.9652 73.0793 32.6602 72.8791 32.346 72.6728C31.3804 71.6692 30.8171 70.7249 30.4975 69.5523C30.3257 68.2434 30.7094 67.5634 31.4217 66.8651C32.2092 66.4959 32.9739 66.5391 34.0789 67.0168C35.1491 67.5453 35.9141 68.2042 36.7361 69.238C37.1637 69.9175 37.4196 70.5039 37.7066 71.1992C38.388 71.5593 39.0691 71.9031 39.7515 72.2448C39.9434 72.3464 40.1354 72.4481 40.3331 72.5528C41.421 73.0987 41.421 73.0987 42.3616 73.0904C42.6884 72.8922 42.969 72.6629 43.2521 72.4128C44.4865 71.7057 45.4588 71.3876 47.3188 72.9328Z" fill="#B7ADAD"/>
                            </g>
                            <path d="M113.965 255.445L112.999 40.1666" stroke="#B7ADAD"/>
                            <path d="M14.9648 215.281L13.9995 0.00253745" stroke="#B7ADAD"/>
                            <defs>
                                <clipPath id="clip2">
                                    <rect width="26.133" height="22.1905" fill="white" transform="matrix(0.905396 0.424569 0 1 28.6484 62.0977)"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>

                    
                    <div className={`absolute transition-transform duration-150 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] will-change-transform cursor-pointer ${activeIndex === 0 ? '-translate-y-2' : 'hover:-translate-y-2'}`} style={{ left: '0px', top: '15px', opacity: 1 }} onClick={() => handleToggle(0)}>
                      <svg width="128" height="253" viewBox="0 0 128 253" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#161616" d="m14.639 26.081 98.869 46.363v177.718l-98.869-46.363z"/><path transform="matrix(.90552 .42431 -.57909 .81526 0 20.538)" stroke="#f04d26" d="M0-.5h140.083"/><path transform="matrix(.9054 .42457 0 1 34.123 93.485)" stroke="#fff" d="M0-.5h65.126"/><path transform="matrix(.9054 .42457 0 1 34.123 105.373)" stroke="#fff" d="M0-.5h65.126"/><path transform="matrix(.9054 .42457 0 1 34.123 117.263)" stroke="#fff" d="M0-.5h65.126"/><path transform="matrix(.9054 .42457 0 1 31.197 129.15)" stroke="#fff" d="M0-.5h65.126"/><path d="m16 204.005-2-204" stroke="#f04d26"/><g clipPath="url(#a)"><path d="M47.319 69.77c.522.595.943 1.203 1.375 1.848l.341.493c.815 1.183 1.384 2.03 1.36 3.17-.249.807-1.072 1.029-1.782 1.338l-.386.192c-.831.414-.831.414-1.278.414-.06 1.288-.122 2.575-.185 3.901l.924.607c.998 1.043 1.683 2.078 1.984 3.288.12 1.058-.155 1.779-.643 2.433-.689.43-1.466.587-2.54.166-1.206-.547-2.06-.977-2.982-2.216-.742-1.09-1.182-2.015-1.178-3.065.117-1.2.652-1.808 1.663-2.166.503-.056.69-.023 1.293.26.012-.634.008-1.275 0-1.918l.011-.54c-.012-1.027-.012-1.027-.508-2.137-.375-.481-.76-.93-1.166-1.386a76 76 0 0 1-.82-1.133l-.37-.517c-.289-.43-.289-.43-.474-.864l-4.251-1.994-.555.78c-.5.295-.948.523-1.664.434l-.554-.26v4.507l1.848 1.04c.883 1.175 1.09 1.833 1.14 2.944q.004.39.004.778l.007.393c.003 1.022-.15 1.692-.747 2.287-.937.158-1.874-.378-2.98-.914l-.654-.296c-1.76-.835-1.76-.835-2.454-1.677-.763-1.202-.64-2.003-.647-3.06l-.011-.493c-.006-1.002.086-1.672.612-2.302.822-.146 1.175.03 2.218.52v-4.507l-.924-.607c-.966-1.004-1.529-1.948-1.848-3.12-.172-1.31.211-1.99.924-2.688.787-.37 1.552-.326 2.657.152 1.07.528 1.835 1.187 2.657 2.22.428.68.684 1.267.97 1.962.682.36 1.363.704 2.045 1.046l.582.308c1.088.546 1.088.546 2.029.537.326-.198.607-.427.89-.677 1.234-.707 2.207-1.026 4.067.52" fill="#f04d26"/></g><path d="m113.965 252.283-.966-215.278" stroke="#f04d26"/><defs><clipPath id="a"><path fill="#fff" d="m28.648 58.935 23.66 11.095v22.191l-23.66-11.095z"/></clipPath></defs></svg>
                    </div>
                </div>
            </div>

            
            <div className="absolute bottom-[-80px] left-0 right-0 z-10 pointer-events-none hidden lg:block">
                <svg width="678" height="578" viewBox="0 0 678 578" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                    <g filter="url(#mask-filter)">
                        <path fill="#111" d="M153.699 153.7h370v270h-370z"/>
                    </g>
                    <defs>
                        <filter id="mask-filter" x="-.001" y="0" width="677.4" height="577.4" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="76.85" result="effect1_foregroundBlur_609_817"/>
                        </filter>
                    </defs>
                </svg>
            </div>
        </div>);
}



================================================
FILE: apps/web/components/landing-page/bento-grid/index.ts
================================================
export { BentoGrid } from './BentoGrid';
export { F1Integrations } from './F1Integrations';
export { F2WorkflowRunning } from './F2WorkflowRunning';
export { F3AIModels } from './F3AIModels';
export { F4Templates } from './F4Templates';



================================================
FILE: apps/web/components/landing-page/faq/FAQSection.tsx
================================================
"use client";
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
interface FAQItem {
    question: string;
    answer: string;
}
const faqData: FAQItem[] = [
    {
        question: "What is Fynt?",
        answer: "Fynt is a workflow automation platform where you build flows visually, connect integrations, and run AI + API automations from one place."
    },
    {
        question: "How many workflows can I create?",
        answer: "The Free plan allows up to 30 workflows and includes 1,000 workflow runs per month. Pro and Startup both include unlimited workflows, with higher run limits and team collaboration features on Startup."
    },
    {
        question: "What is a workflow run?",
        answer: "A workflow run is one full execution of a workflow. Each trigger event or manual run counts as one run."
    },
    {
        question: "Can I integrate with my existing tools?",
        answer: "Yes. Fynt supports integrations like HTTP APIs, webhooks, Notion, Slack, Discord, GitHub, and AI providers such as OpenAI, Anthropic, and Gemini."
    },
    {
        question: "Do I need coding experience to use Fynt?",
        answer: "No. You can build and configure workflows with the visual builder. Advanced users can still set up more complex logic with node configuration and structured payload mapping."
    },
    {
        question: "Can I upgrade or downgrade my plan?",
        answer: "Yes. You can change plans anytime. Upgrades apply immediately, and downgrades apply at the next billing cycle."
    }
];
export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (<section id="faq" className="relative bg-[#151515] py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col gap-12 xl:flex-row xl:gap-16">
          
          <div className="flex shrink-0 flex-col xl:w-[368px]">
            <div className="text-sm font-medium text-[#7D7D87] mb-2">F.A.Q</div>
            <h2 className="font-serif italic text-3xl md:text-4xl font-semibold text-white mb-3">
              Frequently Asked Questions.
            </h2>
            <p className="text-base text-[#7D7D87]">
              Get <span className="font-medium text-[#E5E5E5]">answers</span> to{' '}
              <span className="font-medium text-[#E5E5E5]">commonly</span> asked questions.
            </p>
          </div>

          
          <div className="flex-1 space-y-4">
            {faqData.map((item, index) => (<div key={index}>
                <button onClick={() => toggleAccordion(index)} className="group flex w-full items-center justify-between gap-4 text-left py-4 transition-colors duration-150 ease-out hover:text-[#E5E5E5]" aria-expanded={openIndex === index}>
                  <span className="text-base font-medium text-white flex-1">
                    {item.question}
                  </span>
                  <ChevronDown className={`size-5 shrink-0 text-[#7D7D87] transition-transform duration-200 ease-out ${openIndex === index ? 'rotate-180' : ''}`}/>
                </button>
                
                <div className={`grid transition-all duration-200 ease-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <p className="text-[#7D7D87] pb-4 pr-8">
                      {item.answer}
                    </p>
                  </div>
                </div>
                
                {index < faqData.length - 1 && (<div className="h-px w-full bg-[#333333]"/>)}
              </div>))}
          </div>
        </div>
      </div>

      
      <div className="hidden md:flex justify-center mt-16 md:mt-24">
      <svg className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl" width="708" height="60" viewBox="0 0 708 60" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M704.5 6v8c0 8.837-7.163 16-16 16h-318c-8.837 0-16 7.163-16 16v8M4.5 6v8c0 8.837 7.163 16 16 16h318c8.837 0 16 7.163 16 16v8" stroke="#666"/><rect x="357.5" y="60" width="6" height="6" rx="1" transform="rotate(-180 357.5 60)" fill="#f04d26"/><rect x="707.5" y="6" width="6" height="6" rx="1" transform="rotate(-180 707.5 6)" fill="#f04d26"/><rect x="7.5" y="6" width="6" height="6" rx="1" transform="rotate(-180 7.5 6)" fill="#f04d26"/></svg>
      </div>
    </section>);
}



================================================
FILE: apps/web/components/landing-page/faq/index.ts
================================================
export { FAQSection } from './FAQSection';



================================================
FILE: apps/web/components/landing-page/footer-cta/Footer.tsx
================================================
"use client";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import type { MouseEvent as ReactMouseEvent } from "react";

const GITHUB_URL = "https://github.com/abhinavkale-dev/fynt";
const X_URL = "https://x.com/Abhinavstwt";
const PRIVACY_URL = "/privacy";
const TERMS_URL = "/terms";

const normalizeFooterLink = (href: string) => href.replace(/\/+$/, "");
const allowedFooterLinks = new Set([
    normalizeFooterLink(GITHUB_URL),
    normalizeFooterLink(X_URL),
    normalizeFooterLink(PRIVACY_URL),
    normalizeFooterLink(TERMS_URL),
]);
const LogoSvg = () => (<svg width="34" height="34" viewBox="-1 -1 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" className="block overflow-visible">
    <g filter="url(#a)">
      <g filter="url(#b)">
        <rect x=".5" y=".5" width="29.998" height="30.003" rx="4.5" stroke="#ff6e00"/>
      </g>
      <g filter="url(#c)" fill="#ff6e00">
        <path d="m6.86 25.366 1.004-5.462h5.684l-1.115 5.462zm6.91-5.462 1.226-5.796h5.573l-1.338 5.796z"/>
        <path d="m11.541 17.006 1.226-5.685h11.48l1.114-5.684H7.864l-2.23 11.37z"/>
      </g>
    </g>
    <defs>
      <filter id="a" x="0" y="0" width="31.198" height="31.203" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx=".2" dy=".2"/>
        <feGaussianBlur stdDeviation=".25"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend in2="shape" result="effect1_innerShadow_642_873"/>
      </filter>
      <filter id="b" x="0" y="0" width="31.198" height="31.203" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx=".2" dy=".2"/>
        <feGaussianBlur stdDeviation=".4"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend in2="shape" result="effect1_innerShadow_642_873"/>
      </filter>
      <filter id="c" x="5.635" y="5.637" width="20.827" height="20.829" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="1.1" dy="1.1"/>
        <feGaussianBlur stdDeviation="1.05"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.62 0"/>
        <feBlend in2="shape" result="effect1_innerShadow_642_873"/>
      </filter>
    </defs>
  </svg>);
const FooterSectionSeparator = () => (<>
    
    <div className="hidden">
      <div className="flex-shrink-0">
        <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="8" height="8" rx="2" fill="#F04D26"/>
        </svg>
      </div>
      <div className="relative w-full max-w-2xl h-px bg-white/30"/>
      <div className="flex-shrink-0">
        <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="8" height="8" rx="2" fill="#F04D26"/>
        </svg>
      </div>
    </div>

    
    <div className="hidden xl:flex items-center w-full mx-auto pointer-events-none z-20 py-12 justify-center">
      <div className="flex-shrink-0">
        <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="8" height="8" rx="2" fill="#F04D26"/>
        </svg>
      </div>
      <div className="relative w-full max-w-6xl h-px bg-white/30"/>
      <div className="flex-shrink-0">
        <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="8" height="8" rx="2" fill="#F04D26"/>
        </svg>
      </div>
    </div>
  </>);
const ColumnSeparator = () => (<div className="hidden xl:flex flex-col items-center justify-start pointer-events-none">
    
    <div className="flex-shrink-0">
      <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="8" height="8" rx="2" fill="#F04D26"/>
      </svg>
    </div>
    
    <div className="relative w-px h-78 bg-white/30"/>
    
    <div className="flex-shrink-0">
      <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="8" height="8" rx="2" fill="#F04D26"/>
      </svg>
    </div>
  </div>);
export function Footer() {
    const currentYear = new Date().getFullYear();
    const blockDisallowedFooterNavigation = (event: ReactMouseEvent<HTMLElement>) => {
        const target = event.target;
        if (!(target instanceof HTMLElement))
            return;
        const anchor = target.closest("a");
        if (!(anchor instanceof HTMLAnchorElement))
            return;
        const href = anchor.getAttribute("href");
        if (!href)
            return;
        if (allowedFooterLinks.has(normalizeFooterLink(href)))
            return;
        event.preventDefault();
        event.stopPropagation();
    };
    return (<footer className="relative pt-8 pb-0 overflow-hidden" onClickCapture={blockDisallowedFooterNavigation} onAuxClickCapture={blockDisallowedFooterNavigation}>
      <div className="mx-auto max-w-7xl px-6">
        
        <div className="relative z-10 text-center mb-8 pb-6">
          
          <div className="flex justify-center mb-4">
            <LogoSvg />
          </div>
          
          
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-5">
            Designed & developed by <span className="text-white/70">@Abhinavstwt</span> 
          </h2>
          
          
          <div className="flex justify-center gap-3">
            <a href={X_URL} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="white"/>
              </svg>
            </a>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" fill="white"/>
              </svg>
            </a>
          </div>
        </div>

        
        <FooterSectionSeparator />

        
        <div className="relative z-10 max-w-6xl mx-auto -mb-3">
          
          <div className="xl:hidden divide-y divide-white/10 border-y border-white/10 mb-8">
            
            <Collapsible>
              <CollapsibleTrigger className="group flex w-full items-center justify-between py-5 text-left">
                <h3 className="text-white font-semibold text-sm">Product</h3>
                <div className="flex size-5 items-center justify-center rounded-full bg-white/10">
                  <ChevronDown className="h-3 w-3 text-white/70 transition-transform duration-200 group-data-[state=open]:rotate-180"/>
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="pb-5">
                <ul className="space-y-3">
                  <li>
                    <a href="#workflows" className="text-white/60 hover:text-white text-sm transition-colors block">
                      Workflows
                    </a>
                  </li>
                  <li>
                    <a href="#integrations" className="text-white/60 hover:text-white text-sm transition-colors block">
                      Integrations
                    </a>
                  </li>
                  <li>
                    <a href="#templates" className="text-white/60 hover:text-white text-sm transition-colors block">
                      Templates
                    </a>
                  </li>
                  <li>
                    <a href="#pricing" className="text-white/60 hover:text-white text-sm transition-colors block">
                      Pricing
                    </a>
                  </li>
                </ul>
              </CollapsibleContent>
            </Collapsible>

            
            <Collapsible>
              <CollapsibleTrigger className="group flex w-full items-center justify-between py-5 text-left">
                <h3 className="text-white font-semibold text-sm">Resources</h3>
                <div className="flex size-5 items-center justify-center rounded-full bg-white/10">
                  <ChevronDown className="h-3 w-3 text-white/70 transition-transform duration-200 group-data-[state=open]:rotate-180"/>
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="pb-5">
                <ul className="space-y-3">
                  <li>
                    <a href="#documentation" className="text-white/60 hover:text-white text-sm transition-colors block">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a href="#guides" className="text-white/60 hover:text-white text-sm transition-colors block">
                      Guides
                    </a>
                  </li>
                  <li>
                    <a href="#blog" className="text-white/60 hover:text-white text-sm transition-colors block">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#tutorials" className="text-white/60 hover:text-white text-sm transition-colors block">
                      Tutorials
                    </a>
                  </li>
                </ul>
              </CollapsibleContent>
            </Collapsible>

            
            <Collapsible>
              <CollapsibleTrigger className="group flex w-full items-center justify-between py-5 text-left">
                <h3 className="text-white font-semibold text-sm">Developers</h3>
                <div className="flex size-5 items-center justify-center rounded-full bg-white/10">
                  <ChevronDown className="h-3 w-3 text-white/70 transition-transform duration-200 group-data-[state=open]:rotate-180"/>
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="pb-5">
                <ul className="space-y-3">
                  <li>
                    <a href="#api" className="text-white/60 hover:text-white text-sm transition-colors block">
                      API Reference
                    </a>
                  </li>
                  <li>
                    <a href="#sdks" className="text-white/60 hover:text-white text-sm transition-colors block">
                      SDKs
                    </a>
                  </li>
                  <li>
                    <a href="#webhooks" className="text-white/60 hover:text-white text-sm transition-colors block">
                      Webhooks
                    </a>
                  </li>
                  <li>
                    <a href="#examples" className="text-white/60 hover:text-white text-sm transition-colors block">
                      Examples
                    </a>
                  </li>
                </ul>
              </CollapsibleContent>
            </Collapsible>

            
            <Collapsible>
              <CollapsibleTrigger className="group flex w-full items-center justify-between py-5 text-left">
                <h3 className="text-white font-semibold text-sm">Community</h3>
                <div className="flex size-5 items-center justify-center rounded-full bg-white/10">
                  <ChevronDown className="h-3 w-3 text-white/70 transition-transform duration-200 group-data-[state=open]:rotate-180"/>
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="pb-5">
                <ul className="space-y-3">
                  <li>
                    <a href="https://discord.gg/fynt" className="text-white/60 hover:text-white text-sm transition-colors block">
                      Discord
                    </a>
                  </li>
                  <li>
                    <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white text-sm transition-colors block">
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a href="#support" className="text-white/60 hover:text-white text-sm transition-colors block">
                      Support
                    </a>
                  </li>
                  <li>
                    <a href="#status" className="text-white/60 hover:text-white text-sm transition-colors block">
                      Status
                    </a>
                  </li>
                </ul>
              </CollapsibleContent>
            </Collapsible>

            
            <Collapsible>
              <CollapsibleTrigger className="group flex w-full items-center justify-between py-5 text-left">
                <h3 className="text-white font-semibold text-sm">Company</h3>
                <div className="flex size-5 items-center justify-center rounded-full bg-white/10">
                  <ChevronDown className="h-3 w-3 text-white/70 transition-transform duration-200 group-data-[state=open]:rotate-180"/>
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="pb-5">
                <ul className="space-y-3">
                  <li>
                    <a href="#about" className="text-white/60 hover:text-white text-sm transition-colors block">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="text-white/60 hover:text-white text-sm transition-colors block">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#careers" className="text-white/60 hover:text-white text-sm transition-colors block">
                      Careers
                    </a>
                  </li>
                </ul>
              </CollapsibleContent>
            </Collapsible>
          </div>

          
          <div className="xl:hidden py-5 text-center">
            <p className="text-white/60 text-sm">
              © {currentYear} Fynt. All rights reserved.
            </p>
          </div>

          
          <div className="hidden xl:flex justify-center items-start gap-12 mb-1">
            
            <div className="flex-1">
              <h3 className="text-white font-semibold text-sm mb-4">
                Product
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#workflows" className="text-white/60 hover:text-white text-sm transition-colors">
                    Workflows
                  </a>
                </li>
                <li>
                  <a href="#integrations" className="text-white/60 hover:text-white text-sm transition-colors">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#templates" className="text-white/60 hover:text-white text-sm transition-colors">
                    Templates
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-white/60 hover:text-white text-sm transition-colors">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            <ColumnSeparator />

            
            <div className="flex-1">
              <h3 className="text-white font-semibold text-sm mb-4">
                Resources
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#documentation" className="text-white/60 hover:text-white text-sm transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#guides" className="text-white/60 hover:text-white text-sm transition-colors">
                    Guides
                  </a>
                </li>
                <li>
                  <a href="#blog" className="text-white/60 hover:text-white text-sm transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#tutorials" className="text-white/60 hover:text-white text-sm transition-colors">
                    Tutorials
                  </a>
                </li>
              </ul>
            </div>

            <ColumnSeparator />

            
            <div className="flex-1">
              <h3 className="text-white font-semibold text-sm mb-4">
                Developers
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#api" className="text-white/60 hover:text-white text-sm transition-colors">
                    API Reference
                  </a>
                </li>
                <li>
                  <a href="#sdks" className="text-white/60 hover:text-white text-sm transition-colors">
                    SDKs
                  </a>
                </li>
                <li>
                  <a href="#webhooks" className="text-white/60 hover:text-white text-sm transition-colors">
                    Webhooks
                  </a>
                </li>
                <li>
                  <a href="#examples" className="text-white/60 hover:text-white text-sm transition-colors">
                    Examples
                  </a>
                </li>
              </ul>
            </div>

            <ColumnSeparator />

            
            <div className="flex-1">
              <h3 className="text-white font-semibold text-sm mb-4">
                Community
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://discord.gg/fynt" className="text-white/60 hover:text-white text-sm transition-colors">
                    Discord
                  </a>
                </li>
                <li>
                  <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white text-sm transition-colors">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="#support" className="text-white/60 hover:text-white text-sm transition-colors">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#status" className="text-white/60 hover:text-white text-sm transition-colors">
                    Status
                  </a>
                </li>
              </ul>
            </div>

            <ColumnSeparator />

            
            <div className="flex-1">
              <h3 className="text-white font-semibold text-sm mb-4">
                Company
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-white/60 hover:text-white text-sm transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-white/60 hover:text-white text-sm transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#careers" className="text-white/60 hover:text-white text-sm transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
          </div>

          
          <FooterSectionSeparator />

          
          <div className="hidden xl:flex flex-col md:flex-row items-center justify-between pt-1 pb-6">
            <p className="text-white/60 text-sm mb-2 md:mb-0">
              © {currentYear} Fynt. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="/privacy" className="text-white/60 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-white/60 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        
        <div className="hidden xl:flex relative items-center justify-center translate-y-[10%] -mt-20">
          
          <svg width="100%" height="auto" viewBox="0 0 1366 494" fill="none" xmlns="http://www.w3.org/2000/svg" className="max-w-6xl w-full h-auto absolute opacity-20">
            <path d="M31.605 484V120.364h240.767v63.387H108.487v86.648h147.905v63.388H108.487V484zM302.78 120.364h86.115l82.919 156.605h3.551l82.919-156.605h86.115L511.763 355.449V484h-76.349V355.449zm687.766 0V484H924.14L765.936 255.129h-2.664V484H686.39V120.364h67.472l156.96 228.693h3.196V120.364zm49.675 63.387v-63.387h298.65v63.387h-111.33V484h-76V183.751z" fill="none" stroke="#fff" strokeWidth="3"/>
          </svg>
          
          
          <svg width="100%" height="auto" viewBox="0 0 1366 494" fill="none" xmlns="http://www.w3.org/2000/svg" className="max-w-6xl w-full h-auto relative opacity-20">
            <path d="M31.605 484V120.364h240.767v63.387H108.487v86.648h147.905v63.388H108.487V484zM302.78 120.364h86.115l82.919 156.605h3.551l82.919-156.605h86.115L511.763 355.449V484h-76.349V355.449zm687.766 0V484H924.14L765.936 255.129h-2.664V484H686.39V120.364h67.472l156.96 228.693h3.196V120.364zm49.675 63.387v-63.387h298.65v63.387h-111.33V484h-76V183.751z" fill="#fff"/>
          </svg>
        </div>
      </div>
    </footer>);
}



================================================
FILE: apps/web/components/landing-page/footer-cta/FooterCTA.tsx
================================================
"use client";
export function FooterCTA() {
    return (<>
      
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative rounded-3xl bg-gradient-to-br from-[#F04D26] to-[#E63D00] p-8 md:p-12 lg:p-16 overflow-hidden">
            
            <div className="absolute inset-0 z-0" style={{
            backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(0, 0, 0, 0.1) 2px, rgba(0, 0, 0, 0.1) 4px)",
        }}/>
            
            
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Ready to automate your workflow?
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Start building powerful workflows in minutes with Fynt
              </p>
              <a href="/home" className="group inline-flex items-center gap-0.5 px-6 py-4 bg-white text-[#F04D26] font-semibold rounded-xl hover:bg-white/90 transition-all duration-150">
                Get Started
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" className="size-5 transition-transform duration-150 ease-out group-hover:translate-x-0.5 motion-reduce:transition-none">
                  <path stroke="currentColor" strokeLinecap="square" strokeWidth="1.25" d="M8.333 13.333 11.667 10 8.333 6.667"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>);
}



================================================
FILE: apps/web/components/landing-page/footer-cta/FooterCTASectionSeparator.tsx
================================================
const NodeSvg = () => (<svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.5" y="0.5" width="8" height="8" rx="2" fill="#F04D26"/>
  </svg>);
export function FooterCTASectionSeparator() {
    return (<div className="hidden lg:block pointer-events-none z-20 py-12">
      <div className="relative">
        
        <div className="w-full h-px bg-white/20"/>

        
        <div className="absolute inset-0 w-[80%] mx-auto">
          <div className="absolute left-2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
            <NodeSvg />
          </div>
          <div className="absolute right-2 top-1/2 translate-x-1/2 -translate-y-1/2 z-30">
            <NodeSvg />
          </div>
        </div>
      </div>
    </div>);
}



================================================
FILE: apps/web/components/landing-page/footer-cta/FooterSectionSeparator.tsx
================================================
const NodeSvg = () => (<svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.5" y="0.5" width="8" height="8" rx="2" fill="#F04D26"/>
  </svg>);
export function FooterSectionSeparator() {
    return (<>
      
      <div className="hidden">
        
        <div className="flex-shrink-0">
          <NodeSvg />
        </div>
        
        <div className="relative w-64 h-px bg-white/30"/>
        
        <div className="flex-shrink-0">
          <NodeSvg />
        </div>
      </div>

      
      <div className="hidden lg:flex items-center w-full mx-auto pointer-events-none z-20 py-12 justify-center">
        
        <div className="flex-shrink-0">
          <NodeSvg />
        </div>
        
        <div className="relative w-[600px] h-px bg-white/30"/>
        
        <div className="flex-shrink-0">
          <NodeSvg />
        </div>
      </div>
    </>);
}



================================================
FILE: apps/web/components/landing-page/footer-cta/index.ts
================================================
export { FooterCTA } from './FooterCTA';
export { Footer } from './Footer';
export { FooterSectionSeparator } from './FooterSectionSeparator';
export { FooterCTASectionSeparator } from './FooterCTASectionSeparator';



================================================
FILE: apps/web/components/landing-page/header/Header.tsx
================================================
'use client';
import React from 'react';
import Link from 'next/link';
import { SideLine } from './SideLine';
import { motion } from 'framer-motion';
const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
        const viewport = element.closest<HTMLElement>('[data-slot="scroll-area-viewport"]');
        if (viewport) {
            const viewportRect = viewport.getBoundingClientRect();
            const elementRect = element.getBoundingClientRect();
            const baseTop = viewport.scrollTop + (elementRect.top - viewportRect.top);
            const sectionOverflow = Math.max(0, elementRect.height - viewport.clientHeight);
            const overflowCompensation = sectionOverflow > 0 ? Math.min(sectionOverflow, 96) : 0;
            const top = baseTop + overflowCompensation;
            viewport.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
            return;
        }
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};
const NodeSvg = () => (<svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="8" height="8" rx="2" fill="#F04D26"/>
    </svg>);
export default function Header() {
    return (<div className="flex flex-col items-center pt-3 md:pt-4">
            
            <div className="relative z-20 flex w-full items-center justify-center gap-6 lg:gap-8 px-4 lg:px-0">

                
                <div className="absolute inset-0 w-[80%] mx-auto pointer-events-none hidden lg:block">
                    <div className="absolute left-2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                        <NodeSvg />
                    </div>
                    <div className="absolute right-2 top-1/2 translate-x-1/2 -translate-y-1/2 z-30">
                        <NodeSvg />
                    </div>
                </div>

                
                <SideLine side="left"/>
                
                
                <header className={`
                    relative z-10 flex h-14 items-center justify-between gap-3
                    bg-[#151515]/95 backdrop-blur-md
                    border border-white/10
                    rounded-2xl md:rounded-3xl
                    px-3.5 lg:h-auto lg:p-3
                    w-full max-w-[calc(100vw-2rem)] sm:w-[90%] md:w-[85%] lg:w-auto md:shadow-lg md:shadow-black/20
                `}>

                    
                    <div className="flex items-center pl-2 lg:pl-3">
                        <Link href="/" className="focus:outline-none flex items-center gap-2">
                            <svg width="28" height="28" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.52268 63.5L7.72607 46.0593H25.8786L22.3193 63.5H4.52268Z" fill="#D97757"/>
                                <path d="M4.52268 63.5L7.72607 46.0593H25.8786L22.3193 63.5H4.52268Z" fill="#F04D26"/>
                                <path d="M26.5905 46.0593L30.5057 27.5508H48.3023L44.0312 46.0593H26.5905Z" fill="#D97757"/>
                                <path d="M26.5905 46.0593L30.5057 27.5508H48.3023L44.0312 46.0593H26.5905Z" fill="#F04D26"/>
                                <path d="M19.4718 36.8051L23.3871 18.6525H60.0481L63.6074 0.5H7.72607L0.607422 36.8051H19.4718Z" fill="#D97757"/>
                                <path d="M19.4718 36.8051L23.3871 18.6525H60.0481L63.6074 0.5H7.72607L0.607422 36.8051H19.4718Z" fill="#F04D26"/>
                                <path d="M4.52268 63.5L7.72607 46.0593H25.8786L22.3193 63.5H4.52268Z" stroke="white"/>
                                <path d="M26.5905 46.0593L30.5057 27.5508H48.3023L44.0312 46.0593H26.5905Z" stroke="white"/>
                                <path d="M19.4718 36.8051L23.3871 18.6525H60.0481L63.6074 0.5H7.72607L0.607422 36.8051H19.4718Z" stroke="white"/>
                            </svg>
                        </Link>
                    </div>

                    
                    <nav className="hidden lg:flex items-center gap-5 mx-10">
                        <Link href="#features" onClick={(e) => handleSmoothScroll(e, 'features')} className="text-sm font-medium text-[#C1B9B9] hover:text-white transition-colors duration-150 ease motion-reduce:transition-none">
                            Features
                        </Link>
                        <Link href="#playground" onClick={(e) => handleSmoothScroll(e, 'playground')} className="text-sm font-medium text-[#C1B9B9] hover:text-white transition-colors duration-150 ease motion-reduce:transition-none">
                            Playground
                        </Link>
                        <Link href="#templates" onClick={(e) => handleSmoothScroll(e, 'templates')} className="text-sm font-medium text-[#C1B9B9] hover:text-white transition-colors duration-150 ease motion-reduce:transition-none">
                            Templates
                        </Link>
                        <Link href="#pricing" onClick={(e) => handleSmoothScroll(e, 'pricing')} className="text-sm font-medium text-[#C1B9B9] hover:text-white transition-colors duration-150 ease motion-reduce:transition-none">
                            Pricing
                        </Link>
                    </nav>

                    
                    <div className="flex items-center pr-2 lg:pr-3">
                        <motion.a href="/home" className="group bg-[#F04D26] hover:bg-[#F04D26]/90 text-white rounded-[11px] px-3.5 h-8 text-sm font-medium flex items-center gap-2 transition-[background-color,transform] duration-150 ease focus:outline-none active:scale-[0.97] motion-reduce:transition-none" initial="idle" whileHover="hover">
                            <span>Login</span>
                            <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white/80 group-hover:text-white transition-colors w-4 h-4 sm:w-5 sm:h-5">
                                <path opacity="0.4" d="M26.2214 29.3337H14.6658C12.9506 29.3337 11.5547 27.9377 11.5547 26.2225V5.7781C11.5547 4.0629 12.9506 2.66699 14.6658 2.66699H26.2214C27.9366 2.66699 29.3325 4.0629 29.3325 5.7781V26.2225C29.3325 27.9377 27.9366 29.3337 26.2214 29.3337Z" fill="currentColor"/>
                                <path d="M19.5547 9.87893V22.1219C19.5547 23.2044 20.1033 24.1923 21.0251 24.766L27.7325 28.925C28.6829 28.392 29.3341 27.3868 29.3341 26.2218V5.77742C29.3341 4.61333 28.6834 3.60817 27.7339 3.0752L21.0251 7.23411C20.1049 7.80531 19.5547 8.79377 19.5547 9.87893Z" fill="currentColor"/>
                                <motion.path d="M12.9422 15.0579L8.05333 10.169C7.53244 9.6481 6.68798 9.6481 6.16709 10.169C5.6462 10.6899 5.6462 11.5343 6.16709 12.0552L8.78044 14.6685H1.33333C0.597333 14.6685 0 15.2659 0 16.0019C0 16.7379 0.597333 17.3352 1.33333 17.3352H8.78044L6.16709 19.9486C5.6462 20.4694 5.6462 21.3139 6.16709 21.8348C6.42665 22.0943 6.76798 22.2259 7.10932 22.2259C7.45065 22.2259 7.79198 22.0961 8.05154 21.8348L12.9404 16.9459C13.4613 16.425 13.4613 15.5805 12.9404 15.0597L12.9422 15.0579Z" fill="currentColor" variants={{
            idle: { x: 0, opacity: 0.8 },
            hover: { x: 3, opacity: 1 }
        }} transition={{
            duration: 0.2,
            ease: [0.23, 1, 0.32, 1]
        }}/>
                            </svg>
                        </motion.a>
                    </div>
                </header>

                
                <SideLine side="right"/>
            </div>
        </div>);
}



================================================
FILE: apps/web/components/landing-page/header/index.ts
================================================
export { default } from './Header';



================================================
FILE: apps/web/components/landing-page/header/SideLine.tsx
================================================
"use client";
import React from 'react';
interface SideLineProps {
    side: 'left' | 'right';
}
export function SideLine({ side }: SideLineProps) {
    const isLeft = side === 'left';
    return (<div className="relative hidden h-px flex-1 border-t border-solid border-white/20 lg:block">
      
      <div className={`absolute z-30 -top-1 ${isLeft ? '-right-px' : '-left-px'}`}>
        <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="8" height="8" rx="2" fill="#F04D26"/>
        </svg>
      </div>
    </div>);
}



================================================
FILE: apps/web/components/landing-page/hero/EditorialLines.tsx
================================================
export function EditorialLines() {
    return (<div className="fixed inset-0 w-[80%] mx-auto pointer-events-none hidden lg:block z-10" aria-hidden="true">
            <div className="absolute left-2 top-0 bottom-0 w-px border-l border-solid border-white/20"/>
            <div className="absolute right-2 top-0 bottom-0 w-px border-r border-solid border-white/20"/>
        </div>);
}



================================================
FILE: apps/web/components/landing-page/hero/FeaturesSection.tsx
================================================
import { BentoGrid } from '../bento-grid';
export function FeaturesSection() {
    return (<section id="features" className="relative min-h-screen bg-[#151515] py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20 snap-start flex flex-col justify-center">
            
            <div className="relative z-10 w-[92%] md:w-[88%] lg:w-[90%] mx-auto flex flex-col items-center gap-4 mb-8 sm:mb-10 md:mb-12">
                <div className="flex h-8 items-center gap-2 rounded-[11px] border border-[#F04D26] bg-[#F04D26]/5 px-2.5 text-xs font-medium text-white/75 shadow-[0_8px_24px_-14px_rgba(0,0,0,0.6)]">
                    <svg aria-hidden="true" width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <path d="M6 5.5C6 5.22386 5.77614 5 5.5 5C5.22386 5 5 5.22386 5 5.5C5 6.48063 4.78279 7.0726 4.4277 7.4277C4.0726 7.78279 3.48063 8 2.5 8C2.22386 8 2 8.22386 2 8.5C2 8.77614 2.22386 9 2.5 9C3.48063 9 4.0726 9.21721 4.4277 9.5723C4.78279 9.9274 5 10.5194 5 11.5C5 11.7761 5.22386 12 5.5 12C5.77614 12 6 11.7761 6 11.5C6 10.5194 6.21721 9.9274 6.5723 9.5723C6.9274 9.21721 7.51937 9 8.5 9C8.77614 9 9 8.77614 9 8.5C9 8.22386 8.77614 8 8.5 8C7.51937 8 6.9274 7.78279 6.5723 7.4277C6.21721 7.0726 6 6.48063 6 5.5Z" fill="currentColor"></path>
                            <path d="M11 1.5C11 1.22386 10.7761 1 10.5 1C10.2239 1 10 1.22386 10 1.5C10 2.13341 9.85918 2.47538 9.66728 2.66728C9.47538 2.85918 9.13341 3 8.5 3C8.22386 3 8 3.22386 8 3.5C8 3.77614 8.22386 4 8.5 4C9.13341 4 9.47538 4.14082 9.66728 4.33272C9.85918 4.52462 10 4.86659 10 5.5C10 5.77614 10.2239 6 10.5 6C10.7761 6 11 5.77614 11 5.5C11 4.86659 11.1408 4.52462 11.3327 4.33272C11.5246 4.14082 11.8666 4 12.5 4C12.7761 4 13 3.77614 13 3.5C13 3.22386 12.7761 3 12.5 3C11.8666 3 11.5246 2.85918 11.3327 2.66728C11.1408 2.47538 11 2.13341 11 1.5Z" fill="currentColor"></path>
                            <path fillRule="evenodd" clipRule="evenodd" d="M20 15C15.1389 15 13 17.1389 13 22C13 17.1389 10.8611 15 6 15C10.8611 15 13 12.8611 13 8C13 12.8611 15.1389 15 20 15Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"></path>
                        </g>
                    </svg>
                    <span>Features</span>
                </div>
                <h2 className="font-serif italic text-[#7D7D87] text-center font-normal text-xl md:text-2xl leading-tight">
                    Everything you need to build powerful workflows
                </h2>
            </div>

            
            <BentoGrid />
        </section>);
}



================================================
FILE: apps/web/components/landing-page/hero/GridBackground.tsx
================================================
import React from 'react';
export function GridBackground() {
    return <div className="absolute inset-0 -z-10 bg-[#151515]"/>;
}



================================================
FILE: apps/web/components/landing-page/hero/Hero.tsx
================================================
import { GridBackground } from './GridBackground';
import { RulerTicks } from './RulerTicks';
import { HeroContent } from './HeroContent';
export default function Hero({ stars }: { stars?: string | null }) {
    return (<section className="relative pt-16 pb-8 sm:pt-20 sm:pb-6 md:pt-28 md:pb-4 lg:pt-32 lg:pb-5 min-h-screen xl:pt-40 xl:pb-6 overflow-x-hidden overflow-y-visible bg-[#151515]">
            <GridBackground />

            
            <RulerTicks />

            <HeroContent stars={stars} />
        </section>);
}



================================================
FILE: apps/web/components/landing-page/hero/HeroAnimation.tsx
================================================
"use client";
import { motion } from "framer-motion";
import { HeroIllustration } from "../hero-illustrations/Hero-svg-fynt";
import { HeroMiddleIllustration } from "../hero-illustrations/Hero-svg-middle";
import { HeroBottomIllustration } from "../hero-illustrations/Hero-svg-bottom";
const EXPLOSION = {
    duration: 0.85,
    stagger: 0.12,
    initialDelay: 0.6,
} as const;
const FINAL_Y = {
    top: -108,
    middle: 0,
    bottom: 108,
} as const;
const EASE_OUT: [
    number,
    number,
    number,
    number
] = [0.23, 1, 0.32, 1];
interface HeroAnimationProps {
    className?: string;
}
const CORNERS = {
    topToMiddle: [
        { x: 331, y: 188 },
        { x: -161.7, y: 188 },
    ],
    middleToBottom: [
        { x: 332.9, y: 345 },
        { x: -160.5, y: 345 },
    ],
} as const;
function ConnectingLine({ x, topOffset, height, delay, direction, }: {
    x: number;
    topOffset: number;
    height: number;
    delay: number;
    direction: 'up' | 'down';
}) {
    return (<motion.div className="absolute pointer-events-none" style={{
            left: `calc(50% + ${x}px)`,
            top: topOffset,
            transformOrigin: direction === 'up' ? 'bottom center' : 'top center',
        }} initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{
            duration: EXPLOSION.duration,
            ease: EASE_OUT,
            delay,
        }}>
            <svg width="2" height={height} viewBox={`0 0 2 ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="1" y1="0" x2="1" y2={height} stroke="#FFFFFF" strokeDasharray="8 8" strokeWidth="1"/>
            </svg>
        </motion.div>);
}
export function HeroAnimation({ className = "" }: HeroAnimationProps) {
    const lineHeight = Math.abs(FINAL_Y.top);
    return (<div className={`relative ${className}`}>
            <div className="flex flex-col items-center mt-24">
                
                <motion.div className="relative z-30 flex justify-center" initial={{ y: 0 }} animate={{ y: FINAL_Y.top }} transition={{
            duration: EXPLOSION.duration,
            ease: EASE_OUT,
            delay: EXPLOSION.initialDelay,
        }}>
                    <HeroIllustration />
                </motion.div>

                
                <div className="absolute inset-0 z-25 pointer-events-none">
                    {CORNERS.topToMiddle.map((corner, index) => (<ConnectingLine key={`top-middle-${index}`} x={corner.x} topOffset={corner.y} height={lineHeight} delay={EXPLOSION.initialDelay} direction="up"/>))}
                </div>

                
                <div className="relative z-20 flex justify-center -mt-72 ml-43">
                    <HeroMiddleIllustration />
                </div>

                
                <div className="absolute inset-0 z-15 pointer-events-none">
                    {CORNERS.middleToBottom.map((corner, index) => (<ConnectingLine key={`middle-bottom-${index}`} x={corner.x} topOffset={corner.y} height={lineHeight} delay={EXPLOSION.initialDelay} direction="down"/>))}
                </div>

                
                <motion.div className="relative z-10 flex justify-center -mt-79 ml-2.5" initial={{ y: 0 }} animate={{ y: FINAL_Y.bottom }} transition={{
            duration: EXPLOSION.duration,
            ease: EASE_OUT,
            delay: EXPLOSION.initialDelay,
        }}>
                    <HeroBottomIllustration />
                </motion.div>
            </div>
        </div>);
}



================================================
FILE: apps/web/components/landing-page/hero/HeroContent.tsx
================================================
import { HeroAnimation } from './HeroAnimation';
import ShinyText from '@/components/ui/ShinyText';
export function HeroContent({ stars }: { stars?: string | null }) {
    return (<div className="relative z-10 mx-auto w-full sm:w-[88%] md:w-[85%] lg:w-[80%] xl:w-[80%] max-w-[1920px] md:overflow-x-hidden overflow-y-visible min-[120rem]:overflow-visible px-4 sm:px-4 md:px-5 lg:px-6 xl:px-8 2xl:px-10 min-[97.5rem]:px-12">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-7 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16 min-[97.5rem]:gap-20 items-start md:min-h-[560px] lg:min-h-[660px] xl:min-h-[760px] min-[120rem]:min-h-[860px]">
                <div className="md:pl-2 lg:pl-7 xl:pl-3 2xl:pl-13 min-[97.5rem]:pl-15 min-[120rem]:pl-17 lg:pr-6 xl:pr-8">
                    
                    <div className="text-center md:text-left mt-0 sm:mt-2 md:mt-0 lg:mt-7 xl:mt-8 2xl:mt-9">
                        <h1 className="font-serif text-2xl sm:text-2xl md:text-[26px] lg:text-[40px] xl:text-[45px] min-[97.5rem]:text-[50px] leading-tight lg:leading-[1.08] tracking-tight text-white mb-6 md:mb-8">
                            <span className="block 2xl:whitespace-nowrap">Your workflows aren&apos;t linear.</span>
                            <span className="block 2xl:whitespace-nowrap">Your engine shouldn&apos;t be either.</span>
                        </h1>

                        <p className="max-w-xl 2xl:max-w-2xl mx-auto md:mx-0 text-sm lg:text-[17px] xl:text-[14px] 2xl:text-[18px] min-[97.5rem]:text-[18px] text-[#A1A1AA] mb-10 md:mb-10 leading-relaxed font-sans">
                            A graph-based workflow engine with node-level retries, checkpointing, and crash-safe execution built for production systems.
                        </p>
                    </div>

                    
                    <div className="relative mx-auto md:hidden w-full max-w-[420px] h-[220px] sm:h-[250px] mb-12 sm:mb-10 overflow-visible">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.42] sm:scale-[0.4]">
                            <HeroAnimation />
                        </div>
                    </div>

                    
                    <div className="relative mx-auto flex w-fit max-w-full flex-row flex-nowrap items-center justify-center gap-2 sm:gap-3 md:mx-0 md:w-full md:justify-start md:gap-4 mt-25 mb-6 sm:mb-4 md:mb-0 md:mt-8 lg:mt-0">
                        <a href="/home" className="group shrink-0 flex items-center gap-0.5 whitespace-nowrap bg-[#F04D26] hover:bg-[#F04D26]/90 text-white rounded-[11px] md:rounded-[12px] pl-3 pr-2.5 md:pl-4 md:pr-3.5 min-[97.5rem]:pl-5 min-[97.5rem]:pr-4 h-9 md:h-10 lg:h-10 xl:h-10 2xl:h-11 min-[97.5rem]:h-12 text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-base min-[97.5rem]:text-base font-medium shadow-sm transition-[background-color,transform] duration-150 ease focus:outline-none active:scale-[0.97] motion-reduce:transition-none">
                            Get Started
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" className="size-4 md:size-[17px] lg:size-[17px] 2xl:size-[18px] transition-transform duration-150 ease-out group-hover:translate-x-0.5 motion-reduce:transition-none">
                                <path stroke="currentColor" strokeLinecap="square" strokeWidth="1.25" d="M8.333 13.333 11.667 10 8.333 6.667"></path>
                            </svg>
                        </a>
                        <div className="relative shrink-0">
                            <a href="https://github.com/abhinavkale-dev/fynt" target="_blank" rel="noopener noreferrer" className="shrink-0 bg-white/10 hover:bg-white/20 whitespace-nowrap text-white rounded-[11px] md:rounded-[12px] px-3 md:px-4 min-[97.5rem]:px-5 h-9 md:h-10 lg:h-10 xl:h-10 2xl:h-11 min-[97.5rem]:h-12 text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-base min-[97.5rem]:text-base font-medium shadow-sm transition-[background-color,transform] duration-150 ease flex items-center gap-1.5 md:gap-2 active:scale-[0.97] motion-reduce:transition-none">
                                <span>Star Github</span>
                                <svg width="18" height="18" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[17px] h-[17px] md:w-[17px] md:h-[17px] 2xl:w-[18px] 2xl:h-[18px]">
                                    <path d="M16 2.34475C23.735 2.34475 30 8.60975 30 16.3447C29.998 22.3597 26.161 27.7038 20.463 29.6268C19.763 29.7668 19.5 29.3288 19.5 28.9618C19.5 28.4888 19.518 26.9837 19.518 25.1117C19.518 23.7997 19.081 22.9597 18.573 22.5217C21.688 22.1717 24.961 20.9818 24.961 15.6097C24.961 14.0697 24.418 12.8267 23.526 11.8477C23.666 11.4977 24.156 10.0627 23.386 8.13775C23.386 8.13775 22.213 7.75275 19.536 9.57275C18.416 9.25775 17.226 9.10075 16.036 9.10075C14.846 9.10075 13.656 9.25775 12.536 9.57275C9.859 7.77075 8.686 8.13775 8.686 8.13775C7.916 10.0627 8.406 11.4977 8.546 11.8477C7.654 12.8277 7.111 14.0877 7.111 15.6097C7.111 20.9648 10.366 22.1728 13.481 22.5228C13.078 22.8728 12.711 23.4858 12.588 24.3948C11.783 24.7628 9.77 25.3577 8.511 23.2397C8.248 22.8197 7.461 21.7878 6.359 21.8048C5.186 21.8228 5.887 22.4698 6.376 22.7318C6.971 23.0638 7.653 24.3067 7.811 24.7097C8.091 25.4967 9.001 27.0028 12.518 26.3547C12.518 27.5278 12.536 28.6297 12.536 28.9618C12.536 29.3298 12.273 29.7488 11.573 29.6268C5.854 27.7228 1.997 22.3717 2 16.3438C2 8.60875 8.265 2.34475 16 2.34475Z" fill="#F7F7F7"/>
                                </svg>
                            </a>
                            {stars && (
                                <div className="hidden md:block">
                                    <svg className="text-white/20 pointer-events-none absolute top-2 left-[105%] w-10 h-10 rotate-195" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 323.057 323.057" xmlSpace="preserve" fill="currentColor">
                                        <path d="M281.442 256.312c-47.124 59.364-139.536 44.676-160.956-29.376-1.224-3.672-1.836-7.956-2.448-11.628 49.572-11.016 97.92-47.124 102.204-90.576 3.672-39.168-36.108-50.796-62.424-28.764-31.212 26.316-53.244 64.872-55.08 105.875-31.824 4.284-63.036-4.284-80.172-35.496-28.764-52.631 9.792-123.624 61.2-144.432 5.508-1.836 3.06-10.404-2.448-8.568C10.326 33.544-26.394 132.688 21.954 191.439c18.972 22.645 49.572 29.988 81.396 26.316 4.284 41.616 36.72 74.664 75.275 87.516 44.676 14.688 85.68-6.731 111.996-41.616 4.285-5.508-4.896-12.239-9.179-7.343M144.354 132.688c9.792-13.464 22.644-28.764 39.168-34.272 15.911-5.508 21.42 16.524 22.031 26.316.612 12.24-7.956 23.256-15.912 31.824-16.523 18.971-44.063 35.496-72.215 42.839 1.836-23.868 13.464-47.123 26.928-66.707" />
                                        <path d="M315.713 233.668c-17.136 0-34.884 1.224-51.408 5.508-6.731 1.836-3.672 11.016 3.061 9.792 13.464-2.448 27.54-1.836 41.004-1.224-.612 7.955-1.224 16.523-2.448 24.479-1.224 6.12-5.508 15.3-1.836 21.42 1.836 3.061 4.896 3.061 7.956 1.836 7.344-3.06 7.344-15.912 8.568-22.644 1.836-11.017 2.447-21.42 2.447-32.437 0-3.67-3.672-6.73-7.344-6.73" />
                                    </svg>
                                    <span className="font-mono pointer-events-none absolute top-12 left-[112%] -rotate-14 text-[10px] leading-tight whitespace-nowrap">
                                        <ShinyText text={`${stars} Stars`} speed={2} delay={1.8} color="#555555" shineColor="#FF6B45" spread={135} /> <br /> <span className="text-white/20">on Github</span>
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>

                </div>

                
                <div className="relative hidden md:block perspective-[2000px] -mt-4 md:-mt-4 lg:-mt-6.5 md:ml-0 xl:ml-14 min-[97.5rem]:ml-0 z-10">
                    <HeroAnimation className="scale-[0.36] md:scale-[0.36] lg:scale-[0.4] xl:scale-[0.7] min-[97.5rem]:scale-[0.71] origin-top-left"/>
                </div>
            </div>
        </div>);
}



================================================
FILE: apps/web/components/landing-page/hero/index.ts
================================================
export { default } from './Hero';



================================================
FILE: apps/web/components/landing-page/hero/RulerTicks.tsx
================================================
export function RulerTicks() {
    return (<div className="absolute inset-0 w-[80%] mx-auto pointer-events-none hidden lg:block z-10" aria-hidden="true">
            
            <div className="ruler-ticks absolute left-2 top-[40px] -translate-x-[calc(100%-1px)] pr-0 flex flex-col items-end gap-10 text-xs font-mono origin-right">
                <div className="flex w-fit items-center gap-2 text-white/30"><span className="-rotate-90">0</span><span className="w-1 h-px bg-white/30"/></div>
                <div className="flex w-fit items-center gap-1 text-white/30"><span className="-rotate-90">50</span><span className="w-1 h-px bg-white/30"/></div>
                <div className="flex items-center gap-0.5 text-white/30"><span className="-rotate-90">100</span><span className="w-1 h-px bg-white/30"/></div>
                <div className="flex items-center gap-0.5 text-white/30"><span className="-rotate-90">150</span><span className="w-1 h-px bg-white/30"/></div>
                <div className="flex items-center gap-0.5 text-white/30"><span className="-rotate-90">200</span><span className="w-1 h-px bg-white/30"/></div>
                <div className="flex items-center gap-0.5 text-white/30"><span className="-rotate-90">250</span><span className="w-1 h-px bg-white/30"/></div>
                <div className="flex items-center gap-0.5 text-white/30"><span className="-rotate-90">300</span><span className="w-1 h-px bg-white/30"/></div>
                <div className="flex items-center gap-0.5 text-white/30"><span className="-rotate-90">350</span><span className="w-1 h-px bg-white/30"/></div>
                <div className="flex items-center gap-0.5 text-white/30"><span className="-rotate-90">400</span><span className="w-1 h-px bg-white/30"/></div>
                <div className="flex items-center gap-0.5 text-white/30"><span className="-rotate-90">450</span><span className="w-1 h-px bg-white/30"/></div>
                <div className="flex items-center gap-0.5 text-white/25"><span className="-rotate-90">500</span><span className="w-1 h-px bg-white/25"/></div>
                <div className="flex items-center gap-0.5 text-white/20"><span className="-rotate-90">550</span><span className="w-1 h-px bg-white/20"/></div>
                <div className="flex items-center gap-0.5 text-white/15"><span className="-rotate-90">600</span><span className="w-1 h-px bg-white/15"/></div>
                <div className="flex items-center gap-0.5 text-white/10"><span className="-rotate-90">650</span><span className="w-1 h-px bg-white/10"/></div>
                <div className="flex items-center gap-0.5 text-white/5"><span className="-rotate-90">700</span><span className="w-1 h-px bg-white/5"/></div>
                <div className="flex items-center gap-0.5 text-white/2"><span className="-rotate-90">750</span><span className="w-1 h-px bg-white/2"/></div>
            </div>

            
            <div className="ruler-ticks ruler-ticks-right absolute right-2 top-[40px] translate-x-[calc(100%-1px)] pl-0 flex flex-col items-start gap-10 text-xs font-mono origin-left">
                <div className="flex w-fit items-center gap-2 text-white/30"><span className="w-1 h-px bg-white/30"/><span className="rotate-90">0</span></div>
                <div className="flex w-fit items-center gap-1 text-white/30"><span className="w-1 h-px bg-white/30"/><span className="rotate-90">50</span></div>
                <div className="flex items-center gap-0.5 text-white/30"><span className="w-1 h-px bg-white/30"/><span className="rotate-90">100</span></div>
                <div className="flex items-center gap-0.5 text-white/30"><span className="w-1 h-px bg-white/30"/><span className="rotate-90">150</span></div>
                <div className="flex items-center gap-0.5 text-white/30"><span className="w-1 h-px bg-white/30"/><span className="rotate-90">200</span></div>
                <div className="flex items-center gap-0.5 text-white/30"><span className="w-1 h-px bg-white/30"/><span className="rotate-90">250</span></div>
                <div className="flex items-center gap-0.5 text-white/30"><span className="w-1 h-px bg-white/30"/><span className="rotate-90">300</span></div>
                <div className="flex items-center gap-0.5 text-white/30"><span className="w-1 h-px bg-white/30"/><span className="rotate-90">350</span></div>
                <div className="flex items-center gap-0.5 text-white/30"><span className="w-1 h-px bg-white/30"/><span className="rotate-90">400</span></div>
                <div className="flex items-center gap-0.5 text-white/30"><span className="w-1 h-px bg-white/30"/><span className="rotate-90">450</span></div>
                <div className="flex items-center gap-0.5 text-white/25"><span className="w-1 h-px bg-white/25"/><span className="rotate-90">500</span></div>
                <div className="flex items-center gap-0.5 text-white/20"><span className="w-1 h-px bg-white/20"/><span className="rotate-90">550</span></div>
                <div className="flex items-center gap-0.5 text-white/15"><span className="w-1 h-px bg-white/15"/><span className="rotate-90">600</span></div>
                <div className="flex items-center gap-0.5 text-white/10"><span className="w-1 h-px bg-white/10"/><span className="rotate-90">650</span></div>
                <div className="flex items-center gap-0.5 text-white/5"><span className="w-1 h-px bg-white/5"/><span className="rotate-90">700</span></div>
                <div className="flex items-center gap-0.5 text-white/2"><span className="w-1 h-px bg-white/2"/><span className="rotate-90">750</span></div>
            </div>
        </div>);
}



================================================
FILE: apps/web/components/landing-page/hero/SectionSeparators.tsx
================================================
const NodeSvg = () => (<svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="8" height="8" rx="2" fill="#F04D26"/>
    </svg>);
const LogoSvg = () => (<svg width="31" height="31" viewBox="0 0 31 31" overflow="visible" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#a)"><g filter="url(#b)"><rect x=".5" y=".5" width="29.998" height="30.003" rx="4.5" stroke="#ff6e00"/></g><g filter="url(#c)" fill="#ff6e00"><path d="m6.86 25.366 1.004-5.462h5.684l-1.115 5.462zm6.91-5.462 1.226-5.796h5.573l-1.338 5.796z"/><path d="m11.541 17.006 1.226-5.685h11.48l1.114-5.684H7.864l-2.23 11.37z"/></g></g><defs><filter id="a" x="0" y="0" width="31.198" height="31.203" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dx=".2" dy=".2"/><feGaussianBlur stdDeviation=".25"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend in2="shape" result="effect1_innerShadow_642_873"/></filter><filter id="b" x="0" y="0" width="31.198" height="31.203" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dx=".2" dy=".2"/><feGaussianBlur stdDeviation=".4"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend in2="shape" result="effect1_innerShadow_642_873"/></filter><filter id="c" x="5.635" y="5.637" width="20.827" height="20.829" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dx="1.1" dy="1.1"/><feGaussianBlur stdDeviation="1.05"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.62 0"/><feBlend in2="shape" result="effect1_innerShadow_642_873"/></filter></defs></svg>);
export function SectionSeparators() {
    return (<>
            
            <div className="lg:hidden w-full mx-auto flex justify-center items-center pointer-events-none z-20 mt-0 py-1">
                
                <div className="flex-shrink-0">
                    <NodeSvg />
                </div>
                
                <div className="relative w-16 h-px bg-white/30"/>
                
                <div className="flex-shrink-0">
                    <NodeSvg />
                </div>
                
                <div className="flex-shrink-0 mx-3">
                    <LogoSvg />
                </div>
                
                <div className="flex-shrink-0">
                    <NodeSvg />
                </div>
                
                <div className="relative w-16 h-px bg-white/30"/>
                
                <div className="flex-shrink-0">
                    <NodeSvg />
                </div>
            </div>

            
            <div className="hidden lg:flex items-center w-full mx-auto pointer-events-none z-20 mt-0 py-2 justify-center">
                
                <div className="flex-shrink-0">
                    <NodeSvg />
                </div>
                
                <div className="relative w-56 h-px bg-white/30"/>
                
                <div className="flex-shrink-0 mr-2">
                    <NodeSvg />
                </div>
                
                <div className="flex-shrink-0 mx-4">
                    <LogoSvg />
                </div>
                
                <div className="flex-shrink-0 ml-2">
                    <NodeSvg />
                </div>
                
                <div className="relative w-56 h-px bg-white/30"/>
                
                <div className="flex-shrink-0">
                    <NodeSvg />
                </div>
            </div>
        </>);
}



================================================
FILE: apps/web/components/landing-page/hero-illustrations/Hero-svg-bottom.tsx
================================================
import * as React from "react";
interface HeroBottomIllustrationProps {
    width?: number;
    height?: number;
    className?: string;
}
export function HeroBottomIllustration({ width = 661, height = 366, className }: HeroBottomIllustrationProps) {
    return (<svg width={width} height={height} viewBox="0 0 661 366" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true" role="img">
      <g opacity=".6">
        <path d="M657.475 174.002c1.333.77 1.333 2.694 0 3.464L414.63 317.672a2 2 0 0 1-2 0L169.785 177.466c-1.333-.77-1.333-2.694 0-3.464L412.63 33.795a2 2 0 0 1 2 0z" fill="#1e1e1e"/>
        <path d="m412.63 33.795-.25-.434zm2 0 .25-.433zM169.785 177.466l.25-.433zm0-3.464-.25-.433zm244.845 143.67-.25-.433zm-2 0 .25-.433zm244.845-140.206-.25-.433zm0 0-.25-.433L414.38 317.239l.25.433.25.433 242.845-140.206zM412.63 317.672l.25-.433-242.845-140.206-.25.433-.25.433L412.38 318.105zm-242.845-143.67.25.433L412.88 34.228l-.25-.433-.25-.434L169.535 173.57zM414.63 33.795l-.25.433 242.845 140.207.25-.433.25-.433L414.88 33.362zm-2 0 .25.433a1.5 1.5 0 0 1 1.5 0l.25-.433.25-.433a2.5 2.5 0 0 0-2.5 0zM169.785 177.466l.25-.433a1.5 1.5 0 0 1 0-2.598l-.25-.433-.25-.433c-1.667.962-1.667 3.368 0 4.33zM414.63 317.672l-.25-.433a1.5 1.5 0 0 1-1.5 0l-.25.433-.25.433a2.5 2.5 0 0 0 2.5 0zm242.845-140.206.25.433c1.666-.962 1.666-3.368 0-4.33l-.25.433-.25.433c1 .577 1 2.02 0 2.598z" fill="#797979"/>
        <path d="M660.001 223.198c0 .714-.381 1.374-1 1.732L416.156 365.136c-1.333.77-3-.193-3-1.732v-45.261c0-.715.381-1.375 1-1.732l242.845-140.207c1.333-.77 3 .192 3 1.732z" fill="#131313"/>
        <path d="m657.001 176.204.25.433zM414.156 316.411l.25.433zm2 48.725.25.433zM659.001 224.93l-.25-.433zm0 0-.25-.433-242.845 140.206.25.433.25.433 242.845-140.206zM413.156 363.404h.5v-45.261h-1v45.261zm1-46.993.25.433 242.845-140.207-.25-.433-.25-.433-242.845 140.207zm245.845-138.475h-.5v45.262h1v-45.262zm-3-1.732.25.433a1.5 1.5 0 0 1 2.25 1.299h1c0-1.925-2.083-3.128-3.75-2.165zM413.156 318.143h.5a1.5 1.5 0 0 1 .75-1.299l-.25-.433-.25-.433a2.5 2.5 0 0 0-1.25 2.165zm3 46.993-.25-.433a1.5 1.5 0 0 1-2.25-1.299h-1c0 1.924 2.084 3.127 3.75 2.165zM659.001 224.93l.25.433a2.5 2.5 0 0 0 1.25-2.165h-1a1.5 1.5 0 0 1-.75 1.299z" fill="#e0dbdb"/>
        <path d="M412.177 316.41c.619.357 1 1.017 1 1.732v45.262c0 1.539-1.667 2.502-3 1.732L167.332 224.929a2 2 0 0 1-1-1.732v-45.261c0-1.54 1.667-2.502 3-1.732z" fill="#131313"/>
        <path d="m169.332 176.204-.25.433zm-2 48.725.25-.433zm242.845 140.207.25-.433zm2-48.726-.25.433zm1 1.732h-.5v45.262h1v-45.262zm-3 46.994.25-.433-242.845-140.207-.25.433-.25.433 242.845 140.207zM166.332 223.197h.5v-45.261h-1v45.261zm3-46.993-.25.433 242.845 140.206.25-.433.25-.433-242.845-140.206zm-3 1.732h.5a1.5 1.5 0 0 1 2.25-1.299l.25-.433.25-.433c-1.667-.963-3.75.24-3.75 2.165zm1 46.993.25-.433a1.5 1.5 0 0 1-.75-1.299h-1c0 .893.477 1.718 1.25 2.165zm245.845 138.475h-.5a1.5 1.5 0 0 1-2.25 1.299l-.25.433-.25.433c1.666.962 3.75-.241 3.75-2.165zm0-45.262h.5a2.5 2.5 0 0 0-1.25-2.165l-.25.433-.25.433a1.5 1.5 0 0 1 .75 1.299z" fill="#e0dbdb"/>
      </g>
      
      <path d="M470.178 105.499v28.892l-18.924-10.921v-7.05l-13.045-7.526-6.096-3.525V83.527l5.981 3.452 19.039 10.994zm-76.014-22.045v21.973l-5.996 3.467-12.799 7.382v6.919l-19.025 10.994v-28.892l12.799-7.397 18.91-10.92z" fill="#fff" stroke="#000" strokeWidth="1.618" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="m507.998 83.657-25.021 14.446-12.799 7.396-13.045-7.526-19.039-10.994-5.981-3.452 12.814-7.397 5.98-3.452 19.025-10.994zM450.909 50.69l-25.021 14.447-12.813 7.396-13.045-7.526-25.02-14.446 37.834-21.842zm-56.745 32.764-6.111 3.525L369.144 97.9l-12.8 7.397-13.044-7.541-25.021-14.446 37.82-21.828 18.91 10.921 6.11 3.525z" fill="#fff" stroke="#000" strokeWidth="1.618" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M507.997 83.657v28.891l-37.819 21.843v-28.892l12.799-7.396zm-56.742 32.763v28.892l-37.819 21.842v-28.892l12.799-7.396 18.924-10.921z" fill="#fff" stroke="#000" strokeWidth="1.618" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="m451.256 116.42-6.096 3.525-18.925 10.921-12.799 7.396-13.044-7.54-19.026-10.979-5.995-3.467 12.799-7.382 5.995-3.467 12.929-7.454 5.981-3.453.115-.072 5.981 3.452 12.944 7.469 6.096 3.525z" fill="#fff" stroke="#000" strokeWidth="1.618" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M413.436 138.262v28.892l-38.065-21.986v-28.892l5.995 3.467 19.026 10.979zm-57.092-32.965v28.891l-38.065-21.986V83.31L343.3 97.756zm94.564-54.607v21.988l-5.98 3.452-12.814 7.397v6.905L419.171 97.9l-5.981-3.452-.116.072V72.533l12.814-7.396z" fill="#fff" stroke="#000" strokeWidth="1.618" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M413.075 72.533V94.52l-5.981 3.452-12.929-7.468v-7.05l-13.045-7.526-6.11-3.525V50.561l25.02 14.446z" fill="#fff" stroke="#000" strokeWidth="1.618" strokeLinecap="round" strokeLinejoin="round"/>
      
      <path d="M353.178 172.499v28.892l-18.924-10.921v-7.05l-13.045-7.526-6.096-3.525v-21.842l5.981 3.452 19.039 10.994zm-76.014-22.045v21.973l-5.996 3.467-12.799 7.382v6.919l-19.025 10.994v-28.892l12.799-7.397 18.91-10.921z" fill="#262626" stroke="#fff" strokeWidth="1.618" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="m390.998 150.657-25.021 14.446-12.799 7.396-13.045-7.526-19.039-10.994-5.981-3.452 12.814-7.397 5.98-3.452 19.025-10.994zm-57.089-32.966-25.021 14.446-12.813 7.396-13.045-7.526-25.02-14.446 37.834-21.842zm-56.745 32.763-6.111 3.525-18.909 10.921-12.8 7.397-13.044-7.541-25.021-14.446 37.82-21.828 18.91 10.921 6.11 3.525z" fill="#262626" stroke="#fff" strokeWidth="1.618" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M390.997 150.656v28.892l-37.819 21.843v-28.892l12.799-7.397zm-56.742 32.764v28.892l-37.819 21.842v-28.892l12.799-7.396 18.924-10.921z" fill="#262626" stroke="#fff" strokeWidth="1.618" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="m334.256 183.42-6.096 3.525-18.925 10.921-12.799 7.396-13.044-7.54-19.026-10.979-5.995-3.467 12.799-7.382 5.995-3.467 12.929-7.454 5.981-3.453.115-.072 5.981 3.452 12.944 7.469 6.096 3.525z" fill="#262626" stroke="#fff" strokeWidth="1.618" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M296.436 205.262v28.892l-38.065-21.986v-28.892l5.995 3.467 19.026 10.979zm-57.092-32.965v28.891l-38.065-21.986V150.31l25.021 14.446zm94.564-54.606v21.987l-5.98 3.452-12.814 7.397v6.905l-12.943 7.468-5.981-3.452-.116.072v-21.987l12.814-7.396z" fill="#262626" stroke="#fff" strokeWidth="1.618" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M296.075 139.533v21.987l-5.981 3.452-12.929-7.468v-7.05l-13.045-7.526-6.11-3.525v-21.842l25.02 14.446z" fill="#262626" stroke="#fff" strokeWidth="1.618" strokeLinecap="round" strokeLinejoin="round"/>
      
      <path d="m588.753 173.209-.508 28.888-18.729-11.252.124-7.049-12.91-7.754-6.034-3.632.384-21.838 5.919 3.557 18.844 11.326zm-75.617-23.377-.386 21.969-6.055 3.362-12.927 7.155-.121 6.919-19.216 10.657.507-28.887 12.928-7.17 19.099-10.588z" fill="#151515" stroke="#968f8f" strokeWidth="1.618" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="m626.949 152.035-25.27 14.004-12.927 7.17-12.91-7.754-18.844-11.327-5.919-3.557 12.942-7.17 6.04-3.347 19.215-10.657zm-56.5-33.964-25.271 14.004-12.941 7.17-12.911-7.754-24.763-14.884 38.212-21.174zm-57.312 31.761-6.171 3.417-19.099 10.588-12.927 7.17-12.91-7.769-24.763-14.883 38.197-21.16 18.715 11.251 6.048 3.632z" fill="#151515" stroke="#968f8f" strokeWidth="1.618" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="m626.95 152.035-.507 28.887-38.198 21.175.508-28.888 12.927-7.17zm-57.31 31.761-.507 28.888-38.198 21.174.507-28.887 12.928-7.171 19.113-10.587z" fill="#151515" stroke="#968f8f" strokeWidth="1.618" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="m569.641 183.796-6.157 3.417-19.113 10.587-12.927 7.171-12.91-7.769-18.83-11.312-5.933-3.572 12.926-7.155 6.056-3.362 13.058-7.225 6.04-3.347.117-.071 5.919 3.558 12.81 7.694 6.034 3.632z" fill="#151515" stroke="#968f8f" strokeWidth="1.618" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="m531.442 204.971-.507 28.887-37.673-22.652.508-28.888 5.933 3.572 18.829 11.312zm-56.502-33.964-.507 28.887-37.673-22.652.508-28.887 24.762 14.883zm95.508-52.936-.387 21.983-6.04 3.347-12.942 7.17-.121 6.904-13.073 7.24-5.919-3.557-.117.071.386-21.984 12.942-7.17z" fill="#151515" stroke="#968f8f" strokeWidth="1.618" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="m532.237 139.245-.386 21.984-6.04 3.346-12.796-7.694.124-7.049-12.911-7.754-6.047-3.632.383-21.839 24.763 14.884z" fill="#151515" stroke="#968f8f" strokeWidth="1.618" strokeLinecap="round" strokeLinejoin="round"/>
      
      <path d="M469.899 239.78v28.892l-18.924-10.921v-7.049l-13.045-7.527-6.096-3.525v-21.842l5.98 3.453 19.04 10.993zm-76.015-22.044v21.972l-5.995 3.467-12.799 7.382v6.919l-19.026 10.994v-28.892l12.8-7.396 18.91-10.922z" fill="#262626" stroke="#F04D26" strokeWidth="1.618" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="m507.718 217.938-25.02 14.446-12.799 7.396-13.045-7.526-19.04-10.994-5.98-3.452 12.813-7.396 5.981-3.453 19.025-10.993zm-57.088-32.966-25.021 14.446-12.814 7.397-13.044-7.527-25.021-14.446L412.564 163zm-56.745 32.763-6.111 3.525-18.91 10.921-12.799 7.397-13.044-7.541L318 217.591l37.819-21.828 18.91 10.921 6.111 3.525z" fill="#262626" stroke="#F04D26" strokeWidth="1.618" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M507.718 217.938v28.892l-37.82 21.842V239.78l12.8-7.396zm-56.742 32.763v28.892l-37.82 21.842v-28.892l12.8-7.396 18.924-10.921z" fill="#262626" stroke="#F04D26" strokeWidth="1.618" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="m450.976 250.702-6.096 3.524-18.924 10.922-12.799 7.396-13.045-7.541-19.025-10.979-5.995-3.467 12.799-7.382 5.995-3.467 12.929-7.454 5.981-3.453.115-.072 5.981 3.453 12.944 7.468 6.096 3.525z" fill="#262626" stroke="#F04D26" strokeWidth="1.618" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M413.157 272.544v28.892l-38.065-21.987v-28.892l5.995 3.467 19.025 10.979zm-57.092-32.966v28.892L318 246.483v-28.892l25.021 14.446zm94.564-54.606v21.987l-5.981 3.453-12.813 7.396v6.905l-12.944 7.469-5.98-3.453-.116.072v-21.986l12.814-7.397zm-37.834 21.842v21.987l-5.98 3.453-12.929-7.469v-7.05l-13.045-7.526-6.111-3.525v-21.842l25.021 14.446z" fill="#262626" stroke="#F04D26" strokeWidth="1.618" strokeLinecap="round" strokeLinejoin="round"/>
      
      <path stroke="#555" d="m412.753 326.565 247-140M165.5 182.5l247.127 143.524M166.251 188.568l247.127 143.523M166.251 194.568l247.127 143.523M166.251 201.568l247.127 143.523M166.251 208.568l247.127 143.523M166.251 215.568l247.127 143.523m.375-26.526 246-140m-246 146 246-140m-246 147 246-140m-246 147 246-140m-246 147 246-140"/>
    </svg>);
}



================================================
FILE: apps/web/components/landing-page/hero-illustrations/Hero-svg-fynt-block.tsx
================================================
"use client";
import { motion } from "framer-motion";
interface HeroFyntBlockProps {
    id: string;
    className?: string;
}
export function HeroFyntBlock({ id, className }: HeroFyntBlockProps) {
    return (<>
      <motion.g id="fynt-block" className={className} initial={{ y: 0 }} animate={{ y: -10 }} transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
        }}>
        <path d="m447.151 224.154 3.341-8.919 9.567 2.563-3.529 8.869zm13.283-6.255 3.817-9.393 9.379 2.514-4.004 9.342z" fill="#d97757"/>
        <path d="m457.559 211.921 3.783-9.201 19.322 5.177 3.595-9.251-29.451-7.892-7.191 18.503z" fill="#d97757"/>
        <path d="m485.611 190.996-29.451-7.892-1.349 7.65 29.451 7.892z" fill={`url(#${id}-c)`}/>
        <path d="m482.016 200.247 3.596-9.251-1.349 7.65-3.595 9.251z" fill={`url(#${id}-d)`}/>
        <path d="m456.16 183.105-7.192 18.503-1.348 7.65 7.191-18.503z" fill={`url(#${id}-e)`}/>
        <path d="m462.693 195.071 19.322 5.177-1.349 7.65-19.322-5.177z" fill={`url(#${id}-f)`}/>
        <path d="m465.602 200.857 9.379 2.513-1.349 7.65-9.379-2.513z" fill={`url(#${id}-g)`}/>
        <path d="m458.913 204.271 3.783-9.201-1.349 7.65-3.783 9.201z" fill={`url(#${id}-h)`}/>
        <path d="m461.785 210.248 3.818-9.392-1.349 7.65-3.817 9.392z" fill={`url(#${id}-i)`}/>
        <path d="m448.971 201.608 9.942 2.664-1.349 7.65-9.942-2.664z" fill={`url(#${id}-j)`}/>
        <path d="m474.985 203.369-4.004 9.342-1.349 7.65 4.004-9.341z" fill={`url(#${id}-k)`}/>
        <path d="m451.846 207.584 9.567 2.564-1.349 7.65-9.567-2.564z" fill={`url(#${id}-l)`}/>
        <path d="m470.977 212.711-9.192-2.462-1.349 7.65 9.192 2.463z" fill={`url(#${id}-m)`}/>
        <path d="m448.502 216.504 3.341-8.919-1.349 7.65-3.341 8.919z" fill={`url(#${id}-n)`}/>
        <path d="m461.413 210.148-3.528 8.869-1.349 7.65 3.528-8.869z" fill={`url(#${id}-o)`}/>
        <path d="m457.885 219.018-9.379-2.513-1.349 7.65 9.379 2.514z" fill={`url(#${id}-p)`}/>
        <path d="m448.505 216.503 3.34-8.919 9.567 2.564-3.528 8.868z" fill="#d97757"/>
        <path d="m448.505 216.503 3.34-8.919 9.567 2.564-3.528 8.868z" fill="#f04d26"/>
        <path d="m461.787 210.248 3.817-9.392 9.38 2.513-4.005 9.342z" fill="#d97757"/>
        <path d="m461.787 210.248 3.817-9.392 9.38 2.513-4.005 9.342z" fill="#f04d26"/>
        <path d="m458.912 204.27 3.784-9.201 19.321 5.178 3.596-9.252-29.451-7.891-7.192 18.502z" fill="#d97757"/>
        <path d="m458.912 204.27 3.784-9.201 19.321 5.178 3.596-9.252-29.451-7.891-7.192 18.502z" fill="#f04d26"/>
        <path d="m448.505 216.503 3.34-8.919 9.567 2.564-3.528 8.868zm13.282-6.255 3.817-9.392 9.38 2.513-4.005 9.342z" stroke="#fff"/>
        <path d="m458.912 204.27 3.784-9.201 19.321 5.178 3.596-9.252-29.451-7.891-7.192 18.502" stroke="#fff"/>
      </motion.g>
      <path d="M598.605 177.583 670.849 130.173" stroke="#fff"/>
    </>);
}



================================================
FILE: apps/web/components/landing-page/hero-illustrations/Hero-svg-middle.tsx
================================================
import * as React from "react";
interface HeroMiddleIllustrationProps {
    width?: number;
    height?: number;
    className?: string;
}
export function HeroMiddleIllustration({ width = 498, height = 335, className }: HeroMiddleIllustrationProps) {
    return (<svg width={width} height={height} viewBox="0 0 498 335" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}><rect width="288.82" height="284.434" rx="2" transform="matrix(.86827 .4961 -.86571 .50055 246.236 0)" fill="#171717" stroke="#a5a5a5"/><rect width="284.992" height="49.237" rx="2" transform="matrix(.86968 -.49362 0 1 249.15 285.238)" fill="#1e1e1e" stroke="#fff"/><path d="M1.217 144.075c0-1.104.776-1.554 1.734-1.003l244.485 140.522c.957.551 1.734 1.892 1.734 2.997v45.881c0 1.104-.777 1.553-1.734 1.003L2.951 192.952c-.958-.55-1.734-1.892-1.734-2.996z" fill="#1e1e1e" stroke="#928f8f"/><path d="M248.61 154.778c.478-.275 1.255-.275 1.734 0l79.166 45.502c.478.275.478.722 0 .997l-79.214 45.53c-.479.275-1.256.275-1.734 0l-79.166-45.503c-.479-.275-.479-.721 0-.996z" fill="#303030" stroke="#fff" strokeDasharray="2 2"/><path d="M298.279 182.606c-3.215-1.858-7.099-2.783-11.644-2.791-4.537-.009-8.413.908-11.61 2.741l-4.973 2.859-3.582-2.059-.243-.141-9.509-5.459 1.749-1.008 3.223-1.85c3.181-1.833 4.78-4.042 4.78-6.633v-.042c-.017-2.617-1.633-4.842-4.855-6.7q-4.837-2.773-11.644-2.783c-4.545-.009-8.413.908-11.619 2.741-3.197 1.842-4.796 4.067-4.779 6.684q.022 3.914 4.855 6.691l3.172 1.825 1.825 1.05-9.66 5.55-.192.117-3.399 1.95-4.997-2.875c-3.223-1.858-7.107-2.783-11.644-2.792-4.545-.008-8.412.909-11.618 2.75-3.198 1.842-4.797 4.067-4.78 6.675.017 2.609 1.632 4.842 4.855 6.692a19 19 0 0 0 3.75 1.642c2.361.758 4.989 1.141 7.894 1.15 2.871.008 5.466-.359 7.801-1.092a19 19 0 0 0 3.817-1.658l4.964-2.859 7.835 4.509 5.5 3.158-4.964 2.858c-3.206 1.842-4.797 4.067-4.788 6.675 0 .575.083 1.134.242 1.667.561 1.908 2.102 3.583 4.613 5.025a19 19 0 0 0 3.156 1.442q3.741 1.325 8.412 1.35h.075c3.106 0 5.893-.417 8.371-1.275q1.73-.6 3.248-1.475c2.553-1.467 4.077-3.175 4.587-5.125.126-.484.193-.992.193-1.509v-.041c-.009-2.609-1.633-4.842-4.855-6.692l-4.998-2.875 5.374-3.092 7.877-4.525 4.998 2.875a19 19 0 0 0 3.75 1.642c2.36.758 4.997 1.142 7.902 1.15 2.863 0 5.466-.358 7.801-1.092a19 19 0 0 0 3.809-1.658q4.782-2.748 4.78-6.633v-.042c-.009-2.608-1.633-4.842-4.855-6.692m-79.698 9.4c-1.381.792-3.039 1.192-4.972 1.184q-2.913 0-4.998-1.2c-1.389-.8-2.084-1.75-2.092-2.867 0-1.117.686-2.067 2.067-2.858 1.373-.8 3.039-1.192 4.972-1.192 1.942 0 3.608.408 4.989 1.208l5.006 2.875zm24.375-23.825c0-1.116.687-2.075 2.068-2.866q2.071-1.186 4.972-1.184 2.913.013 4.997 1.2c1.39.8 2.085 1.759 2.093 2.875 0 1.109-.686 2.067-2.067 2.859l-4.964 2.858-5.006-2.875c-1.39-.8-2.084-1.758-2.093-2.867m14.239 41.292c.075.242.117.492.117.75q.012 1.673-2.059 2.858c-1.381.8-3.039 1.192-4.981 1.184h-.05c-1.917-.009-3.557-.409-4.939-1.2-1.389-.8-2.092-1.75-2.092-2.867 0-.225.025-.45.092-.658.209-.842.87-1.575 1.967-2.2l4.972-2.859 4.997 2.875c1.072.617 1.725 1.317 1.976 2.117m-7.015-12.633-.083-.05-13.251-7.617 6.228-3.575 7.023-4.033 6.897 3.958 6.437 3.7zm41.511-4.7c-1.381.791-3.039 1.191-4.981 1.183-1.942 0-3.599-.4-4.989-1.2l-5.006-2.875 4.973-2.858c1.381-.792 3.038-1.184 4.98-1.184 1.934.009 3.6.409 4.989 1.2q2.083 1.2 2.093 2.875c.008 1.109-.678 2.067-2.059 2.859" fill="#262626" stroke="#e0e0e0" strokeWidth=".417" strokeLinecap="round" strokeLinejoin="round"/><path d="M257.085 168.206c0 1.109-.687 2.067-2.068 2.859l-4.964 2.858-5.005-2.875q-2.083-1.202-2.093-2.867c0-1.116.686-2.075 2.068-2.866 1.381-.792 3.038-1.184 4.972-1.184q2.913.013 4.997 1.2c1.39.8 2.085 1.759 2.093 2.875m36.664 21.075c.009 1.109-.678 2.067-2.059 2.859s-3.038 1.191-4.98 1.183c-1.943 0-3.6-.4-4.989-1.2l-5.006-2.875 4.972-2.858q2.07-1.186 4.981-1.184c1.933 0 3.599.409 4.989 1.2q2.082 1.2 2.092 2.875m-27.053 21v16.625q.027 3.912-4.78 6.675c-3.197 1.842-7.073 2.758-11.618 2.75-4.537-.008-8.421-.942-11.644-2.792s-4.838-4.083-4.855-6.691v-16.667c0 .575.084 1.133.243 1.667.56 1.908 2.101 3.583 4.612 5.025.988.566 2.042 1.05 3.156 1.441q3.741 1.326 8.412 1.35h.076q4.656.013 8.37-1.275 1.73-.6 3.248-1.475c2.553-1.466 4.077-3.175 4.587-5.125.126-.483.193-.991.193-1.508" fill="#262626" stroke="#e0e0e0" strokeWidth=".417" strokeLinecap="round" strokeLinejoin="round"/><path d="M250.221 204.481v9.784c-1.917-.009-3.558-.409-4.939-1.2-1.389-.8-2.093-1.75-2.093-2.867 0-.225.026-.45.093-.658.209-.842.87-1.575 1.967-2.2z" fill="#262626" stroke="#e0e0e0" strokeWidth=".417" strokeLinecap="round" strokeLinejoin="round"/><path d="M257.311 210.223c0 1.117-.678 2.067-2.059 2.858-1.382.8-3.039 1.192-4.981 1.184h-.05v-9.784l4.997 2.875c1.071.617 1.724 1.317 1.976 2.117.075.242.117.492.117.75m-7.214-28.658v15.225l-13.251-7.617 6.228-3.575z" fill="#262626" stroke="#e0e0e0" strokeWidth=".417" strokeLinecap="round" strokeLinejoin="round"/><path d="m263.43 189.223-13.251 7.617-.083-.05v-15.225l6.897 3.958zm-39.878-.067-4.972 2.85c-1.381.792-3.039 1.192-4.972 1.184q-2.913 0-4.998-1.2c-1.389-.8-2.084-1.75-2.092-2.867 0-1.117.686-2.067 2.067-2.858 1.373-.8 3.039-1.192 4.972-1.192 1.942.008 3.608.408 4.989 1.208zm79.581.184v16.625q.027 3.912-4.78 6.675c-3.197 1.841-7.073 2.758-11.61 2.75q-6.818-.015-11.652-2.792l-4.997-2.875v-16.667l4.997 2.875a19.2 19.2 0 0 0 3.75 1.642c2.361.758 4.998 1.142 7.902 1.15q4.296.01 7.802-1.092a19 19 0 0 0 3.808-1.658c3.19-1.833 4.78-4.042 4.78-6.633" fill="#262626" stroke="#e0e0e0" strokeWidth=".417" strokeLinecap="round" strokeLinejoin="round"/><path d="M230.216 192.981v16.667l-4.964 2.858c-3.206 1.842-7.073 2.758-11.619 2.75-4.536-.008-8.421-.942-11.643-2.792s-4.838-4.083-4.855-6.691v-16.667c.017 2.608 1.632 4.842 4.855 6.692a19.2 19.2 0 0 0 3.75 1.641q3.538 1.138 7.893 1.15c2.872 0 5.467-.358 7.802-1.091a19 19 0 0 0 3.817-1.659zm13.209-15.25-9.66 5.55-.193.117v-15.233c.017 2.608 1.633 4.841 4.855 6.691l3.173 1.825zm23.044-9.466v15.091l-.243-.141-9.509-5.459 1.749-1.008 3.223-1.85c3.181-1.833 4.78-4.042 4.78-6.633" fill="#262626" stroke="#e0e0e0" strokeWidth=".417" strokeLinecap="round" strokeLinejoin="round"/><path d="m243.55 200.648-4.964 2.858c-3.206 1.842-4.797 4.067-4.788 6.675v1.525l-3.583-2.058v-16.667l7.835 4.508zm26.545-7.592v16.667l-3.399 1.95v-1.433c-.008-2.609-1.632-4.842-4.855-6.692l-4.997-2.875 5.374-3.092z" fill="#262626" stroke="#e0e0e0" strokeWidth=".417" strokeLinecap="round" strokeLinejoin="round"/><path d="M142.135 94.778c.479-.275 1.255-.275 1.734 0l79.166 45.502c.479.275.479.722 0 .997l-79.214 45.53c-.479.275-1.255.275-1.734 0l-79.166-45.503c-.479-.275-.479-.721 0-.996z" fill="#303030" stroke="#fff" strokeDasharray="2 2"/><path d="M140.201 156.51v.111c.008.37-.031.756-.111 1.142-.387 1.914-1.811 3.575-4.264 4.977-2.967 1.709-6.503 2.56-10.617 2.552s-7.658-.866-10.649-2.583-4.486-3.757-4.501-6.128v-15.752c.015 2.371 1.511 4.411 4.501 6.128a18.2 18.2 0 0 0 4.296 1.772c1.938.535 4.059.803 6.353.811 2.263.008 4.343-.252 6.258-.772a17.7 17.7 0 0 0 4.359-1.78c.886-.512 1.646-1.047 2.263-1.63 1.084-1.008 1.756-2.127 2.001-3.348.048-.244.087-.48.095-.708v9.939zm-1.63-26.629-.237.134.008-.268z" fill="#262626" stroke="#e0e0e0" strokeWidth=".487" strokeLinecap="round" strokeLinejoin="round"/><path d="M144.261 133.15v15.752l-4.067 2.34v-9.94l-.008-.795c0-.166-.023-.323-.063-.481-.198-1.189-.823-2.331-1.867-3.418l3.615-2.08z" fill="#262626" stroke="#e0e0e0" strokeWidth=".487" strokeLinecap="round" strokeLinejoin="round"/><path d="M195.487 128.763v.039c0 2.347-1.48 4.364-4.431 6.065a17.6 17.6 0 0 1-4.343 1.756 23 23 0 0 1-4.328.693c-2.919.197-5.68-.047-8.299-.74a17 17 0 0 1-1.1-.315l-7.634 4.387-4.027 2.316-13.323-7.664-2.397-1.37-1.353-.78-2.389 1.378-3.616 2.08q1.57 1.631 1.867 3.418c.048.157.064.315.064.48v.796a5 5 0 0 1-.095.709 6 6 0 0 1-.261.897 6 6 0 0 1-1.005 1.67 7 7 0 0 1-.736.78c-.617.583-1.376 1.118-2.263 1.63a17.7 17.7 0 0 1-4.351 1.78c-1.922.52-4.003.78-6.266.772q-3.443-.01-6.353-.811a18.2 18.2 0 0 1-4.296-1.772c-2.99-1.717-4.485-3.757-4.501-6.128-.008-2.363 1.463-4.395 4.438-6.104 2.026-1.166 4.367-1.922 7.01-2.276a22 22 0 0 1 1.661-.173 27 27 0 0 1 4.407.055c1.725.157 3.386.496 4.992 1l5.767-3.316.238-.134-.23-.134-10.245-5.891-2.397-1.378-4.193-2.41 4.193-2.41 7.112-4.088-7.112-4.088 19.786-11.373 19.921 11.444-13.71 7.876-6.084 3.497-6.211-3.568-.901-.519-5.641 3.252.886.52 4.675 2.678 7.192 4.135 8.046 4.631 7.634 4.387 4.067-2.331 1.946-1.119c-1.266-1.323-1.914-2.701-1.946-4.158v-.071c-.016-.386.024-.78.103-1.174q.594-2.87 4.264-4.985 4.452-2.564 10.625-2.552c4.106 0 7.659.874 10.657 2.591 2.975 1.717 4.478 3.757 4.486 6.12" fill="#262626" stroke="#e0e0e0" strokeWidth=".487" strokeLinecap="round" strokeLinejoin="round"/><path d="M195.494 128.802v15.713q.022 3.543-4.43 6.104c-2.452 1.41-5.34 2.221-8.671 2.45q-4.996.34-9.399-1.056v-15.752q.544.175 1.1.315c2.619.693 5.38.937 8.299.741a23 23 0 0 0 4.328-.694c1.574-.409 3.022-1 4.343-1.756 2.951-1.701 4.43-3.717 4.43-6.065m-28.196 4.19-1.946 1.119v-5.277c.031 1.457.68 2.835 1.946 4.158m-1.89-23.439v15.753l-11.749 6.75-8.046-4.632v-6.497l6.084-3.497zm-26.908 7.286-.015 1.047-.064 5.403-4.675-2.678-.894-.519z" fill="#262626" stroke="#e0e0e0" strokeWidth=".487" strokeLinecap="round" strokeLinejoin="round"/><path d="M145.613 120.926v6.498l-7.191-4.135.063-5.403.016-1.047.902.519zm-7.27 8.821v.268l-5.775 3.316a24 24 0 0 0-4.992-1 27 27 0 0 0-4.407-.055q-.854.056-1.661.173v-12.381l4.193 2.41 2.397 1.378zm-5.531-16.177-7.113 4.088v-8.176zm40.183 22.691v15.752l-11.661 6.703v-15.752l4.027-2.316zm-11.662 6.703v15.752l-17.073-9.814V133.15l1.353.78 2.397 1.37z" fill="#262626" stroke="#e0e0e0" strokeWidth=".487" strokeLinecap="round" strokeLinejoin="round"/><path d="M352.074 95.778c.479-.275 1.256-.275 1.734 0l79.166 45.502c.479.275.479.722 0 .997l-79.214 45.53c-.478.275-1.255.275-1.734 0l-79.166-45.503c-.478-.275-.478-.721 0-.996z" fill="#303030" stroke="#fff" strokeDasharray="2 2"/><path d="M352.503 140.154v17.017l-21.376 12.287V152.44l5.342-3.071z" fill="#262626" stroke="#e0e0e0" strokeWidth=".482" strokeLinecap="round" strokeLinejoin="round"/><path d="M331.128 152.44v17.018l-12.649-7.275v-17.018l3.35 1.923zm29.306 4.561v17.018l-7.932-16.848v-17.017zm38.666-14.95v17.018l-21.469-3.344v-1.336l-7.838-16.898 13.342 2.076z" fill="#262626" stroke="#e0e0e0" strokeWidth=".482" strokeLinecap="round" strokeLinejoin="round"/><path d="M377.632 154.389v17.018l-17.196 2.612v-17.018l9.82-1.489 3.026-.459z" fill="#262626" stroke="#e0e0e0" strokeWidth=".482" strokeLinecap="round" strokeLinejoin="round"/><path d="m403.64 132.164-4.538 9.887-15.966-2.484-13.342-2.076 7.838 16.898-4.35.664-3.026.459-9.82 1.489-7.932-16.847-16.034 9.215-5.342 3.071-9.299-5.352-3.351-1.923 12.616-7.249 8.76-5.037-29.307-4.561 4.538-9.879 21.47 3.293 4.539.698 3.393.519-.453-.961-7.479-15.886 17.197-2.612 7.931 16.847 21.462-12.338 12.658 7.267-21.47 12.346 3.385.527 14.897 2.315 3.188.493z" fill="#262626" stroke="#e0e0e0" strokeWidth=".482" strokeLinecap="round" strokeLinejoin="round"/><path d="M395.802 115.266v15.681l-3.188-.493-14.897-2.314-3.385-.528zm-51.316 7.683-3.393-.519-4.538-.698v-15.63l7.478 15.886zm-4.632 9.93-8.76 5.037-12.616 7.249v1.404l-7.931-1.233v-17.018zm63.786-.715v17.018l-4.538 9.887v-17.018z" fill="#262626" stroke="#e0e0e0" strokeWidth=".482" strokeLinecap="round" strokeLinejoin="round"/><path d="M246.602 35.778c.479-.275 1.255-.275 1.734 0l79.166 45.502c.479.275.479.721 0 .997l-79.214 45.53c-.479.275-1.255.275-1.734 0l-79.166-45.503c-.479-.275-.479-.721 0-.996z" fill="#303030" stroke="#fff" strokeDasharray="2 2"/><path d="M267.011 76.82v16.2l-5.581 3.208v-16.2zm-35.62 14.013-2.221 1.28v-6.367a6.8 6.8 0 0 0 .26 1.71q.499 1.75 1.961 3.377" fill="#262626" stroke="#e0e0e0" strokeWidth=".55" strokeLinecap="round" strokeLinejoin="round"/><path d="M233.401 73.54v5.03s-.032.024-.049.032c-.39.283-.748.567-1.074.867-1.716 1.498-2.717 3.175-3.018 5.006a9 9 0 0 0-.09 1.044v1.782l-1.383-.793v-16.2l5.565 3.207zm6.224-13.268v5.467c-.692.154-1.375.332-2.051.519a41 41 0 0 0-3.799 1.239 4 4 0 0 0-.423.162v-3.775l3.197-1.838z" fill="#262626" stroke="#e0e0e0" strokeWidth=".55" strokeLinecap="round" strokeLinejoin="round"/><path d="m278.176 70.397-5.582 3.216c-3.393-1.953-7.201-3.305-11.415-4.042-2.579-.47-5.321-.697-8.21-.705-4.898 0-9.34.632-13.343 1.944a.2.2 0 0 0-.057.016h-.008a32 32 0 0 0-6.16 2.714l-.049-.025-5.565-3.207a41 41 0 0 1 5.565-2.649c.139-.065.277-.113.424-.162a41 41 0 0 1 3.799-1.24 42 42 0 0 1 2.051-.518c3.938-.915 8.177-1.385 12.725-1.409q.303-.01.594-.008c2.864.008 5.606.178 8.234.534 6.362.835 12.025 2.682 16.997 5.54m-27.494 27.306c0 .94-.578 1.75-1.742 2.414l-3.775 2.17-3.197 1.839-4.923-2.835-6.493-3.726-1.383-.794-4.052-2.332 4.052-2.325 2.221-1.28c-.976-1.085-1.627-2.211-1.961-3.378a6.8 6.8 0 0 1-.26-1.709v-.227a9 9 0 0 1 .09-1.044c.301-1.831 1.301-3.508 3.018-5.006.325-.3.684-.584 1.074-.867.016-.008.033-.024.049-.032.049-.04.106-.081.163-.122l1.318.753 4.133 2.374.171.097-.171.146a9 9 0 0 0-.391.364q-1.842 1.845-1.586 3.993a4.1 4.1 0 0 0 .521 1.564c.333.607.813 1.166 1.456 1.693.057.048.114.097.171.137q.572.462 1.302.875l1.741 1.005 2.408 1.377.529.307 2.905 1.669.846.486c1.172.672 1.757 1.482 1.766 2.414m10.301-9.632v.017c0 .834-.342 1.596-1.033 2.276-.334.324-.757.64-1.253.924-1.538.882-3.401 1.32-5.598 1.312q-3.285 0-5.606-1.337a6.3 6.3 0 0 1-1.302-.964c-.683-.672-1.017-1.425-1.025-2.26-.008-.963.448-1.83 1.359-2.575q.4-.329.936-.632c1.537-.883 3.4-1.329 5.589-1.32 2.197 0 4.06.445 5.606 1.336.366.21.676.43.96.664h.017c.895.737 1.342 1.588 1.35 2.552zm.196-29.045c-2.628 1.23-5.566 2.016-8.812 2.349-.439.04-.887.08-1.343.105l-.333.024c-3.857.203-7.494-.186-10.903-1.182l-.163-.05-3.075 1.775-3.198 1.839-16.85-9.688 6.973-4.01c1.163-.664 2.563-1.004 4.19-.996q2.451.002 4.206 1.013l4.679 2.689 3.751 2.154c2.107 1.207 4.58 1.872 7.428 1.985q2.429.098 4.638-.316a17.7 17.7 0 0 0 3.198-.915z" fill="#262626" stroke="#e0e0e0" strokeWidth=".55" strokeLinecap="round" strokeLinejoin="round"/><path d="M252.366 47.83v.016c0 1.248-.765 2.317-2.294 3.192-1.53.883-3.393 1.32-5.59 1.32-2.189 0-4.06-.453-5.606-1.336-1.546-.891-2.319-1.96-2.327-3.224s.757-2.333 2.294-3.216q2.295-1.324 5.59-1.312c2.197 0 4.06.445 5.606 1.336q2.317 1.326 2.327 3.224m-19.014 16.055v3.774a41 41 0 0 0-5.565 2.649v6.577l-11.285-6.488v-16.2zm27.826-4.861v5.832c-2.628-.356-5.37-.526-8.234-.534-.195 0-.39 0-.594.008-4.548.024-8.787.494-12.725 1.41v-5.468l.163.048c3.409.997 7.046 1.386 10.903 1.183l.333-.024c.456-.025.903-.065 1.343-.106q4.869-.5 8.811-2.349" fill="#262626" stroke="#e0e0e0" strokeWidth=".55" strokeLinecap="round" strokeLinejoin="round"/><path d="M252.366 47.846v8.87q-2.21.412-4.638.316c-2.848-.114-5.321-.778-7.428-1.985l-3.751-2.154v-5.095c.008 1.263.781 2.332 2.327 3.224q2.32 1.323 5.606 1.336c2.197 0 4.06-.437 5.59-1.32 1.529-.875 2.294-1.944 2.294-3.192m14.645 28.974-5.582 3.208c-2.343-1.345-5.142-2.025-8.405-2.034-3.27 0-6.069.665-8.388 2.001l-5.574-3.2-.048-.032.61-.34c3.743-1.993 8.201-2.98 13.368-2.973 2.115 0 4.109.179 5.98.51h.008c.757.138 1.489.3 2.197.495a23.7 23.7 0 0 1 5.834 2.365" fill="#262626" stroke="#e0e0e0" strokeWidth=".55" strokeLinecap="round" strokeLinejoin="round"/><path d="M244.636 79.995v12.83l-2.409-1.376-1.741-1.005a9.6 9.6 0 0 1-1.302-.875v-7.897l-.17-.097v-4.812l.048.033zm33.539-9.598v16.2l-5.581 3.216v-16.2zm-16.745 9.631v16.2c-.146-.081-.293-.17-.447-.235V88.07c0-.964-.456-1.814-1.351-2.552h-.016a6.3 6.3 0 0 0-.96-.672c-1.546-.89-3.41-1.336-5.606-1.336-2.189-.008-4.052.437-5.59 1.32a7 7 0 0 0-.936.632c-.911.745-1.367 1.612-1.358 2.576v5.094l-.529-.307v-12.83c2.319-1.337 5.117-2.001 8.388-2.001 3.263.008 6.062.688 8.405 2.033" fill="#262626" stroke="#e0e0e0" strokeWidth=".55" strokeLinecap="round" strokeLinejoin="round"/><path d="M239.185 81.672v7.898a3 3 0 0 1-.171-.138c-.643-.527-1.123-1.086-1.456-1.693a4.1 4.1 0 0 1-.521-1.563q-.256-2.15 1.587-3.994a9 9 0 0 1 .561-.51m2.783 22.453v16.2l-16.851-9.687v-16.2l4.052 2.332 1.383.794 6.493 3.726zm19.015-16.038v16.184c.008 1.255-.757 2.333-2.286 3.215-1.538.883-3.401 1.321-5.598 1.313q-1.281.002-2.417-.203V97.702c-.008-.932-.593-1.742-1.765-2.414l-.846-.486-2.905-1.669V88.04q0 1.25 1.025 2.26c.342.34.781.663 1.302.963q2.32 1.337 5.606 1.337c2.197 0 4.06-.43 5.598-1.312.496-.284.919-.6 1.253-.924.691-.68 1.033-1.442 1.033-2.276" fill="#262626" stroke="#e0e0e0" strokeWidth=".55" strokeLinecap="round" strokeLinejoin="round"/><path d="M250.683 97.702v16.2c0 .94-.578 1.75-1.742 2.414l-6.972 4.009v-16.2l3.197-1.838 3.775-2.171c1.164-.665 1.742-1.475 1.742-2.414m21.91-24.089v16.2a33 33 0 0 0-5.581-2.536V76.82a23.7 23.7 0 0 0-5.834-2.365 26 26 0 0 0-2.197-.494h-.008a34 34 0 0 0-5.98-.51c-5.167-.009-9.626.98-13.368 2.972l-.611.34v4.812l-4.133-2.374-1.318-.753a3 3 0 0 0-.163.122v-5.03a32 32 0 0 1 6.16-2.714h.008l.057.033v-.05c4.003-1.311 8.445-1.951 13.343-1.943 2.889.008 5.631.235 8.21.705 4.214.737 8.022 2.09 11.415 4.041" fill="#262626" stroke="#e0e0e0" strokeWidth=".55" strokeLinecap="round" strokeLinejoin="round"/></svg>);
}



================================================
FILE: apps/web/components/landing-page/playground/DesktopPlayground.tsx
================================================
'use client';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { SectionSeparators } from '../hero/SectionSeparators';

const PlaygroundSection = dynamic(
    () => import('./PlaygroundSection').then(m => ({ default: m.PlaygroundSection })),
    { ssr: false }
);

export function DesktopPlayground() {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia('(min-width: 768px)');
        setIsDesktop(mq.matches);
        const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
        mq.addEventListener('change', handler);
        return () => mq.removeEventListener('change', handler);
    }, []);

    if (!isDesktop) return null;

    return (
        <>
            <SectionSeparators />
            <PlaygroundSection />
        </>
    );
}



================================================
FILE: apps/web/components/landing-page/playground/index.ts
================================================
export { PlaygroundSection } from "./PlaygroundSection";
export { PlaygroundNode } from "./PlaygroundNode";
export { PlaygroundEdge } from "./PlaygroundEdge";
export type { PlaygroundNodeData } from "./PlaygroundNode";



================================================
FILE: apps/web/components/landing-page/playground/PlaygroundEdge.tsx
================================================
"use client";
import React, { memo } from "react";
import { EdgeLabelRenderer, getSmoothStepPath, type EdgeProps, } from "@xyflow/react";
function PlaygroundEdgeComponent({ id, sourceX, sourceY, targetX, targetY, }: EdgeProps) {
    const [edgePath] = getSmoothStepPath({
        sourceX,
        sourceY,
        targetX,
        targetY,
    });
    return (<>
      <g style={{ zIndex: 1 }}>
        <EdgeLabelRenderer>
          <style>{`
            @keyframes landing-edge-dash-${id} {
              from {
                stroke-dashoffset: 0;
              }
              to {
                stroke-dashoffset: -12;
              }
            }
          `}</style>
        </EdgeLabelRenderer>

        <path id={id} d={edgePath} fill="none" className="react-flow__edge-path" style={{
            stroke: "#555555",
            strokeWidth: 2,
            strokeDasharray: "6, 6",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            pointerEvents: "none",
            animation: `landing-edge-dash-${id} 1s linear infinite`,
            willChange: "stroke-dashoffset",
        }}/>
      </g>
    </>);
}
export const PlaygroundEdge = memo(PlaygroundEdgeComponent);



================================================
FILE: apps/web/components/landing-page/playground/PlaygroundNode.tsx
================================================
"use client";
import React, { memo } from "react";
import { Handle, Position } from "@xyflow/react";
export type PlaygroundNodeData = {
    icon: React.ReactNode;
    color: string;
    name: string;
    fields: Array<{
        label: string;
        value: string;
    }>;
    hideTargetHandle?: boolean;
    hideSourceHandle?: boolean;
};
function PlaygroundNodeComponent({ data, }: {
    data: PlaygroundNodeData;
}) {
    const { icon, color, name, fields, hideTargetHandle, hideSourceHandle } = data;
    return (<div className="relative cursor-grab active:cursor-grabbing">
      
      {!hideTargetHandle && (<Handle type="target" position={Position.Left} className="nodrag nopan" style={{
                width: "7px",
                height: "20px",
                background: "#555555",
                border: "none",
                borderRadius: "2px 0 0 2px",
                top: "20px",
                left: "-7px",
                transform: "translateY(-50%)",
                zIndex: 10,
            }}/>)}

      
      {!hideSourceHandle && (<Handle type="source" position={Position.Right} className="nodrag nopan" style={{
                width: "7px",
                height: "20px",
                background: "#555555",
                border: "none",
                borderRadius: "0 2px 2px 0",
                top: "20px",
                right: "-7px",
                transform: "translateY(-50%)",
                zIndex: 10,
            }}/>)}

      <div className="landing-node-animated" style={{
            opacity: 1,
            transform: "translateY(0px) scale(1)",
            transition: "opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
            willChange: "transform, opacity",
        }}>
        <div className="z-10 flex w-[250px] flex-col rounded-[8px] border border-[#333333] bg-[#1E1E1E]">
          
          <div className="flex items-center justify-between p-[8px] border-[#333333] border-b">
            <div className="flex min-w-0 flex-1 items-center gap-[10px]">
              <div className="flex h-[24px] w-[24px] flex-shrink-0 items-center justify-center rounded-[6px]" style={{ background: color }}>
                <div className="text-white">{icon}</div>
              </div>
              <span className="truncate font-medium text-[#E5E5E5] text-[16px]" title={name}>
                {name}
              </span>
            </div>
          </div>

          
          <div className="flex flex-col gap-[8px] p-[8px]">
            {fields?.map((field, index) => (<div key={index} className="flex items-center gap-[8px]">
                <span className="min-w-0 truncate text-[#777777] text-[14px] capitalize" title={field.label}>
                  {field.label}
                </span>
                <span className="flex-1 truncate text-right text-[#E5E5E5] text-[14px]" title={field.value}>
                  {field.value}
                </span>
              </div>))}
          </div>
        </div>
      </div>
    </div>);
}
export const PlaygroundNode = memo(PlaygroundNodeComponent);



================================================
FILE: apps/web/components/landing-page/playground/PlaygroundNodeConfigDialog.tsx
================================================
"use client";
import { useEffect, useMemo, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
type PlaygroundConfigNodeType = "manualTrigger" | "triggerNode" | "openaiNode" | "conditionNode" | "slackNode" | "logNode";
interface PlaygroundNodeConfigDialogProps {
    open: boolean;
    nodeId: string | null;
    nodeType: string | null;
    nodeData: Record<string, unknown> | null;
    onOpenChange: (open: boolean) => void;
    onSave: (nodeId: string, data: Record<string, unknown>) => void;
}
const SUPPORTED_NODE_TYPES = new Set<PlaygroundConfigNodeType>([
    "manualTrigger",
    "triggerNode",
    "openaiNode",
    "conditionNode",
    "slackNode",
    "logNode",
]);
function getDefaultLabel(nodeType: string | null): string {
    switch (nodeType) {
        case "manualTrigger":
        case "triggerNode":
            return "Manual Trigger";
        case "openaiNode":
            return "AI Summary";
        case "conditionNode":
            return "Route by Risk";
        case "slackNode":
            return "Alert Team (Slack)";
        case "logNode":
            return "Archive Event";
        default:
            return "Node";
    }
}
function getDialogMeta(nodeType: string | null): {
    title: string;
    description: string;
} {
    switch (nodeType) {
        case "manualTrigger":
        case "triggerNode":
            return {
                title: "Manual Trigger Settings",
                description: "Customize the trigger label used in the playground demo.",
            };
        case "openaiNode":
            return {
                title: "AI Node Settings",
                description: "Adjust model and prompt for demo execution.",
            };
        case "conditionNode":
            return {
                title: "Condition Settings",
                description: "Choose which branch will run in demo workflow execution.",
            };
        case "slackNode":
            return {
                title: "Slack Node Settings",
                description: "Edit outgoing Slack message content for demo mode.",
            };
        case "logNode":
            return {
                title: "Log Node Settings",
                description: "Set log level and message for demo mode.",
            };
        default:
            return {
                title: "Node Settings",
                description: "This node does not have playground settings.",
            };
    }
}
export function PlaygroundNodeConfigDialog({ open, nodeId, nodeType, nodeData, onOpenChange, onSave, }: PlaygroundNodeConfigDialogProps) {
    const [label, setLabel] = useState("");
    const [model, setModel] = useState("");
    const [prompt, setPrompt] = useState("");
    const [demoRoute, setDemoRoute] = useState<"alert" | "log">("alert");
    const [subtitle, setSubtitle] = useState("");
    const [message, setMessage] = useState("");
    const [logLevel, setLogLevel] = useState<"debug" | "info" | "warn" | "error">("info");
    const meta = useMemo(() => getDialogMeta(nodeType), [nodeType]);
    const isSupportedType = nodeType ? SUPPORTED_NODE_TYPES.has(nodeType as PlaygroundConfigNodeType) : false;
    useEffect(() => {
        if (!open) {
            return;
        }
        const nextData = nodeData ?? {};
        const nextLabel = typeof nextData.label === "string" && nextData.label.trim().length > 0
            ? nextData.label
            : getDefaultLabel(nodeType);
        setLabel(nextLabel);
        setModel(typeof nextData.model === "string" ? nextData.model : "gpt-5-mini");
        setPrompt(typeof nextData.prompt === "string"
            ? nextData.prompt
            : "Summarize updates and classify risk level.");
        setDemoRoute(nextData.demoRoute === "log" ? "log" : "alert");
        setSubtitle(typeof nextData.subtitle === "string"
            ? nextData.subtitle
            : "Send message");
        setMessage(typeof nextData.message === "string"
            ? nextData.message
            : "High-risk update detected");
        setLogLevel(nextData.level === "debug" ||
            nextData.level === "warn" ||
            nextData.level === "error"
            ? nextData.level
            : "info");
    }, [nodeData, nodeType, open]);
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (!nodeId || !nodeType) {
            return;
        }
        const trimmedLabel = label.trim() || getDefaultLabel(nodeType);
        const payload: Record<string, unknown> = {
            label: trimmedLabel,
            isConfigured: true,
        };
        if (nodeType === "openaiNode") {
            payload.model = model.trim() || "gpt-5-mini";
            payload.prompt = prompt.trim() || "Summarize updates and classify risk level.";
            payload.credentialId = "landing-demo-openai";
        }
        else if (nodeType === "conditionNode") {
            payload.routes = ["alert", "log"];
            payload.demoRoute = demoRoute;
        }
        else if (nodeType === "slackNode") {
            payload.subtitle = subtitle.trim() || "Send message";
            payload.message = message.trim() || "High-risk update detected";
            payload.credentialId = "landing-demo-slack";
        }
        else if (nodeType === "logNode") {
            payload.level = logLevel;
            payload.message = message.trim() || "Low-risk update logged";
        }
        onSave(nodeId, payload);
        onOpenChange(false);
    };
    return (<Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>{meta.title}</DialogTitle>
          <DialogDescription>{meta.description}</DialogDescription>
        </DialogHeader>

        {!isSupportedType ? (<div className="rounded-md border border-[#333] bg-[#151515] px-4 py-3 text-sm text-white/60">
            Playground settings are not available for this node type.
          </div>) : (<form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label className="text-white/80">Label</Label>
              <Input value={label} onChange={(event) => setLabel(event.target.value)} className="bg-[#2D2D2E] border-[#444] text-white placeholder:text-white/30" placeholder={getDefaultLabel(nodeType)}/>
            </div>

            {nodeType === "openaiNode" && (<>
                <div className="space-y-2">
                  <Label className="text-white/80">Model</Label>
                  <Input value={model} onChange={(event) => setModel(event.target.value)} className="bg-[#2D2D2E] border-[#444] text-white placeholder:text-white/30" placeholder="gpt-5-mini"/>
                </div>
                <div className="space-y-2">
                  <Label className="text-white/80">Prompt</Label>
                  <textarea value={prompt} onChange={(event) => setPrompt(event.target.value)} rows={3} className="w-full rounded-md border border-[#444] bg-[#2D2D2E] px-3 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-ring resize-none" placeholder="Summarize updates and classify risk level."/>
                </div>
              </>)}

            {nodeType === "conditionNode" && (<div className="space-y-2">
                <Label className="text-white/80">Demo Route</Label>
                <select value={demoRoute} onChange={(event) => setDemoRoute(event.target.value === "log" ? "log" : "alert")} className="w-full h-9 rounded-md border border-[#444] bg-[#2D2D2E] px-3 text-sm text-white focus:outline-none">
                  <option value="alert">Alert</option>
                  <option value="log">Log</option>
                </select>
              </div>)}

            {nodeType === "slackNode" && (<>
                <div className="space-y-2">
                  <Label className="text-white/80">Subtitle</Label>
                  <Input value={subtitle} onChange={(event) => setSubtitle(event.target.value)} className="bg-[#2D2D2E] border-[#444] text-white placeholder:text-white/30" placeholder="Send message"/>
                </div>
                <div className="space-y-2">
                  <Label className="text-white/80">Message</Label>
                  <textarea value={message} onChange={(event) => setMessage(event.target.value)} rows={3} className="w-full rounded-md border border-[#444] bg-[#2D2D2E] px-3 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-ring resize-none" placeholder="High-risk update detected"/>
                </div>
              </>)}

            {nodeType === "logNode" && (<>
                <div className="space-y-2">
                  <Label className="text-white/80">Log Level</Label>
                  <select value={logLevel} onChange={(event) => setLogLevel(event.target.value === "debug" ||
                    event.target.value === "warn" ||
                    event.target.value === "error"
                    ? event.target.value
                    : "info")} className="w-full h-9 rounded-md border border-[#444] bg-[#2D2D2E] px-3 text-sm text-white focus:outline-none">
                    <option value="debug">Debug</option>
                    <option value="info">Info</option>
                    <option value="warn">Warn</option>
                    <option value="error">Error</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label className="text-white/80">Message</Label>
                  <textarea value={message} onChange={(event) => setMessage(event.target.value)} rows={3} className="w-full rounded-md border border-[#444] bg-[#2D2D2E] px-3 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-ring resize-none" placeholder="Low-risk update logged"/>
                </div>
              </>)}

            <DialogFooter>
              <Button type="button" variant="outline" className="border-[#444] bg-[#2D2D2E] text-white hover:bg-[#3A3A3A]" onClick={() => onOpenChange(false)}>
                Cancel
              </Button>
              <Button type="submit" className="bg-[#F04D26] hover:bg-[#e04420] text-white">
                Save
              </Button>
            </DialogFooter>
          </form>)}
      </DialogContent>
    </Dialog>);
}



================================================
FILE: apps/web/components/landing-page/playground/PlaygroundSection.tsx
================================================
"use client";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ReactFlow, useNodesState, useEdgesState, addEdge, useReactFlow, type Node, type Edge, type OnConnect, MiniMap, Panel, Background, BackgroundVariant, } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { EditorialLines } from "../hero/EditorialLines";
import { nodeTypes } from "@/lib/reactflow/nodeTypes";
import { edgeTypes } from "@/lib/reactflow/edgeTypes";
import { EditorProvider } from "@/contexts/EditorContext";
import { PlaygroundNodeConfigDialog } from "./PlaygroundNodeConfigDialog";
const DEMO_STEP_DURATION_MS = 1350;
const DEMO_NODE_RUNNING_MS = 1100;
function createPlaygroundNodes(): Node[] {
    return [
        {
            id: "n1",
            type: "manualTrigger",
            position: { x: 140, y: 260 },
            data: {
                label: "Manual Trigger",
                isConfigured: true,
            },
        },
        {
            id: "n2",
            type: "openaiNode",
            position: { x: 400, y: 260 },
            data: {
                label: "AI Summary",
                credentialId: "landing-demo-openai",
                model: "gpt-5-mini",
                prompt: "Summarize updates and classify risk level.",
            },
        },
        {
            id: "n3",
            type: "conditionNode",
            position: { x: 660, y: 260 },
            data: {
                label: "Route by Risk",
                isConfigured: true,
                routes: ["alert", "log"],
                demoRoute: "alert",
            },
        },
        {
            id: "n4",
            type: "slackNode",
            position: { x: 920, y: 170 },
            data: {
                label: "Alert Team (Slack)",
                subtitle: "Send message",
                credentialId: "landing-demo-slack",
                message: "High-risk update detected",
            },
        },
        {
            id: "n5",
            type: "logNode",
            position: { x: 920, y: 350 },
            data: {
                label: "Archive Event",
                level: "info",
                message: "Low-risk update logged",
            },
        },
    ];
}
function createPlaygroundEdges(): Edge[] {
    return [
        { id: "e1-2", source: "n1", target: "n2" },
        { id: "e2-3", source: "n2", target: "n3" },
        { id: "e3-4", source: "n3", sourceHandle: "alert", target: "n4", data: { route: "alert" } },
        { id: "e3-5", source: "n3", sourceHandle: "log", target: "n5", data: { route: "log" } },
    ];
}
function isNodeActive(node: Node | undefined): boolean {
    const nodeData = (node?.data ?? {}) as Record<string, unknown>;
    return nodeData.isActive !== false;
}
function ResetButton({ onReset }: {
    onReset: () => void;
}) {
    const { fitView } = useReactFlow();
    const handleClick = () => {
        onReset();
        setTimeout(() => {
            fitView({ duration: 250, padding: 0.25 });
        }, 40);
    };
    return (<button onClick={handleClick} className="px-4 py-2 bg-[#1E1E1E] hover:bg-[#2A2A2A] border border-[#333333] hover:border-[#F04D26] text-[#E5E5E5] rounded-lg text-sm font-medium transition-all duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)]">
      Reset Playground
    </button>);
}
function ExecuteWorkflowButton({ onExecute, isExecuting, disabled, }: {
    onExecute: () => void;
    isExecuting: boolean;
    disabled: boolean;
}) {
    return (<button onClick={onExecute} disabled={disabled} className="flex items-center gap-2 px-4 py-2 text-white text-sm font-medium rounded-lg transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed bg-orange-500 hover:bg-orange-600">
      {isExecuting ? (<>
          <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>Executing workflow...</span>
        </>) : (<>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15px" height="15px" viewBox="0 0 18 18">
            <path fillRule="evenodd" clipRule="evenodd" d="M13.4868 7.0974C13.4955 6.98275 13.5 6.8669 13.5 6.75C13.5 4.26472 11.4853 2.25 9 2.25C6.51472 2.25 4.5 4.26472 4.5 6.75C4.5 6.86689 4.50446 6.98275 4.51321 7.0974C2.89021 7.777 1.75 9.38035 1.75 11.25C1.75 13.7353 3.76472 15.75 6.25 15.75C7.28562 15.75 8.23953 15.4002 9 14.8122C9.76047 15.4002 10.7144 15.75 11.75 15.75C14.2353 15.75 16.25 13.7353 16.25 11.25C16.25 9.38035 15.1098 7.77701 13.4868 7.0974Z" fill="rgba(255, 255, 255, 1)" fillOpacity="0.3" data-color="color-2"></path>
            <path d="M10.496 9.757C10.66 10.224 10.75 10.727 10.75 11.25C10.75 13.735 8.735 15.75 6.25 15.75C3.765 15.75 1.75 13.735 1.75 11.25C1.75 10.339 2.021 9.491 2.486 8.783" stroke="rgba(255, 255, 255, 1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"></path>
            <path d="M11.511 15.745C12.042 15.773 12.587 15.707 13.123 15.536C15.49 14.778 16.794 12.245 16.036 9.878C15.278 7.511 12.745 6.207 10.378 6.965C9.50999 7.243 8.78599 7.759 8.25299 8.418" stroke="rgba(255, 255, 255, 1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"></path>
            <path d="M8.156 11.171C7.695 11.083 7.239 10.92 6.806 10.679C4.636 9.468 3.859 6.727 5.07 4.556C6.281 2.385 9.022 1.609 11.193 2.82C11.904 3.217 12.465 3.778 12.856 4.429" stroke="rgba(255, 255, 255, 1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"></path>
          </svg>
          <span>Execute workflow</span>
        </>)}
    </button>);
}
export function PlaygroundSection() {
    const [nodes, setNodes, onNodesChange] = useNodesState<Node>(createPlaygroundNodes());
    const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>(createPlaygroundEdges());
    const [nodeStatuses, setNodeStatuses] = useState<Record<string, string>>({});
    const [isExecuting, setIsExecuting] = useState(false);
    const [configTarget, setConfigTarget] = useState<{
        nodeId: string;
        nodeType: string;
    } | null>(null);
    const executionTimersRef = useRef<Array<ReturnType<typeof setTimeout>>>([]);
    const onConnect: OnConnect = useCallback((connection) => {
        setEdges((currentEdges) => addEdge(connection, currentEdges));
    }, [setEdges]);
    const clearExecutionTimers = useCallback(() => {
        executionTimersRef.current.forEach((timer) => clearTimeout(timer));
        executionTimersRef.current = [];
    }, []);
    useEffect(() => {
        return () => {
            clearExecutionTimers();
        };
    }, [clearExecutionTimers]);
    const updateNodeData = useCallback((nodeId: string, data: Record<string, unknown>) => {
        setNodes((currentNodes) => currentNodes.map((node) => node.id === nodeId
            ? {
                ...node,
                data: {
                    ...(node.data as Record<string, unknown>),
                    ...data,
                },
            }
            : node));
    }, [setNodes]);
    const deleteNode = useCallback((nodeId: string) => {
        setNodes((currentNodes) => currentNodes.filter((node) => node.id !== nodeId));
        setEdges((currentEdges) => currentEdges.filter((edge) => edge.source !== nodeId && edge.target !== nodeId));
        setNodeStatuses((currentStatuses) => {
            const nextStatuses = { ...currentStatuses };
            delete nextStatuses[nodeId];
            return nextStatuses;
        });
        setConfigTarget((currentTarget) => currentTarget?.nodeId === nodeId ? null : currentTarget);
    }, [setEdges, setNodes]);
    const getNodeData = useCallback((nodeId: string) => nodes.find((node) => node.id === nodeId)?.data ?? {}, [nodes]);
    const handleOpenNodeConfig = useCallback((nodeId: string, nodeType: string) => {
        setConfigTarget({ nodeId, nodeType });
    }, []);
    const handleCloseNodeConfig = useCallback((open: boolean) => {
        if (!open) {
            setConfigTarget(null);
        }
    }, []);
    const activeConfigData = useMemo(() => {
        if (!configTarget) {
            return null;
        }
        return (getNodeData(configTarget.nodeId) as Record<string, unknown>) ?? null;
    }, [configTarget, getNodeData]);
    const isTriggerActive = useMemo(() => isNodeActive(nodes.find((node) => node.id === "n1")), [nodes]);
    const handleExecuteNodeDemo = useCallback((nodeId: string) => {
        if (isExecuting) {
            return;
        }
        const targetNode = nodes.find((node) => node.id === nodeId);
        if (!targetNode || !isNodeActive(targetNode)) {
            return;
        }
        clearExecutionTimers();
        setNodeStatuses((currentStatuses) => ({
            ...currentStatuses,
            [nodeId]: "Running",
        }));
        const successTimer = setTimeout(() => {
            setNodeStatuses((currentStatuses) => ({
                ...currentStatuses,
                [nodeId]: "Success",
            }));
        }, DEMO_NODE_RUNNING_MS);
        executionTimersRef.current.push(successTimer);
    }, [clearExecutionTimers, isExecuting, nodes]);
    const handleExecuteWorkflowDemo = useCallback(() => {
        if (isExecuting) {
            return;
        }
        const triggerNode = nodes.find((node) => node.id === "n1");
        if (!triggerNode || !isNodeActive(triggerNode)) {
            return;
        }
        clearExecutionTimers();
        setNodeStatuses({});
        setIsExecuting(true);
        const nodeById = new Map(nodes.map((node) => [node.id, node]));
        const conditionNodeData = (nodeById.get("n3")?.data ?? {}) as Record<string, unknown>;
        const preferredConditionRoute = conditionNodeData.demoRoute === "log" ? "log" : "alert";
        const executionOrder: string[] = [];
        const visited = new Set<string>();
        const queue: string[] = ["n1"];
        while (queue.length > 0) {
            const nodeId = queue.shift();
            if (!nodeId || visited.has(nodeId) || !nodeById.has(nodeId)) {
                continue;
            }
            visited.add(nodeId);
            executionOrder.push(nodeId);
            const currentNode = nodeById.get(nodeId);
            if (!currentNode) {
                continue;
            }
            const outgoingEdges = edges.filter((edge) => edge.source === nodeId && nodeById.has(edge.target));
            if (outgoingEdges.length === 0) {
                continue;
            }
            if (currentNode.type === "conditionNode") {
                const prioritizedEdges = [...outgoingEdges].sort((edgeA, edgeB) => {
                    const rank = (edge: Edge) => edge.sourceHandle === preferredConditionRoute ? 0 : 1;
                    return rank(edgeA) - rank(edgeB);
                });
                for (const edge of prioritizedEdges) {
                    if (!visited.has(edge.target) && !queue.includes(edge.target)) {
                        queue.push(edge.target);
                    }
                }
                continue;
            }
            for (const edge of outgoingEdges) {
                if (!visited.has(edge.target) && !queue.includes(edge.target)) {
                    queue.push(edge.target);
                }
            }
        }
        if (executionOrder.length === 0) {
            setIsExecuting(false);
            return;
        }
        let stepIndex = 0;
        for (const nodeId of executionOrder) {
            const node = nodeById.get(nodeId);
            if (!node) {
                continue;
            }
            const stepStartAt = stepIndex * DEMO_STEP_DURATION_MS;
            if (!isNodeActive(node)) {
                const skipTimer = setTimeout(() => {
                    setNodeStatuses((currentStatuses) => ({
                        ...currentStatuses,
                        [nodeId]: "Skipped",
                    }));
                }, stepStartAt);
                executionTimersRef.current.push(skipTimer);
                stepIndex += 1;
                continue;
            }
            const runningTimer = setTimeout(() => {
                setNodeStatuses((currentStatuses) => ({
                    ...currentStatuses,
                    [nodeId]: "Running",
                }));
            }, stepStartAt);
            const successTimer = setTimeout(() => {
                setNodeStatuses((currentStatuses) => ({
                    ...currentStatuses,
                    [nodeId]: "Success",
                }));
            }, stepStartAt + DEMO_NODE_RUNNING_MS);
            executionTimersRef.current.push(runningTimer, successTimer);
            stepIndex += 1;
        }
        const completionTimer = setTimeout(() => {
            setIsExecuting(false);
        }, Math.max(stepIndex, 1) * DEMO_STEP_DURATION_MS + 120);
        executionTimersRef.current.push(completionTimer);
    }, [clearExecutionTimers, edges, isExecuting, nodes]);
    const handleReset = useCallback(() => {
        clearExecutionTimers();
        setIsExecuting(false);
        setNodeStatuses({});
        setConfigTarget(null);
        setNodes(createPlaygroundNodes());
        setEdges(createPlaygroundEdges());
    }, [clearExecutionTimers, setEdges, setNodes]);
    return (<section id="playground" className="relative w-full min-h-screen flex flex-col items-center justify-center py-16 bg-[#151515] sm:py-24 snap-start overflow-x-hidden overflow-y-auto">
      <EditorialLines />

      <div className="relative z-10 w-[92%] md:w-[88%] lg:w-[90%] mx-auto">
        <div className="flex h-8 items-center gap-2 rounded-[11px] border border-[#F04D26] bg-[#F04D26]/5 px-2.5 text-xs font-medium text-white/75 shadow-[0_8px_24px_-14px_rgba(0,0,0,0.6)] mb-4 w-fit mx-auto">
          <svg aria-hidden="true" width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path d="M17.4453 17C17.4453 18.6569 16.1022 20 14.4453 20C12.7885 20 11.4453 18.6569 11.4453 17C11.4453 15.3431 12.7885 14 14.4453 14C16.1022 14 17.4453 15.3431 17.4453 17Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"></path>
              <path d="M4.70307 7.13196L10.0104 11.5853L3.5 13.9549L4.70307 7.13196Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"></path>
              <path d="M14.0465 6.16481C14.4038 4.83115 15.7747 4.03969 17.1084 4.39705L18.0743 4.65587C19.4079 5.01322 20.1994 6.38406 19.842 7.71773L19.5832 8.68365C19.2259 10.0173 17.855 10.8088 16.5214 10.4514L15.5554 10.1926C14.2218 9.83525 13.4303 8.46441 13.7877 7.13074L14.0465 6.16481Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"></path>
            </g>
          </svg>
          <span>Playground</span>
        </div>

        <h2 className="font-serif italic text-[#7D7D87] text-center font-normal text-xl md:text-2xl leading-tight mb-12">
          See how it all comes together
        </h2>

        <div className="w-full rounded-[28px] bg-[#1A1A1A] ring-1 ring-white/10">
          <div className="flex items-center px-6 py-4">
            <div className="flex flex-1 gap-2">
              <div className="size-3 rounded-full" style={{
            background: "rgb(237, 106, 94)",
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 0.75px 0.75px inset",
        }}/>
              <div className="size-3 rounded-full" style={{
            background: "rgb(244, 191, 78)",
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 0.75px 0.75px inset",
        }}/>
              <div className="size-3 rounded-full" style={{
            background: "rgb(97, 198, 85)",
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 0.75px 0.75px inset",
        }}/>
            </div>

            <div className="flex items-center gap-1 text-xs text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 15 14" className="size-3.5 text-gray-400">
                <path fill="currentColor" fillRule="evenodd" d="M7.5 1.313a2.917 2.917 0 0 0-2.917 2.916V5.25h-.146c-.885 0-1.604.718-1.604 1.604v4.375c0 .886.719 1.604 1.604 1.604h6.125c.886 0 1.605-.718 1.605-1.604V6.854c0-.886-.719-1.604-1.604-1.604h-.146V4.23A2.917 2.917 0 0 0 7.5 1.311ZM9.542 5.25V4.23a2.042 2.042 0 1 0-4.084 0v1.02z" clipRule="evenodd"/>
              </svg>
              fynt.in
            </div>

            <div className="flex flex-1 justify-end gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="size-[18px] text-gray-500" viewBox="0 0 18 18">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M9 2.813v8.437m0-8.438 3.375 3.376M9 2.813 5.625 6.187m9.563 3.375v4.126a1.5 1.5 0 0 1-1.5 1.5H4.312a1.5 1.5 0 0 1-1.5-1.5V9.561"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18" className="size-[18px] text-gray-500">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" d="M9 2.813V9m0 0v6.188M9 9H2.813M9 9h6.188"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 18" className="size-[18px] text-gray-500">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M12.073 6.563V3c0-.518-.443-.938-.99-.938H3.167c-.547 0-.99.42-.99.938v7.5c0 .518.443.938.99.938h3.76m.99-4.876h7.916c.547 0 .99.42.99.938V15c0 .518-.443.938-.99.938H7.917c-.547 0-.99-.42-.99-.938V7.5c0-.518.443-.938.99-.938"/>
              </svg>
            </div>
          </div>

          <div className="p-2.5">
            <div className="w-full h-[700px] rounded-2xl overflow-hidden relative" style={{ boxShadow: "rgba(0, 0, 0, 0.04) 0px 0.75px 0.75px inset" }}>
              <EditorProvider onUpdateNodeData={updateNodeData} onDeleteNode={deleteNode} getNodeData={getNodeData} nodeStatuses={nodeStatuses} onExecuteNode={handleExecuteNodeDemo} onExecuteWorkflow={handleExecuteWorkflowDemo} onOpenNodeConfig={handleOpenNodeConfig} canEditNodes={true}>
                <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} edgeTypes={edgeTypes} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} onConnect={onConnect} fitView fitViewOptions={{ padding: 0.22 }} defaultViewport={{ x: 0, y: 0, zoom: 0.72 }} nodesDraggable elementsSelectable preventScrolling={false} panOnDrag={false} panOnScroll={false} minZoom={0.72} maxZoom={0.72} zoomOnScroll={false} zoomOnPinch={false} zoomOnDoubleClick={false} proOptions={{ hideAttribution: true }} defaultEdgeOptions={{ type: "default" }} style={{ background: "#141414" }}>
                  <Panel position="bottom-center" className="mb-8">
                    <ExecuteWorkflowButton onExecute={handleExecuteWorkflowDemo} isExecuting={isExecuting} disabled={isExecuting || !isTriggerActive}/>
                  </Panel>

                  <Panel position="bottom-left" className="m-4">
                    <ResetButton onReset={handleReset}/>
                  </Panel>

                  <MiniMap nodeColor="#1E1E1E" nodeStrokeColor="#333333" nodeBorderRadius={8} maskColor="rgba(0, 0, 0, 0.6)" style={{
            backgroundColor: "#0A0A0A",
        }}/>
                  <Background variant={BackgroundVariant.Dots} gap={20} size={1} color="#303030"/>

                  <style>{`
                    .react-flow__attribution {
                      display: none !important;
                    }

                    .react-flow__controls {
                      background: transparent !important;
                      border: none !important;
                      box-shadow: none !important;
                    }

                    .react-flow__controls-button {
                      background: #1E1E1E !important;
                      border: 1px solid #333333 !important;
                      color: #E5E5E5 !important;
                      width: 32px !important;
                      height: 32px !important;
                      transition: all 0.15s ease !important;
                    }

                    .react-flow__controls-button:hover {
                      background: #2A2A2A !important;
                      border-color: #F04D26 !important;
                    }

                    .react-flow__controls-button svg {
                      fill: #E5E5E5 !important;
                    }

                    .react-flow__minimap {
                      background: #0A0A0A !important;
                      border: 1px solid #333333 !important;
                      border-radius: 8px !important;
                    }

                    .react-flow__minimap-mask {
                      fill: rgba(0, 0, 0, 0.6) !important;
                    }

                    .react-flow__pane {
                      cursor: default !important;
                    }

                    .react-flow__viewport {
                      cursor: default !important;
                    }
                  `}</style>
                </ReactFlow>
              </EditorProvider>
            </div>
          </div>
        </div>
      </div>

      <PlaygroundNodeConfigDialog open={Boolean(configTarget)} nodeId={configTarget?.nodeId ?? null} nodeType={configTarget?.nodeType ?? null} nodeData={activeConfigData} onOpenChange={handleCloseNodeConfig} onSave={updateNodeData}/>
    </section>);
}



================================================
FILE: apps/web/components/landing-page/pricing/index.ts
================================================
export { PricingSection } from './PricingSection';



================================================
FILE: apps/web/components/landing-page/pricing/PricingSection.tsx
================================================
"use client";
import { useState } from 'react';
import { Check } from 'lucide-react';
import NumberFlow from '@number-flow/react';
import { SectionSeparators } from '../hero/SectionSeparators';
import { FAQSection } from '../faq';
export function PricingSection() {
    const [period, setPeriod] = useState<'monthly' | 'annually'>('annually');
    const prices = {
        free: { monthly: 0, annually: 0 },
        pro: { monthly: 20, annually: 15 },
        startup: { monthly: 50, annually: 38 }
    };
    return (<>
      <section id="pricing" className="relative bg-[#151515] py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif italic text-balance text-2xl sm:text-3xl font-bold text-white md:text-4xl lg:text-5xl lg:tracking-tight">
              Pricing that scale with your business
            </h2>
            <p className="text-[#7D7D87] mx-auto mt-4 max-w-xl text-balance text-lg">
              Choose the perfect plan for your needs and start optimizing your workflow today
            </p>
            
            
            <div className="my-12">
              <div className="relative mx-auto grid w-fit grid-cols-2 rounded-full bg-[#1E1E1E] p-1">
                <div aria-hidden="true" className={`pointer-events-none absolute top-1 bottom-1 left-1 w-[calc(50%-0.25rem)] rounded-full bg-[#2A2A2A] border border-[#333333] shadow transition-transform duration-500 ease-in-out ${period === 'monthly' ? 'translate-x-0' : 'translate-x-full'}`}/>
                <button className={`relative z-10 h-8 w-20 sm:w-22 md:w-24 rounded-full text-sm transition-colors ${period === 'monthly' ? 'text-white font-medium' : 'text-[#7D7D87]'}`} onClick={() => setPeriod('monthly')}>
                  Monthly
                </button>
                <button className={`relative z-10 h-8 w-20 sm:w-22 md:w-24 rounded-full text-sm transition-colors ${period === 'annually' ? 'text-white font-medium' : 'text-[#7D7D87]'}`} onClick={() => setPeriod('annually')}>
                  Annually
                </button>
              </div>
              <div className="mt-3 text-center text-xs">
                <span className="text-[#F04D26] font-medium">Save 25%</span> <span className="text-[#7D7D87]">On Annual Billing</span>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-lg mx-auto border border-[#333333]">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 items-start">
                
                <div className="p-8 flex flex-col h-full">
                  <div className="flex-1 space-y-6">
                    <div className="min-h-[60px]">
                      <div className="tracking-tight text-lg font-medium text-white">
                        Free
                      </div>
                      <div className="text-[#7D7D87] mt-1 text-balance text-sm">
                        For developers trying out Fynt for the first time
                      </div>
                    </div>
                    <div className="min-h-[72px]">
                      <div className="text-3xl font-semibold text-white leading-none" style={{ display: 'inline-flex', alignItems: 'baseline', gap: 0 }}>
                        <span style={{ lineHeight: 1 }}>$</span>
                        <NumberFlow value={prices.free[period]} className="text-white" style={{ lineHeight: 1, fontSize: 30 }}/>
                      </div>
                      <div className="text-[#7D7D87] text-sm mt-2">Per month</div>
                    </div>
                    <a className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-9 px-4 py-2 bg-[#1E1E1E] hover:bg-[#2A2A2A] border border-[#333333] hover:border-[#F04D26] text-[#E5E5E5] cursor-pointer" href="#">
                      Get Started
                    </a>
                    <ul role="list" className="space-y-3 text-sm">
                      <li className="flex items-center gap-2 text-[#E5E5E5]">
                        <Check className="text-[#7D7D87] size-3" strokeWidth={3.5}/>
                        Up to 30 workflows
                      </li>
                      <li className="flex items-center gap-2 text-[#E5E5E5]">
                        <Check className="text-[#7D7D87] size-3" strokeWidth={3.5}/>
                        1,000 workflow runs per month
                      </li>
                      <li className="flex items-center gap-2 text-[#E5E5E5]">
                        <Check className="text-[#7D7D87] size-3" strokeWidth={3.5}/>
                        Basic integrations
                      </li>
                      <li className="flex items-center gap-2 text-[#E5E5E5]">
                        <Check className="text-[#7D7D87] size-3" strokeWidth={3.5}/>
                        Community support
                      </li>
                    </ul>
                  </div>
                </div>

                
                <div className="p-8 bg-[#1A1A1A] mx-1 rounded-lg ring-1 ring-[#333333] shadow-xl flex flex-col h-full">
                  <div className="flex-1 space-y-6">
                    <div className="min-h-[60px]">
                      <div className="tracking-tight text-lg font-medium text-white">
                        Pro
                      </div>
                      <div className="text-[#7D7D87] mt-1 text-balance text-sm">
                        Ideal for developers who need more features and support
                      </div>
                    </div>
                    <div className="min-h-[72px]">
                      <div className="text-3xl font-semibold text-white leading-none" style={{ display: 'inline-flex', alignItems: 'baseline', gap: 0 }}>
                        <span style={{ lineHeight: 1 }}>$</span>
                        <NumberFlow value={prices.pro[period]} className="text-white" style={{ lineHeight: 1, fontSize: 30 }}/>
                      </div>
                      <div className="text-[#7D7D87] text-sm mt-2">Per month</div>
                    </div>
                    <a className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-9 px-4 py-2 bg-[#F04D26] hover:bg-[#F04D26]/90 text-white shadow-md border-[0.5px] border-white/10 cursor-pointer" href="#">
                      Get Started
                    </a>
                    <ul role="list" className="space-y-3 text-sm">
                      <li className="font-medium text-[#E5E5E5]">
                        Everything in Free Plan, plus:
                      </li>
                      <li className="flex items-center gap-2 text-[#E5E5E5]">
                        <Check className="text-[#7D7D87] size-3" strokeWidth={3.5}/>
                        Unlimited workflows
                      </li>
                      <li className="flex items-center gap-2 text-[#E5E5E5]">
                        <Check className="text-[#7D7D87] size-3" strokeWidth={3.5}/>
                        10,000 executions per month
                      </li>
                      <li className="flex items-center gap-2 text-[#E5E5E5]">
                        <Check className="text-[#7D7D87] size-3" strokeWidth={3.5}/>
                        All premium integrations
                      </li>
                      <li className="flex items-center gap-2 text-[#E5E5E5]">
                        <Check className="text-[#7D7D87] size-3" strokeWidth={3.5}/>
                        AI-powered nodes
                      </li>
                      <li className="flex items-center gap-2 text-[#E5E5E5]">
                        <Check className="text-[#7D7D87] size-3" strokeWidth={3.5}/>
                        Custom templates
                      </li>
                      <li className="flex items-center gap-2 text-[#E5E5E5]">
                        <Check className="text-[#7D7D87] size-3" strokeWidth={3.5}/>
                        Priority email support
                      </li>
                      <li className="flex items-center gap-2 text-[#E5E5E5]">
                        <Check className="text-[#7D7D87] size-3" strokeWidth={3.5}/>
                        Execution history (30 days)
                      </li>
                      <li className="flex items-center gap-2 text-[#E5E5E5]">
                        <Check className="text-[#7D7D87] size-3" strokeWidth={3.5}/>
                        Advanced analytics
                      </li>
                    </ul>
                  </div>
                </div>

                
                <div className="p-8 flex flex-col h-full">
                  <div className="flex-1 space-y-6">
                    <div className="min-h-[60px]">
                      <div className="tracking-tight text-lg font-medium text-white">
                        Startup
                      </div>
                      <div className="text-[#7D7D87] mt-1 text-balance text-sm">
                        For teams scaling their automation workflows
                      </div>
                    </div>
                    <div className="min-h-[72px]">
                      <div className="text-3xl font-semibold text-white leading-none" style={{ display: 'inline-flex', alignItems: 'baseline', gap: 0 }}>
                        <span style={{ lineHeight: 1 }}>$</span>
                        <NumberFlow value={prices.startup[period]} className="text-white" style={{ lineHeight: 1, fontSize: 30 }}/>
                      </div>
                      <div className="text-[#7D7D87] text-sm mt-2">Per month</div>
                    </div>
                    <a className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-9 px-4 py-2 bg-[#1E1E1E] hover:bg-[#2A2A2A] border border-[#333333] hover:border-[#F04D26] text-[#E5E5E5] cursor-pointer" href="#">
                      Get Started
                    </a>
                    <ul role="list" className="space-y-3 text-sm">
                      <li className="font-medium text-[#E5E5E5]">
                        Everything in Pro Plan, plus:
                      </li>
                      <li className="flex items-center gap-2 text-[#E5E5E5]">
                        <Check className="text-[#7D7D87] size-3" strokeWidth={3.5}/>
                        50,000 executions per month
                      </li>
                      <li className="flex items-center gap-2 text-[#E5E5E5]">
                        <Check className="text-[#7D7D87] size-3" strokeWidth={3.5}/>
                        Team collaboration (up to 5 users)
                      </li>
                      <li className="flex items-center gap-2 text-[#E5E5E5]">
                        <Check className="text-[#7D7D87] size-3" strokeWidth={3.5}/>
                        Custom webhooks
                      </li>
                      <li className="flex items-center gap-2 text-[#E5E5E5]">
                        <Check className="text-[#7D7D87] size-3" strokeWidth={3.5}/>
                        Execution history (90 days)
                      </li>
                      <li className="flex items-center gap-2 text-[#E5E5E5]">
                        <Check className="text-[#7D7D87] size-3" strokeWidth={3.5}/>
                        API access
                      </li>
                      <li className="flex items-center gap-2 text-[#E5E5E5]">
                        <Check className="text-[#7D7D87] size-3" strokeWidth={3.5}/>
                        Advanced error handling
                      </li>
                      <li className="flex items-center gap-2 text-[#E5E5E5]">
                        <Check className="text-[#7D7D87] size-3" strokeWidth={3.5}/>
                        Priority support
                      </li>
                      <li className="flex items-center gap-2 text-[#E5E5E5]">
                        <Check className="text-[#7D7D87] size-3" strokeWidth={3.5}/>
                        Dedicated onboarding
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="hidden lg:block">
        <SectionSeparators />
      </div>
      
      <FAQSection />
    </>);
}



================================================
FILE: apps/web/components/landing-page/templates/index.ts
================================================
export { TemplatesSection } from "./TemplatesSection";



================================================
FILE: apps/web/components/landing-page/templates/TemplatesSection.tsx
================================================
"use client";
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion, type Transition, } from "framer-motion";
import { ArrowRight, Copy, FolderKanban, MessageSquareText, Plus, ShieldCheck, Upload, } from "lucide-react";
type TemplateId = "ai-automation" | "business" | "devops" | "marketing";
type TemplatePage = {
    title: string;
    subtitle: string;
    icon: React.ComponentType<{
        className?: string;
    }>;
    image: string;
};
type TemplateCategory = {
    id: TemplateId;
    label: string;
    shortLabel: string;
    accent: string;
    soft: string;
    status?: "NEW" | "SOON";
    disabled?: boolean;
    pages: TemplatePage[];
};
const TEMPLATE_CATEGORIES: TemplateCategory[] = [
    {
        id: "ai-automation",
        label: "AI & Automation",
        shortLabel: "AI",
        accent: "#22C55E",
        soft: "rgba(34, 197, 94, 0.14)",
        status: undefined,
        pages: [
            {
                title: "Daily AI Notion Digest",
                subtitle: "Collect daily metrics, summarize with AI, archive in Notion, and notify your team.",
                icon: MessageSquareText,
                image: "/templates/[AI]-daily-AI-notion-digest.avif",
            },
            {
                title: "Multi-Source AI Research Agent",
                subtitle: "Pull from two sources, synthesize with AI models, then publish to Slack with a run log.",
                icon: ShieldCheck,
                image: "/templates/[AI]-multi-source-ai-research-agent.avif",
            },
            {
                title: "Release Risk Review Center",
                subtitle: "Run multi-model governance checks and route pass/revise outcomes automatically.",
                icon: FolderKanban,
                image: "/templates/[AI]-release-risk-review-center.avif",
            },
        ],
    },
    {
        id: "business",
        label: "Business",
        shortLabel: "Business",
        accent: "#60A5FA",
        soft: "rgba(96, 165, 250, 0.14)",
        pages: [
            {
                title: "Notion Backlog Priority Sync",
                subtitle: "Score backlog items with AI and route high-priority work into GitHub automatically.",
                icon: FolderKanban,
                image: "/templates/[Business]-notion-backlog-priority-sync.avif",
            },
            {
                title: "Notion Page to Slack",
                subtitle: "Read recent entries from Notion and publish a short summary to Slack.",
                icon: ShieldCheck,
                image: "/templates/[Business]-notion-page-back-to-slack-lite.avif",
            },
            {
                title: "Policy Review Router",
                subtitle: "Route policy documents for AI-powered review and approval workflows.",
                icon: MessageSquareText,
                image: "/templates/[Business]-policy-review-router.avif",
            },
        ],
    },
    {
        id: "devops",
        label: "DevOps",
        shortLabel: "DevOps",
        accent: "#F59E0B",
        soft: "rgba(245, 158, 11, 0.14)",
        pages: [
            {
                title: "Cron API Health Watch",
                subtitle: "Run scheduled health checks and route alerts based on response health.",
                icon: FolderKanban,
                image: "/templates/[Devops]-cron-api-health-watch.avif",
            },
            {
                title: "GitHub Issue Comment Assistant",
                subtitle: "Create release notes from GitHub issue context and publish to Slack with an audit log.",
                icon: ShieldCheck,
                image: "/templates/[Devops]-github-issue-comment-assistant.avif",
            },
            {
                title: "Incident Response Command Center",
                subtitle: "Centralized incident intake with AI triage and multi-channel routing.",
                icon: MessageSquareText,
                image: "/templates/[Devops]-incident-response-command-center.avif",
            },
        ],
    },
    {
        id: "marketing",
        label: "Marketing",
        shortLabel: "Marketing",
        accent: "#F04D26",
        soft: "rgba(240, 77, 38, 0.14)",
        pages: [
            {
                title: "AI Social Post Sprint",
                subtitle: "Generate social post ideas with AI and share to Slack and Discord.",
                icon: FolderKanban,
                image: "/templates/[Marketing]-AI-social-post-sprint-lite.avif",
            },
            {
                title: "Content Repurpose AI",
                subtitle: "Transform existing content into multiple formats using AI for different channels.",
                icon: MessageSquareText,
                image: "/templates/[Marketing]-content-repurpose-AI.avif",
            },
            {
                title: "Weekly Campaign Briefing",
                subtitle: "Fetch campaign metrics weekly, summarize with AI, and post to Discord.",
                icon: ShieldCheck,
                image: "/templates/[Marketing]-weekly-campaign-briefing-discord.avif",
            },
        ],
    },
];
function getDefaultTemplateCategory(): TemplateCategory {
    const firstTemplate = TEMPLATE_CATEGORIES[0];
    if (!firstTemplate) {
        throw new Error("TEMPLATE_CATEGORIES must contain at least one template");
    }
    return firstTemplate;
}
const DEFAULT_TEMPLATE_CATEGORY = getDefaultTemplateCategory();
const CATEGORY_ICONS: Record<TemplateId, React.ReactNode> = {
    "ai-automation": (<svg aria-hidden="true" width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M22.0015 10.6253H14.3844L18.1976 4.03185L15.8178 2.65564L13.3762 6.87552V2H10.6253V9.61713L4.03185 5.80393L2.65563 8.1837L6.87707 10.6253H2V13.3747H9.61713L5.80393 19.9681L8.18525 21.3459L10.6253 17.1245V22H13.3762V14.3844L19.9697 18.1976L21.3459 15.8163L17.1245 13.3747H22.0015V10.6253Z" fill="currentColor"/></g></svg>),
    "business": (<svg aria-hidden="true" width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M20 12V17C20 18.6569 18.6569 20 17 20H7C5.34315 20 4 18.6569 4 17V12" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/><path d="M9.5002 4H14.5002M9.5002 4L8.93432 8.52703C8.70381 10.3711 10.1417 12 12.0002 12C13.8587 12 15.2966 10.3711 15.0661 8.52703L14.5002 4M9.5002 4H6.70577C5.39362 4 4.23372 4.85275 3.84233 6.10517L3.17593 8.23768C2.59278 10.1038 3.98689 12 5.94195 12C7.40345 12 8.63624 10.9117 8.81751 9.46151L9.5002 4ZM14.5002 4H17.2946C18.6068 4 19.7667 4.85275 20.1581 6.10517L20.8245 8.23768C21.4076 10.1038 20.0135 12 18.0585 12C16.597 12 15.3642 10.9117 15.1829 9.46151L14.5002 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></g></svg>),
    "devops": (<svg aria-hidden="true" width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M7 19C4.23858 19 2 16.7614 2 14C2 11.4673 3.88316 9.37436 6.32568 9.04508C7.13649 6.69118 9.37075 5 12 5C15.3137 5 18 7.68629 18 11C20.2091 11 22 12.7909 22 15C22 17.2091 20.2091 19 18 19H7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></g></svg>),
    "marketing": (<svg aria-hidden="true" width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/><path d="M15 15L17 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M14.8735 20.5309C13.0122 21.1564 10.9868 21.1564 9.12546 20.5309M20.5304 9.12595C21.1559 10.9873 21.1559 13.0126 20.5304 14.874M9.12549 3.46912C10.9869 2.84362 13.0122 2.84363 14.8736 3.46913M3.46864 14.874C2.84314 13.0127 2.84313 10.9874 3.46864 9.12598" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></g></svg>),
};
const TAB_CARDS = {
    stagger: 0.15,
    initialScale: 0.96,
    spring: { type: "spring" as const, stiffness: 600, damping: 28 },
};
const TAB_FADE = {
    exitDuration: 0.25,
    enterDuration: 0.35,
    exitEase: [0.55, 0, 1, 0.45] as const,
    enterEase: [0.165, 0.84, 0.44, 1] as const,
    scale: 0.98,
    blur: 4,
};
const BUTTON = {
    duration: 0.13,
    easeEnter: [0.165, 0.84, 0.44, 1] as const,
    easeExit: [0.55, 0, 0.1, 1] as const,
    yOffset: "110%",
    rotateX: 28,
    widthSpring: { type: "spring" as const, stiffness: 500, damping: 35 },
};
export function TemplatesSection() {
    const router = useRouter();
    const [selectedTemplateId, setSelectedTemplateId] = useState<TemplateId>("ai-automation");
    const [activePageIndex, setActivePageIndex] = useState(0);
    const [hoveredDesktopPageIndex, setHoveredDesktopPageIndex] = useState<number | null>(null);
    const shouldReduceMotion = useReducedMotion();
    const tickerMeasureRef = useRef<HTMLSpanElement>(null);
    const [tickerWidth, setTickerWidth] = useState<number | undefined>(undefined);
    const visibleTemplates = useMemo(() => TEMPLATE_CATEGORIES, []);
    const selectedTemplate = useMemo<TemplateCategory>(() => TEMPLATE_CATEGORIES.find((item) => item.id === selectedTemplateId) ?? DEFAULT_TEMPLATE_CATEGORY, [selectedTemplateId]);
    useEffect(() => {
        setActivePageIndex(0);
    }, [selectedTemplateId]);
    useLayoutEffect(() => {
        if (tickerMeasureRef.current) {
            setTickerWidth(tickerMeasureRef.current.scrollWidth);
        }
    }, [selectedTemplate.label]);
    const orderedPageIndexes = useMemo(() => {
        const allIndexes = selectedTemplate.pages.map((_, index) => index);
        return [activePageIndex, ...allIndexes.filter((index) => index !== activePageIndex)];
    }, [selectedTemplate.pages, activePageIndex]);
    const pagePositionByIndex = useMemo(() => new Map(orderedPageIndexes.map((pageIndex, position) => [pageIndex, position])), [orderedPageIndexes]);
    const easeOutQuad = [0.25, 0.46, 0.45, 0.94] as const;
    const entranceTransition: Transition = shouldReduceMotion
        ? { duration: 0 }
        : { duration: 0.25, ease: easeOutQuad };
    const tabTransition: Transition = shouldReduceMotion
        ? { duration: 0 }
        : { type: "spring", stiffness: 380, damping: 28, mass: 0.75 };
    const prewarmTemplatesNavigation = useCallback(() => {
        router.prefetch("/home/templates");
        void fetch("/api/auth/get-session", {
            method: "GET",
            credentials: "include",
            cache: "no-store",
        }).catch(() => undefined);
    }, [router]);
    return (<>
    
    <div className="hidden md:flex justify-center bg-[#151515]">
      <svg width="709" height="60" viewBox="0 0 709 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 54v-8c0-8.837 7.163-16 16-16h318c8.837 0 16-7.163 16-16V6m0 30v16m350 2v-8c0-8.837-7.163-16-16-16H369c-8.837 0-16-7.163-16-16V6" stroke="#666"/>
        <rect x="350" width="6" height="6" rx="1" fill="#f04d26"/>
        <rect x="350" y="52" width="6" height="6" rx="1" fill="#f04d26"/>
        <rect y="54" width="6" height="6" rx="1" fill="#f04d26"/>
        <rect x="700" y="54" width="6" height="6" rx="1" fill="#f04d26"/>
      </svg>
    </div>
    <section id="templates" className="relative hidden md:block min-h-screen snap-start bg-[#151515] py-16 md:py-20 xl:py-24 overflow-x-hidden">
      <div className="relative z-10 w-[92%] md:w-[88%] lg:w-[90%] mx-auto">
        <div className="flex flex-col items-center">
          <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.6 }} transition={entranceTransition} className="flex h-8 items-center gap-2 rounded-[11px] border border-[#F04D26] bg-[#F04D26]/5 px-2.5 text-xs font-medium text-white/75 shadow-[0_8px_24px_-14px_rgba(0,0,0,0.6)]">
    <svg aria-hidden="true" width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M5.63803 19.673L6.09202 18.782H6.09202L5.63803 19.673ZM4.32698 18.362L3.43597 18.816H3.43597L4.32698 18.362ZM19.673 18.362L18.782 17.908V17.908L19.673 18.362ZM18.362 19.673L17.908 18.782H17.908L18.362 19.673ZM19.673 5.63803L18.782 6.09202V6.09202L19.673 5.63803ZM18.362 4.32698L18.816 3.43597V3.43597L18.362 4.32698ZM4.32698 5.63803L5.21799 6.09202V6.09202L4.32698 5.63803ZM5.63803 4.32698L6.09202 5.21799V5.21799L5.63803 4.32698ZM20 8.8H19V15.2H20H21V8.8H20ZM15.2 20V19H8.8V20V21H15.2V20ZM4 15.2H5V8.8H4H3V15.2H4ZM8.8 4V5H15.2V4V3H8.8V4ZM8.8 20V19C7.94342 19 7.36113 18.9992 6.91104 18.9624C6.47262 18.9266 6.24842 18.8617 6.09202 18.782L5.63803 19.673L5.18404 20.564C5.66937 20.8113 6.18608 20.9099 6.74817 20.9558C7.2986 21.0008 7.97642 21 8.8 21V20ZM4 15.2H3C3 16.0236 2.99922 16.7014 3.04419 17.2518C3.09012 17.8139 3.18868 18.3306 3.43597 18.816L4.32698 18.362L5.21799 17.908C5.1383 17.7516 5.07337 17.5274 5.03755 17.089C5.00078 16.6389 5 16.0566 5 15.2H4ZM5.63803 19.673L6.09202 18.782C5.7157 18.5903 5.40973 18.2843 5.21799 17.908L4.32698 18.362L3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564L5.63803 19.673ZM20 15.2H19C19 16.0566 18.9992 16.6389 18.9624 17.089C18.9266 17.5274 18.8617 17.7516 18.782 17.908L19.673 18.362L20.564 18.816C20.8113 18.3306 20.9099 17.8139 20.9558 17.2518C21.0008 16.7014 21 16.0236 21 15.2H20ZM15.2 20V21C16.0236 21 16.7014 21.0008 17.2518 20.9558C17.8139 20.9099 18.3306 20.8113 18.816 20.564L18.362 19.673L17.908 18.782C17.7516 18.8617 17.5274 18.9266 17.089 18.9624C16.6389 18.9992 16.0566 19 15.2 19V20ZM19.673 18.362L18.782 17.908C18.5903 18.2843 18.2843 18.5903 17.908 18.782L18.362 19.673L18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816L19.673 18.362ZM20 8.8H21C21 7.97642 21.0008 7.2986 20.9558 6.74817C20.9099 6.18608 20.8113 5.66937 20.564 5.18404L19.673 5.63803L18.782 6.09202C18.8617 6.24842 18.9266 6.47262 18.9624 6.91104C18.9992 7.36113 19 7.94342 19 8.8H20ZM15.2 4V5C16.0566 5 16.6389 5.00078 17.089 5.03755C17.5274 5.07337 17.7516 5.1383 17.908 5.21799L18.362 4.32698L18.816 3.43597C18.3306 3.18868 17.8139 3.09012 17.2518 3.04419C16.7014 2.99922 16.0236 3 15.2 3V4ZM19.673 5.63803L20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597L18.362 4.32698L17.908 5.21799C18.2843 5.40973 18.5903 5.7157 18.782 6.09202L19.673 5.63803ZM4 8.8H5C5 7.94342 5.00078 7.36113 5.03755 6.91104C5.07337 6.47262 5.1383 6.24842 5.21799 6.09202L4.32698 5.63803L3.43597 5.18404C3.18868 5.66937 3.09012 6.18608 3.04419 6.74817C2.99922 7.2986 3 7.97642 3 8.8H4ZM8.8 4V3C7.97642 3 7.2986 2.99922 6.74817 3.04419C6.18608 3.09012 5.66937 3.18868 5.18404 3.43597L5.63803 4.32698L6.09202 5.21799C6.24842 5.1383 6.47262 5.07337 6.91104 5.03755C7.36113 5.00078 7.94342 5 8.8 5V4ZM4.32698 5.63803L5.21799 6.09202C5.40973 5.71569 5.71569 5.40973 6.09202 5.21799L5.63803 4.32698L5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404L4.32698 5.63803Z" fill="currentColor"></path><path d="M12 4V12V20" stroke="currentColor" strokeWidth="2" strokeLinecap="square"></path><path d="M12 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="square"></path></g></svg>
            <span>Sector-specific Templates</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.6 }} transition={shouldReduceMotion ? { duration: 0 } : { ...entranceTransition, delay: 0.06 }} className="mt-4 text-center text-pretty font-serif italic text-[#7D7D87] text-xl md:text-2xl leading-tight xl:whitespace-nowrap">
            Ready-made user flows for apps
          </motion.h2>
        </div>

        <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={shouldReduceMotion ? { duration: 0 } : { ...entranceTransition, delay: 0.12 }} className="mx-auto mt-8 hidden w-full max-w-3xl flex-wrap justify-center gap-2.5 md:flex xl:gap-3.5">
          {visibleTemplates.map((template) => {
            const isActive = selectedTemplateId === template.id;
            return (<motion.button key={template.id} type="button" disabled={template.disabled} onClick={() => setSelectedTemplateId(template.id)} animate={shouldReduceMotion
                    ? undefined
                    : {
                        y: isActive ? -2 : 0,
                        scale: isActive ? 1.01 : 1,
                        opacity: template.disabled ? 0.45 : 1,
                    }} whileHover={template.disabled || shouldReduceMotion
                    ? undefined
                    : { y: -2, scale: isActive ? 1.01 : 1.005 }} whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }} transition={tabTransition} className={`group relative flex h-11 items-center gap-2.5 rounded-[13px] border px-3 text-sm transition duration-200 active:scale-[0.97] ${template.disabled
                    ? "cursor-not-allowed border-white/10 bg-white/[0.02] text-white/35"
                    : isActive
                        ? "border-white/20 bg-white/10 text-white"
                        : "border-white/10 bg-white/[0.03] text-white/65 hover:border-white/20 hover:text-white"}`}>
                <span className="relative z-10 flex h-6 w-6 items-center justify-center rounded-[7px] border border-white/10" style={{ backgroundColor: template.soft }}>
                  <span className="text-white/85">{CATEGORY_ICONS[template.id]}</span>
                </span>
                <span className="relative z-10 pr-0.5">{template.label}</span>
                {template.status === "NEW" && (<span className="relative z-10 rounded-full bg-[#22C55E]/20 px-1.5 py-0.5 text-[10px] font-semibold text-[#22C55E]">
                    NEW
                  </span>)}
                {template.status === "SOON" && (<span className="relative z-10 rounded-full bg-white/10 px-1.5 py-0.5 text-[10px] font-semibold text-white/55">
                    SOON
                  </span>)}
              </motion.button>);
        })}
        </motion.div>

        
        <div className="relative mt-3 hidden md:block">
          <AnimatePresence mode="wait">
            <motion.div key={selectedTemplateId} initial={{ opacity: 0, scale: TAB_FADE.scale, filter: `blur(${TAB_FADE.blur}px)` }} animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }} exit={{
            opacity: 0,
            scale: TAB_FADE.scale,
            filter: `blur(${TAB_FADE.blur}px)`,
            transition: shouldReduceMotion
                ? { duration: 0 }
                : { duration: TAB_FADE.exitDuration, ease: TAB_FADE.exitEase },
        }} transition={shouldReduceMotion
            ? { duration: 0 }
            : { duration: TAB_FADE.enterDuration, ease: TAB_FADE.enterEase }}>
              <div className="relative z-0 max-h-[85vh] overflow-hidden pb-20">
                <div className="relative mx-auto grid w-full max-w-6xl justify-items-center pt-[7.25rem] [perspective:10000px]">
                  {selectedTemplate.pages.map((page, pageIndex) => {
            const Icon = page.icon;
            const index = pagePositionByIndex.get(pageIndex) ?? pageIndex;
            const widths = ["100%", "94%", "88%"];
            const offset = index * -65;
            const hoverLift = hoveredDesktopPageIndex === pageIndex ? -12 : 0;
            return (<button key={page.title} type="button" onClick={index === 0 ? undefined : () => setActivePageIndex(pageIndex)} onMouseEnter={() => setHoveredDesktopPageIndex(pageIndex)} onMouseLeave={() => setHoveredDesktopPageIndex(null)} className={`origin-top text-left [grid-area:1/1] transition-[transform,width] duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] ${index === 0 ? "cursor-default" : "cursor-pointer active:scale-[0.97]"}`} style={{
                    width: widths[index] ?? "100%",
                    transform: `translateY(${offset + hoverLift}px) translateZ(${-index}px)`,
                    zIndex: 20 - index,
                }}>
                        <motion.div initial={{ opacity: 0, scale: TAB_CARDS.initialScale }} animate={{
                    opacity: index > 2 ? 0 : 1,
                    scale: 1,
                }} transition={shouldReduceMotion
                    ? { duration: 0 }
                    : { ...TAB_CARDS.spring, delay: pageIndex * TAB_CARDS.stagger }}>
                          <div className={`w-full origin-top select-none overflow-hidden rounded-t-[22px] bg-[#1E1E1E] transition-all duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] ${index === 0 ? "shadow-[0_22px_44px_-24px_rgba(0,0,0,0.95)]" : ""}`}>
                            <div className="flex items-center bg-[#1E1E1E] px-3.5 py-2.5">
                              <div className="flex min-w-0 items-center gap-2.5">
                                <div className="flex h-[22px] w-[22px] items-center justify-center rounded-[7px] border border-white/10" style={{ backgroundColor: selectedTemplate.soft }}>
                                  <Icon className="h-[13px] w-[13px] text-white/85"/>
                                </div>
                                <span className="truncate text-sm font-medium text-white/85">{page.title}</span>
                                <span className="text-xs text-white/30">-</span>
                                <span className="truncate text-[12.5px] text-white/55">{page.subtitle}</span>
                              </div>
                              <div className="ml-auto flex items-center gap-2.5 text-white/45">
                                <Upload className="h-[15px] w-[15px]"/>
                                <Plus className="h-[15px] w-[15px]"/>
                                <Copy className="h-[15px] w-[15px]"/>
                              </div>
                            </div>
                            <div className="px-3 pb-3">
                              <div className="rounded-2xl border border-[#2E2E2E] bg-[#151515] p-3">
                                <div className="relative aspect-[1.64571/1] w-full overflow-hidden rounded-[18px] border border-[#2A2A2A] bg-[#141414]">
                                  <Image src={page.image} alt={page.title} fill className="object-contain object-center" sizes="(max-width: 1280px) 90vw, 1000px" unoptimized priority={pageIndex === activePageIndex}/>
                                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[14%] bg-[linear-gradient(180deg,rgba(20,20,20,0)_0%,rgba(20,20,20,0.86)_90%,#141414_100%)] backdrop-blur-[4px]"/>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </button>);
        })}
                </div>

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-[linear-gradient(180deg,rgba(21,21,21,0)_0%,rgba(21,21,21,0.85)_60%,#151515_100%)]"/>
              </div>
            </motion.div>
          </AnimatePresence>

          
          <div className="absolute bottom-28 left-1/2 z-[60] isolate -translate-x-1/2">
            <div className="rounded-[18px] bg-black/30 p-1 backdrop-blur-md">
              <Link href="/home/templates" onMouseEnter={prewarmTemplatesNavigation} onFocus={prewarmTemplatesNavigation} onTouchStart={prewarmTemplatesNavigation} className="group inline-flex h-11 items-center gap-2.5 rounded-[13px] border border-[#F04D26] bg-[#F04D26] px-[18px] text-sm font-medium text-white whitespace-nowrap shadow-[0_12px_28px_-18px_rgba(240,77,38,0.95)] transition duration-200 ease-out active:scale-[0.97] hover:bg-[#de4723]">
                <span>Explore Template</span>
                <span className="text-white/30">-</span>
                
                <motion.div className="overflow-hidden" animate={tickerWidth !== undefined ? { width: tickerWidth } : undefined} transition={shouldReduceMotion ? { duration: 0 } : BUTTON.widthSpring}>
                  
                  <span ref={tickerMeasureRef} className="pointer-events-none invisible absolute whitespace-nowrap" aria-hidden>
                    {selectedTemplate.label}
                  </span>
                  <div className="grid" style={{ perspective: 800 }}>
                    <AnimatePresence mode="sync" initial={false}>
                      <motion.span key={selectedTemplateId} initial={{ y: BUTTON.yOffset, rotateX: -BUTTON.rotateX, opacity: 0.4 }} animate={{ y: 0, rotateX: 0, opacity: 1 }} exit={{
            y: `-${BUTTON.yOffset}`,
            rotateX: BUTTON.rotateX,
            opacity: 0.4,
            transition: shouldReduceMotion
                ? { duration: 0 }
                : { duration: BUTTON.duration, ease: BUTTON.easeExit },
        }} transition={shouldReduceMotion
            ? { duration: 0 }
            : { duration: BUTTON.duration, ease: BUTTON.easeEnter }} className="[grid-area:1/1] text-white/70 whitespace-nowrap" style={{ transformOrigin: "50% 50%" }}>
                        {selectedTemplate.label}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                </motion.div>
                <ArrowRight className="h-4 w-4 shrink-0 text-white/70 transition-transform group-hover:translate-x-0.5"/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <div className="hidden md:flex justify-center bg-[#151515]">
      <svg width="709" height="60" viewBox="0 0 709 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M705.5 6v8c0 8.837-7.163 16-16 16h-318c-8.837 0-16 7.163-16 16v8m0-30V8M5.5 6v8c0 8.837 7.163 16 16 16h318c8.837 0 16 7.163 16 16v8" stroke="#666"/>
        <rect x="358.5" y="60" width="6" height="6" rx="1" transform="rotate(-180 358.5 60)" fill="#f04d26"/>
        <rect x="358.5" y="8" width="6" height="6" rx="1" transform="rotate(-180 358.5 8)" fill="#f04d26"/>
        <rect x="708.5" y="6" width="6" height="6" rx="1" transform="rotate(-180 708.5 6)" fill="#f04d26"/>
        <rect x="8.5" y="6" width="6" height="6" rx="1" transform="rotate(-180 8.5 6)" fill="#f04d26"/>
      </svg>
    </div>
    </>);
}


