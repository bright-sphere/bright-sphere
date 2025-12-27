import type { Metadata } from "next";
import { PopupProvider } from "../Context/PopupContext";
import Header from "../Components/Header";
import PrivacyPolicyContent from "../Components/privacy-policy/content";
import Footer from "../Components/Footer";
import PopupForm from "../Components/PopupForm";
import BreadCrumbs from "../Components/BreadCrumbs";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "BrightSphere Learning privacy policy. Learn how we collect, use, and protect your personal information.",
    openGraph: {
        title: "Privacy Policy | BrightSphere Learning",
        description: "BrightSphere Learning privacy policy. Learn how we collect, use, and protect your data.",
    },
};

export default function PrivacyPolicy() {
    return (
        <PopupProvider>
            <main className="relative w-full">
                <Header />
                <BreadCrumbs title="Privacy Policy" />
                <PrivacyPolicyContent />
                <Footer />
                <PopupForm />
            </main>
        </PopupProvider>
    );
}