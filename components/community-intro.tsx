"use client"

import { useEffect, useRef, useState } from "react"

const leftFlags = [
  { emoji: "🇺🇸", label: "United States" },
  { emoji: "🇮🇳", label: "India" },
  { emoji: "🇬🇧", label: "United Kingdom" },
  { emoji: "🇫🇷", label: "France" },
  { emoji: "🇳🇬", label: "Nigeria" },
  { emoji: "🐱", label: "Cat" },
]

const rightFlags = [
  { emoji: "🇰🇷", label: "South Korea" },
  { emoji: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", label: "Scotland" },
  { emoji: "🇧🇷", label: "Brazil" },
  { emoji: "🇯🇵", label: "Japan" },
  { emoji: "🇩🇪", label: "Germany" },
  { emoji: "🇲🇽", label: "Mexico" },
]

export function CommunityIntro() {
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="community" ref={sectionRef} className="relative py-12 md:py-16 bg-card overflow-hidden">
      {/* Flags from the left */}
      <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-center gap-6 pointer-events-none">
        {leftFlags.map((flag, i) => (
          <div
            key={flag.label}
            className="flex items-center"
            style={{
              transform: visible ? "translateX(0)" : "translateX(-100%)",
              opacity: visible ? 1 : 0,
              transition: `transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 0.08}s, opacity 0.3s ease ${i * 0.08}s`,
            }}
          >
            <div className="w-8 h-0.5 bg-foreground/30 rounded-full" />
            <span className="text-3xl md:text-4xl" role="img" aria-label={flag.label}>
              {flag.emoji}
            </span>
          </div>
        ))}
      </div>

      {/* Flags from the right */}
      <div className="absolute right-0 top-0 bottom-0 flex flex-col justify-center gap-6 pointer-events-none">
        {rightFlags.map((flag, i) => (
          <div
            key={flag.label}
            className="flex items-center"
            style={{
              transform: visible ? "translateX(0)" : "translateX(100%)",
              opacity: visible ? 1 : 0,
              transition: `transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 0.08}s, opacity 0.3s ease ${i * 0.08}s`,
            }}
          >
            <span className="text-3xl md:text-4xl" role="img" aria-label={flag.label}>
              {flag.emoji}
            </span>
            <div className="w-8 h-0.5 bg-foreground/30 rounded-full" />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Label */}
          <div className="text-center mb-6">
            <span className="text-sm uppercase tracking-wider text-muted-foreground font-medium">Our Community 🏡</span>
          </div>

          {/* Main Content */}
          <div className="space-y-5">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-balance">Welcome to McMansion</h2>

            <div className="prose prose-lg max-w-none text-foreground/90 leading-relaxed">
              <p className="text-lg text-center text-balance">
                We're an intentional living community, a co-op, and a communal home filled with people from across the
                country and around the world.
              </p>
            </div>

            {/* Pull Quotes Grid */}
            <div className="grid md:grid-cols-2 gap-6 pt-4">
              <div className="bg-secondary/50 p-6 rounded-lg">
                <p className="text-base italic text-balance">
                  "Our history is built on the idea that a home is more than just a place to live—it's a place to
                  connect, grow, and create together."
                </p>
              </div>

              <div className="bg-accent/10 p-6 rounded-lg">
                <p className="text-base italic text-balance">
                  "We make decisions as a group, ensuring everyone's voice is heard. The vibe here is collaborative and
                  communicative, grounded in mutual respect."
                </p>
              </div>
            </div>

            <div className="pt-4 text-center">
              <p className="text-lg text-balance max-w-3xl mx-auto leading-relaxed">
                We're looking for folks who are excited to be active participants in creating a warm, vibrant, and{" "}
                <strong>queer-friendly</strong> home.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
