import type { Metadata } from "next";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import PopupForm from "../Components/PopupForm";
import { PopupProvider } from "../Context/PopupContext";
import RefundPolicyContent from "../Components/refund-policy/content";
import BreadCrumbs from "../Components/BreadCrumbs";

export const metadata: Metadata = {
    title: "Refund Policy",
    description: "BrightSphere Learning refund policy. Learn about our 7-day refund eligibility period, how to request a refund, and refund conditions.",
    openGraph: {
        title: "Refund Policy | BrightSphere Learning",
        description: "BrightSphere Learning refund policy. Learn about our 7-day refund eligibility period and conditions.",
    },
};

export default function RefundPolicy() {
    return (
        <PopupProvider>
            <main className="relative w-full">
                <Header />
                <BreadCrumbs title="Refund Policy" />
                <RefundPolicyContent />
                <Footer />
                <PopupForm />
            </main>
        </PopupProvider>
    );
}