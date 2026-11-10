import { Home, Utensils, Book as Broom, Car, Users, type LucideIcon } from "lucide-react"

const details: { icon: LucideIcon; title: string; description: string; image: string; alt: string }[] = [
  {
    icon: Home,
    title: "Rent & Community Fees",
    description:
      "The current total is $1300/month. This covers your rent and community fees. We can provide a detailed breakdown when you chat with us!",
    image: "/furnace.webp",
    alt: "McMansion furnace",
  },
  {
    icon: Broom,
    title: "Chores",
    description:
      "We keep the house running smoothly with a volunteer-based chore system. Everyone pitches in where they see a need, fostering a sense of shared ownership and responsibility.",
    image: "/pool.webp",
    alt: "McMansion pool",
  },
  {
    icon: Utensils,
    title: "Food",
    description:
      "We share our food and purchase them using house funds from the community fees. Personally bought items must be labelled NGC (not for general consumption).",
    image: "/food3.webp",
    alt: "Food at McMansion",
  },
  {
    icon: Users,
    title: "Rooms & Space",
    description:
      "The house has 4 rooms with a shared status, meaning you'll likely have a roommate. We can give you a full tour!",
    image: "/gallery/mcmansion_margie_portraits.webp",
    alt: "Margie portraits",
  },
  {
    icon: Car,
    title: "Parking & Guests",
    description:
      "We have available car parking. Guests are always welcome! We just ask that you communicate with the house beforehand so everyone is in the loop.",
    image: "/movienight.webp",
    alt: "Movie night at McMansion",
  },
]

export function LogisticsPeek() {
  return (
    <section id="details" className="py-12 md:py-16 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8">
            <span className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
              The Nuts & Bolts 🛠️
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mt-3 text-balance">Practical Details</h2>
            <p className="text-lg text-muted-foreground mt-3 text-balance">
              Here's what you need to know about living at McMansion
            </p>
          </div>

          {/* Cards with photo headers */}
          <div className="grid md:grid-cols-2 gap-5">
            {details.map((detail, index) => {
              const Icon = detail.icon
              return (
                <div
                  key={index}
                  className="rounded-lg overflow-hidden border border-border shadow-md hover:shadow-xl transition-shadow bg-background"
                >
                  {/* Photo top half */}
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={detail.image}
                      alt={detail.alt}
                      className="w-full h-full object-cover"
                    />
                    {/* Gradient fade into card */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                    {/* Icon badge */}
                    <div className="absolute bottom-3 left-4 bg-primary/90 p-2 rounded-lg shadow-md">
                      <Icon className="w-4 h-4 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Text bottom half */}
                  <div className="p-5 pt-3">
                    <h3 className="text-lg font-semibold">{detail.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mt-1.5">{detail.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
