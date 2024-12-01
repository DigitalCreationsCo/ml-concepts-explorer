"use client"
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MLConcepts } from '@/lib/types';
import Content from '@/components/Content';

const MLConceptsExplorer = ({mlConcepts, activeTab}: {
  mlConcepts: MLConcepts, activeTab: string;
}) => {
  const activeConcept = mlConcepts[activeTab];

  return (
    <Card className="w-full flex m-8">
        <CardContent>
            <Content activeTab={activeTab} concept={activeConcept}/>
        </CardContent>
    </Card>
  );
};

export default MLConceptsExplorer;
