import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-lg mx-auto text-center">
        {/* Image */}
        <div className="relative aspect-square max-w-sm mx-auto rounded-lg overflow-hidden shadow-xl mb-8">
          <img
            src="/mcmansino_Tegan_and_margie.webp"
            alt="Margie looking concerned"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
          Margie thinks you're lost
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          The page you're looking for doesn't exist. Let's get you back home.
        </p>

        {/* Button */}
        <Button asChild size="lg" className="text-lg px-8">
          <Link href="/">Back to McMansion</Link>
        </Button>
      </div>
    </div>
  )
}
