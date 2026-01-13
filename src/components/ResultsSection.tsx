import { 
  TrendingUp, 
  Target, 
  Calendar, 
  CreditCard, 
  LayoutDashboard, 
  ShieldCheck 
} from "lucide-react";

const ResultsSection = () => {
  const results = [
    {
      icon: TrendingUp,
      title: "Transparent Profit & Margins",
      description: "Know your real profitability by service, doctor, and location. No more guessing.",
    },
    {
      icon: Target,
      title: "Plan vs Fact Control",
      description: "Monthly budget tracking with clear variance analysis. Stay on target.",
    },
    {
      icon: Calendar,
      title: "Cash Forecast (4-8 Weeks)",
      description: "See your cash position ahead. No more surprises or emergency borrowing.",
    },
    {
      icon: CreditCard,
      title: "Payment Calendar",
      description: "All payments scheduled and prioritized. Never miss critical deadlines.",
    },
    {
      icon: LayoutDashboard,
      title: "Owner Dashboard",
      description: "All key metrics on one screen. Updated weekly, takes 5 minutes to review.",
    },
    {
      icon: ShieldCheck,
      title: "Financial Discipline & Rules",
      description: "Clear policies for withdrawals, reserves, and approvals. Peace of mind.",
    },
  ];

  return (
    <section id="results" className="section-padding">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            What You Get
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Results You Can Expect
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Clear systems and tools that give you control over your clinic's finances.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {results.map((result, index) => (
            <div
              key={index}
              className="card-elevated p-6 md:p-8 group hover:border-primary/30 transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                <result.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-3">
                {result.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {result.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
