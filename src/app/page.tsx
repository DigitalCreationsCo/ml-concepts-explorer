"use client"
import MLConceptsExplorer from "@/components/Explorer";
import Navigation from '@/components/Navigation'
import { mlConcepts } from "@/lib/concepts";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState('');
  return (
    <div className='w-full flex bg-slate-100'>
      <Navigation onTabChange={setActiveTab} mlConcepts={mlConcepts}/>
      <MLConceptsExplorer mlConcepts={mlConcepts} activeTab={activeTab} />
    </div>
  );
}
