import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { SearchSection } from "@/components/search-section"
import { BrandsSection } from "@/components/brands-section"
import { SegmentSection } from "@/components/segment-section"
import { FeaturesSection } from "@/components/features-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <SearchSection />
      <BrandsSection />
      <SegmentSection />
      <FeaturesSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
