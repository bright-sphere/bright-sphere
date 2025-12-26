

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full fpx py-6 lg:py-8 primary">
            <div className="flex justify-center gap-3 max-container text-white text-xs mlg:text-sm md:text-base xl:text-lg xxl:text-xl font-open-sans font-semibold">
                <Link href="/refund-policy">Refund Policy </Link>
                <div>|</div>
                <Link href="/privacy-policy">Privacy Policy</Link>
            </div>

        </footer>
    );
}