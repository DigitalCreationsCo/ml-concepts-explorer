import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInProps {
    children: ReactNode;
    duration?: number;
    delay?: number;
    className?: string;
}

// Base fade in animation component
export const FadeIn = ({ 
    children, 
    duration = 0.5, 
    delay = 0, 
    className = "" 
}: FadeInProps) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
                duration: duration,
                delay: delay,
                ease: "easeOut"
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

// Slide and fade animation component
export const SlideAndFade = ({ 
    children, 
    duration = 0.5, 
    delay = 0,
    className = "" 
}: FadeInProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{
                duration: duration,
                delay: delay,
                ease: "easeOut"
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

// Page transition wrapper
export const PageTransition = ({ children }: { children: ReactNode }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
                duration: 0.3,
                ease: "easeInOut"
            }}
            className="w-full"
        >
            {children}
        </motion.div>
    );
};