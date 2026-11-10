"use client"

const columns = [
  [
    "/gallery/mcmansion_cooking_in_kitchen.webp",
    "/gallery/mcmansion_margie_portraits.webp",
    "/gallery/mcmansion_group_hike.webp",
    "/gallery/mcmansion_pumpkin_carving.webp",
  ],
  [
    "/gallery/mcmansion_halloween_1.webp",
    "/gallery/mcmansion_finn_drawing.webp",
    "/gallery/mcmansion_santa_cruz.webp",
    "/gallery/mcmansion_margie.webp",
  ],
  [
    "/gallery/mcmansion_group_outing.webp",
    "/gallery/mcmansion_halloween_2.webp",
    "/gallery/mcmansion_outside_activity.webp",
    "/gallery/mcmansion_fam_din.webp",
  ],
]

// -1 = scrolls up, 1 = scrolls down
const directions = [-1, 1, -1]
const speeds = [25, 30, 22]

export function WeekInLife() {
  return (
    <section id="life" className="py-12 md:py-16">
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8">
            <span className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
              A Week in the Life 🗓️
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mt-3 text-balance">Life at McMansion</h2>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Auto-scrolling photo columns */}
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 flex gap-2 px-1">
                {columns.map((imgs, colIdx) => (
                  <div
                    key={colIdx}
                    className="flex-1 overflow-hidden relative"
                  >
                    <div
                      className="flex flex-col gap-2 will-change-transform"
                      style={{
                        animation: `${directions[colIdx] === -1 ? "scroll-up" : "scroll-down"} ${speeds[colIdx]}s linear infinite`,
                      }}
                    >
                      {/* Duplicate images for seamless loop */}
                      {[...imgs, ...imgs].map((src, imgIdx) => (
                        <div key={imgIdx} className="relative rounded-md overflow-hidden shrink-0 aspect-[3/4]">
                          <img
                            src={src}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-4">
              <p className="text-base leading-relaxed">
                Life at McMansion has a comfortable rhythm. While every week is different, you can always count on our{" "}
                <strong>family dinner</strong>.
              </p>

              <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r">
                <p className="text-base leading-relaxed">
                  It's an expected (but not required) weekly gathering where we all pitch in to cook and share a meal.
                  This is our core time to catch up, laugh, and reconnect.
                </p>
              </div>

              <p className="text-base leading-relaxed">
                It's often paired with our family meeting, where we handle house business.
              </p>

              <p className="text-base leading-relaxed text-muted-foreground">
                Beyond that, you'll find housemates gardening, hosting movie nights, or just hanging out in the common
                areas. It's a balance of social connection and personal time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
