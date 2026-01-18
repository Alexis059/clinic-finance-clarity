import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Теперь я точно понимаю, какую сумму можно выводить, не рискуя стабильностью бизнеса. Чувство уверенности — бесценно.",
      author: "Доктор Елена Кужегутова",
      role: "Собственник, Семейная стоматологическая клиника",
      rating: 5,
    },
    {
      quote: "Мы полностью устранили кассовые разрывы всего за 2 месяца. Теперь я думаю о пациентах, а не о деньгах.",
      author: "Михаил Сорокевич",
      role: "Генеральный директор, Многопрофильный медицинский центр'",
      rating: 5,
    },
    {
      quote: "5 минут в неделю — и вся картина бизнеса перед глазами. Лучшая инвестиция этого года.",
      author: "Доктор Анаа Волчихина",
      role: "Владелец клиники эстетической медицины",
      rating: 5,
    },
  ];

  const caseStudies = [
    {
      title: "Сеть стоматологических клиник",
      problem: "Кассовые разрывы. Нет четкой финансовой картины по филиалам",
      actions: "Внедрили платежный календарь, создали финансовые отчеты по филиалам",
      results: "Кассовые разрывы — в прошлом, есть четкие финансовые показатели по всем филиалам.",
    },
    {
      title: "Частный медицинский центр",
      problem: "Прибыль “на бумаге”, а в реальности — кассовый дефицит и просрочки по оплате поставщикам",
      actions: "Перестроили управление деньгами, внедрили ДДС, платежный календарь",
      results: "Создан управляемый резерв, кассовые разрывы ликвидированы",
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
                  <p className="text-sm font-medium text-destructive mb-1">Проблема</p>
                  <p className="text-muted-foreground">{study.problem}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-primary mb-1">Что сделано</p>
                  <p className="text-muted-foreground">{study.actions}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-accent-foreground mb-1">Результат</p>
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
