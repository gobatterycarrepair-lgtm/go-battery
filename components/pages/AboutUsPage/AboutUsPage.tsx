// app/(marketing)/about/page.tsx

import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
    RiArrowRightLine,
    RiArrowRightUpLine,
    RiShieldCheckFill,
    RiTimeFill,
    RiUserStarFill,
    RiMapPinFill,
    RiCheckboxCircleFill,
    RiBatteryChargeFill,
    RiFlashlightFill,
    RiCustomerServiceFill,
    RiPhoneFill,
    RiWhatsappFill,
    RiStarFill,
    RiVerifiedBadgeFill,
    RiToolsFill,
    RiAwardFill,
    RiGlobalFill,
    RiTeamFill,
    RiFocus3Fill,
    RiHeartFill,
} from "@remixicon/react";
import { SiteConfig } from "@/config/siteConfig";
import { aboutUs, whyChooseUs } from "@/data/businessInfo";
import { heroBanner } from "@/config/imageConfig";


/* ============ Stats ============ */
const STATS = [
    { icon: RiTimeFill, value: "5–30", unit: "min", label: "Response Time" },
    { icon: RiUserStarFill, value: "500+", unit: "", label: "Happy Drivers" },
    { icon: RiMapPinFill, value: "16+", unit: "", label: "Service Areas" },
    { icon: RiShieldCheckFill, value: "100%", unit: "", label: "Guaranteed" },
];

/* ============ Core Values ============ */
const CORE_VALUES = [
    {
        icon: RiFocus3Fill,
        title: "Customer First",
        description:
            "Every decision starts with the driver. Transparent pricing, honest diagnostics, and no surprises.",
    },
    {
        icon: RiAwardFill,
        title: "Certified Excellence",
        description:
            "Multi-brand ASE-trained technicians using dealer-grade equipment for every repair.",
    },
    {
        icon: RiShieldCheckFill,
        title: "Guaranteed Work",
        description:
            "Every job is backed by our workmanship warranty. If it's not right, we come back — free.",
    },
    {
        icon: RiHeartFill,
        title: "Genuine Care",
        description:
            "We treat every vehicle like our own — from a 20-year-old sedan to a brand-new luxury SUV.",
    },
];

/* ============ Milestones ============ */
const MILESTONES = [
    {
        year: "2014",
        title: "Founded",
        description:
            "Started in Jebel Ali with one mobile van and a mission to eliminate towing headaches.",
    },
    {
        year: "2018",
        title: "Expanded Coverage",
        description:
            "Grew to cover 10+ Dubai districts with a fleet of fully-equipped rescue vans.",
    },
    {
        year: "2022",
        title: "500+ Happy Drivers",
        description:
            "Crossed 500 verified customer reviews with a consistent 5.0-star rating.",
    },
    {
        year: "2024",
        title: "24/7 Across Dubai",
        description:
            "Now serving 16+ areas round-the-clock with certified mechanics on every dispatch.",
    },
];

/* ============ Trust Points ============ */
const TRUST_POINTS = [
    { icon: RiToolsFill, title: "ASE Certified", subtitle: "Multi-brand specialists" },
    { icon: RiBatteryChargeFill, title: "OEM Parts", subtitle: "100% genuine only" },
    { icon: RiTimeFill, title: "24/7 Dispatch", subtitle: "Round-the-clock" },
    { icon: RiShieldCheckFill, title: "Warranty Backed", subtitle: "12–24 months" },
];

