import SectionHeader from "./SectionHeader";

const core = [
  "Artificial Intelligence",
  "Machine Learning",
  "Bioinformatics",
  "Clinical Data Analytics",
  "Custom GPT Knowledge Systems",
  "Interoperable Healthcare Data Platforms",
];

const integrations = [
  "Electronic Health Records (EHR)",
  "Clinical Trial Management Systems",
  "Laboratory Information Systems",
  "Genomic Data Platforms",
];

const Technology = () => {
  return (
    <section id="technology" className="py-20 md:py-28 relative">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Technology"
          title="Our Technology Framework"
          description="A composable stack of AI, analytics, and healthcare data platforms that integrate seamlessly with your environment."
        />

        <div className="mt-14 grid lg:grid-cols-3 gap-6">
          <div className="glass rounded-3xl p-7">
            <h3 className="font-display text-lg font-semibold mb-4">Core Technologies</h3>
            <ul className="space-y-2">
              {core.map((c) => (
                <li key={c} className="text-sm text-muted-foreground flex gap-2">
                  <span className="text-primary mt-1">▸</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass rounded-3xl p-7">
            <h3 className="font-display text-lg font-semibold mb-4">Systems We Integrate With</h3>
            <ul className="space-y-2">
              {integrations.map((c) => (
                <li key={c} className="text-sm text-muted-foreground flex gap-2">
                  <span className="text-accent mt-1">▸</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass rounded-3xl p-7 relative overflow-hidden">
            <div className="relative h-64 mb-4">
              <div className="absolute inset-0 rounded-full border border-border/60 animate-spin-slower" />
              <div className="absolute inset-6 rounded-full border border-primary/20 animate-spin-slow" style={{ animationDirection: "reverse" }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-hero shadow-glow flex items-center justify-center text-background text-xs font-semibold">
                  AI Core
                </div>
              </div>
              <span className="absolute top-1 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-full glass text-[10px] font-mono">RAG</span>
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-full glass text-[10px] font-mono">GPT</span>
              <span className="absolute top-1/2 -translate-y-1/2 left-1 px-2.5 py-1 rounded-full glass text-[10px] font-mono">EHR</span>
              <span className="absolute top-1/2 -translate-y-1/2 right-1 px-2.5 py-1 rounded-full glass text-[10px] font-mono">Genomics</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Modular components can be deployed on-premises, in private cloud, or hybrid architectures to meet
              regulatory, privacy, and performance requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;