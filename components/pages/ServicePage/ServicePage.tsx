// app/(marketing)/services/page.tsx

import Link from "next/link";
import type { Metadata } from "next";
import {
    RiArrowRightLine,
    RiArrowRightUpLine,
    RiTimeFill,
    RiShieldCheckFill,
    RiBatteryChargeFill,
    RiFlashlightFill,
    RiCustomerServiceFill,
    RiWhatsappFill,
    RiCheckboxCircleFill,
    RiToolsFill,
    RiStarFill,
    RiVerifiedBadgeFill,
    RiMapPinFill,
    RiGlobalFill,
    RiPriceTag3Fill,
    RiPhoneFill,
} from "@remixicon/react";
import { SiteConfig } from "@/config/siteConfig";
import { services } from "@/data/services/services";
import { ServiceCard } from "@/components/shared/Card/ServiceCard";


/* ============ Trust Points ============ */
const TRUST_POINTS = [
    { icon: RiTimeFill, title: "5–30 Min", subtitle: "Response Time" },
    { icon: RiShieldCheckFill, title: "Certified", subtitle: "Mechanics" },
    { icon: RiBatteryChargeFill, title: "Genuine", subtitle: "Parts Only" },
    { icon: RiCustomerServiceFill, title: "24/7", subtitle: "Available" },
];

/* ============ Service Categories (for below grid) ============ */
const CATEGORIES = [
    {
        icon: RiFlashlightFill,
        title: "Emergency Services",
        description:
            "Battery replacements, jump starts, and roadside rescues — dispatched 24/7 to your exact location.",
        examples: ["Battery Replacement", "Jump Start", "Emergency Repair"],
    },
    {
        icon: RiToolsFill,
        title: "Mechanical Repairs",
        description:
            "Full range of onsite repairs — from alternators and starters to brake pads and radiators.",
        examples: ["Alternator Repair", "Starter Motor", "Brake Pads"],
    },
    {
        icon: RiBatteryChargeFill,
        title: "Electrical & Diagnostics",
        description:
            "Dealer-grade OBD-II scanners and certified auto electricians for full-system diagnostics.",
        examples: ["Computer Diagnostic", "Window Motor", "ABS System"],
    },
    {
        icon: RiCustomerServiceFill,
        title: "Maintenance & Care",
        description:
            "Scheduled servicing, AC gas refills, oil changes, and detailing — all at your doorstep.",
        examples: ["AC Gas Refill", "Oil Change", "Car Detailing"],
    },
];

/* ============ Stats for hero ============ */
const HERO_STATS = [
    { value: `${services.length}+`, label: "Services" },
    { value: "5–30", unit: "min", label: "Response" },
    { value: "24/7", label: "Available" },
    { value: "500+", label: "Happy Drivers" },
];