export default function AboutPage() {
    const { foundedYear, city, displayNumber, numberCallLink, whatsappCallLink } =
        SiteConfig;

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
                                About Us
                            </span>
                        </div>

                        {/* Headline */}
                        <h1 className="max-w-3xl text-3xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                            Dubai's Most Trusted{" "}
                            <span className="relative inline-block">
                                <span className="relative z-10 text-primary">
                                    Mobile Mechanic Team
                                </span>
                                <span className="absolute inset-x-0 bottom-1.5 z-0 h-3 bg-primary/15" />
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                            Since {foundedYear}, we've been bringing dealership-grade
                            car repair and battery service directly to drivers across{" "}
                            {city} — 24/7, with certified mechanics and{" "}
                            <span className="font-semibold text-foreground">
                                100% transparent pricing
                            </span>
                            .
                        </p>

                        {/* Trust badges */}
                        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                            {[
                                "Founded 2014",
                                "500+ Happy Drivers",
                                "24/7/365 Available",
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
                    </div>
                </div>
            </section>

            {/* ============================================================
                ABOUT SECTION (Story + Image)
            ============================================================ */}
            <section className="relative w-full py-14 sm:py-16 lg:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
                        
                        {/* Left: Image (5 cols) */}
                        <div className="relative order-2 lg:order-1 lg:col-span-5">
                            <div className="relative mx-auto max-w-md lg:max-w-none">
                                {/* Offset primary frame */}
                                <div className="absolute -left-3 -top-3 hidden h-full w-full rounded-3xl border-2 border-primary/30 sm:block" />

                                {/* Main image */}
                                <div className="relative aspect-4/5 w-full overflow-hidden rounded-3xl bg-muted">
                                    <Image
                                        src={heroBanner?.hero}
                                        alt={`Certified mobile car mechanic team in ${city}`}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 40vw"
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                    {/* Corner crop marks */}
                                    <div className="pointer-events-none absolute left-4 top-4">
                                        <div className="absolute left-0 top-0 h-px w-8 bg-primary/70" />
                                        <div className="absolute left-0 top-0 h-8 w-px bg-primary/70" />
                                    </div>

                                    {/* Bottom info inside image */}
                                    <div className="absolute inset-x-0 bottom-0 p-5">
                                        <div className="flex items-center justify-between gap-3">
                                            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 backdrop-blur-md">
                                                <RiVerifiedBadgeFill className="size-3.5 text-primary" />
                                                <span className="text-[10px] font-bold uppercase tracking-wider text-white">
                                                    Certified Team
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <RiStarFill
                                                        key={i}
                                                        className="size-3 text-primary"
                                                    />
                                                ))}
                                                <span className="ml-1 text-[10px] font-bold text-white">
                                                    5.0
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating: Founded badge */}
                                <div className="absolute -bottom-5 -left-3 rounded-2xl border border-border bg-card p-3.5 shadow-xl shadow-black/[0.08] dark:shadow-black/40 sm:-left-5">
                                    <div className="flex items-center gap-3">
                                        <div className="flex size-10 items-center justify-center rounded-xl bg-primary">
                                            <RiShieldCheckFill className="size-5 text-primary-foreground" />
                                        </div>
                                        <div>
                                            <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
                                                Trusted Since
                                            </p>
                                            <p className="text-lg font-black leading-none text-foreground">
                                                {foundedYear}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating: 24/7 circular badge */}
                                <div className="absolute -right-3 -top-3 hidden size-24 flex-col items-center justify-center rounded-full border-4 border-background bg-foreground text-center shadow-xl sm:-right-5 sm:-top-5 sm:flex">
                                    <span className="text-[9px] font-bold uppercase tracking-wider text-background/60">
                                        Serving
                                    </span>
                                    <span className="text-lg font-black leading-none text-background">
                                        {city}
                                    </span>
                                    <span className="text-[9px] font-bold uppercase tracking-wider text-background/60">
                                        24/7
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Right: Content (7 cols) */}
                        <div className="order-1 lg:order-2 lg:col-span-7">
                            {/* Section label */}
                            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1">
                                <RiTeamFill className="size-3 text-primary" />
                                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                                    Our Story
                                </span>
                            </div>

                            {/* Title */}
                            <h2 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl lg:text-[2rem]">
                                Built to Eliminate{" "}
                                <span className="text-primary">
                                    Towing Headaches
                                </span>
                            </h2>

                            {/* Story text */}
                            <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                                <p>{aboutUs.para1}</p>
                                <p>{aboutUs.para2}</p>
                            </div>

                            {/* Feature chips */}
                            <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                                {[
                                    "Certified multi-brand technicians",
                                    "Dealer-grade diagnostic equipment",
                                    "Transparent upfront pricing",
                                    "24/7 emergency availability",
                                ].map((value) => (
                                    <div
                                        key={value}
                                        className="flex items-center gap-2.5 rounded-lg border border-border bg-card px-3 py-2"
                                    >
                                        <RiCheckboxCircleFill className="size-3.5 shrink-0 text-primary" />
                                        <span className="text-xs font-medium text-foreground">
                                            {value}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA */}
                            <div className="mt-7 flex flex-wrap items-center gap-3">
                                <Link
                                    href={numberCallLink}
                                    className="group inline-flex h-11 items-center gap-2.5 rounded-xl bg-primary px-5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-200 hover:bg-primary/90"
                                >
                                    <RiPhoneFill className="size-4" />
                                    Talk to a Mechanic
                                    <RiArrowRightLine className="size-4 transition-transform group-hover:translate-x-0.5" />
                                </Link>
                                <Link
                                    href="/services"
                                    className="inline-flex h-11 items-center gap-2 rounded-xl border border-border bg-card px-5 text-sm font-bold text-foreground transition-colors hover:border-primary hover:text-primary"
                                >
                                    Browse Services
                                    <RiArrowRightUpLine className="size-3.5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================================
                STATS BAR
            ============================================================ */}
            <section className="relative w-full border-y border-border bg-muted/30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 divide-x divide-border sm:grid-cols-4">
                        {STATS.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={i}
                                    className="group flex items-center gap-3 p-4 transition-colors hover:bg-background sm:p-5"
                                >
                                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary">
                                        <Icon className="size-4 text-primary transition-colors group-hover:text-primary-foreground" />
                                    </span>
                                    <div className="min-w-0">
                                        <p className="text-base font-black leading-none text-foreground sm:text-lg">
                                            {item.value}
                                            {item.unit && (
                                                <span className="ml-0.5 text-xs font-semibold text-muted-foreground">
                                                    {item.unit}
                                                </span>
                                            )}
                                        </p>
                                        <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                                            {item.label}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ============================================================
                CORE VALUES
            ============================================================ */}
            <section className="relative w-full py-14 sm:py-16 lg:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="mb-10 lg:mb-12">
                        <div className="flex items-center gap-4">
                            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5">
                                <RiGlobalFill className="size-3 text-primary" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
                                    Our Values
                                </span>
                            </span>
                            <div className="h-px flex-1 bg-gradient-to-r from-border via-border to-transparent" />
                        </div>

                        <h2 className="mt-5 max-w-2xl text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl">
                            The Principles That{" "}
                            <span className="text-primary">Drive Us</span>
                        </h2>
                        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                            Every repair, every call, every dispatch — backed by
                            these four core values.
                        </p>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
                        {CORE_VALUES.map((value, index) => {
                            const Icon = value.icon;
                            const folio = String(index + 1).padStart(2, "0");
                            return (
                                <div
                                    key={value.title}
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
                                            {value.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                                            {value.description}
                                        </p>
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
                MILESTONES TIMELINE
            ============================================================ */}
            <section className="relative w-full border-t border-border bg-muted/20 py-14 sm:py-16 lg:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="mb-10 lg:mb-12">
                        <div className="flex items-center gap-4">
                            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5">
                                <RiTimeFill className="size-3 text-primary" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
                                    Our Journey
                                </span>
                            </span>
                            <div className="h-px flex-1 bg-gradient-to-r from-border via-border to-transparent" />
                        </div>

                        <h2 className="mt-5 max-w-2xl text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl">
                            A Decade of{" "}
                            <span className="text-primary">Growth & Trust</span>
                        </h2>
                    </div>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Vertical connector line (desktop) */}
                        <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px lg:block">
                            <div className="h-full w-full bg-gradient-to-r from-primary/60 via-primary/30 to-transparent" />
                        </div>

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
                            {MILESTONES.map((milestone, index) => (
                                <div
                                    key={milestone.year}
                                    className="group relative"
                                >
                                    {/* Node (desktop) */}
                                    <div className="mb-5 hidden items-center gap-3 lg:flex">
                                        <div className="relative flex size-3 items-center justify-center">
                                            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/40" />
                                            <span className="relative inline-flex size-3 rounded-full border-2 border-background bg-primary" />
                                        </div>
                                        <span className="font-mono text-xs font-black text-primary">
                                            {milestone.year}
                                        </span>
                                    </div>

                                    {/* Mobile: Year badge */}
                                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-2.5 py-1 lg:hidden">
                                        <span className="size-1 rounded-full bg-primary" />
                                        <span className="font-mono text-[10px] font-black text-primary">
                                            {milestone.year}
                                        </span>
                                    </div>

                                    {/* Card */}
                                    <div className="relative overflow-hidden rounded-xl border border-border bg-card p-4 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-primary/40">
                                        <h3 className="text-sm font-bold tracking-tight text-foreground">
                                            {milestone.title}
                                        </h3>
                                        <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                                            {milestone.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================================
                TRUST STRIP
            ============================================================ */}
            <section className="relative w-full border-y border-border">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 divide-x divide-border sm:grid-cols-4">
                        {TRUST_POINTS.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={i}
                                    className="group flex items-center gap-3 p-4 transition-colors hover:bg-muted/40 sm:p-5"
                                >
                                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary">
                                        <Icon className="size-4 text-primary transition-colors group-hover:text-primary-foreground" />
                                    </span>
                                    <div className="min-w-0">
                                        <p className="text-sm font-bold leading-none text-foreground">
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
                FINAL CTA BANNER
            ============================================================ */}
            <section className="relative w-full py-14 sm:py-16 lg:py-20">
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
                                    Experience the{" "}
                                    <span className="text-primary">
                                        Go Battery difference.
                                    </span>
                                </h2>
                                <p className="mt-3 text-sm leading-relaxed text-background/60 sm:text-base">
                                    Wherever your car is, we'll meet you there —
                                    with the same certified mechanics and
                                    dealership-level expertise that's trusted by
                                    thousands.
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
                                        All 16 Areas · {city}
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