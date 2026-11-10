import { HeroSection } from "@/components/hero-section"
import { CommunityIntro } from "@/components/community-intro"
import { WeekInLife } from "@/components/week-in-life"
import { LogisticsPeek } from "@/components/logistics-peek"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { CalendarSection } from "@/components/calendar-section"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <CommunityIntro />
      <WeekInLife />
      <LogisticsPeek />
      <CTASection />
      <CalendarSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
