// components/pages/ServicePage/ServiceDetailPage.tsx

"use client";

import Link from "next/link";
import Image from "next/image";
import {
    RiArrowRightLine,
    RiArrowRightUpLine,
    RiCheckLine,
    RiCheckboxCircleFill,
    RiTimeFill,
    RiShieldCheckFill,
    RiBatteryChargeFill,
    RiCustomerServiceFill,
    RiFlashlightFill,
    RiWhatsappFill,
    RiMapPinFill,
    RiToolsFill,
    RiQuestionLine,
    RiAlertLine,
    RiSettings3Fill,
    RiArrowDownSLine,
    RiStarFill,
    RiVerifiedBadgeFill,
    RiPriceTag3Fill,
    RiAwardFill,
    RiPhoneFill,
} from "@remixicon/react";
import { SiteConfig } from "@/config/siteConfig";
import { cn } from "@/lib/utils";

/* ============ Service Type ============ */
type ServiceType = {
    title: string;
    name: string;
    metaTitle: string;
    metaDescription: string;
    features: string[];
    slug: string;
    service_banner?: { src?: string };
    intro: {
        heading: string;
        subheading: string;
        content: string;
    };
    whyChooseUs: {
        heading: string;
        points: string[];
    };
    problemSignsSection: {
        heading: string;
        description: string;
        signs: string[];
    };
    ourProcess: {
        heading: string;
        steps: { title: string; description: string }[];
    };
    toolsOrProducts: {
        heading: string;
        brands: string[];
        note: string;
    };
    ctaSection: {
        heading: string;
        description: string;
        buttonText: string;
    };
    faq: { question: string; answer: string }[];
};

