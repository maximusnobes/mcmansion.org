export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="font-serif text-2xl font-bold mb-4">McMansion</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                An intentional living community where connection, growth, and creativity flourish together.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#community" className="hover:text-accent transition-colors">
                    Our Community
                  </a>
                </li>
                <li>
                  <a href="#life" className="hover:text-accent transition-colors">
                    Life Here
                  </a>
                </li>
                <li>
                  <a href="#details" className="hover:text-accent transition-colors">
                    Details
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-accent transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="https://bit.ly/lechateaumcmansion"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    Apply to Join McMansion
                  </a>
                </li>
                <li>
                  <a
                    href="https://calendar.google.com/calendar/u/0/r?cid=mcmansionmates@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    Add the McMansion Calendar
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} McMansion. A warm, vibrant, and queer-friendly home. 🏡</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
