"use client";
import { useLayoutEffect, RefObject } from "react";
import gsap from "gsap";

interface FloatingAnimationOptions {
    /** CSS selector for elements to animate (e.g., ".float-icon") */
    selector: string;
    /** Y-axis movement range in percent. Default: 15 */
    yPercentRange?: number;
    /** Animation duration in seconds. Default: 1 */
    duration?: number;
    /** GSAP easing function. Default: "power1.inOut" */
    ease?: string;
    /** Whether to stagger animations from random positions. Default: true */
    staggerFromRandom?: boolean;
}

/**
 * A reusable hook for creating floating animations on elements.
 * 
 * @param containerRef - React ref to the container element that scopes the animation
 * @param options - Configuration options for the floating animation
 * 
 * @example
 * ```tsx
 * const containerRef = useRef<HTMLDivElement>(null);
 * 
 * useFloatingAnimation(containerRef, {
 *     selector: ".float-icon",
 *     yPercentRange: 15,
 *     duration: 1,
 *     ease: "power1.inOut",
 * });
 * 
 * return <div ref={containerRef}>...</div>
 * ```
 */
export function useFloatingAnimation(
    containerRef: RefObject<HTMLDivElement | null>,
    options: FloatingAnimationOptions
) {
    const {
        selector,
        yPercentRange = 15,
        duration = 1,
        ease = "power1.inOut",
        staggerFromRandom = true,
    } = options;

    useLayoutEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            gsap.to(selector, {
                yPercent: `random(-${yPercentRange}, ${yPercentRange})`,
                duration,
                repeat: -1,
                repeatRefresh: true,
                yoyo: true,
                ease,
                stagger: staggerFromRandom
                    ? { from: "random" }
                    : undefined,
            });
        }, containerRef);

        return () => ctx.revert();
    }, [selector, yPercentRange, duration, ease, staggerFromRandom]);
}

export default useFloatingAnimation;
