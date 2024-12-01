"use client"
import React, { useEffect, useMemo, useState } from 'react';
import { Concept } from "@/lib/types";

export default function ConceptAnimation ({Animation}: {Animation:Concept['animation']}){
    const [step, setAnimationStep] = useState(0);
    // useEffect(() => {
    //   return () => {
    //     setAnimationStep(0)
    //   }
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // },[Animation, step, setAnimationStep])

    const AnimationMemo = useMemo(() => <Animation step={step} setStep={setAnimationStep} />, [Animation, step, setAnimationStep])
    return AnimationMemo;
}
