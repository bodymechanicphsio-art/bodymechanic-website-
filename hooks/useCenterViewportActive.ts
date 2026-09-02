"use client";

import { useEffect, useRef, useState } from "react";

/**
 * On touch / narrow viewports, marks an element active when it sits near the
 * vertical center of the screen (scroll-driven “hover”).
 */
export function useCenterViewportActive<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const [isCenter, setIsCenter] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const media = window.matchMedia("(max-width: 1023px)");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (media.matches) setIsCenter(entry.isIntersecting);
        else setIsCenter(false);
      },
      { root: null, rootMargin: "-42% 0px -42% 0px", threshold: 0 },
    );

    const onMediaChange = () => {
      if (!media.matches) setIsCenter(false);
    };

    observer.observe(el);
    media.addEventListener("change", onMediaChange);

    return () => {
      observer.disconnect();
      media.removeEventListener("change", onMediaChange);
    };
  }, []);

  return { ref, isCenter };
}
