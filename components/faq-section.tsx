import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "What is the interview process like?",
      answer:
        "Our 'interview' is really just a conversation to see if we're a good fit for each other. We treat this as a conversation among equals. You'll meet with a couple of housemates, and we'll cover the nuts and bolts while getting to know you. Some of us love a longer chat, while others aim for about 30 minutes of conversation followed by a 15-minute house tour.",
    },
    {
      question: "Do I need to attend family dinner every week?",
      answer:
        "Family dinner is expected but not required. It's our core time to catch up, laugh, and reconnect as a community. We understand that life happens, but we hope you'll join us most weeks!",
    },
    {
      question: 'What does "shared room status" mean?',
      answer:
        "The house has 4 rooms with a shared status, meaning you'll likely have a roommate. This helps keep costs down and fosters closer community bonds. We'll discuss room arrangements during your interview.",
    },
    {
      question: "Is McMansion LGBTQ+ friendly?",
      answer:
        "We're a queer-friendly home and welcome people of all gender identities and sexual orientations. Creating an inclusive, safe space for everyone is core to our values.",
    },
    {
      question: "How are decisions made in the house?",
      answer:
        "We make decisions as a group, ensuring everyone's voice is heard. The vibe here is collaborative and communicative, grounded in mutual respect. Major decisions are discussed at our family meetings.",
    },
    {
      question: "Can I bring guests?",
      answer:
        "Yes! Guests are always welcome. We just ask that you communicate with the house beforehand so everyone is in the loop.",
    },
    {
      question: "What is the chore system like?",
      answer:
        "We use a volunteer-based chore system. Everyone pitches in where they see a need, fostering a sense of shared ownership and responsibility. It's about being proactive and caring for our shared space together.",
    },
    {
      question: "Is parking available?",
      answer: "Yes, we have available car parking for residents.",
    },
  ]

  return (
    <section id="faq" className="py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8">
            <span className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
              Questions & Answers
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mt-3 text-balance">Frequently Asked Questions</h2>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-base font-semibold hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4 text-sm">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
