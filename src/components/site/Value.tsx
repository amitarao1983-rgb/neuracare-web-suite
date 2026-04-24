import SectionHeader from "./SectionHeader";
import { Zap, Settings2, PiggyBank, HeartPulse, Sparkles } from "lucide-react";

const values = [
  { icon: Zap, title: "Speed", desc: "Accelerate research, clinical trials, and diagnostic decision-making." },
  { icon: Settings2, title: "Efficiency", desc: "Automate complex workflows and reduce manual effort." },
  { icon: PiggyBank, title: "Cost Reduction", desc: "Lower operational and R&D costs through predictive analytics." },
  { icon: HeartPulse, title: "Better Patient Outcomes", desc: "Enable data-driven treatment decisions and precision medicine." },
  { icon: Sparkles, title: "Improved Quality of Life", desc: "Deliver innovative healthcare solutions that enhance long-term outcomes." },
];

const pipeline = [
  "Ingest structured & unstructured data",
  "Apply AI, ML & bioinformatics engines",
  "Generate insights, predictions & recommendations",
  "Embed into clinical and operational workflows",
  "Continuously learn from outcomes and feedback",
];

const Value = () => {
  return (
    <section id="value" className="py-20 md:py-28 relative">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Our Value Proposition"
          title="Measurable impact across healthcare and life sciences"
          description="From discovery to delivery — outcomes you can quantify."
        />

        <div className="mt-14 grid lg:grid-cols-[1.3fr_1fr] gap-6">
          <div className="grid sm:grid-cols-2 gap-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="glass rounded-2xl p-5 hover:border-primary/40 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary mb-3">
                  <v.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-base font-semibold mb-1">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>

          <div className="glass-strong rounded-3xl p-7">
            <h3 className="font-display text-xl font-semibold mb-3">AI-First Healthcare Ecosystems</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Retrieval-Augmented Generation, custom GPT systems, and interoperable data platforms combine to
              create a continuous learning loop between research, clinical practice, and real-world outcomes.
            </p>

            <ol className="mt-6 space-y-3">
              {pipeline.map((p, i) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-hero text-background text-xs font-semibold flex items-center justify-center shadow-glow">
                    {i + 1}
                  </span>
                  <span className="text-sm text-foreground/90 pt-0.5">{p}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Value;