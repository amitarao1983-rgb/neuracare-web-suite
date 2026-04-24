import logo from "@/assets/neurapulse-logo.png";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section id="top" className="relative pt-36 md:pt-44 pb-20 md:pb-28 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] rounded-full bg-accent/20 blur-[120px]" />
      </div>

      <div className="container-custom grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
        <div className="animate-fade-in-up">
          <p className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-primary mb-6 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5">
            <Sparkles className="w-3.5 h-3.5" />
            Neura Pulse AI Health Solutions LLP
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
            Accelerating Innovation Across{" "}
            <span className="text-gradient">Life Sciences &amp; Healthcare</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            We build advanced Artificial Intelligence platforms and customized GPT-based knowledge systems
            integrated with Retrieval-Augmented Generation tools that transform research, medicine, and
            healthcare delivery — creating a highly competitive edge for your organization.
          </p>
          <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Our AI solutions empower organizations in clinical research, pharmaceutical development,
            biotechnology, genomics, and hospital systems to make faster, data-driven decisions that
            improve efficiency, reduce costs, and enhance patient outcomes.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#industries" className="btn-primary-gradient inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium">
              Explore industry solutions <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#products" className="btn-outline-glow inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium">
              View AI product suite
            </a>
          </div>
        </div>

        {/* Logo orbit visual */}
        <div className="relative mx-auto lg:mx-0 w-full max-w-md aspect-square animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          {/* Orbits */}
          <div className="absolute inset-0 rounded-full border border-border/60 animate-spin-slower" />
          <div className="absolute inset-8 rounded-full border border-border/40 animate-spin-slow" style={{ animationDirection: "reverse" }} />
          <div className="absolute inset-16 rounded-full border border-primary/20" />

          {/* Glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-glow" />

          {/* Orbit dots */}
          <span className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-glow" />
          <span className="absolute bottom-2 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-accent shadow-glow-violet" />
          <span className="absolute top-1/2 left-2 -translate-y-1/2 w-2 h-2 rounded-full bg-[hsl(var(--brand-orange))]" />
          <span className="absolute top-1/2 right-2 -translate-y-1/2 w-2 h-2 rounded-full bg-[hsl(var(--brand-blue))]" />

          {/* Center logo */}
          <div className="absolute inset-[22%] rounded-full overflow-hidden ring-2 ring-primary/40 shadow-glow animate-float">
            <img src={logo} alt="Neura Pulse AI logo" className="w-full h-full object-cover" />
          </div>

          {/* Floating chips */}
          <div className="absolute -top-4 left-4 glass rounded-2xl px-4 py-3 text-xs">
            <div className="text-muted-foreground">Clinical R&amp;D</div>
            <div className="text-primary font-semibold">↑ 40% faster insights</div>
          </div>
          <div className="absolute -bottom-4 right-2 glass rounded-2xl px-4 py-3 text-xs">
            <div className="text-muted-foreground">Operational efficiency</div>
            <div className="text-[hsl(var(--brand-orange))] font-semibold">↓ 25% costs</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;