"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const tocItems = [
  { href: "#community", label: "Our Community" },
  { href: "#life", label: "A Week in the Life" },
  { href: "#details", label: "Practical Details" },
  { href: "#contact", label: "Apply to Join" },
  { href: "#calendar", label: "Events Calendar" },
  { href: "#faq", label: "FAQ" },
]

const leftPhotos = [
  { src: "/gallery/mcmansino_Tegan_and_margie.webp", alt: "Tegan and Margie" },
  { src: "/gallery/house.webp", alt: "The house" },
  { src: "/gallery/mcmansion_cooking_in_kitchen.webp", alt: "Cooking in kitchen" },
  { src: "/gallery/mcmansion_margie_portraits.webp", alt: "Margie portraits" },
  { src: "/gallery/mcmansion_group_hike.webp", alt: "Group hike" },
  { src: "/gallery/friends.webp", alt: "Friends" },
]

const rightPhotos = [
  { src: "/gallery/kitch3.webp", alt: "Kitchen" },
  { src: "/gallery/pool2.webp", alt: "Pool" },
  { src: "/gallery/mcmansion_halloween_1.webp", alt: "Halloween" },
  { src: "/gallery/mcmansion_finn_drawing.webp", alt: "Finn drawing" },
  { src: "/gallery/mcmansion_santa_cruz.webp", alt: "Santa Cruz" },
  { src: "/gallery/mcmansion_outside_activity.webp", alt: "Outside activity" },
]

export function HeroSection() {
  const [heroSrc, setHeroSrc] = useState("/main_image.jpg")

  return (
    <section className="relative pt-20 pb-12 overflow-hidden">
      <div className="absolute inset-0 bg-secondary/30" />

      <style>{`
        @keyframes scroll-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scroll-down {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
      `}</style>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-[auto_1fr_1.4fr_auto] gap-4 items-center">
            {/* Far left — scrolling photo strip (scrolls down) */}
            <div className="hidden md:block w-28 h-[420px] overflow-hidden rounded-lg relative">
              <div
                className="flex flex-col gap-2"
                style={{ animation: "scroll-down 30s linear infinite" }}
              >
                {[...leftPhotos, ...leftPhotos].map((photo, i) => (
                  <button
                    key={`${photo.src}-${i}`}
                    onClick={() => setHeroSrc(photo.src)}
                    className="rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer shrink-0"
                  >
                    <div className="aspect-[3/4] w-28">
                      <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Left side — text + TOC */}
            <div className="space-y-6">
              <div className="space-y-3">
                <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-balance">
                  More Than a Place to Live
                </h1>
                <p className="text-lg text-muted-foreground text-balance leading-relaxed">
                  An intentional living community where connection, growth, and creativity flourish together
                </p>
              </div>

              {/* Table of Contents */}
              <nav>
                <p className="text-xs uppercase tracking-wider text-muted-foreground/60 font-medium mb-2">On this page</p>
                <ul className="space-y-0.5 text-sm text-muted-foreground border-l border-border pl-0">
                  {tocItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="flex items-center gap-0 py-1 pl-3 border-l-2 border-transparent hover:border-primary hover:text-foreground transition-colors -ml-px"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <Button size="default" asChild className="px-6">
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSeBr08mtOdW9-MBeCyUunwQsWryFVrUkqWYY10e3NOgxAOpLw/viewform" target="_blank" rel="noopener noreferrer">Lease Application</a>
                </Button>
                <Button size="default" variant="outline" asChild className="px-6 bg-transparent">
                  <a href="https://forms.gle/S1Q5UC4Q32ABqrjBA" target="_blank" rel="noopener noreferrer">Meet With Us</a>
                </Button>
              </div>

              {/* Mobile: horizontal scroll strip */}
              <div className="flex md:hidden gap-3 pt-2 overflow-x-auto pb-2">
                {[...leftPhotos, ...rightPhotos].map((photo) => (
                  <button
                    key={photo.src}
                    onClick={() => setHeroSrc(photo.src)}
                    className="rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer shrink-0 w-20"
                  >
                    <div className="aspect-square">
                      <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Center — main hero photo */}
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="aspect-[4/3]">
                  <img
                    src={heroSrc}
                    alt="McMansion community"
                    className="w-full h-full object-cover transition-opacity duration-300"
                  />
                </div>
              </div>
              <div className="absolute -inset-3 bg-primary/5 rounded-xl -z-10 -rotate-1" />
            </div>

            {/* Far right — scrolling photo strip (scrolls up) */}
            <div className="hidden md:block w-28 h-[420px] overflow-hidden rounded-lg relative">
              {/* Click here hint */}
              <div className="absolute -top-10 left-6 flex items-center gap-1 text-muted-foreground/70 text-xs font-medium whitespace-nowrap animate-bounce z-10">
                <span>click here!</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rotate-[135deg]">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
              <div
                className="flex flex-col gap-2"
                style={{ animation: "scroll-up 25s linear infinite" }}
              >
                {[...rightPhotos, ...rightPhotos].map((photo, i) => (
                  <button
                    key={`${photo.src}-${i}`}
                    onClick={() => setHeroSrc(photo.src)}
                    className="rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer shrink-0"
                  >
                    <div className="aspect-[3/4] w-28">
                      <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
