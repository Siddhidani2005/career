"use client";
import { useEffect, useRef } from "react";    
import  React from "react";

export default function SmoothScrollProvider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    // minimal interface for the locomotive-scroll instance used here
    let scroll: { destroy?: () => void } | null = null;
    (async () => {
      const LocomotiveScrollModule = await import("locomotive-scroll");
      const LocomotiveScroll = LocomotiveScrollModule.default;
      scroll = new LocomotiveScroll({
        el: scrollRef.current as HTMLElement,
        smooth: true,
      });
    })();

    return () => {
      scroll?.destroy?.();
    };
  }, []);

  return <div data-scroll-container ref={scrollRef}></div>;
}
