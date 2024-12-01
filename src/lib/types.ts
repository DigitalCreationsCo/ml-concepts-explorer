/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";

interface Concept {
    shortTitle?: string;
    title: string;
    components?: ReactNode;
    applications?: ReactNode;
    icon?: ReactNode;
    description: ReactNode;
    animation: ({step, setStep}: {step: number, setStep: (n:number | ((n:number)=> number)) => void}) => ReactNode;
}

type MLConcepts = {
    'rnn': Concept;
} & Record<string, Concept>

export type { MLConcepts, Concept }