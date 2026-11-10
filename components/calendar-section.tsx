export function CalendarSection() {
  return (
    <section id="calendar" className="py-12 md:py-16 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8">
            <span className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
              What's Happening
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mt-3 text-balance">
              Our Events Calendar
            </h2>
            <p className="text-base text-muted-foreground mt-3 max-w-2xl mx-auto">
              See what's coming up at McMansion - from family dinners to community gatherings.
            </p>
          </div>

          {/* Calendar Embed */}
          <div className="rounded-lg overflow-hidden shadow-xl bg-white">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=mcmansionmates%40gmail.com&ctz=America%2FLos_Angeles"
              className="w-full h-[500px] md:h-[600px] border-0"
              title="McMansion Events Calendar"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
