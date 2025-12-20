import PrimaryButton from "./PrimaryButton";
import Image from "next/image";

export default function CallToAction() {
    return (
        <section className="relative w-full fp bg-[url('/images/call-to-action.webp')] bg-center bg-cover bg-no-repeat text-center">
            <Image src="/images/confetti-left.webp" alt="confetti-left" width={308} height={572} className="absolute top-0 left-0 w-[30%] sm:w-[20%] xl:w-auto h-full object-contain z-0" />
            <Image src="/images/confetti-right.webp" alt="confetti-right" width={308} height={572} className="absolute bottom-0 right-0 w-[30%] sm:w-[20%] xl:w-auto h-full object-contain z-0" />
            <div className="flex flex-col items-center gap-5 md:gap-8 max-container text-white ">

                <h2 className="text-2xl sm:text-4xl md:text-[40px] lg:text-5xl xl:text-[52px] xxl:text-[64px] font-general-sans font-semibold leading-tight">₹1,00,000 for Best <br className="sm:hidden lg:block z-1" /> AI Creative Project</h2>
                <div className="w-[85%] lg:w-[60%] text-base md:text-xl xl:text-[22px] xxl:text-2xl text-center leading-tight z-1">Awarded to students who create the most original, innovative, and impactful AI project.</div>
                <PrimaryButton className="px-19 mt-5 md:mt-3 z-1">Enroll Now</PrimaryButton>
            </div>
        </section>
    );
}
