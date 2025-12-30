"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { TextAnimate } from "@/components/ui/text-animate";
import { BorderBeam } from "@/components/ui/border-beam";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-[#F8F6F3]">
      <div className="container">
        {/* Decorative Diamond */}
        <BlurFade delay={0.1} inView>
          <div className="flex justify-center mb-8">
            <div className="w-3 h-3 border border-[#8B7355] rotate-45" />
          </div>
        </BlurFade>

        {/* Divider */}
        <BlurFade delay={0.15} inView>
          <div className="w-full h-px bg-[#E8E4DF] mb-16" />
        </BlurFade>

        {/* Content */}
        <div className="text-center max-w-3xl mx-auto">
          <BlurFade delay={0.2} inView>
            <span className="text-[11px] uppercase tracking-[3px] text-[#6B6560] mb-6 block">
              Future Developments
            </span>
          </BlurFade>

          <BlurFade delay={0.3} inView>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl mb-8 text-[#2C2824]">
              <TextAnimate animation="blurInUp" by="word">
                The Exclusive Collection
              </TextAnimate>
            </h2>
          </BlurFade>

          <BlurFade delay={0.4} inView>
            <p className="text-lg text-[#6B6560] mb-12 leading-relaxed max-w-xl mx-auto">
              A curated portfolio of bespoke residences currently in design
              along the hillsides of Paradise Valley.
            </p>
          </BlurFade>

          {/* Coming Soon Button with Border Beam */}
          <BlurFade delay={0.5} inView>
            <div className="inline-block relative">
              <button className="px-10 py-4 border border-[#C9A96E] text-[#C9A96E] text-[11px] uppercase tracking-[3px] font-medium bg-transparent hover:bg-[#C9A96E]/5 transition-colors duration-300">
                In Progress
              </button>
              <BorderBeam
                size={80}
                duration={8}
                colorFrom="#C9A96E"
                colorTo="#8B7355"
                borderWidth={1}
              />
            </div>
          </BlurFade>

          {/* Watermark Text */}
          <BlurFade delay={0.6} inView>
            <p className="font-[family-name:var(--font-playfair)] text-[60px] sm:text-[90px] md:text-[120px] lg:text-[180px] text-[#E8E4DF] leading-none mt-8 select-none pointer-events-none">
              COMING SOON
            </p>
          </BlurFade>
        </div>

        {/* Bottom Divider */}
        <BlurFade delay={0.7} inView>
          <div className="w-full h-px bg-[#E8E4DF] mt-16" />
        </BlurFade>
      </div>
    </section>
  );
}
