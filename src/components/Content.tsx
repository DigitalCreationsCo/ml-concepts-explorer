import React from 'react';
import { motion } from "framer-motion";
import { MLConcepts } from '@/lib/types';
import ConceptAnimation from './Animation';

const AnimatedConceptContent = ({ concept, activeTab }: { concept: MLConcepts['rnn'] ;activeTab: string }) => {
  const pageVariants = {
    initial: {
      opacity: .2,
      y: 5,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeIn",
      },
    },
  };

  if (!concept) {
    return (
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div className="flex flex-col p-6">
          <h1 className="text-2xl font-bold mb-2">
            Welcome to Machine Learning Concepts Explorer
          </h1>
          <p>
            Various machine learning and deep learning concepts are explained via
            interactive elements.
          </p>
          <p>Select a concept from the navigation list.</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      key={activeTab}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="flex flex-col p-6">
        <h1 className="text-2xl font-bold mb-2">{concept.title}</h1>

        <div className="flex flex-col prose max-w-none gap-y-5">
          
          <div>
          <h2 className="text-xl font-semibold mb-2">Overview</h2>
          {concept.description}
          </div>

          {concept.applications && (
            <div>
              <h3 className="text-xl font-semibold mb-2">Applications</h3>
              {concept.applications}
            </div>
          )}

          <div>
          <h3 className="text-xl font-semibold mb-2">Key Components</h3>
          {concept.components}
          </div>
          
          <div>
          <h3 className="text-xl font-semibold mb-2">
            Interactive Demonstration
          </h3>
          <ConceptAnimation Animation={concept.animation} />
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default AnimatedConceptContent;