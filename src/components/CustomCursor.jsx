import React, { useState, useEffect } from "react";

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorTrail, setCursorTrail] = useState([]);

  // Update cursor position and trail
  useEffect(() => {
    const updateCursor = (e) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setCursorPosition(newPosition);
      setCursorTrail((prev) => {
        const newTrail = [...prev, newPosition];
        // Keep only the last 5 positions for the trail
        return newTrail.slice(-8);
      });
    };

    window.addEventListener("mousemove", updateCursor);
    return () => window.removeEventListener("mousemove", updateCursor);
  }, []);

  return (
    <div>
      {/* Main Cursor */}
      <div
        className="fixed w-6 h-6  bg-green-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ left: cursorPosition.x, top: cursorPosition.y }}
      />

      {/* Cursor Trail */}
      {cursorTrail.map((pos, index) => (
        <div
          key={index}
          className="fixed w-4 m-2 h-4 bg-green-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            left: pos.x,
            top: pos.y,
            opacity: (index + 1) / cursorTrail.length, // Fade effect
            transform: `scale(${
              1 - (cursorTrail.length - index - 1) * 0.2
            }) translate(-50%, -50%)`, // Scale effect
            transition: "transform 0.1s, opacity 0.1s", // Smooth transition
          }}
        />
      ))}
    </div>
  );
};

export default CustomCursor;
