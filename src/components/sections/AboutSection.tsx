"use client";

import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { TextAnimate } from "@/components/ui/text-animate";

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#FAF8F5]">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Text Content */}
          <div className="max-w-xl text-center md:text-left">
            <BlurFade delay={0.1} inView>
              <span className="text-[11px] uppercase tracking-[3px] text-[#8B7355] mb-6 block">
                About Crea
              </span>
            </BlurFade>

            <BlurFade delay={0.2} inView>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl mb-8 text-[#2C2824] leading-[1.15]">
                <TextAnimate animation="slideUp" by="word">
                  Thoughtful
                </TextAnimate>{" "}
                <span className="italic text-[#8B7355]">Creation</span>
              </h2>
            </BlurFade>

            <BlurFade delay={0.3} inView>
              <p className="text-[#6B6560] mb-6 leading-relaxed">
                <strong className="text-[#2C2824]">Crea Development</strong> is
                a Scottsdale-based luxury residential development firm
                specializing in high-end, ground-up spec homes throughout
                Arizona&apos;s most sought-after markets.
              </p>
            </BlurFade>

            <BlurFade delay={0.4} inView>
              <p className="text-[#6B6560] mb-6 leading-relaxed">
                The firm&apos;s name, <em>Crea</em>, is derived from the Latin
                meaning &ldquo;to think&rdquo; and &ldquo;to create,&rdquo;
                reflecting a thoughtful, design-driven approach to luxury
                residential development.
              </p>
            </BlurFade>

            <BlurFade delay={0.5} inView>
              <p className="text-[#6B6560] mb-6 leading-relaxed">
                We focus on delivering architecturally refined residences in
                premier neighborhoods where long-term demand, land scarcity, and
                lifestyle appeal intersect. Our primary markets include Paradise
                Valley, Arcadia, Scottsdale, and the Biltmore area.
              </p>
            </BlurFade>

            <BlurFade delay={0.6} inView>
              <p className="text-[#6B6560] leading-relaxed">
                Crea Development takes a disciplined, data-driven approach to
                every project—from land acquisition and underwriting to design,
                construction, and exit strategy.
              </p>
            </BlurFade>

            {/* Decorative Diamond */}
            <BlurFade delay={0.7} inView>
              <div className="flex justify-center md:justify-start mt-12">
                <div className="w-3 h-3 border border-[#8B7355] rotate-45" />
              </div>
            </BlurFade>
          </div>

          {/* Image */}
          <BlurFade delay={0.4} inView>
            <div className="relative">
              <Image
                src="/images/detail.png"
                alt="Architectural Detail - Modern Luxury Construction"
                width={600}
                height={800}
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
