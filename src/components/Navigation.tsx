import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MLConcepts } from '@/lib/types';

// Navigation sidebar component
export default function ConceptNavigation ({ onTabChange, mlConcepts }: { onTabChange: (key: string) => void; mlConcepts: MLConcepts}) {
    return (
  <div className="w-64 p-4">
    <h2 className="text-xl ml-2 mt-4 mb-4">ML Concepts Explorer</h2>
    <Tabs>
    <TabsList className="bg-inherit flex flex-col h-auto gap-2">
      {Object.entries(mlConcepts).map(([key, concept]) => (
          <TabsTrigger 
          key={key} 
          value={key} 
          className="w-full flex items-center gap-2 justify-start p-2"
          onClick={() => onTabChange(key)}
          >
          {concept.icon}
          <span className='font-lexend-exa'>{concept.shortTitle}</span>
        </TabsTrigger>
      ))}
    </TabsList>
      </Tabs>
  </div>
)}