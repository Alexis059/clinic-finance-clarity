import { AlertCircle } from "lucide-react";

const PainsSection = () => {
  const pains = [
    "There is profit on paper, but no cash in the account",
    "I don't know how much I can safely withdraw from the business",
    "Cash gaps every month because of salaries, rent, and supplies",
    "Financial reports arrive too late to make decisions",
    "Finance depends entirely on one accountant or manager",
    "Reports exist but don't actually help manage the business",
    "No clear picture of where money goes and why",
    "Afraid of growing because finances feel out of control",
  ];

  return (
    <section id="pains" className="section-padding bg-card">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Sound Familiar?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Common Financial Pains of Clinic Owners
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            If you recognize yourself in any of these situations, you're not alone. 
            Most clinic owners face these challenges.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {pains.map((pain, index) => (
            <div
              key={index}
              className="card-elevated p-5 md:p-6 flex items-start gap-4 hover:border-primary/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-5 h-5 text-destructive" />
              </div>
              <p className="text-sm md:text-base text-foreground leading-relaxed">
                {pain}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainsSection;
