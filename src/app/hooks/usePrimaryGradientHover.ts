"use client";

import { RefObject, useEffect } from "react";
import gsap from "gsap";

export const usePrimaryGradientHover = (
    ref: RefObject<HTMLElement | null>
) => {
    useEffect(() => {
        if (!ref.current) return;

        const ctx = gsap.context(() => {
            const el = ref.current!;

            const hoverIn = () => {
                gsap.to(el, {
                    backgroundPosition: "100% 50%",
                    duration: 0.6,
                    ease: "power3.out",
                });
            };

            const hoverOut = () => {
                gsap.to(el, {
                    backgroundPosition: "0% 50%",
                    duration: 0.6,
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
