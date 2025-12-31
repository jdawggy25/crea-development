"use client";

import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { TextAnimate } from "@/components/ui/text-animate";

const projects = [
  {
    name: "Pierson Estate",
    location: "Paradise Valley",
    status: "In Development",
    image: "/images/pierson-elevation.jpg",
    description: "Modern farmhouse with refined finishes",
  },
  {
    name: "7780 N 65th St",
    location: "Paradise Valley",
    status: "Completed",
    image: "/images/exterior-modern.webp",
    description: "Contemporary desert modern residence",
  },
  {
    name: "Luxury Interior",
    location: "Scottsdale",
    status: "Completed",
    image: "/images/interior-kitchen.webp",
    description: "Open-concept living with designer finishes",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24 lg:py-32 bg-[#FAF8F5]">
      <div className="container px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <BlurFade delay={0.1} inView>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[2px] sm:tracking-[3px] text-[#8B7355] mb-4 sm:mb-6 block">
              Our Work
            </span>
          </BlurFade>

          <BlurFade delay={0.2} inView>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 text-[#2C2824]">
              <TextAnimate animation="blurInUp" by="word">
                Featured Projects
              </TextAnimate>
            </h2>
          </BlurFade>

          <BlurFade delay={0.3} inView>
            <p className="text-base sm:text-lg text-[#6B6560] max-w-2xl mx-auto leading-relaxed px-2">
              A portfolio of luxury residences across Arizona&apos;s most
              sought-after neighborhoods.
            </p>
          </BlurFade>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <BlurFade key={project.name} delay={0.3 + index * 0.1} inView>
              <div className="group relative overflow-hidden bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 active:scale-[0.98]">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                  {/* Status Badge */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                    <span className={`px-2.5 py-1 sm:px-3 text-[9px] sm:text-[10px] uppercase tracking-[1.5px] sm:tracking-[2px] font-medium rounded-sm ${
                      project.status === "Completed"
                        ? "bg-[#8B7355] text-white"
                        : "bg-white/90 text-[#8B7355]"
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                  <p className="text-[9px] sm:text-[10px] uppercase tracking-[1.5px] sm:tracking-[2px] text-[#8B7355] mb-1.5 sm:mb-2">
                    {project.location}
                  </p>
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg sm:text-xl text-[#2C2824] mb-1.5 sm:mb-2 group-hover:text-[#8B7355] transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B6560]">
                    {project.description}
                  </p>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>

        {/* Video Section */}
        <BlurFade delay={0.6} inView>
          <div className="mt-10 md:mt-16 relative overflow-hidden rounded-xl">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              poster="/images/property-poster.jpg"
              className="w-full aspect-[16/10] sm:aspect-video object-cover"
            >
              <source src="/videos/property-tour.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8">
              <p className="text-[9px] sm:text-[10px] uppercase tracking-[1.5px] sm:tracking-[2px] text-white/70 mb-1 sm:mb-2">
                Property Tour
              </p>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl sm:text-2xl md:text-3xl text-white">
                7780 N 65th Street
              </h3>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
