import { ReactNode, useMemo } from 'react';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
}

const GradientText = ({
  children,
  className = '',
  colors = ['#a855f7', '#6366f1', '#8b5cf6', '#a855f7'],
  animationSpeed = 8,
  showBorder = false,
}: GradientTextProps) => {
  const gradientStyle = useMemo(() => {
    const gradient = `linear-gradient(90deg, ${colors.join(', ')})`;
    return {
      backgroundImage: gradient,
      backgroundSize: '300% 100%',
      animation: `gradient-shift ${animationSpeed}s ease-in-out infinite`,
    };
  }, [colors, animationSpeed]);

  return (
    <>
      <style>{`
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
      <span
        className={`inline-block bg-clip-text text-transparent ${className}`}
        style={gradientStyle}
      >
        {children}
      </span>
    </>
  );
};

export default GradientText;
