import { useState } from "react";
import SectionHeader from "./SectionHeader";
import { ChevronDown } from "lucide-react";

type SubItem = { title: string; workflow: string[]; value: string[] };
type Industry = { num: string; title: string; intro: string; items: SubItem[] };

const industries: Industry[] = [
  {
    num: "01",
    title: "Clinical Research",
    intro:
      "Clinical trials generate massive volumes of complex data. AI unlocks better trial design, faster recruitment, and continuous quality.",
    items: [
      {
        title: "Clinical Trial Design & Protocol Optimization",
        workflow: [
          "Literature and data mining",
          "Trial endpoint modeling",
          "Eligibility criteria optimization",
          "Predictive trial outcome analysis",
        ],
        value: ["Reduced protocol amendments", "Faster trial initiation", "Improved success probability"],
      },
      {
        title: "Patient Recruitment & Site Selection",
        workflow: [
          "Patient eligibility matching",
          "Trial feasibility analysis",
          "Geographic site optimization",
          "Enrollment prediction modeling",
        ],
        value: ["Faster patient recruitment", "Increased trial diversity", "Reduced recruitment costs"],
      },
      {
        title: "Clinical Data Monitoring & Management",
        workflow: [
          "Automated data validation",
          "Risk-based monitoring",
          "Real-time anomaly detection",
          "Data integrity checks",
        ],
        value: [
          "Early detection of risks",
          "Improved data quality",
          "Faster clinical decisions",
          "Reduced operational overhead",
        ],
      },
      {
        title: "Regulatory Documentation & Compliance",
        workflow: [
          "Regulatory document generation",
          "Compliance intelligence systems",
          "Automated report generation",
          "Regulatory gap analysis",
        ],
        value: ["Faster regulatory submissions", "Reduced compliance risk"],
      },
    ],
  },
  {
    num: "02",
    title: "Pharmaceutical Industry",
    intro:
      "AI accelerates discovery, development, safety surveillance, and commercialization of transformative therapies.",
    items: [
      {
        title: "Drug Discovery & Target Identification",
        workflow: [
          "Biological pathway analysis",
          "Drug–target interaction modeling",
          "Molecular screening",
          "Predictive therapeutic modeling",
        ],
        value: ["Faster drug discovery", "Reduced early-stage research costs"],
      },
      {
        title: "Preclinical Research & Toxicology",
        workflow: ["Toxicity prediction modeling", "Pharmacokinetic analysis", "Compound screening"],
        value: ["Reduced preclinical failure rates", "Faster lead optimization"],
      },
      {
        title: "Clinical Development & Biomarker Discovery",
        workflow: ["Biomarker identification", "Patient segmentation", "Predictive response modeling"],
        value: ["Improved clinical trial success rates", "Precision medicine development"],
      },
      {
        title: "Pharmacovigilance & Drug Safety",
        workflow: [
          "Adverse event detection",
          "Safety signal identification",
          "Risk management analytics",
        ],
        value: ["Faster safety signal detection", "Enhanced patient safety"],
      },
    ],
  },
  {
    num: "03",
    title: "Biotechnology Industry",
    intro: "Advanced analytics and biological insights for therapies, diagnostics, and biomanufacturing.",
    items: [
      {
        title: "Biomarker Discovery",
        workflow: ["Omics data integration", "Disease pathway modeling", "Biomarker validation"],
        value: ["Improved diagnostics", "Targeted therapies"],
      },
      {
        title: "Precision Medicine",
        workflow: [
          "Patient stratification",
          "Treatment response prediction",
          "Personalized therapy optimization",
        ],
        value: ["More effective treatments", "Reduced adverse drug reactions"],
      },
      {
        title: "Biomanufacturing Optimization",
        workflow: [
          "Process monitoring",
          "Predictive quality analytics",
          "Production yield optimization",
        ],
        value: ["Reduced manufacturing costs", "Improved product consistency"],
      },
    ],
  },
  {
    num: "04",
    title: "Hospitals & Healthcare Systems",
    intro: "AI-driven care delivery, diagnostics, and operations for smarter hospitals and health networks.",
    items: [
      {
        title: "Clinical Decision Support Systems",
        workflow: [
          "Patient data integration",
          "Risk prediction models",
          "Treatment recommendation systems",
        ],
        value: ["Improved diagnostic accuracy", "Better treatment outcomes"],
      },
      {
        title: "Medical Imaging & Diagnostics",
        workflow: [
          "Radiology image analysis",
          "Pathology slide interpretation",
          "Early disease detection",
        ],
        value: ["Faster diagnoses", "Reduced clinician workload"],
      },
      {
        title: "Hospital Operations & Workflow Optimization",
        workflow: [
          "Patient flow optimization",
          "Bed management systems",
          "Resource allocation modeling",
        ],
        value: ["Reduced wait times", "Improved operational efficiency"],
      },
      {
        title: "Remote Monitoring & Chronic Disease Management",
        workflow: [
          "Wearable device integration",
          "Predictive health risk modeling",
          "Personalized care plans",
        ],
        value: ["Reduced hospital readmissions", "Improved chronic disease management"],
      },
    ],
  },
  {
    num: "05",
    title: "Genomics, Bioinformatics & Drug Discovery",
    intro:
      "AI and bioinformatics unlock deeper insights into genetic variation, disease mechanisms, and therapeutic targets.",
    items: [
      {
        title: "Genomics Data Analysis",
        workflow: [
          "Genome sequencing data processing",
          "Variant calling and annotation",
          "Genetic risk modeling",
        ],
        value: ["Faster genomic insights", "Improved disease risk prediction"],
      },
      {
        title: "Bioinformatics & Multi-Omics Integration",
        workflow: [
          "Transcriptomics analysis",
          "Proteomics data integration",
          "Systems biology modeling",
        ],
        value: ["Improved biological insights", "Accelerated biomarker discovery"],
      },
      {
        title: "AI-Driven Drug Discovery",
        workflow: [
          "Compound screening",
          "Protein structure modeling",
          "Drug–target interaction prediction",
        ],
        value: ["Reduced drug discovery timelines", "Increased success rates in drug development"],
      },
      {
        title: "Precision Genomics & Personalized Medicine",
        workflow: [
          "Genetic risk stratification",
          "Pharmacogenomics analysis",
          "Personalized therapy recommendations",
        ],
        value: ["Tailored treatments", "Improved therapeutic outcomes"],
      },
    ],
  },
];

