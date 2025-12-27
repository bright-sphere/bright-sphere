import Footer from "../Components/Footer";
import Header from "../Components/Header";
import PopupForm from "../Components/PopupForm";
import { PopupProvider } from "../Context/PopupContext";
import RefundPolicyContent from "../Components/refund-policy/content";
import BreadCrumbs from "../Components/BreadCrumbs";
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