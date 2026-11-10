import { Button } from "@/components/ui/button"
import { Calendar, Mail } from "lucide-react"

export function CTASection() {
  return (
    <section id="contact" className="py-12 md:py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-balance">Ready to Join Our Family?</h2>

          <p className="text-lg md:text-xl text-primary-foreground/90 text-balance leading-relaxed">
            We're excited to meet you! Take the next step by applying or joining us for a family dinner.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" variant="secondary" className="text-lg px-8 w-full sm:w-auto" asChild>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeBr08mtOdW9-MBeCyUunwQsWryFVrUkqWYY10e3NOgxAOpLw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Apply Now
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 w-full sm:w-auto bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <a
                href="https://forms.gle/S1Q5UC4Q32ABqrjBA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Join Family Dinner
              </a>
            </Button>
          </div>

          <div className="pt-4 text-sm text-primary-foreground/80">
            <p>
              Have questions? We're committed to being mindful of our biases and approach every conversation with a
              desire to understand who you are.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
