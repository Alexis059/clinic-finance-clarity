import { AlertCircle } from "lucide-react";

const PainsSection = () => {
  const pains = [
    "В отчете прибыль есть, а денег нет",
    "Я не понимаю, сколько можно безопасно выводить из бизнеса",
    "Каждый месяц кассовые разрывы из-за зарплат, аренды и расходников",
    "Финансовые отчёты составляются слишком поздно, чтобы принимать решения",
    "Финансы полностью зависят от бухгалтерских данных",
    "Отчёты есть, но они не помогают управлять бизнесом",
    "Нет ясной картины: куда и почему уходят деньги",
    "Страшно расти, потому что финансы кажутся неуправляемыми",
  ];

  return (
    <section id="pains" className="section-padding bg-card">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Вам это знакомо?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Финансовые проблемы владельцев частных клиник
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Если вы узнаёте себя в любой из этих ситуаций — вы не одни. С такими трудностями сталкивается большинство владельцев клиник.
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
