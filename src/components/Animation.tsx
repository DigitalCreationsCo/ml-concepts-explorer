"use client"
import React, { useMemo, useState } from 'react';
import { Concept } from "@/lib/types";

export default function ConceptAnimation ({Animation}: {Animation:Concept['animation']}){
    const [step, setAnimationStep] = useState(0);
    return useMemo(() => <Animation step={step} setStep={setAnimationStep} />, [Animation, step, setAnimationStep])
}
