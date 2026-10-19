// app/(marketing)/contact/page.tsx

import Link from "next/link"
import type { Metadata } from "next"
import {
  RiMapPinFill,
  RiArrowRightLine,
  RiArrowRightUpLine,
  RiTimeFill,
  RiShieldCheckFill,
  RiCustomerServiceFill,
  RiPhoneFill,
  RiMailFill,
  RiWhatsappFill,
  RiNavigationFill,
  RiFlashlightFill,
  RiCheckboxCircleFill,
  RiStarFill,
  RiVerifiedBadgeFill,
  RiRoadMapFill,
  RiQuestionLine,
  RiGlobalFill,
  RiUserFill,
  RiMessageFill,
  RiServiceFill,
  RiCalendarCheckFill,
} from "@remixicon/react"
import { SiteConfig } from "@/config/siteConfig"

/* ============ SEO Metadata ============ */
export const metadata: Metadata = {
  title: `Contact Us | ${SiteConfig.brandName}`,
  description: `Contact ${SiteConfig.brandName} for 24/7 mobile car repair in ${SiteConfig.city}. Call ${SiteConfig.displayNumber}, WhatsApp us, or book online — we respond within minutes.`,
  alternates: { canonical: `${SiteConfig.url}/contact` },
}

/* ============ Contact Channels ============ */
const CONTACT_CHANNELS = [
  {
    icon: RiPhoneFill,
    label: "Call 24/7",
    value: SiteConfig.displayNumber,
    href: SiteConfig.numberCallLink,
    description: "Instant dispatch — average response under 1 minute",
    primary: true,
  },
  {
    icon: RiWhatsappFill,
    label: "WhatsApp",
    value: "Chat Now",
    href: SiteConfig.whatsappCallLink,
    description: "Send your location + issue for immediate help",
    external: true,
  },
  {
    icon: RiMailFill,
    label: "Email",
    value: SiteConfig.email,
    href: `mailto:${SiteConfig.email}`,
    description: "For non-urgent inquiries and quotes",
  },
  {
    icon: RiMapPinFill,
    label: "Visit Workshop",
    value: SiteConfig.location,
    href: SiteConfig.GMB.mapsLink,
    description: "Jebel Ali · The Gardens · Dubai",
    external: true,
  },
]

/* ============ Trust Points ============ */
const TRUST_POINTS = [
  { icon: RiTimeFill, title: "5–30 Min", subtitle: "Response Time" },
  { icon: RiShieldCheckFill, title: "Certified", subtitle: "Mechanics" },
  { icon: RiCustomerServiceFill, title: "24/7", subtitle: "Available" },
  { icon: RiStarFill, title: "5.0", subtitle: "Rating" },
]

