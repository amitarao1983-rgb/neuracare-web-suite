import SectionHeader from "./SectionHeader";
import { Brain, FlaskConical, Dna } from "lucide-react";

const products = [
  {
    icon: Brain,
    tag: "LifeSciGPT™",
    title: "Domain-Specific Knowledge AI for Life Sciences",
    desc: "A custom GPT platform trained on biomedical literature, regulatory guidelines, and curated scientific datasets to support researchers, clinicians, and pharmaceutical professionals.",
    capabilities: [
      "Scientific literature analysis",
      "Drug discovery insights",
      "Regulatory documentation support",
      "Clinical protocol development",
      "Knowledge extraction from biomedical databases",
    ],
    capLabel: "Capabilities",
    apps: [
      "Pharmaceutical research teams",
      "Clinical research organizations",
      "Biotechnology companies",
      "Academic research institutions",
    ],
    appLabel: "Applications",
  },
  {
    icon: FlaskConical,
    tag: "TrialAI™",
    title: "AI Platform for Clinical Trial Optimization",
    desc: "An integrated AI engine for trial design, recruitment, monitoring, and analytics, built to compress timelines and increase probability of success.",
    capabilities: [
      "AI-powered patient matching",
      "Trial feasibility modeling",
      "Risk-based monitoring",
      "Clinical data anomaly detection",
      "Real-time trial analytics dashboards",
    ],
    capLabel: "Core Features",
    apps: [
      "Faster clinical trial timelines",
      "Improved recruitment efficiency",
      "Higher trial success rates",
    ],
    appLabel: "Impact",
  },
  {
    icon: Dna,
    tag: "GenomicAI™",
    title: "Bioinformatics & Genomic Intelligence Platform",
    desc: "A scalable platform that merges AI algorithms with advanced bioinformatics pipelines to accelerate genomic and precision medicine research.",
    capabilities: [
      "Genome sequencing data analysis",
      "Variant identification and annotation",
      "Gene expression analysis",
      "Multi-omics integration",
      "Biomarker discovery",
    ],
    capLabel: "Capabilities",
    apps: [
      "Precision medicine programs",
      "Genomics labs and core facilities",
      "Translational research teams",
    ],
    appLabel: "Applications",
  },
];

const Products = () => {
  return (
    <section id="products" className="py-20 md:py-28 relative">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Product Suite"
          title="Specialized AI Product Portfolio"
          description="Intelligent AI platforms designed for life sciences and healthcare, from research to bedside."
        />

        <div className="mt-14 grid lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div
              key={p.tag}
              className="glass rounded-3xl p-7 flex flex-col hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-hero flex items-center justify-center text-background shadow-glow">
                  <p.icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full border border-primary/40 text-primary bg-primary/5">
                  {p.tag}
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 leading-snug">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{p.desc}</p>

              <div className="mt-auto space-y-5">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-primary mb-2">{p.capLabel}</p>
                  <ul className="space-y-1.5">
                    {p.capabilities.map((c) => (
                      <li key={c} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary mt-1">•</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-accent mb-2">{p.appLabel}</p>
                  <ul className="space-y-1.5">
                    {p.apps.map((a) => (
                      <li key={a} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-accent mt-1">•</span>
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;