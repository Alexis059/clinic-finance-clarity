import { Button } from "@/components/ui/button";
import { Shield, FileCheck, Clock, Stethoscope } from "lucide-react";
import expertPhoto from "@/assets/expert-photo.jpg";

const HeroSection = () => {
  const trustPoints = [
    { icon: Shield, text: "NDA Protected" },
    { icon: FileCheck, text: "Official Contract" },
    { icon: Stethoscope, text: "Medical Focus" },
    { icon: Clock, text: "Response in 2h" },
  ];

  return (
    <section className="hero-section min-h-screen flex items-center pt-24 pb-12 md:pt-28 md:pb-16">
      <div className="section-container w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-fade-up">
            <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
              Fractional CFO for Medical Businesses
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Clinic Profit Under Control:{" "}
              <span className="text-primary">Financial Clarity in 14 Days</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              I set up management accounting, plan-fact control, and cash forecast. 
              Clear for owners, without financial jargon.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button variant="hero" size="xl" asChild>
                <a href="#contact">Get Financial Diagnostics</a>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <a href="#services">See Services</a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-4 md:gap-6">
              {trustPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <point.icon className="w-4 h-4 text-primary" />
                  <span>{point.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-up delay-200 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl transform translate-x-4 translate-y-4" />
              <img
                src={expertPhoto}
                alt="Financial Expert"
                className="relative w-80 md:w-96 h-auto rounded-3xl shadow-2xl object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-lg border border-border">
                <p className="text-sm font-medium text-foreground">10+ Years</p>
                <p className="text-xs text-muted-foreground">Medical Finance Expert</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
