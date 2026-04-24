import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/**
 * Reusable scroll-triggered animation wrapper.
 * direction: "up" | "left" | "right" | "none"
 */
export default function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  className = "",
  once = true,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-60px" });

  const offsets = {
    up:    { x: 0,   y: 36 },
    left:  { x: -48, y: 0  },
    right: { x: 48,  y: 0  },
    none:  { x: 0,   y: 0  },
  };

  const { x, y } = offsets[direction] ?? offsets.up;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x, y }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94], // smooth cubic — water-like
      }}
    >
      {children}
    </motion.div>
  );
}
