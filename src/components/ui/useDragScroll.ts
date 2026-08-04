"use client";

import { useRef } from "react";

export function useDragScroll<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const state = useRef({ isDown: false, startX: 0, scrollLeft: 0 });

  const onPointerDown = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    state.current.isDown = true;
    state.current.startX = e.clientX;
    state.current.scrollLeft = el.scrollLeft;
    el.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el || !state.current.isDown) return;
    const delta = e.clientX - state.current.startX;
    el.scrollLeft = state.current.scrollLeft - delta;
  };

  const onPointerUp = (e: React.PointerEvent) => {
    const el = ref.current;
    state.current.isDown = false;
    if (el) el.releasePointerCapture(e.pointerId);
  };

  const scrollByAmount = (amount: number) => {
    ref.current?.scrollBy({ left: amount, behavior: "smooth" });
  };

  return { ref, onPointerDown, onPointerMove, onPointerUp, scrollByAmount };
}
