import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { theBlack } from '../utils/colors';

const opacity = {
    initial: {
        opacity: 0
    },
    enter: {
        opacity: 0.75,
        transition: {duration: 1, delay: 0.2}
    },
    exit: {
        opacity: 0,
        transition: {duration: 0.5}
    }
};

const slideUp = {
    initial: {
        top: 0
    },
    exit: {
        top: "-100vh",
        transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2}
    }
};

const words = ["Hello", "I", "am", "exited", "to", "start","working", "with", "you"];

export default function PreLoader() {
    const [index, setIndex] = useState(0);
    const [dimension, setDimension] = useState({width: 0, height: 0});
    const [isComplete, setIsComplete] = useState(false);
    
    // Set dimensions on component mount
    useEffect(() => {
        setDimension({width: window.innerWidth, height: window.innerHeight});
        
        // Add resize listener
        const handleResize = () => {
            setDimension({width: window.innerWidth, height: window.innerHeight});
        };
        
        window.addEventListener('resize', handleResize);
        
        // Clean up
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    // Handle word cycling
    useEffect(() => {
        document.body.style.overflow = "hidden";
        if(index === words.length - 1) {
            // Set a timeout to trigger exit animation when all words are shown
            setTimeout(() => {
                setIsComplete(true);
                document.body.style.overflow = "auto";
            }, 800);
            return;
        }
        
        const timeout = setTimeout(() => {
            setIndex(index + 1);
            
        }, index === 0 ? 1000 : 150);
        
        return () => clearTimeout(timeout);
    }, [index]);
    
    return (
        <motion.div 
            variants={slideUp} 
            initial="initial" 
            animate={isComplete ? "exit" : "initial"} 
            className="h-screen w-screen flex items-center justify-center fixed z-50 "
            style={{backgroundColor:theBlack}}
        >
            {dimension.width > 0 && (
                <>
                    <motion.p 
                        className="flex text-white text-4xl items-center absolute z-10" 
                        variants={opacity} 
                        initial="initial" 
                        animate="enter"
                        exit="exit"
                    >
                        {words[index]}
                    </motion.p>
                    
                </>
            )}
        </motion.div>
    );
}