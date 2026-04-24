import SectionHeader from "./SectionHeader";
import { Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Contact"
          title="Contact Us"
          description="Reach the Neura Pulse AI Health Solutions LLP team for technical inquiries or commercial partnerships."
        />

        <div className="mt-14 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="glass rounded-3xl p-7">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-semibold">Phone</h3>
            </div>
            <ul className="space-y-3">
              <li>
                <a href="tel:+919920052841" className="text-foreground hover:text-primary transition-colors">
                  +91 9920052841
                </a>
              </li>
              <li>
                <a href="tel:+919123531008" className="text-foreground hover:text-primary transition-colors">
                  +91 9123531008
                </a>
              </li>
            </ul>
          </div>

          <div className="glass rounded-3xl p-7">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center text-accent">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-semibold">Email</h3>
            </div>
            <ul className="space-y-4">
              <li>
                <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-1">
                  Technical Director
                </div>
                <a
                  href="mailto:technicaldirector@neurapulse-aihealthsolutions.com"
                  className="text-sm text-foreground hover:text-primary transition-colors break-all"
                >
                  technicaldirector@neurapulse-aihealthsolutions.com
                </a>
              </li>
              <li>
                <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-1">
                  Commercial Director
                </div>
                <a
                  href="mailto:commercialdirector@neurapulse-aihealthsolutions.com"
                  className="text-sm text-foreground hover:text-primary transition-colors break-all"
                >
                  commercialdirector@neurapulse-aihealthsolutions.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;