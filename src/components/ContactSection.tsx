import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shield, Clock, CheckCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const FORM_ACTION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeMht_FFhu7jCt3U1_Rx2bIknlVeZ8cnFTi9YDC9_xwZaeCwQ/formResponse";

const ENTRY_NAME = "entry.659264613";
const ENTRY_CONTACT = "entry.938831039";
const ENTRY_ORG = "entry.505228374";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    clinicName: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const data = new URLSearchParams();
      data.append(ENTRY_NAME, formData.name);
      data.append(ENTRY_CONTACT, formData.contact);
      // если "Организация" в Google Form обязательная — отправим "-" когда поле пустое
      data.append(ENTRY_ORG, formData.clinicName?.trim() ? formData.clinicName : "-");

      await fetch(FORM_ACTION_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: data.toString(),
      });

      toast({
        title: "Мы получили Вашу заявку",
        description: "Мы свяжемся с Вами в течении 6 часов",
      });

      setFormData({ name: "", contact: "", clinicName: "" });
    } catch {
      toast({
        title: "Не удалось отправить заявку",
        description: "Проверьте интернет и попробуйте ещё раз.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    "Бесплатная диагностика",
    "Индивидуальный подход",
    "Пошаговый план действий",
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="card-elevated p-8 md:p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
              <div>
                <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
                  Сделай первый шаг
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Получите финансовую диагностику Вашей клиники
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Сделайте первый шаг к финансовой ясности. После бесплатной диагностики Вы получите персональный план действий.
                </p>

                <ul className="space-y-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary" />
                    <span>Без спама</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>Ответим в течении 6 часов</span>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя *</Label>
                  <Input
                    id="name"
                    placeholder="Анна Петрова"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact">Контактные данные *</Label>
                  <Input
                    id="contact"
                    placeholder="+7 (999) 123-45-67 or @telegram"
                    value={formData.contact}
                    onChange={(e) =>
                      setFormData({ ...formData, contact: e.target.value })
                    }
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="clinicName">Организация (не обязательно)</Label>
                  <Input
                    id="clinicName"
                    placeholder="Семейная стоматология"
                    value={formData.clinicName}
                    onChange={(e) =>
                      setFormData({ ...formData, clinicName: e.target.value })
                    }
                    className="h-12"
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="xl"
                  className="w-full mt-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Отправка..." : "Записаться на диагностику"}
                </Button>

                <p className="text-xs text-center text-muted-foreground mt-4">
                  Отправляя форму, вы соглашаетесь с нашей Политикой конфиденциальности.
                  Мы ответим в рабочие часы (пн–пт, 9:00–18:00).
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;



