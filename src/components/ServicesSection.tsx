import { Button } from "@/components/ui/button";
import { Check, Rocket, Shield, TrendingUp } from "lucide-react";

const ServicesSection = () => {
  const packages = [
    {
      name: "Старт",
      icon: Rocket,
      tagline: "Foundation Setup",
      description: "For clinics ready to establish financial clarity",
      features: [
        "Financial diagnostics & audit",
        "Management accounting setup",
        "Chart of accounts configuration",
        "Cash flow structure design",
        "Owner dashboard creation",
        "30-day implementation support",
      ],
      cta: "Clarify Format",
      popular: false,
    },
    {
      name: "Финансы под контролем",
      icon: Shield,
      tagline: "Ongoing Management",
      description: "For owners who want continuous financial oversight",
      features: [
        "Everything in Start, plus:",
        "Weekly financial reports",
        "Monthly plan-fact analysis",
        "Cash forecast maintenance",
        "Payment calendar updates",
        "Regular strategic calls",
        "Priority support access",
      ],
      cta: "Clarify Format",
      popular: true,
    },
    {
      name: "Финансовый директор на аутсорсе",
      icon: TrendingUp,
      tagline: "Strategic Scaling",
      description: "Для клиник планирующих расширение и развитие",
      features: [
        "Финансы под контролем, плюс:",
        "Бюджетирование",
        "Расчет инвестиционных проектов",
        "Консолидация отчетности разных юр. лиц",
        "Финансовое моделирование",
        "Презентации финансовой отчетности",
        "Консультации по финансовым стратегическим вопросам",
      ],
      cta: "Clarify Format",
      popular: false,
    },
  ];

  return (
    <section id="services" className="section-padding bg-card">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your Format
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Flexible engagement options designed for different stages of your clinic's journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`card-elevated p-6 md:p-8 relative ${
                pkg.popular ? "border-primary border-2 scale-[1.02]" : ""
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                  <pkg.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{pkg.name}</h3>
                  <p className="text-sm text-muted-foreground">{pkg.tagline}</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">
                {pkg.description}
              </p>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={pkg.popular ? "hero" : "hero-outline"}
                size="lg"
                className="w-full"
                asChild
              >
                <a href="#contact">{pkg.cta}</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