export default function ServiceDetailPage({
    service,
    slug,
}: {
    service: ServiceType;
    slug: string;
}) {
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
                HERO SECTION
            ============================================================ */}
            <section className="relative w-full overflow-hidden border-b border-border">
                {/* Background decorations */}
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute left-1/2 top-0 h-[400px] w-[900px] -translate-x-1/2 rounded-full bg-primary/[0.08] blur-[120px]" />
                    <div className="absolute -right-40 bottom-0 h-[300px] w-[300px] rounded-full bg-primary/[0.05] blur-[100px]" />

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

                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                </div>

                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
                    <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
                        
                        {/* Left: Content (7 cols) */}
                        <div className="order-2 lg:order-1 lg:col-span-7">
                            {/* Breadcrumb */}
                            <nav className="flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground">
                                <Link
                                    href="/"
                                    className="transition-colors hover:text-primary"
                                >
                                    Home
                                </Link>
                                <span className="text-muted-foreground/40">
                                    /
                                </span>
                                <Link
                                    href="/services"
                                    className="transition-colors hover:text-primary"
                                >
                                    Services
                                </Link>
                                <span className="text-muted-foreground/40">
                                    /
                                </span>
                                <span className="truncate text-foreground">
                                    {service.name}
                                </span>
                            </nav>

                            {/* Eyebrow */}
                            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/[0.06] px-3.5 py-1.5 backdrop-blur-sm">
                                <span className="relative flex size-1.5">
                                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                                    <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
                                </span>
                                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
                                    {service.name}
                                </span>
                            </div>

                            {/* Headline */}
                            <h1 className="mt-4 text-3xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
                                {service.intro.heading}
                            </h1>

                            {/* Subheading */}
                            <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-primary sm:text-base">
                                {service.intro.subheading}
                            </p>

                            {/* Description */}
                            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                                {service.intro.content}
                            </p>

                            {/* Feature badges */}
                            <div className="mt-5 flex flex-wrap gap-2">
                                {[
                                    responseTime.split(" ")[0] + " Min",
                                    "Certified Mechanics",
                                    "24/7 Available",
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
                            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
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
                                    WhatsApp
                                </Link>
                            </div>
                        </div>

                        {/* Right: Image (5 cols) */}
                        <div className="order-1 lg:order-2 lg:col-span-5">
                            <div className="relative mx-auto max-w-md lg:max-w-none">
                                {/* Offset primary frame */}
                                <div className="absolute -right-3 -top-3 hidden h-full w-full rounded-3xl border-2 border-primary/30 sm:block" />

                                {/* Main image */}
                                <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl bg-muted lg:aspect-4/5">
                                    {service.service_banner?.src ? (
                                        <Image
                                            src={service.service_banner.src}
                                            alt={`${service.name} in ${city}`}
                                            fill
                                            sizes="(max-width: 1024px) 100vw, 40vw"
                                            className="object-cover"
                                            priority
                                        />
                                    ) : (
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-background" />
                                    )}

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                    {/* Corner crop marks */}
                                    <div className="pointer-events-none absolute left-4 top-4">
                                        <div className="absolute left-0 top-0 h-px w-8 bg-primary/70" />
                                        <div className="absolute left-0 top-0 h-8 w-px bg-primary/70" />
                                    </div>

                                    {/* Bottom strip */}
                                    <div className="absolute inset-x-0 bottom-0 p-5">
                                        <div className="flex items-center justify-between gap-3">
                                            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 backdrop-blur-md">
                                                <RiVerifiedBadgeFill className="size-3.5 text-primary" />
                                                <span className="text-[10px] font-bold uppercase tracking-wider text-white">
                                                    Certified Service
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <RiStarFill
                                                        key={i}
                                                        className="size-3 text-primary"
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating: response badge */}
                                <div className="absolute -bottom-5 -left-3 rounded-2xl border border-border bg-card p-3.5 shadow-xl shadow-black/[0.08] dark:shadow-black/40 sm:-left-5">
                                    <div className="flex items-center gap-3">
                                        <div className="flex size-10 items-center justify-center rounded-xl bg-primary">
                                            <RiTimeFill className="size-5 text-primary-foreground" />
                                        </div>
                                        <div>
                                            <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
                                                Response
                                            </p>
                                            <p className="text-lg font-black leading-none text-foreground">
                                                {responseTime}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================================
                FEATURES / WHAT'S INCLUDED
            ============================================================ */}
            <section className="relative w-full py-14 sm:py-16 lg:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-10">
                        <div className="flex items-center gap-4">
                            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5">
                                <RiCheckboxCircleFill className="size-3 text-primary" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
                                    What's Included
                                </span>
                            </span>
                            <div className="h-px flex-1 bg-gradient-to-r from-border via-border to-transparent" />
                        </div>

                        <h2 className="mt-5 text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl">
                            Everything in this{" "}
                            <span className="text-primary">Service Package</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {service.features.map((feature, i) => (
                            <div
                                key={i}
                                className="group flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition-all duration-200 hover:border-primary/40 hover:shadow-sm"
                            >
                                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary">
                                    <RiCheckLine className="size-3.5 text-primary transition-colors group-hover:text-primary-foreground" />
                                </span>
                                <span className="text-sm font-medium text-foreground">
                                    {feature}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================================================
                WHY CHOOSE US
            ============================================================ */}
            <section className="relative w-full border-y border-border bg-muted/20 py-14 sm:py-16 lg:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
                        
                        {/* Left: Header (5 cols) */}
                        <div className="lg:col-span-5">
                            <div className="lg:sticky lg:top-24">
                                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1">
                                    <RiAwardFill className="size-3 text-primary" />
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                                        Why Choose Us
                                    </span>
                                </div>

                                <h2 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl lg:text-[2rem]">
                                    {service.whyChooseUs.heading}
                                </h2>

                                <div className="mt-6 rounded-2xl border border-border bg-card p-5">
                                    <div className="flex items-center gap-2">
                                        {[...Array(5)].map((_, i) => (
                                            <RiStarFill
                                                key={i}
                                                className="size-4 text-primary"
                                            />
                                        ))}
                                        <span className="ml-1.5 text-sm font-black text-foreground">
                                            5.0
                                        </span>
                                    </div>
                                    <p className="mt-2 text-[11px] font-medium text-muted-foreground">
                                        Trusted by 500+ drivers across {city}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right: Points (7 cols) */}
                        <div className="lg:col-span-7">
                            <div className="space-y-3">
                                {service.whyChooseUs.points.map((point, i) => {
                                    const folio = String(i + 1).padStart(2, "0");
                                    return (
                                        <div
                                            key={i}
                                            className="group relative overflow-hidden rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md hover:shadow-primary/10"
                                        >
                                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.05] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                            <span
                                                aria-hidden="true"
                                                className="pointer-events-none absolute -right-2 -top-4 select-none text-[4rem] font-black leading-none text-primary/[0.04] transition-colors duration-300 group-hover:text-primary/[0.08]"
                                            >
                                                {folio}
                                            </span>

                                            <div className="relative flex items-start gap-3">
                                                <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary">
                                                    <RiCheckLine className="size-3.5 text-primary transition-colors group-hover:text-primary-foreground" />
                                                </span>
                                                <p className="text-sm font-medium leading-relaxed text-foreground">
                                                    {point}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================================
                PROBLEM SIGNS
            ============================================================ */}
            <section className="relative w-full py-14 sm:py-16 lg:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-10">
                        <div className="flex items-center gap-4">
                            <span className="inline-flex items-center gap-2 rounded-full border border-destructive/25 bg-destructive/[0.06] px-3 py-1.5">
                                <RiAlertLine className="size-3 text-destructive" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-destructive">
                                    Warning Signs
                                </span>
                            </span>
                            <div className="h-px flex-1 bg-gradient-to-r from-destructive/40 via-border to-transparent" />
                        </div>

                        <h2 className="mt-5 max-w-2xl text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl">
                            {service.problemSignsSection.heading}
                        </h2>
                        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                            {service.problemSignsSection.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {service.problemSignsSection.signs.map((sign, i) => (
                            <div
                                key={i}
                                className="group flex items-start gap-3 rounded-xl border border-destructive/20 bg-destructive/[0.03] p-4 transition-all duration-200 hover:border-destructive/40 hover:bg-destructive/[0.06]"
                            >
                                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-lg bg-destructive/15">
                                    <RiAlertLine className="size-3.5 text-destructive" />
                                </span>
                                <span className="text-sm font-medium text-foreground">
                                    {sign}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================================================
                OUR PROCESS
            ============================================================ */}
            <section className="relative w-full border-y border-border bg-muted/20 py-14 sm:py-16 lg:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-10 lg:mb-12">
                        <div className="flex items-center gap-4">
                            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5">
                                <RiSettings3Fill className="size-3 text-primary" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
                                    Our Process
                                </span>
                            </span>
                            <div className="h-px flex-1 bg-gradient-to-r from-border via-border to-transparent" />
                        </div>

                        <h2 className="mt-5 text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl">
                            {service.ourProcess.heading}
                        </h2>
                    </div>

                    {/* Timeline */}
                    <div className="relative">
                        <div
                            aria-hidden="true"
                            className="absolute bottom-4 left-[23px] top-4 hidden w-px md:block"
                        >
                            <div className="h-full w-full bg-gradient-to-b from-primary/60 via-primary/30 to-transparent" />
                        </div>

                        <div className="space-y-4">
                            {service.ourProcess.steps.map((step, i) => {
                                const folio = String(i + 1).padStart(2, "0");
                                return (
                                    <div
                                        key={i}
                                        className="group relative flex gap-4"
                                    >
                                        {/* Node */}
                                        <div className="relative shrink-0">
                                            <div className="relative flex size-12 items-center justify-center rounded-xl border-4 border-background bg-primary shadow-lg shadow-primary/30">
                                                <span className="text-xs font-black text-primary-foreground">
                                                    {folio}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Card */}
                                        <div className="flex-1 overflow-hidden rounded-xl border border-border bg-card p-4 transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-sm">
                                            <h3 className="text-sm font-bold tracking-tight text-foreground sm:text-base">
                                                {step.title}
                                            </h3>
                                            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================================
                TOOLS & PRODUCTS
            ============================================================ */}
            <section className="relative w-full py-14 sm:py-16 lg:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
                        
                        {/* Left: Header (5 cols) */}
                        <div className="lg:col-span-5">
                            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1">
                                <RiToolsFill className="size-3 text-primary" />
                                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                                    Tools & Products
                                </span>
                            </div>

                            <h2 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl">
                                {service.toolsOrProducts.heading}
                            </h2>

                            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                                {service.toolsOrProducts.note}
                            </p>
                        </div>

                        {/* Right: Brands (7 cols) */}
                        <div className="lg:col-span-7">
                            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                {service.toolsOrProducts.brands.map(
                                    (brand, i) => (
                                        <div
                                            key={i}
                                            className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-all duration-200 hover:border-primary/40"
                                        >
                                            <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary">
                                                <RiToolsFill className="size-4 text-primary transition-colors group-hover:text-primary-foreground" />
                                            </span>
                                            <span className="text-sm font-semibold text-foreground">
                                                {brand}
                                            </span>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================================
                FAQ SECTION
            ============================================================ */}
            <section className="relative w-full border-y border-border bg-muted/20 py-14 sm:py-16 lg:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-10">
                        <div className="flex items-center gap-4">
                            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5">
                                <RiQuestionLine className="size-3 text-primary" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
                                    FAQ
                                </span>
                            </span>
                            <div className="h-px flex-1 bg-gradient-to-r from-border via-border to-transparent" />
                        </div>

                        <h2 className="mt-5 text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl">
                            Frequently Asked{" "}
                            <span className="text-primary">Questions</span>
                        </h2>
                    </div>

                    <div className="mx-auto max-w-3xl space-y-3">
                        {service.faq.map((faq, i) => (
                            <details
                                key={i}
                                className="group overflow-hidden rounded-xl border border-border bg-card transition-colors open:border-primary/30"
                            >
                                <summary className="flex cursor-pointer items-center justify-between gap-3 px-5 py-4 marker:hidden hover:no-underline">
                                    <span className="flex items-start gap-3 text-sm font-semibold text-foreground sm:text-base">
                                        <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 font-mono text-[11px] font-black text-primary">
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                        {faq.question}
                                    </span>
                                    <RiArrowDownSLine className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180 group-open:text-primary" />
                                </summary>
                                <div className="border-t border-border px-5 py-4">
                                    <p className="ml-10 text-sm leading-relaxed text-muted-foreground">
                                        {faq.answer}
                                    </p>
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================================================
                FINAL CTA
            ============================================================ */}
            <section className="relative w-full py-14 sm:py-16 lg:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative overflow-hidden rounded-3xl border border-border bg-foreground p-7 sm:p-9 lg:p-12">
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
                                        Available 24/7
                                    </span>
                                </div>
                                <h2 className="mt-4 text-2xl font-bold leading-[1.1] tracking-tight text-background sm:text-3xl lg:text-[2.25rem]">
                                    {service.ctaSection.heading}
                                </h2>
                                <p className="mt-3 text-sm leading-relaxed text-background/60 sm:text-base">
                                    {service.ctaSection.description}
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

            {/* ============================================================
                RELATED AREAS STRIP
            ============================================================ */}
            <section className="relative w-full border-t border-border bg-muted/20 py-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
                        <div className="flex items-center gap-3">
                            <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10">
                                <RiMapPinFill className="size-4 text-primary" />
                            </span>
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                                    {service.name} Available In
                                </p>
                                <p className="text-sm font-bold text-foreground">
                                    All {serviceAreas.length} Dubai Areas
                                </p>
                            </div>
                        </div>
                        <Link
                            href="/area-we-serve"
                            className="group inline-flex items-center gap-1.5 rounded-xl border border-border bg-card px-4 py-2 text-xs font-bold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                        >
                            View All Areas
                            <RiArrowRightUpLine className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}