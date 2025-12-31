"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { TextAnimate } from "@/components/ui/text-animate";
import { NumberTicker } from "@/components/ui/number-ticker";
import { BorderBeam } from "@/components/ui/border-beam";

export function DevelopmentsSection() {
  return (
    <section id="developments" className="py-24 md:py-32 bg-[#FAF8F5]">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <BlurFade delay={0.1} inView>
            <span className="text-[11px] uppercase tracking-[3px] text-[#8B7355] mb-6 block">
              2026 Pipeline
            </span>
          </BlurFade>

          <BlurFade delay={0.2} inView>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl text-[#2C2824] leading-[1.1] mb-6">
              <TextAnimate animation="slideUp" by="word">
                Curated
              </TextAnimate>{" "}
              <span className="italic text-[#8B7355]">Developments</span>
            </h2>
          </BlurFade>

          <BlurFade delay={0.3} inView>
            <p className="text-lg text-[#6B6560] max-w-3xl mx-auto leading-relaxed">
              Each property is carefully selected through our proprietary evaluation
              process, ensuring only the highest-potential developments make it
              into our portfolio.
            </p>
          </BlurFade>
        </div>

        {/* Stats Card */}
        <BlurFade delay={0.4} inView>
          <div className="relative max-w-4xl mx-auto p-8 md:p-12 bg-white border border-[#E8E4DF] rounded-2xl overflow-hidden">
            <BorderBeam
              size={120}
              duration={10}
              colorFrom="#C9A96E"
              colorTo="#8B7355"
              borderWidth={1}
            />

            <div className="grid md:grid-cols-3 gap-8 md:gap-12 text-center">
              <div>
                <div className="flex items-baseline justify-center">
                  <span className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[#8B7355]">
                    $
                  </span>
                  <NumberTicker
                    value={25}
                    className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[#8B7355]"
                  />
                  <span className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[#8B7355]">
                    M+
                  </span>
                </div>
                <p className="text-[10px] uppercase tracking-[2px] text-[#6B6560] mt-3">
                  In Development 2026
                </p>
              </div>

              <div>
                <div className="flex items-baseline justify-center">
                  <NumberTicker
                    value={3}
                    className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[#8B7355]"
                  />
                  <span className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[#8B7355]">
                    +
                  </span>
                </div>
                <p className="text-[10px] uppercase tracking-[2px] text-[#6B6560] mt-3">
                  Properties Secured
                </p>
              </div>

              <div>
                <span className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[#8B7355]">
                  More
                </span>
                <p className="text-[10px] uppercase tracking-[2px] text-[#6B6560] mt-3">
                  Coming Soon
                </p>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-[#E8E4DF]">
              <p className="text-[#6B6560] text-center leading-relaxed max-w-2xl mx-auto">
                We have additional builds in the pipeline and are actively seeking
                new opportunities. With additional investor capital, we can expand
                into more premium properties across Arizona&apos;s most sought-after
                neighborhoods.
              </p>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
