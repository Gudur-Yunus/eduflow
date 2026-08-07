"use client";

import { useEffect, useState } from "react";
import { useInView, animate } from "framer-motion";
import { useRef } from "react";

interface StatCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

export default function StatCounter({ end, suffix = "", duration = 2 }: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, end, {
        duration: duration,
        ease: "easeOut",
        onUpdate: (val) => setValue(Math.floor(val)),
      });
      return controls.stop;
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}
