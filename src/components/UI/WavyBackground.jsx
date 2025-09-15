// // src/ui/wavy-background.jsx
// import React, { useRef, useEffect } from "react";
// import { cn } from "../../lib/utils.js";

// export const WavyBackground = ({ className, colors }) => {
//   const canvasRef = useRef(null);
//   const animationRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");

//     let width = (canvas.width = window.innerWidth);
//     let height = (canvas.height = window.innerHeight);

//     const waves = [];
//     const numberOfWaves = 4;
//     const defaultColors = colors || ["#00f5d4", "#9b5de5", "#f15bb5","#0fffff"];

//     for (let i = 0; i < numberOfWaves; i++) {
//       waves.push({
//         amplitude: 40 + Math.random() * 40,
//         wavelength: 500 + Math.random() * 600,
//         speed: 0.005 + Math.random() * 0.01,
//         phase: Math.random() * Math.PI * 2,
//         color: defaultColors[i % defaultColors.length],
//       });
//     }

//     const render = () => {
//       ctx.clearRect(0, 0, width, height);

//       waves.forEach((wave) => {
//         ctx.beginPath();
//         ctx.moveTo(0, height / 2);

//         for (let x = 0; x < width; x++) {
//           const y =
//             height / 2 +
//             wave.amplitude *
//               Math.sin((x / wave.wavelength) * Math.PI * 2 + wave.phase);
//           ctx.lineTo(x, y);
//         }

//         // Gradient for smooth transition
//         const gradient = ctx.createLinearGradient(0, 0, width, 0);
//         gradient.addColorStop(0, wave.color);
//         gradient.addColorStop(0.5, "#ffffff");
//         gradient.addColorStop(1, wave.color);
        
//         ctx.filter=
//         ctx.strokeStyle = gradient;
//         ctx.globalAlpha = 0.8; // makes it soft
//         ctx.lineWidth = 70; // thicker line for blur
//         ctx.shadowColor = wave.color;
//         ctx.shadowBlur = 150; // strong blur glow effect
//         ctx.stroke();
        

//         wave.phase += wave.speed;
//       });

//       animationRef.current = requestAnimationFrame(render);
//     };

//     render();

//     const handleResize = () => {
//       width = canvas.width = window.innerWidth;
//       height = canvas.height = window.innerHeight;
//     };
//     window.addEventListener("resize", handleResize);

//     return () => {
//       cancelAnimationFrame(animationRef.current);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, [colors]);

//   return (
//     <div className={cn("fixed inset-0 w-full h-full -z-10", className)}>
//       <canvas ref={canvasRef} className="absolute inset-0 w-full h-full " />
//     </div>
//   );
// };










import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}) => {
  const noise = createNoise3D();
  let w,
    h,
    nt,
    i,
    x,
    ctx,
    canvas;
  const canvasRef = useRef(null);
  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  };

  const init = () => {
    canvas = canvasRef.current;
    ctx = canvas.getContext("2d");
    w = ctx.canvas.width = window.innerWidth;
    h = ctx.canvas.height = window.innerHeight;
    ctx.filter = `blur(${blur}px)`;
    nt = 0;
    window.onresize = function () {
      w = ctx.canvas.width = window.innerWidth;
      h = ctx.canvas.height = window.innerHeight;
      ctx.filter = `blur(${blur}px)`;
    };
    render();
  };

  const waveColors = colors ?? [
    "#38bdf8",
    "#818cf8",
    "#c084fc",
    "#e879f9",
    "#22d3ee",
  ];
  const drawWave = (n) => {
    nt += getSpeed();
    for (i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth || 50;
      ctx.strokeStyle = waveColors[i % waveColors.length];
      for (x = 0; x < w; x += 5) {
        var y = noise(x / 800, 0.3 * i, nt) * 100;
        ctx.lineTo(x, y + h * 0.5); // adjust for height, currently at 50% of the container
      }
      ctx.stroke();
      ctx.closePath();
    }
  };

  let animationId;
  const render = () => {
    ctx.fillStyle = backgroundFill || "black";
    ctx.globalAlpha = waveOpacity || 0.5;
    ctx.fillRect(0, 0, w, h);
    drawWave(5);
    animationId = requestAnimationFrame(render);
  };

  useEffect(() => {
    init();
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    // I'm sorry but i have got to support it on safari.
    setIsSafari(typeof window !== "undefined" &&
      navigator.userAgent.includes("Safari") &&
      !navigator.userAgent.includes("Chrome"));
  }, []);

  return (
    <div
      className={cn("h-screen flex flex-col items-center justify-center", containerClassName)}>
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}></canvas>
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
