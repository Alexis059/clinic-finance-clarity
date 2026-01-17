import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Как быстро я увижу результат?",
      answer: "Вы получите Ваш первый отчет и понятный дашборд в первые 14 дней работы. Большинство клиентов отмечают, что уже в первый месяц чувствуют больше понимания в бизнесе, а заметные улучшения в управлении цифрами — через 2–3 месяца.",
    },
    {
      question: "Что мне необходимо, чтобы начать работать?",
      answer: "Нужна минимальная подготовка. Во время нашего первого звонка я точно скажу, какие документы мне понадобятся — обычно это банковские выписки, ваши текущие бухгалтерские отчёты и доступ к вашей бухгалтерской программе. Основную работу по анализу и настройке беру на себя.",
    },
    {
      question: "Как вы обеспечиваете конфиденциальность данных?",
      answer: "Все проекты начинаются с подписания NDA (соглашения о неразглашении) до передачи какой-либо информации. Я ежедневно работаю с конфиденциальными данными медицинского бизнеса и соблюдаю строгие протоколы безопасности. Ваша финансовая информация никогда не передаётся третьим лицам.",
    },
    {
      question: "Чем Вы отличаетесь от бухгашлтерии?",
      answer: "Бухгалтеры в основном сосредоточены на налоговом учёте, соблюдении требований и отчётности по прошлым периодам. Я фокусируюсь на управленческом учёте — помогаю вам понимать прибыльность, прогнозировать денежные потоки и принимать решения на основе будущих показателей. Мы дополняем работу вашего бухгалтера, а не заменяем его.",
    },
    {
      question: "Нужно ли мне разбираться в финансах, чтобы работать с вами?",
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
            Частые вопросы
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Частые вопросы от владельцев клиник.
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
