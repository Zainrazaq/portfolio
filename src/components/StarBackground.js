import React, { useRef, useEffect } from "react";

const StarBackground = () => {
  const canvasRef = useRef(null);

  // Function to draw a star at a specific position
  const drawStar = (ctx, x, y) => {
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(x, y, Math.random() * 2 + 1, 0, Math.PI * 2); // Random size
    ctx.fill();
  };

  // Initialize stars
  const initStars = (ctx, width, height) => {
    ctx.clearRect(0, 0, width, height); // Clear canvas
    for (let i = 0; i < 100; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      drawStar(ctx, x, y);
    }
  };

  // Handle clicks to create new stars
  const handleCanvasClick = (event) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect(); // Get canvas position
    const x = event.clientX - rect.left; // Adjust x relative to canvas
    const y = event.clientY - rect.top; // Adjust y relative to canvas
    console.log(`Star created at x=${x}, y=${y}`);
    drawStar(ctx, x, y); // Draw new star
  };

  // Set up the canvas on mount
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth; // Fullscreen canvas
      canvas.height = window.innerHeight;
      initStars(ctx, canvas.width, canvas.height); // Create stars
    };

    resizeCanvas(); // Initialize on mount

    window.addEventListener("resize", resizeCanvas); // Reinitialize on resize

    return () => {
      window.removeEventListener("resize", resizeCanvas); // Cleanup on unmount
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      onClick={handleCanvasClick} // Attach click handler
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        zIndex: -1,
      }}
    />
  );
};

export default StarBackground;
