import SectionHeader from "./SectionHeader";
import { ArrowUp } from "lucide-react";

const Vision = () => {
  return (
    <section id="vision" className="py-20 md:py-28 relative">
      <div className="container-custom grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <SectionHeader
            eyebrow="Our Vision"
            title="A future where AI augments discovery and care"
            description="We envision a future where AI augments scientific discovery, clinical decision-making, and healthcare delivery, enabling faster innovations and better outcomes for patients worldwide."
            align="left"
          />
          <p className="mt-6 text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl">
            Our mission is to create intelligent healthcare ecosystems that transform research, medicine, and
            patient care. We partner with organizations across the value chain to design AI solutions that are
            ethical, explainable, and aligned with clinical and scientific best practices.
          </p>
        </div>

        <div className="glass-strong rounded-3xl p-8 md:p-10">
          <h3 className="font-display text-2xl font-semibold leading-snug">
            Ready to explore what AI can unlock for{" "}
            <span className="text-gradient">your organization?</span>
          </h3>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Share your current challenges in clinical research, operations, or data strategy, and we will map a
            tailored AI roadmap that aligns with your regulatory, scientific, and business priorities.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary-gradient inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium">
              Contact our team
            </a>
            <a href="#top" className="btn-outline-glow inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium">
              <ArrowUp className="w-4 h-4" /> Back to top
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;