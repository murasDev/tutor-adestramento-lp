import Header from "@/components/header";
import AboutUsSection from "@/components/sections/about-us-section";
import ClientsSection from "@/components/sections/clients-section";
import ContactSection from "@/components/sections/contact-section";
import HomeSection from "@/components/sections/home-section";
import LocaleSection from "@/components/sections/locale-section";
import PhilosophySection from "@/components/sections/philosophy-section";
import ServicesSection from "@/components/sections/services-section";
import WhatsappButton from "@/components/whatsapp-button";

export default function Home() {
  return (
    <main className="h-screen w-screen flex flex-col">
      <Header />
      <HomeSection />
      <AboutUsSection />
      <LocaleSection />
      <ServicesSection />
      <PhilosophySection />
      <ClientsSection />
      <ContactSection />
      <div className="fixed bottom-5 right-5">
        <div className="flex flex-col gap-3">
          {/* <BackToTopButton /> */}
          <WhatsappButton />
        </div>
      </div>
    </main>
  );
}
