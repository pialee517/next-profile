import React, { useEffect, useState } from 'react'
import dynamic from "next/dynamic";


import lottieJson from '../public/1727914850044.json'

export default function Animation(){
    const DynamicLottie = dynamic(() => import("lottie-react"), { ssr: false });

    return(
        <div className="container__animation">
            <DynamicLottie
                loop
                animationData={lottieJson}
                play="infinite"
                />
        </div>
    );
}
