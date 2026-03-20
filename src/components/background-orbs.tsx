"use client";

import { motion } from "framer-motion";

export function BackgroundOrbs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <motion.div
        className="orb orb-primary w-[600px] h-[600px] -top-[200px] -left-[200px]"
        animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="orb orb-accent w-[500px] h-[500px] top-[40%] -right-[150px]"
        animate={{ x: [0, -30, 20, 0], y: [0, 40, -20, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="orb orb-pink w-[400px] h-[400px] bottom-[10%] left-[20%]"
        animate={{ x: [0, 20, -30, 0], y: [0, -20, 30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="orb orb-primary w-[300px] h-[300px] top-[60%] left-[60%]"
        animate={{ x: [0, -20, 15, 0], y: [0, 25, -15, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(124,58,237,0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(124,58,237,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}
