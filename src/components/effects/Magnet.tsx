import { useRef, useState, ReactNode } from 'react';

interface MagnetProps {
  children: ReactNode;
  padding?: number;
  disabled?: boolean;
  magnetStrength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  wrapperClassName?: string;
  innerClassName?: string;
}

const Magnet = ({
  children,
  padding = 100,
  disabled = false,
  magnetStrength = 2,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.5s ease-in-out',
  wrapperClassName = '',
  innerClassName = '',
}: MagnetProps) => {
  const magnetRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (disabled || !magnetRef.current) return;

    const rect = magnetRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
    const magnetArea = Math.max(rect.width, rect.height) / 2 + padding;

    if (distance < magnetArea) {
      setIsActive(true);
      setPosition({
        x: distanceX / magnetStrength,
        y: distanceY / magnetStrength,
      });
    } else {
      setIsActive(false);
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setIsActive(false);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={magnetRef}
      className={`inline-block ${wrapperClassName}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={innerClassName}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: isActive ? activeTransition : inactiveTransition,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Magnet;
