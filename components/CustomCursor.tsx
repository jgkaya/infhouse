"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false);

    // Use MotionValues for high-performance updates without re-renders
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring animation
    const springConfig = { damping: 25, stiffness: 700, mass: 0.5 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        // Show cursor only after first movement to avoid jumps
        const handleSafe = () => setIsVisible(true);

        const moveCursor = (e: MouseEvent) => {
            mouseX.set(e.clientX - 16); // Center the 32x32 cursor
            mouseY.set(e.clientY - 16);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseenter", handleMouseEnter);
        window.addEventListener("mouseleave", handleMouseLeave);

        // Hide default cursor initially via JS too just to be safe
        document.documentElement.style.cursor = 'none';

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseenter", handleMouseEnter);
            window.removeEventListener("mouseleave", handleMouseLeave);
            document.documentElement.style.cursor = 'auto';
        };
    }, [mouseX, mouseY, isVisible]);

    if (!isVisible) return null;

    return (
        <motion.div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                x: cursorX,
                y: cursorY,
                pointerEvents: "none",
                zIndex: 9999,
                // Force hardware acceleration
                transform: "translateZ(0)",
            }}
            className="hidden md:block" // Hide on mobile where touch is primary
        >
            {/* ESLint disable for img tag optimization since this is a cursor */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="https://cdn.e-adam.net/infhouse/Vector.png"
                alt="Cursor"
                width={32}
                height={32}
                style={{
                    width: '32px',
                    height: '32px',
                    objectFit: 'contain'
                }}
            />
        </motion.div>
    );
}
