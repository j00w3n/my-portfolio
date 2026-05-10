import React, { useEffect, useState } from 'react';

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Check if the element under the cursor is clickable
      const target = e.target;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Main Reticle */}
      <div 
        className="fixed top-0 left-0 w-8 h-8 border border-green-500 rounded-full pointer-events-none z-[9999] transition-transform duration-100 ease-out"
        style={{ 
          transform: `translate(${position.x - 16}px, ${position.y - 16}px) scale(${isPointer ? 1.5 : 1})`,
          opacity: isPointer ? 0.8 : 0.4
        }}
      >
        {/* Crosshair lines */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-green-500/50"></div>
        <div className="absolute left-1/2 top-0 w-[1px] h-full bg-green-500/50"></div>
      </div>

      {/* Center Dot */}
      <div 
        className="fixed top-0 left-0 w-1 h-1 bg-green-400 rounded-full pointer-events-none z-[9999]"
        style={{ 
          transform: `translate(${position.x - 2}px, ${position.y - 2}px)` 
        }}
      ></div>
    </>
  );
}

export default CustomCursor;