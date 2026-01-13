import { Shield, Award, Users, Building } from "lucide-react";
import expertPhoto from "@/assets/expert-photo.jpg";

const ExpertSection = () => {
  const credentials = [
    { icon: Building, text: "50+ medical businesses served" },
    { icon: Users, text: "Clinics from 5 to 200 employees" },
    { icon: Award, text: "Certified Financial Professional" },
    { icon: Shield, text: "All projects under NDA" },
  ];

  return (
    <section id="expert" className="section-padding">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
              Your Financial Partner
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Specialized in Medical Business Finance
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              With over 10 years of experience working exclusively with healthcare businesses, 
              I understand the unique financial challenges of running a medical practice. 
              From cash flow management to growth planning, I help clinic owners gain clarity 
              and control over their finances.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I believe in making finance simple and actionable. No jargon, no confusing reports — 
              just clear insights that help you make better decisions for your clinic.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {credentials.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/15 rounded-3xl blur-3xl transform -translate-x-4 translate-y-4" />
              <img
                src={expertPhoto}
                alt="Financial Expert"
                className="relative w-72 md:w-80 h-auto rounded-3xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertSection;
