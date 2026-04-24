import SectionHeader from "./SectionHeader";
import { Rocket, Cog, TrendingDown, ShieldCheck, Microscope, HeartPulse } from "lucide-react";

const items = [
  {
    icon: Rocket,
    title: "Accelerate research and innovation",
    desc: "Transform fragmented data into continuous discovery pipelines with AI-driven modeling, simulation, and decision support.",
  },
  {
    icon: Cog,
    title: "Improve operational efficiency",
    desc: "Automate high-friction workflows across trials, hospitals, and labs with intelligent orchestration and monitoring.",
  },
  {
    icon: TrendingDown,
    title: "Reduce development costs",
    desc: "Use predictive analytics and optimization engines to avoid failures early and maximize resource utilization.",
  },
  {
    icon: ShieldCheck,
    title: "Strengthen regulatory compliance",
    desc: "Embed compliance intelligence into documentation, reporting, and audit-ready data traces.",
  },
  {
    icon: Microscope,
    title: "Deliver precision medicine",
    desc: "Combine real-world, clinical, and genomic data to power personalized care at scale.",
  },
  {
    icon: HeartPulse,
    title: "Improve patient outcomes",
    desc: "Support clinicians with trustworthy AI insights that enhance safety, quality, and quality of life.",
  },
];

const Impact = () => {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="container-custom">
        <SectionHeader
          eyebrow="From AI Research to Real-World Impact"
          title="Outcomes that move the needle"
          description="By integrating AI, bioinformatics, advanced analytics, and healthcare expertise, we enable organizations to:"
        />

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it) => (
            <div
              key={it.title}
              className="glass rounded-2xl p-6 group hover:border-primary/40 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                <it.icon className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{it.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;