const IndustryCard = ({ industry }: { industry: Industry }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <div className="glass rounded-3xl p-6 md:p-8 hover:border-primary/30 transition-colors">
      <div className="flex items-start gap-4 mb-6">
        <span className="font-display text-3xl text-gradient font-bold leading-none">
          {industry.num}
        </span>
        <div>
          <h3 className="font-display text-2xl font-semibold">{industry.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground max-w-xl">{industry.intro}</p>
        </div>
      </div>

      <div className="space-y-2">
        {industry.items.map((item, i) => {
          const isOpen = openIdx === i;
          return (
            <div key={item.title} className="rounded-2xl border border-border/60 bg-secondary/20 overflow-hidden">
              <button
                onClick={() => setOpenIdx(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-secondary/40 transition-colors"
              >
                <span className="font-medium text-sm md:text-base">{item.title}</span>
                <ChevronDown
                  className={`w-4 h-4 text-muted-foreground transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div className="grid md:grid-cols-2 gap-6 px-5 pb-5 pt-2 animate-fade-in-up">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-primary mb-2">Workflow</p>
                    <ul className="space-y-1.5">
                      {item.workflow.map((w) => (
                        <li key={w} className="text-sm text-muted-foreground flex gap-2">
                          <span className="text-primary mt-1">•</span>
                          {w}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-[hsl(var(--brand-orange))] mb-2">
                      Value
                    </p>
                    <ul className="space-y-1.5">
                      {item.value.map((v) => (
                        <li key={v} className="text-sm text-muted-foreground flex gap-2">
                          <span className="text-[hsl(var(--brand-orange))] mt-1">•</span>
                          {v}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Industries = () => {
  return (
    <section id="industries" className="py-20 md:py-28 relative">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Industries"
          title="Industry Domains We Serve"
          description="End-to-end AI solutions for clinical research, pharmaceuticals, biotechnology, genomics, and healthcare systems."
        />
        <div className="mt-14 space-y-6">
          {industries.map((ind) => (
            <IndustryCard key={ind.num} industry={ind} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;