export default function ContactPage() {
  const {
    displayNumber,
    numberCallLink,
    whatsappCallLink,
    email,
    location,
    city,
    country,
    responseTime,
    GMB,
  } = SiteConfig

  return (
    <main className="relative w-full overflow-hidden bg-background">
      {/* ============================================================
                HERO SECTION (Compact, Professional)
            ============================================================ */}
      <section className="relative w-full overflow-hidden border-b border-border">
        {/* Background decorations */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-1/2 h-[400px] w-[900px] -translate-x-1/2 rounded-full bg-primary/[0.08] blur-[120px]" />
          <div className="absolute -right-40 bottom-0 h-[300px] w-[300px] rounded-full bg-primary/[0.05] blur-[100px]" />

          {/* Dot grid */}
          <div
            className="absolute inset-0 opacity-[0.3] dark:opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
              backgroundSize: "28px 28px",
              maskImage:
                "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 85%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 85%)",
            }}
          />

          {/* Top hairline */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        </div>

        <div className="relative container mx-auto px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start gap-6 lg:items-center lg:text-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/[0.06] px-3.5 py-1.5 backdrop-blur-sm">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
              </span>
              <span className="text-[11px] font-bold tracking-[0.18em] text-primary uppercase">
                Contact Us
              </span>
            </div>

            {/* Headline */}
            <h1 className="max-w-3xl text-3xl leading-[1.08] font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Contact Dubai's 24/7{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-primary">
                  Mobile Mechanic Dispatch Team
                </span>
                <span className="absolute inset-x-0 bottom-1.5 z-0 h-3 bg-primary/15" />
              </span>
            </h1>

            {/* Subtitle */}
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Connect with our emergency dispatch center within seconds. We send
              the nearest fully equipped{" "}
              <span className="font-semibold text-foreground">
                mobile repair van
              </span>{" "}
              straight to your exact GPS location within{" "}
              <span className="font-semibold text-foreground">
                5–30 minutes
              </span>
              .
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              {[
                "24/7 Emergency Line",
                "No Call-Out Fees",
                "Upfront Pricing",
              ].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-[11px] font-semibold text-foreground"
                >
                  <RiCheckboxCircleFill className="size-3 text-primary" />
                  {badge}
                </span>
              ))}
            </div>

            {/* Primary CTAs */}
            <div className="flex w-full flex-col gap-3 pt-3 sm:w-auto sm:flex-row">
              <Link
                href={numberCallLink}
                className="group inline-flex h-12 items-center justify-center gap-2.5 rounded-xl bg-primary px-6 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-200 hover:bg-primary/90 hover:shadow-primary/40"
              >
                <RiPhoneFill className="size-4" />
                Call {displayNumber}
                <RiArrowRightLine className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href={whatsappCallLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2.5 rounded-xl border-2 border-border bg-background px-6 text-sm font-bold text-foreground transition-all duration-200 hover:border-primary hover:text-primary"
              >
                <RiWhatsappFill className="size-4" />
                WhatsApp Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
                CONTACT CHANNELS + MAP SECTION
            ============================================================ */}
      <section className="relative w-full py-14 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-7">
            {/* ==================================================
                            LEFT: Contact Channels (5 cols)
                        ================================================== */}
            <div className="lg:col-span-5">
              {/* Header */}
              <div className="mb-4 flex items-center gap-3 sm:mb-5">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <RiCustomerServiceFill className="size-4 text-primary" />
                </span>
                <h2 className="text-base font-bold tracking-tight text-foreground sm:text-lg">
                  Reach Us Instantly
                </h2>
              </div>

              {/* Channels grid — 2 cols on mobile, 1 col on sm+ */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {CONTACT_CHANNELS.map((channel, index) => {
                  const Icon = channel.icon
                  return (
                    <Link
                      key={index}
                      href={channel.href}
                      {...(channel.external
                        ? {
                            target: "_blank",
                            rel: "noopener noreferrer",
                          }
                        : {})}
                      className={
                        channel.primary
                          ? "group relative overflow-hidden rounded-2xl border border-primary bg-primary p-3.5 shadow-lg shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/40 sm:p-4"
                          : "group relative overflow-hidden rounded-2xl border border-border bg-card p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md hover:shadow-primary/10 sm:p-4"
                      }
                    >
                      {/* Dot pattern on primary */}
                      {channel.primary && (
                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,oklch(0_0_0/0.08)_1px,transparent_1px)] bg-[size:20px_20px] opacity-40" />
                      )}

                      {/* Corner crop marks on primary */}
                      {channel.primary && (
                        <div className="pointer-events-none absolute top-2.5 right-2.5 sm:top-3 sm:right-3">
                          <div className="absolute top-0 right-0 h-px w-4 bg-primary-foreground/60 sm:w-5" />
                          <div className="absolute top-0 right-0 h-4 w-px bg-primary-foreground/60 sm:h-5" />
                        </div>
                      )}

                      <div className="relative flex items-start gap-2.5 sm:gap-3">
                        {/* Icon — smaller on mobile */}
                        <span
                          className={
                            channel.primary
                              ? "flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary-foreground shadow-sm sm:size-11 sm:rounded-xl"
                              : "flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 sm:size-11 sm:rounded-xl"
                          }
                        >
                          <Icon className="size-4 text-primary sm:size-5" />
                        </span>

                        {/* Content */}
                        <div className="min-w-0 flex-1">
                          <p
                            className={
                              channel.primary
                                ? "text-[9px] font-black tracking-[0.15em] text-primary-foreground/70 uppercase sm:text-[10px]"
                                : "text-[9px] font-black tracking-[0.15em] text-muted-foreground uppercase sm:text-[10px]"
                            }
                          >
                            {channel.label}
                          </p>
                          <p
                            className={
                              channel.primary
                                ? "mt-0.5 truncate text-[13px] font-bold text-primary-foreground sm:mt-1 sm:text-sm"
                                : "mt-0.5 truncate text-[13px] font-bold text-foreground sm:mt-1 sm:text-sm"
                            }
                          >
                            {channel.value}
                          </p>
                          <p
                            className={
                              channel.primary
                                ? "mt-0.5 line-clamp-2 text-[10px] leading-tight text-primary-foreground/70 sm:text-[11px]"
                                : "mt-0.5 line-clamp-2 text-[10px] leading-tight text-muted-foreground sm:text-[11px]"
                            }
                          >
                            {channel.description}
                          </p>
                        </div>

                        {/* Arrow — hidden on very small mobile in 2-col grid */}
                        <RiArrowRightUpLine
                          className={
                            channel.primary
                              ? "hidden size-3.5 shrink-0 text-primary-foreground/60 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary-foreground sm:block sm:size-4"
                              : "hidden size-3.5 shrink-0 text-muted-foreground/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary sm:block sm:size-4"
                          }
                        />
                      </div>
                    </Link>
                  )
                })}
              </div>

              {/* Response time highlight */}
              <div className="mt-3 flex items-start gap-2.5 rounded-xl border border-border bg-muted/40 px-3 py-2.5 sm:mt-4 sm:items-center sm:px-4 sm:py-3">
                <RiFlashlightFill className="mt-0.5 size-3.5 shrink-0 text-primary sm:mt-0 sm:size-4" />
                <p className="text-[11px] leading-relaxed font-medium text-muted-foreground sm:text-xs">
                  <span className="font-bold text-foreground">
                    Average response:
                  </span>{" "}
                  Under 1 minute on WhatsApp, {responseTime} onsite.
                </p>
              </div>
            </div>

            {/* ==================================================
                            RIGHT: Map + Address Card (7 cols)
                        ================================================== */}
            <div className="lg:col-span-7">
              <div className="relative h-full overflow-hidden rounded-3xl border border-border bg-card shadow-lg shadow-black/[0.03] dark:shadow-black/20">
                {/* Top accent bar */}
                <div className="h-1 w-full bg-gradient-to-r from-primary/40 via-primary to-primary/40" />

                {/* Corner crop marks */}
                <div className="pointer-events-none absolute top-5 right-4 z-10">
                  <div className="absolute top-0 right-0 h-px w-6 bg-primary/60" />
                  <div className="absolute top-0 right-0 h-6 w-px bg-primary/60" />
                </div>

                {/* Top bar */}
                <div className="relative z-10 flex items-center justify-between gap-3 border-b border-border bg-muted/40 px-5 py-3.5 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <span className="relative flex size-2">
                      <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                      <span className="relative inline-flex size-2 rounded-full bg-primary" />
                    </span>
                    <span className="text-[11px] font-bold tracking-[0.15em] text-foreground uppercase">
                      Our Location
                    </span>
                  </div>
                  <div className="hidden items-center gap-1.5 text-[10px] text-muted-foreground sm:flex">
                    <RiNavigationFill className="size-3 text-primary" />
                    <span className="font-mono">
                      {GMB.latitude}, {GMB.longitude}
                    </span>
                  </div>
                </div>

                {/* Map iframe */}
                <div className="relative aspect-4/3 w-full bg-muted lg:aspect-16/11">
                  <iframe
                    title={`${SiteConfig.brandName} Location Map`}
                    src={GMB.embedMap}
                    width="100%"
                    height="100%"
                    className="size-full"
                    style={{
                      border: 0,
                      filter: "grayscale(0.15) contrast(1.05)",
                    }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                {/* Bottom info strip */}
                <div className="relative z-10 border-t border-border bg-muted/40 px-5 py-3.5 backdrop-blur-sm">
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5 font-medium">
                      <RiMapPinFill className="size-3.5 text-primary" />
                      {location}, {city}, {country}
                    </span>
                    <span className="hidden size-1 rounded-full bg-border sm:inline-block" />
                    <span className="inline-flex items-center gap-1.5 font-medium">
                      <RiTimeFill className="size-3.5 text-primary" />
                      24/7 Available
                    </span>
                    <span className="hidden size-1 rounded-full bg-border sm:inline-block" />
                    <Link
                      href={GMB.mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1 font-bold text-primary transition-colors hover:text-primary/80"
                    >
                      Get Directions
                      <RiArrowRightUpLine className="size-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
                TRUST BAR
            ============================================================ */}
      <section className="relative w-full border-y border-border bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 divide-x divide-border sm:grid-cols-4">
            {TRUST_POINTS.map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={i}
                  className="group flex items-center gap-3 p-4 transition-colors hover:bg-background sm:p-5"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary">
                    <Icon className="size-4 text-primary transition-colors group-hover:text-primary-foreground" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm leading-none font-black text-foreground">
                      {item.title}
                    </p>
                    <p className="mt-1 text-[10px] font-bold tracking-wider text-muted-foreground uppercase">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
                CONTACT FORM SECTION
            ============================================================ */}
      <section className="relative w-full py-14 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Left: Content (5 cols) */}
            <div className="lg:col-span-5">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1">
                <RiCalendarCheckFill className="size-3 text-primary" />
                <span className="text-[10px] font-bold tracking-wider text-muted-foreground uppercase">
                  Book Online
                </span>
              </div>

              <h2 className="mt-4 text-2xl leading-tight font-bold tracking-tight text-foreground sm:text-3xl lg:text-[2rem]">
                Book a Mechanic <span className="text-primary">in Minutes</span>
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Fill out the form and our dispatch team will contact you within
                1 minute to confirm your booking and dispatch the nearest
                mechanic.
              </p>

              {/* Feature list */}
              <div className="mt-6 space-y-2.5">
                {[
                  "Instant confirmation within 1 minute",
                  "No call-out fees or hidden charges",
                  "Genuine parts with 12–24 month warranty",
                  "Certified multi-brand mechanics",
                ].map((feature) => (
                  <div key={feature} className="flex items-start gap-2.5">
                    <RiCheckboxCircleFill className="mt-0.5 size-3.5 shrink-0 text-primary" />
                    <span className="text-xs font-medium text-foreground sm:text-sm">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Trust indicator */}
              <div className="mt-7 rounded-xl border border-primary/25 bg-primary/[0.04] p-4">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <RiStarFill key={i} className="size-3 text-primary" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-foreground">
                    5.0
                  </span>
                  <span className="text-[11px] text-muted-foreground">
                    · 500+ happy drivers
                  </span>
                </div>
                <p className="mt-2 text-[11px] leading-relaxed font-medium text-muted-foreground">
                  &ldquo;Fast, professional, and honest. The mechanic arrived
                  within 15 minutes and fixed everything on the spot.&rdquo;
                </p>
                <p className="mt-1.5 text-[10px] font-bold tracking-wider text-primary uppercase">
                  — Ahmed A., Dubai Marina
                </p>
              </div>
            </div>

            {/* Right: Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-lg shadow-black/[0.03] dark:shadow-black/20">
                {/* Top accent bar */}
                <div className="h-1 w-full bg-gradient-to-r from-primary/40 via-primary to-primary/40" />

                {/* Corner crop marks */}
                <div className="pointer-events-none absolute top-5 right-4 z-10">
                  <div className="absolute top-0 right-0 h-px w-6 bg-primary/60" />
                  <div className="absolute top-0 right-0 h-6 w-px bg-primary/60" />
                </div>

                {/* Header */}
                <div className="relative border-b border-border p-5 sm:p-6">
                  <div className="flex items-center gap-2">
                    <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10">
                      <RiMessageFill className="size-4 text-primary" />
                    </span>
                    <h3 className="text-base font-bold tracking-tight text-foreground sm:text-lg">
                      Send us a message
                    </h3>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground sm:text-sm">
                    We'll respond within 1 minute — day or night.
                  </p>
                </div>

                {/* Form */}
                <form className="p-5 sm:p-6">
                  <div className="space-y-4">
                    {/* Name + Phone */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <FormField
                        icon={RiUserFill}
                        label="Full Name"
                        id="name"
                        placeholder="Ahmed Al Maktoum"
                      />
                      <FormField
                        icon={RiPhoneFill}
                        label="Phone"
                        id="phone"
                        placeholder="+971 50 000 0000"
                        type="tel"
                      />
                    </div>

                    {/* Email */}
                    <FormField
                      icon={RiMailFill}
                      label="Email"
                      id="email"
                      placeholder="you@example.com"
                      type="email"
                    />

                    {/* Service dropdown */}
                    <div className="group relative rounded-xl border border-border bg-background/50 transition-all duration-200 focus-within:border-primary/50 focus-within:bg-primary/[0.02] focus-within:shadow-sm focus-within:shadow-primary/10">
                      <label
                        htmlFor="service"
                        className="absolute top-2 left-11 text-[10px] font-bold tracking-[0.12em] text-muted-foreground/70 uppercase transition-colors group-focus-within:text-primary"
                      >
                        Service Needed
                      </label>
                      <div className="flex items-start">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center pt-3">
                          <RiServiceFill className="size-4 text-muted-foreground transition-colors group-focus-within:text-primary" />
                        </div>
                        <select
                          id="service"
                          name="service"
                          required
                          className="h-14 w-full cursor-pointer border-0 bg-transparent pt-3 text-sm font-medium text-foreground outline-none"
                        >
                          <option value="">Select a service</option>
                          {[
                            "Battery Replacement",
                            "Jump Start",
                            "Computer Diagnostic",
                            "Alternator Repair",
                            "Fuel Pump Repair",
                            "Starter Motor Repair",
                            "AC Repair",
                            "Brake Pad Repair",
                            "Other Emergency",
                          ].map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="group relative rounded-xl border border-border bg-background/50 transition-all duration-200 focus-within:border-primary/50 focus-within:bg-primary/[0.02] focus-within:shadow-sm focus-within:shadow-primary/10">
                      <label
                        htmlFor="message"
                        className="absolute top-2 left-11 text-[10px] font-bold tracking-[0.12em] text-muted-foreground/70 uppercase transition-colors group-focus-within:text-primary"
                      >
                        Message
                      </label>
                      <div className="flex items-start">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center pt-3">
                          <RiMessageFill className="size-4 text-muted-foreground transition-colors group-focus-within:text-primary" />
                        </div>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          placeholder="Describe your issue or location..."
                          className="w-full resize-none border-0 bg-transparent pt-6 pb-3 text-sm font-medium text-foreground outline-none placeholder:text-muted-foreground/60"
                        />
                      </div>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="group mt-2 inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-xl bg-primary text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-200 hover:bg-primary/90 hover:shadow-primary/40"
                    >
                      <RiFlashlightFill className="size-4" />
                      Request Mechanic
                      <RiArrowRightLine className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </button>

                    {/* Quick contact divider */}
                    <div className="flex items-center gap-3 pt-2">
                      <div className="h-px flex-1 bg-border" />
                      <span className="text-[10px] font-bold tracking-wider text-muted-foreground uppercase">
                        or call directly
                      </span>
                      <div className="h-px flex-1 bg-border" />
                    </div>

                    {/* Quick contact buttons */}
                    <div className="grid grid-cols-2 gap-3">
                      <Link
                        href={numberCallLink}
                        className="group inline-flex h-11 items-center justify-center gap-2 rounded-xl border-2 border-border bg-background text-xs font-bold text-foreground transition-all duration-200 hover:border-primary hover:text-primary"
                      >
                        <RiPhoneFill className="size-3.5" />
                        Call Now
                      </Link>
                      <Link
                        href={whatsappCallLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex h-11 items-center justify-center gap-2 rounded-xl border-2 border-border bg-background text-xs font-bold text-foreground transition-all duration-200 hover:border-primary hover:text-primary"
                      >
                        <RiWhatsappFill className="size-3.5" />
                        WhatsApp
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
                FINAL CTA BANNER
            ============================================================ */}
      <section className="relative w-full pb-14 sm:pb-16 lg:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-foreground p-7 sm:p-9 lg:p-12">
            {/* Background decorations */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -top-20 -right-20 h-[300px] w-[300px] rounded-full bg-primary/20 blur-[80px]" />
              <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-primary/10 blur-[80px]" />
              <div
                className="absolute inset-0 opacity-[0.15]"
                style={{
                  backgroundImage: `radial-gradient(circle, oklch(1 0 0) 1px, transparent 1px)`,
                  backgroundSize: "28px 28px",
                  maskImage:
                    "radial-gradient(ellipse at center, black 20%, transparent 75%)",
                  WebkitMaskImage:
                    "radial-gradient(ellipse at center, black 20%, transparent 75%)",
                }}
              />
            </div>

            {/* Corner crop marks */}
            <div className="pointer-events-none absolute top-4 left-4">
              <div className="absolute top-0 left-0 h-px w-6 bg-primary/60" />
              <div className="absolute top-0 left-0 h-6 w-px bg-primary/60" />
            </div>
            <div className="pointer-events-none absolute right-4 bottom-4">
              <div className="absolute right-0 bottom-0 h-px w-6 bg-primary/60" />
              <div className="absolute right-0 bottom-0 h-6 w-px bg-primary/60" />
            </div>

            <div className="relative flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1">
                  <RiVerifiedBadgeFill className="size-3 text-primary" />
                  <span className="text-[10px] font-black tracking-wider text-primary uppercase">
                    Available 24/7
                  </span>
                </div>
                <h2 className="mt-4 text-2xl leading-[1.1] font-bold tracking-tight text-background sm:text-3xl lg:text-[2.25rem]">
                  Need immediate help?{" "}
                  <span className="text-primary">Call us now.</span>
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-background/60 sm:text-base">
                  Our dispatch team is on standby 24/7. Your car, our mechanics
                  — anywhere in {city}.
                </p>
              </div>

              <div className="flex flex-col gap-2.5 sm:flex-row">
                <Link
                  href={numberCallLink}
                  className="group inline-flex h-12 items-center justify-center gap-2.5 rounded-xl bg-primary px-6 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-200 hover:bg-primary/90 hover:shadow-primary/40"
                >
                  <RiPhoneFill className="size-4" />
                  {displayNumber}
                  <RiArrowRightLine className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href={whatsappCallLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2.5 rounded-xl border-2 border-background/15 bg-transparent px-6 text-sm font-bold text-background transition-all duration-200 hover:border-primary hover:text-primary"
                >
                  <RiWhatsappFill className="size-4" />
                  WhatsApp
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

/* ============================================================
    SUB-COMPONENT: Form Field
============================================================ */
function FormField({
  icon: Icon,
  label,
  id,
  placeholder,
  type = "text",
}: {
  icon: React.ElementType
  label: string
  id: string
  placeholder: string
  type?: string
}) {
  return (
    <div className="group relative rounded-xl border border-border bg-background/50 transition-all duration-200 focus-within:border-primary/50 focus-within:bg-primary/[0.02] focus-within:shadow-sm focus-within:shadow-primary/10">
      <label
        htmlFor={id}
        className="absolute top-2 left-11 text-[10px] font-bold tracking-[0.12em] text-muted-foreground/70 uppercase transition-colors group-focus-within:text-primary"
      >
        {label}
      </label>
      <div className="flex items-start">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center pt-3">
          <Icon className="size-4 text-muted-foreground transition-colors group-focus-within:text-primary" />
        </div>
        <input
          type={type}
          id={id}
          name={id}
          required={id === "name" || id === "phone"}
          placeholder={placeholder}
          className="h-14 w-full border-0 bg-transparent pt-3 text-sm font-medium text-foreground outline-none placeholder:text-muted-foreground/60"
        />
      </div>
    </div>
  )
}
