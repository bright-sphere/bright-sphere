import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full fpx py-6 lg:py-8 primary">
            <div className="flex flex-col lg:flex-row lg:justify-between gap-4 items-center max-container">
                <nav aria-label="Footer navigation" className="flex justify-center gap-3 text-white text-xs mlg:text-sm md:text-base xl:text-lg xxl:text-xl font-open-sans font-semibold order-1 lg:order-2">
                    <Link href="/refund-policy">Refund Policy</Link>
                    <span aria-hidden="true">|</span>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                </nav>
                <p className="text-white/80 text-xxs mlg:text-xs md:text-sm xxl:text-base order-2 lg:order-1">
                    © {currentYear} BrightSphere Learning. All rights reserved.
                </p>
            </div>
        </footer>
    );
}