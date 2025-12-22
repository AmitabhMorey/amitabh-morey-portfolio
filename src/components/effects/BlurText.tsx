import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'motion/react';

interface BlurTextProps {
  text: string;
  delay?: number;
  className?: string;
  animateBy?: 'words' | 'letters';
  direction?: 'top' | 'bottom';
  stepDuration?: number;
  onAnimationComplete?: () => void;
}

const BlurText = ({
  text,
  delay = 100,
  className = '',
  animateBy = 'words',
  direction = 'top',
  stepDuration = 0.35,
  onAnimationComplete,
}: BlurTextProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [animationComplete, setAnimationComplete] = useState(false);

  const elements = animateBy === 'words' ? text.split(' ') : text.split('');

  useEffect(() => {
    if (animationComplete && onAnimationComplete) {
      onAnimationComplete();
    }
  }, [animationComplete, onAnimationComplete]);

  const variants = {
    hidden: {
      filter: 'blur(10px)',
      opacity: 0,
      y: direction === 'top' ? -20 : 20,
    },
    visible: (i: number) => ({
      filter: 'blur(0px)',
      opacity: 1,
      y: 0,
      transition: {
        delay: i * (delay / 1000),
        duration: stepDuration,
        ease: [0.25, 0.4, 0.25, 1] as const,
      },
    }),
  };

  return (
    <div ref={ref} className={`flex flex-wrap ${className}`}>
      {elements.map((element, index) => (
        <motion.span
          key={index}
          custom={index}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={variants}
          onAnimationComplete={() => {
            if (index === elements.length - 1) {
              setAnimationComplete(true);
            }
          }}
          className="inline-block"
          style={{ marginRight: animateBy === 'words' ? '0.3em' : '0' }}
        >
          {element}
        </motion.span>
      ))}
    </div>
  );
};

export default BlurText;