export default function ServicesPage() {
    const {
        city,
        displayNumber,
        numberCallLink,
        whatsappCallLink,
        responseTime,
        serviceAreas,
    } = SiteConfig;

    return (
        <main className="relative w-full overflow-hidden bg-background">
            {/* ============================================================
                HERO SECTION (Compact, Professional)
            ============================================================ */}
            <section className="relative w-full overflow-hidden border-b border-border">
                {/* Background decorations */}
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute left-1/2 top-0 h-[400px] w-[900px] -translate-x-1/2 rounded-full bg-primary/[0.08] blur-[120px]" />
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

                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <div className="flex flex-col items-start gap-6 lg:items-center lg:text-center">
                        {/* Eyebrow */}
                        <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/[0.06] px-3.5 py-1.5 backdrop-blur-sm">
                            <span className="relative flex size-1.5">
                                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                                <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
                            </span>
                            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
                                All Services
                            </span>
                        </div>

    {/* Headline */}
<h1 className="max-w-3xl text-3xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
    On-Site{" "}
    <span className="relative inline-block">
        <span className="relative z-10 text-primary">
            Mobile Car Repair
        </span>
        <span className="absolute inset-x-0 bottom-1.5 z-0 h-3 bg-primary/15" />
    </span>{" "}
    & Maintenance Services in Dubai
</h1>

{/* Subtitle */}
<p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
    doorstep auto repair services brought directly to your home, office, or roadside location
    across all{" "}
    <span className="font-semibold text-foreground">16 Dubai districts</span>.
    Expert mechanics,{" "}
    <span className="font-semibold text-foreground">OEM parts</span>, and
    transparent pricing.
</p>

                        {/* Trust badges */}
                        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                            {[
                                "No Towing Required",
                                "Certified Mechanics",
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

                        {/* CTAs */}
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

                        {/* Quick stats row */}
                        <div className="mt-4 grid w-full grid-cols-2 gap-3 pt-4 sm:grid-cols-4">
                            {HERO_STATS.map((stat, i) => (
                                <div
                                    key={i}
                                    className="flex flex-col items-center justify-center rounded-xl border border-border bg-card px-3 py-2.5"
                                >
                                    <p className="text-base font-black leading-none text-foreground sm:text-lg">
                                        {stat.value}
                                        {stat.unit && (
                                            <span className="ml-0.5 text-[10px] font-semibold text-muted-foreground">
                                                {stat.unit}
                                            </span>
                                        )}
                                    </p>
                                    <p className="mt-1 text-[9px] font-bold uppercase tracking-wider text-muted-foreground">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================================
                SERVICES GRID
            ============================================================ */}
            <section className="relative w-full py-14 sm:py-16 lg:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section header */}
                    <div className="mb-10 lg:mb-12">
                        <div className="flex items-center gap-4">
                            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5">
                                <RiToolsFill className="size-3 text-primary" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
                                    Services Catalog
                                </span>
                            </span>
                            <div className="h-px flex-1 bg-gradient-to-r from-border via-border to-transparent" />
                            <span className="hidden text-[10px] font-bold uppercase tracking-wider text-muted-foreground sm:inline">
                                {services.length} Services Available
                            </span>
                        </div>

                        <h2 className="mt-5 text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl">
                            Explore Our{" "}
                            <span className="text-primary">
                                Complete Service Range
                            </span>
                        </h2>
                        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                            Every service is delivered onsite by certified
                            mechanics — with genuine parts, transparent pricing,
                            and a workmanship guarantee.
                        </p>
                    </div>

                    {/* Services grid */}
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-6">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={service.slug}
                                name={service.name}
                                slug={service.slug}
                                features={service.features}
                                image={service.service_banner?.src}
                                intro={service.intro}
                                index={index}
                            />
                        ))}
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
                            const Icon = item.icon;
                            return (
                                <div
                                    key={i}
                                    className="group flex items-center gap-3 p-4 transition-colors hover:bg-background sm:p-5"
                                >
                                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary">
                                        <Icon className="size-4 text-primary transition-colors group-hover:text-primary-foreground" />
                                    </span>
                                    <div className="min-w-0">
                                        <p className="text-sm font-black leading-none text-foreground">
                                            {item.title}
                                        </p>
                                        <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                                            {item.subtitle}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ============================================================
                SERVICE CATEGORIES
            ============================================================ */}
            <section className="relative w-full py-14 sm:py-16 lg:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="mb-10 lg:mb-12">
                        <div className="flex items-center gap-4">
                            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5">
                                <RiGlobalFill className="size-3 text-primary" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
                                    Categories
                                </span>
                            </span>
                            <div className="h-px flex-1 bg-gradient-to-r from-border via-border to-transparent" />
                        </div>

                        <h2 className="mt-5 max-w-2xl text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl">
                            Organized for{" "}
                            <span className="text-primary">Easy Discovery</span>
                        </h2>
                        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                            Browse our services by category to find exactly what
                            you need.
                        </p>
                    </div>

                    {/* Categories grid */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
                        {CATEGORIES.map((cat, index) => {
                            const Icon = cat.icon;
                            const folio = String(index + 1).padStart(2, "0");
                            return (
                                <div
                                    key={cat.title}
                                    className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
                                >
                                    {/* Hover gradient */}
                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.06] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                    {/* Giant background number */}
                                    <span
                                        aria-hidden="true"
                                        className="pointer-events-none absolute -right-2 -top-4 select-none text-[5rem] font-black leading-none text-primary/[0.04] transition-colors duration-300 group-hover:text-primary/[0.07]"
                                    >
                                        {folio}
                                    </span>

                                    <div className="relative">
                                        {/* Icon */}
                                        <div className="relative inline-flex">
                                            <div className="absolute inset-0 rounded-xl bg-primary/20 blur-md transition-all duration-300 group-hover:bg-primary/30" />
                                            <div className="relative flex size-11 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/25 transition-transform duration-300 group-hover:scale-105">
                                                <Icon className="size-5 text-primary-foreground" />
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h3 className="mt-4 text-sm font-bold leading-tight tracking-tight text-foreground sm:text-base">
                                            {cat.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                                            {cat.description}
                                        </p>

                                        {/* Examples */}
                                        <div className="mt-3 flex flex-wrap gap-1">
                                            {cat.examples.map((ex) => (
                                                <span
                                                    key={ex}
                                                    className="inline-flex items-center rounded-md border border-border bg-muted/40 px-1.5 py-0.5 text-[9px] font-semibold text-muted-foreground"
                                                >
                                                    {ex}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Bottom accent line */}
                                    <span className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-primary to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                                </div>
                            );
                        })}
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
                            <div className="absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full bg-primary/20 blur-[80px]" />
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
                        <div className="pointer-events-none absolute left-4 top-4">
                            <div className="absolute left-0 top-0 h-px w-6 bg-primary/60" />
                            <div className="absolute left-0 top-0 h-6 w-px bg-primary/60" />
                        </div>
                        <div className="pointer-events-none absolute bottom-4 right-4">
                            <div className="absolute bottom-0 right-0 h-px w-6 bg-primary/60" />
                            <div className="absolute bottom-0 right-0 h-6 w-px bg-primary/60" />
                        </div>

                        <div className="relative flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
                            <div className="max-w-2xl">
                                <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1">
                                    <RiVerifiedBadgeFill className="size-3 text-primary" />
                                    <span className="text-[10px] font-black uppercase tracking-wider text-primary">
                                        Trusted by 500+ Drivers
                                    </span>
                                </div>
                                <h2 className="mt-4 text-2xl font-bold leading-[1.1] tracking-tight text-background sm:text-3xl lg:text-[2.25rem]">
                                    Need a service?{" "}
                                    <span className="text-primary">
                                        We're one call away.
                                    </span>
                                </h2>
                                <p className="mt-3 text-sm leading-relaxed text-background/60 sm:text-base">
                                    Certified mechanics, genuine parts, and a
                                    {responseTime} response — anywhere in {city}
                                    .
                                </p>

                                {/* Trust row */}
                                <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
                                    <div className="flex items-center gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <RiStarFill
                                                key={i}
                                                className="size-3 text-primary"
                                            />
                                        ))}
                                        <span className="ml-1.5 text-[11px] font-bold text-background/80">
                                            5.0 Rated
                                        </span>
                                    </div>
                                    <span className="size-1 rounded-full bg-background/30" />
                                    <span className="text-[11px] font-medium text-background/60">
                                        All {serviceAreas.length} Areas ·{" "}
                                        {city}
                                    </span>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2.5 sm:flex-row">
                                <Link
                                    href={numberCallLink}
                                    className="group inline-flex h-12 items-center justify-center gap-2.5 rounded-xl bg-primary px-6 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-200 hover:bg-primary/90 hover:shadow-primary/40"
                                >
                                    <RiPhoneFill className="size-4" />
                                    Call Now
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
    );
}