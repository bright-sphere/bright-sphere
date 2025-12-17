"use client";
import Image from "next/image";
import PrimaryButton from "./PrimaryButton";
import { useEffect, useState } from "react";

export default function StickyBar() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const thirdSection = document.getElementById("third-section");
            if (thirdSection) {
                const rect = thirdSection.getBoundingClientRect();

                if (rect.top <= window.innerHeight) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <section className="w-full fixed bottom-5 left-0 right-0 z-10 animate-fade-in-up">
            <div className="w-full flex fpx max-container">
                <div className="w-full flex flex-col gap-1 p-8 bg-white rounded-[15px] shadow-2xl">
                    {/* First Row */}
                    <div className="flex justify-between items-center gap-13">
                        <div className="flex items-center gap-5">
                            <Image src="/icons/offer.svg" alt="Offer" width={55} height={55} />
                            <div className="text-3xl font-general-sans font-semibold">(Launch Offer – Limited Seats)</div>
                        </div>
                        <div className="flex items-center gap-8">
                            <div className="flex items-center gap-4">
                                <div className="relative text-2xl text-gray-400 font-lato font-medium after:content-[''] after:w-full after:h-px after:bg-gray-400 after:absolute after:left-0 after:top-1/2 after:rotate-10 ">₹11,999</div>
                                <div className="text-[42px] font-general-sans font-semibold gradient-text">₹4,999</div>
                            </div>
                            <PrimaryButton>Book Now</PrimaryButton>
                        </div>
                    </div>
                    <div className="text-lg font-open-sans font-regular">
                        <span className="font-semibold gradient-text">For institutions: </span> Contact our team for bulk subscriptions.
                    </div>
                    {/* End of First Row */}
                </div>
            </div>
        </section>
    )
}