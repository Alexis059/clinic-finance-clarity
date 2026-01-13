import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How quickly will I see results?",
      answer: "You'll receive your first owner dashboard and cash forecast within 14 days of starting. Most clients report feeling more in control within the first month, and measurable improvements in cash management within 2-3 months.",
    },
    {
      question: "What do I need to prepare before we start?",
      answer: "Minimal preparation is needed. During our initial call, I'll tell you exactly what documents I need — typically bank statements, your current accounting reports, and access to your accounting software. I handle the heavy lifting of analysis and setup.",
    },
    {
      question: "How is confidentiality ensured?",
      answer: "All engagements start with a signed NDA before any information is shared. I work with sensitive medical business data daily and maintain strict confidentiality protocols. Your financial information is never shared with anyone.",
    },
    {
      question: "How is this different from my accountant?",
      answer: "Accountants focus on tax compliance and historical reporting. I focus on management accounting — helping you understand profitability, forecast cash, and make forward-looking decisions. We complement, not replace, your accountant.",
    },
    {
      question: "Do I need to understand finance to work with you?",
      answer: "Not at all. My job is to translate complex financial data into simple, actionable insights. The dashboards I create are designed for busy clinic owners, not finance professionals. If you can read a simple chart, you're ready.",
    },
    {
      question: "Is this suitable for a small clinic with just 5-10 employees?",
      answer: "Absolutely. In fact, small clinics often benefit the most because owners wear many hats and don't have time for complex financial management. The Start package is specifically designed for clinics at this stage.",
    },
    {
      question: "What if I'm not ready for ongoing support?",
      answer: "That's perfectly fine. The Start package is a one-time setup that gives you the foundation. Many clients begin there and upgrade to Control when they're ready for ongoing support.",
    },
  ];

  return (
    <section id="faq" className="section-padding bg-card">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Common questions from clinic owners considering financial management support.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="card-elevated px-6 border-none"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
