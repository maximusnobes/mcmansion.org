export function PhotoGallery() {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Gallery Grid - Masonry Style */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
            {/* Featured - Family Dinner (2x2) */}
            <div className="col-span-2 row-span-2 relative rounded-lg overflow-hidden shadow-lg">
              <img
                src="/gallery/mcmansion_cooking_in_kitchen.webp"
                alt="Family dinner at McMansion"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Cooking in Kitchen (1x1) */}
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src="/gallery/mcmansion_margie_portraits.webp"
                alt="Margie portraits"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Finn Drawing (1x1) */}
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src="/gallery/mcmansion_finn_drawing.webp"
                alt="Finn drawing"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Halloween 2 - Tall (1x2) */}
            <div className="row-span-2 relative rounded-lg overflow-hidden shadow-lg">
              <img
                src="/gallery/mcmansion_halloween_2.webp"
                alt="Halloween celebration"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Group Outing (1x1) */}
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src="/gallery/mcmansion_group_outing.webp"
                alt="Group outing"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Halloween 1 - Large (2x2) */}
            <div className="col-span-2 row-span-2 relative rounded-lg overflow-hidden shadow-lg">
              <img
                src="/gallery/mcmansion_halloween_1.webp"
                alt="Halloween at McMansion"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Margie (1x1) */}
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src="/gallery/mcmansion_margie.webp"
                alt="Margie"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Group Hike - Wide (2x1) */}
            <div className="col-span-2 relative rounded-lg overflow-hidden shadow-lg">
              <img
                src="/gallery/mcmansion_group_hike.webp"
                alt="Group hike"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Pumpkin Carving (1x1) */}
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src="/gallery/mcmansion_pumpkin_carving.webp"
                alt="Pumpkin carving"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Santa Cruz (1x1) */}
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src="/gallery/mcmansion_santa_cruz.webp"
                alt="Santa Cruz trip"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Outside Activity - Wide (2x1) */}
            <div className="col-span-2 relative rounded-lg overflow-hidden shadow-lg">
              <img
                src="/gallery/mcmansion_outside_activity.webp"
                alt="Outside activity"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
