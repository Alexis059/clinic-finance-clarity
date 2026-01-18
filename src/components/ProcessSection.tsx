const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Бесплатная диагностика",
      description: "Онлайн встреча чтобы разобраться в финансовой ситуации вашей клиники и её ключевых задачах.",
    },
    {
      number: "02",
      title: "Финансовый аудит",
      description: "Комплексный анализ ваших текущих отчётов, денежных потоков и финансовых процессов.",
    },
    {
      number: "03",
      title: "Настройка системы управленческого учета",
      description: "Настроим управленческий учёт, дашборды и отчётность, адаптированные под вашу клинику.",
    },
    {
      number: "04",
      title: "Первый отчет",
      description: "Получите ваш первый дашборд и отчетность в течение 14 дней.",
    },
    {
      number: "05",
      title: "Регулярное сопровождение",
      description: "Регулярные обновления, анализ и стратегические рекомендации по мере роста вашей клиники.",
    },
  ];

  return (
    <section id="process" className="section-padding">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Как мы работаем
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            От хаоса в финансах — к ясности
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Структурный подход, который поможет настроить финансовое управление вашей клиники..
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          <div className="space-y-8 md:space-y-0">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative md:grid md:grid-cols-2 md:gap-8 ${
                  index % 2 === 0 ? "" : "md:direction-rtl"
                }`}
              >
                <div
                  className={`card-elevated p-6 md:p-8 ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left md:col-start-2"
                  }`}
                >
                  <span className="text-4xl md:text-5xl font-bold text-primary/20">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-semibold mt-2 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
