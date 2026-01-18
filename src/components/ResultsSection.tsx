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
      title: "Четкая картина прибыли и маржинальности",
      description: "Дадим чёткую картину реальной прибыльности по направлениям, услугам и врачам.",
    },
    {
      icon: Target,
      title: "План–факт под контролем",
      description: "Отслеживаем бюджет каждый месяц и показываем отклонения план–факт — чтобы вы оставались в рамках цели",
    },
    {
      icon: Calendar,
      title: "Прогноз денежных потоков",
      description: "Планируйте деньги вперёд и чувствуйте спокойствие: никаких кассовых разрывов, никаких срочных кредитов",
    },
    {
      icon: CreditCard,
      title: "Платежный календарь",
      description: "Платежи под контролем: расписаны и расставлены по приоритетам — без просрочек и спешки.",
    },
    {
      icon: LayoutDashboard,
      title: "Дашборд для собственника",
      description: "Вся картина бизнеса — на одном экране. Обновляем еженедельно: 5 минут, и вы в курсе главного.",
    },
    {
      icon: ShieldCheck,
      title: "Дисциплина в финансах: правила и контроль",
      description: "Понятные правила для вывода средств, резервов и согласований — спокойствие и порядок.",
    },
  ];

  return (
    <section id="results" className="section-padding">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Что входит
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Что вы получите в результате
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Понятные отчеты и инструменты, которые дают вам полный контроль над финансами клиники.
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
