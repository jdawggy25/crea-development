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
    <section id="projects" className="py-24 md:py-32 bg-[#FAF8F5]">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <BlurFade delay={0.1} inView>
            <span className="text-[11px] uppercase tracking-[3px] text-[#8B7355] mb-6 block">
              Our Work
            </span>
          </BlurFade>

          <BlurFade delay={0.2} inView>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl mb-6 text-[#2C2824]">
              <TextAnimate animation="blurInUp" by="word">
                Featured Projects
              </TextAnimate>
            </h2>
          </BlurFade>

          <BlurFade delay={0.3} inView>
            <p className="text-lg text-[#6B6560] max-w-2xl mx-auto leading-relaxed">
              A portfolio of luxury residences across Arizona&apos;s most
              sought-after neighborhoods.
            </p>
          </BlurFade>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <BlurFade key={project.name} delay={0.3 + index * 0.1} inView>
              <div className="group relative overflow-hidden bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-500">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 text-[10px] uppercase tracking-[2px] font-medium ${
                      project.status === "Completed"
                        ? "bg-[#8B7355] text-white"
                        : "bg-white/90 text-[#8B7355]"
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-[10px] uppercase tracking-[2px] text-[#8B7355] mb-2">
                    {project.location}
                  </p>
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl text-[#2C2824] mb-2 group-hover:text-[#8B7355] transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm text-[#6B6560]">
                    {project.description}
                  </p>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>

        {/* Video Section */}
        <BlurFade delay={0.6} inView>
          <div className="mt-16 relative overflow-hidden rounded-lg">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full aspect-video object-cover"
            >
              <source src="/videos/property-tour.mov" type="video/quicktime" />
              <source src="/videos/property-tour.mov" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8">
              <p className="text-[10px] uppercase tracking-[2px] text-white/70 mb-2">
                Property Tour
              </p>
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-white">
                7780 N 65th Street
              </h3>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
