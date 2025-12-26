"use client";

import { RefObject, useEffect } from "react";
import gsap from "gsap";

export const useGsapHover = (
    ref: RefObject<HTMLElement | null>
) => {
    useEffect(() => {
        if (!ref.current) return;

        const ctx = gsap.context(() => {
            const el = ref.current!;

            const hoverIn = () => {
                gsap.to(el, {
                    scale: 1.08,
                    y: -2,
                    boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
                    duration: 0.3,
                    ease: "power3.out",
                });
            };

            const hoverOut = () => {
                gsap.to(el, {
                    scale: 1,
                    y: 0,
                    boxShadow: "0 0 0 rgba(0,0,0,0)",
                    duration: 0.3,
                    ease: "power3.out",
                });
            };

            el.addEventListener("mouseenter", hoverIn);
            el.addEventListener("mouseleave", hoverOut);

            return () => {
                el.removeEventListener("mouseenter", hoverIn);
                el.removeEventListener("mouseleave", hoverOut);
            };
        }, ref);

        return () => ctx.revert();
    }, [ref]);
};
