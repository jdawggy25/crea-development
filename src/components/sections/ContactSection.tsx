"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Phone, Mail } from "lucide-react";

const contacts = [
  {
    name: "Diego Colwell",
    title: "President & Owner",
    phone: "480-341-1881",
    email: "Diego@dcstreamlined.com",
  },
  {
    name: "Alex Yoo",
    title: "Director of Acquisitions",
    phone: "602-299-3679",
    email: "Alex@dcstreamlined.com",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-[#FAF8F5]">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Contact Info */}
          <div className="text-center md:text-left">
            <BlurFade delay={0.1} inView>
              <span className="text-[11px] uppercase tracking-[3px] text-[#8B7355] mb-6 block">
                Contact Us
              </span>
            </BlurFade>

            <BlurFade delay={0.2} inView>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl mb-6 text-[#2C2824] leading-[1.1]">
                Start the
                <br />
                Conversation
              </h2>
            </BlurFade>

            <BlurFade delay={0.3} inView>
              <p className="text-lg text-[#6B6560] mb-12 leading-relaxed max-w-md">
                We invite accredited investors and land owners to discuss
                current and future opportunities.
              </p>
            </BlurFade>

            {/* Contact Cards */}
            <div className="space-y-6">
              {contacts.map((contact, index) => (
                <BlurFade key={contact.name} delay={0.4 + index * 0.1} inView>
                  <div className="group">
                    <h3 className="font-[family-name:var(--font-playfair)] text-xl text-[#2C2824]">
                      {contact.name}
                    </h3>
                    <p className="text-[11px] uppercase tracking-[2px] text-[#8B7355] mb-3">
                      {contact.title}
                    </p>
                    <div className="flex flex-col gap-2">
                      <a
                        href={`tel:${contact.phone.replace(/-/g, "")}`}
                        className="flex items-center justify-center md:justify-start gap-3 text-[#6B6560] hover:text-[#8B7355] transition-colors"
                      >
                        <div className="w-8 h-8 rounded-full bg-[#F4F1ED] flex items-center justify-center group-hover:bg-[#8B7355]/10 transition-colors">
                          <Phone className="w-4 h-4" />
                        </div>
                        <span>{contact.phone}</span>
                      </a>
                      <a
                        href={`mailto:${contact.email}`}
                        className="flex items-center justify-center md:justify-start gap-3 text-[#6B6560] hover:text-[#8B7355] transition-colors"
                      >
                        <div className="w-8 h-8 rounded-full bg-[#F4F1ED] flex items-center justify-center group-hover:bg-[#8B7355]/10 transition-colors">
                          <Mail className="w-4 h-4" />
                        </div>
                        <span className="text-sm">{contact.email}</span>
                      </a>
                    </div>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <BlurFade delay={0.5} inView>
            <MagicCard
              className="p-8 md:p-10 bg-white border-0 shadow-sm"
              gradientColor="rgba(139, 115, 85, 0.08)"
              gradientSize={300}
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-[#2C2824] mb-8">
                Send a Message
              </h3>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-[2px] text-[#6B6560] mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="w-full p-4 bg-[#F8F6F3] border border-[#E8E4DF] text-[#2C2824] placeholder:text-[#6B6560]/50 focus:outline-none focus:ring-2 focus:ring-[#8B7355]/30 focus:border-[#8B7355] transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-[2px] text-[#6B6560] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="w-full p-4 bg-[#F8F6F3] border border-[#E8E4DF] text-[#2C2824] placeholder:text-[#6B6560]/50 focus:outline-none focus:ring-2 focus:ring-[#8B7355]/30 focus:border-[#8B7355] transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[2px] text-[#6B6560] mb-2">
                    Interest
                  </label>
                  <select
                    name="interest"
                    className="w-full p-4 bg-[#F8F6F3] border border-[#E8E4DF] text-[#2C2824] focus:outline-none focus:ring-2 focus:ring-[#8B7355]/30 focus:border-[#8B7355] transition-all appearance-none cursor-pointer"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Select your interest
                    </option>
                    <option value="investor">Investment Opportunities</option>
                    <option value="buyer">Property Buyer</option>
                    <option value="seller">Property Seller</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[2px] text-[#6B6560] mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    className="w-full p-4 bg-[#F8F6F3] border border-[#E8E4DF] text-[#2C2824] placeholder:text-[#6B6560]/50 focus:outline-none focus:ring-2 focus:ring-[#8B7355]/30 focus:border-[#8B7355] transition-all resize-none"
                    required
                  />
                </div>

                <ShimmerButton
                  type="submit"
                  className="w-full py-4"
                  shimmerColor="#8B7355"
                  shimmerSize="0.1em"
                  background="#2C2824"
                  borderRadius="0"
                >
                  <span className="text-[11px] uppercase tracking-[2px] font-semibold">
                    Submit Inquiry
                  </span>
                </ShimmerButton>
              </form>
            </MagicCard>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
