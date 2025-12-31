"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { TextAnimate } from "@/components/ui/text-animate";
import { NumberTicker } from "@/components/ui/number-ticker";

export function AcquisitionsSection() {
  return (
    <section id="acquisitions" className="py-24 md:py-32 bg-[#1C1917] text-white relative overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(139,115,85,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <BlurFade delay={0.1} inView>
            <span className="text-[11px] uppercase tracking-[3px] text-[#C9A96E] mb-6 block">
              Proven Track Record
            </span>
          </BlurFade>

          <BlurFade delay={0.2} inView>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl leading-[1.1] mb-6">
              <TextAnimate animation="blurInUp" by="word">
                Strategic
              </TextAnimate>{" "}
              <span className="text-[#C9A96E]">Acquisitions</span>
            </h2>
          </BlurFade>

          <BlurFade delay={0.3} inView>
            <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
              The CREA Development team has been instrumental in over{" "}
              <span className="text-[#C9A96E] font-medium">$300M</span> in off-market
              luxury real estate acquisitions over the past two years.
            </p>
          </BlurFade>
        </div>

        {/* Stats Row */}
        <BlurFade delay={0.4} inView>
          <div className="flex flex-wrap justify-center gap-12 md:gap-20 mb-16">
            <div className="text-center">
              <div className="flex items-baseline justify-center">
                <span className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[#C9A96E]">
                  $
                </span>
                <NumberTicker
                  value={300}
                  className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[#C9A96E]"
                />
                <span className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[#C9A96E]">
                  M+
                </span>
              </div>
              <p className="text-[10px] uppercase tracking-[2px] text-white/50 mt-2">
                Acquisitions Facilitated
              </p>
            </div>
            <div className="text-center">
              <NumberTicker
                value={2}
                className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[#C9A96E]"
              />
              <span className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[#C9A96E]">
                {" "}Years
              </span>
              <p className="text-[10px] uppercase tracking-[2px] text-white/50 mt-2">
                Track Record
              </p>
            </div>
          </div>
        </BlurFade>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-12" />

        {/* Value Proposition */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <BlurFade delay={0.5} inView>
            <div>
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-white mb-4">
                Off-Market Access
              </h3>
              <p className="text-white/60 leading-relaxed">
                Through deep relationships with local sellers, estate attorneys, and family
                offices, we source opportunities before they reach the open market—securing
                premium parcels at favorable terms.
              </p>
            </div>
          </BlurFade>

          <BlurFade delay={0.6} inView>
            <div>
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-white mb-4">
                Selective Process
              </h3>
              <p className="text-white/60 leading-relaxed">
                We carefully evaluate every opportunity through our proprietary systems,
                selecting only the developments that meet our strict criteria—ensuring
                the best outcomes for our investors.
              </p>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
