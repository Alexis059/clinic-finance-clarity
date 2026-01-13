import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Finally, I know exactly how much I can withdraw without hurting the business. The peace of mind is priceless.",
      author: "Dr. Elena Petrova",
      role: "Owner, Family Dental Clinic",
      rating: 5,
    },
    {
      quote: "We eliminated cash gaps completely within 2 months. Now I focus on patients, not on chasing money.",
      author: "Mikhail Sorokin",
      role: "Director, Medical Center 'Health+'",
      rating: 5,
    },
    {
      quote: "The weekly dashboard takes me 5 minutes to review and I see everything. Best investment this year.",
      author: "Dr. Anna Volkova",
      role: "Owner, Aesthetic Medicine Clinic",
      rating: 5,
    },
  ];

  const caseStudies = [
    {
      title: "Multi-Location Dental Network",
      problem: "Cash gaps 2-3 times per month, no visibility across 3 locations",
      actions: "Unified reporting, payment calendar, consolidated dashboard",
      results: "Zero cash gaps, 15% reduction in operating costs, owner spends 2h/week on finances",
    },
    {
      title: "Private Medical Center",
      problem: "Profitable on paper but constant cash shortage, delayed supplier payments",
      actions: "Cash flow restructuring, 8-week forecast, reserve fund rules",
      results: "3 months of reserves built, all payments on time, owner took first guilt-free vacation",
    },
  ];

  return (
    <section className="section-padding bg-card">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Social Proof
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Clinic Owners
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real results from medical professionals who transformed their financial management.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-elevated p-6 md:p-8">
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <div>
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="card-elevated p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-6">{study.title}</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-destructive mb-1">Problem</p>
                  <p className="text-muted-foreground">{study.problem}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-primary mb-1">Actions</p>
                  <p className="text-muted-foreground">{study.actions}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-accent-foreground mb-1">Results</p>
                  <p className="text-foreground font-medium">{study.results}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
