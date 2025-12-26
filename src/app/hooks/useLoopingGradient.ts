"use client";

import { RefObject, useEffect } from "react";
import gsap from "gsap";

export const useLoopingGradient = (
    ref: RefObject<HTMLElement | null>,
    options?: {
        duration?: number;
        pauseOnHover?: boolean;
    }
) => {
    useEffect(() => {
        if (!ref.current) return;

        const ctx = gsap.context(() => {
            const el = ref.current!;

            const tl = gsap.timeline({
                repeat: -1,
                defaults: { ease: "none" },
            });

            tl.to(el, {
                backgroundPosition: "100% 50%",
                duration: options?.duration ?? 6,
            }).to(el, {
                backgroundPosition: "0% 50%",
                duration: options?.duration ?? 6,
            });

            // Optional UX improvement
            if (options?.pauseOnHover !== false) {
                el.addEventListener("mouseenter", () => tl.pause());
                el.addEventListener("mouseleave", () => tl.resume());
            }

            return () => {
                tl.kill();
            };
        }, ref);

        return () => ctx.revert();
    }, [ref, options?.duration, options?.pauseOnHover]);
};
