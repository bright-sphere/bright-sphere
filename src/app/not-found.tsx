import Link from "next/link";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { PopupProvider } from "./Context/PopupContext";
import PopupForm from "./Components/PopupForm";
import PrimaryButton from "./Components/PrimaryButton";
import SecondaryButton from "./Components/SecondaryButton";

export default function NotFound() {
    return (
        <PopupProvider>
            <main className="relative w-full min-h-screen flex flex-col">
                <Header />

                {/* 404 Content */}
                <section className="flex-1 flex flex-col items-center justify-center gap-6 md:gap-8 fpx py-20 max-container text-center">
                    {/* Large 404 Text */}
                    <h1 className="text-8xl sm:text-9xl md:text-[160px] lg:text-[200px] font-bold font-general-sans gradient-text leading-none">
                        404
                    </h1>

                    {/* Error Message */}
                    <div className="flex flex-col gap-3 max-w-lg">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold font-general-sans text-text-dark">
                            Page Not Found
                        </h2>
                        <p className="text-text-light">
                            Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-4">
                        <Link href="/">
                            <SecondaryButton>Go Back Home</SecondaryButton>
                        </Link>
                    </div>
                </section>

                <Footer />
                <PopupForm />
            </main>
        </PopupProvider>
    );
}
