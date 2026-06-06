import DownloadCta from "./components/download-cta";
import Features from "./components/features";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Screenshots from "./components/screenshots";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Screenshots />
        <DownloadCta />
      </main>
      <Footer />
    </>
  );
}
