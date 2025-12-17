import Hero from "./components/Hero";
import Header from "./components/Header";
import Why from "./components/Why";
import Third from "./components/Third";
import Learn from "./components/Learn";
import Different from "./components/Different";
import Outcome from "./components/Outcome";
import Certification from "./components/Certification";
import CallToAction from "./components/CallToAction";
import Trust from "./components/Trust";
import Who from "./components/Who";
import Footer from "./components/Footer";
import StickyBar from "./components/StickyBar";
import Toolkit from "./components/Toolkit";
import Testimonials from "./components/Testimonials";
import Test from "./components/Test";

export default function Home() {
  return (
    <main className="ralative min-h-screen overflow-hidden">
      <Header />
      <Hero />
      <Why />
      <Third />
      <Learn />
      <Different />
      <Outcome />
      <Toolkit />
      <Certification />
      <CallToAction />
      <Test />
      <Testimonials />
      <Trust />
      <Who />
      <Footer />
      <StickyBar />
    </main>
  );
}
