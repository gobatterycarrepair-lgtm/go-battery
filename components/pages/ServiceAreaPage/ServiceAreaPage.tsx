// app/(marketing)/service-areas/page.tsx

import Link from "next/link";
import type { Metadata } from "next";
import {
    RiMapPinFill,
    RiArrowRightLine,
    RiArrowRightUpLine,
    RiTimeFill,
    RiShieldCheckFill,
    RiBatteryChargeFill,
    RiFlashlightFill,
    RiCustomerServiceFill,
    RiRidingFill,
    RiRoadMapFill,
    RiCheckboxCircleFill,
    RiPhoneFill,
    RiWhatsappFill,
    RiBuildingFill,
    RiHome4Fill,
    RiStoreFill,
    RiMap2Fill,
    RiSearchLine,
    RiStarFill,
    RiVerifiedBadgeFill,
} from "@remixicon/react";
import { SiteConfig } from "@/config/siteConfig";


/* ============ Icon mapping by area name ============ */
const AREA_ICONS: Record<string, React.ElementType> = {
    industrial: RiBuildingFill,
    freezone: RiStoreFill,
    gardens: RiHome4Fill,
    marina: RiRidingFill,
    jumeirah: RiHome4Fill,
    investment: RiBuildingFill,
    south: RiRoadMapFill,
    production: RiStoreFill,
    sports: RiRidingFill,
    latifa: RiHome4Fill,
    towers: RiBuildingFill,
};

function getAreaIcon(name: string): React.ElementType {
    const lower = name.toLowerCase();
    for (const [key, icon] of Object.entries(AREA_ICONS)) {
        if (lower.includes(key)) return icon;
    }
    return RiMap2Fill;
}

/* ============ Why Choose Strip ============ */
const TRUST_POINTS = [
    { icon: RiTimeFill, title: "5–30 Min", subtitle: "Response Time" },
    { icon: RiShieldCheckFill, title: "Certified", subtitle: "Mechanics" },
    { icon: RiBatteryChargeFill, title: "Genuine", subtitle: "Parts Only" },
    { icon: RiCustomerServiceFill, title: "24/7", subtitle: "Available" },
];

export default function ServiceAreaPage() {
    const { serviceAreas, city, responseTime, displayNumber, numberCallLink, whatsappCallLink } = SiteConfig;

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
                                Service Coverage
                            </span>
                        </div>

                        {/* Headline */}
                        <h1 className="max-w-3xl text-3xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                            Mobile Car Repair in{" "}
                            <span className="relative inline-block">
                                <span className="relative z-10 text-primary">
                                    {serviceAreas.length}+ Dubai Areas
                                </span>
                                <span className="absolute inset-x-0 bottom-1.5 z-0 h-3 bg-primary/15" />
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                            Certified mechanics dispatched to your exact
                            location across all major {city} districts — with
                            guaranteed{" "}
                            <span className="font-semibold text-foreground">
                                {responseTime} response
                            </span>{" "}
                            and 24/7 emergency availability.
                        </p>

                        {/* Trust badges row */}
                        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                            {[
                                "No Towing Required",
                                "Onsite Diagnostics",
                                "Genuine OEM Parts",
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
                AREAS GRID SECTION
            ============================================================ */}
            <section className="relative w-full py-14 sm:py-16 lg:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section header */}
                    <div className="mb-10 lg:mb-12">
                        <div className="flex items-center gap-4">
                            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5">
                                <RiMapPinFill className="size-3 text-primary" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
                                    All Areas
                                </span>
                            </span>
                            <div className="h-px flex-1 bg-gradient-to-r from-border via-border to-transparent" />
                            <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                                {serviceAreas.length} Areas · {city}
                            </span>
                        </div>

                        <h2 className="mt-5 text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl">
                            Where We Serve
                        </h2>
                    </div>

                    {/* Areas grid */}
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-4">
                        {serviceAreas.map((area, index) => {
                            const Icon = getAreaIcon(area.name);
                            const folio = String(index + 1).padStart(2, "0");
                            return (
                                <Link
                                    key={area.slug}
                                    href={`/area-we-serve/${area.slug}`}
                                    className="group relative overflow-hidden rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md hover:shadow-primary/10"
                                >
                                    {/* Hover gradient */}
                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.06] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                    {/* Folio number background */}
                                    <span
                                        aria-hidden="true"
                                        className="pointer-events-none absolute -right-1 -top-3 select-none text-[3.5rem] font-black leading-none text-primary/[0.04] transition-colors duration-300 group-hover:text-primary/[0.08]"
                                    >
                                        {folio}
                                    </span>

                                    <div className="relative flex items-start gap-3">
                                        {/* Icon block */}
                                        <div className="relative shrink-0">
                                            <div className="absolute inset-0 rounded-lg bg-primary/20 blur-md transition-all duration-300 group-hover:bg-primary/30" />
                                            <div className="relative flex size-10 items-center justify-center rounded-lg bg-primary/10 transition-colors duration-300 group-hover:bg-primary">
                                                <Icon className="size-4 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="min-w-0 flex-1 pt-0.5">
                                            <h3 className="truncate text-sm font-bold leading-tight tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-[15px]">
                                                {area.name}
                                            </h3>
                                            <div className="mt-1.5 flex items-center gap-1.5 text-[10px] font-semibold text-muted-foreground">
                                                <RiTimeFill className="size-3 text-primary" />
                                                <span>{responseTime}</span>
                                                <span className="size-0.5 rounded-full bg-muted-foreground/40" />
                                                <span>24/7</span>
                                            </div>
                                        </div>

                                        {/* Arrow */}
                                        <RiArrowRightUpLine className="size-3.5 shrink-0 text-muted-foreground/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                                    </div>
                                </Link>
                            );
                        })}
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
                CONTENT SECTION (SEO + Value)
            ============================================================ */}
            <section className="relative w-full py-14 sm:py-16 lg:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
                        
                        {/* Left: Content (7 cols) */}
                        <div className="lg:col-span-7">
                            <h2 className="text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl">
                                Onsite Mobile Car Repair{" "}
                                <span className="text-primary">
                                    Across All of {city}
                                </span>
                            </h2>

                            <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                                <p>
                                    Our mobile mechanics are strategically
                                    positioned across every major {city}{" "}
                                    district — from Jebel Ali and Dubai
                                    Investment Park in the south, to Jumeirah
                                    and Dubai Marina in the west. Wherever you
                                    are, a fully equipped service van can reach
                                    you in{" "}
                                    <span className="font-semibold text-foreground">
                                        {responseTime}
                                    </span>
                                    .
                                </p>
                                <p>
                                    Unlike traditional garages, we deliver
                                    dealership-grade diagnostics and repairs
                                    directly to your exact GPS location. No
                                    towing, no waiting rooms, no lost hours.
                                    Just certified mechanics, genuine parts, and
                                    transparent pricing — right where your car
                                    is parked.
                                </p>
                            </div>

                            {/* Feature list */}
                            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                                {[
                                    "Battery replacement & jump start",
                                    "Computer diagnostics (OBD-II)",
                                    "Alternator & starter repair",
                                    "AC gas refill & repair",
                                    "Brake pads & rotors",
                                    "Fuel pump service",
                                ].map((feature) => (
                                    <div
                                        key={feature}
                                        className="flex items-center gap-2.5 rounded-lg border border-border bg-card px-3 py-2"
                                    >
                                        <RiCheckboxCircleFill className="size-3.5 shrink-0 text-primary" />
                                        <span className="text-xs font-medium text-foreground">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Coverage Map Card (5 cols) */}
                        <div className="lg:col-span-5">
                            <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/[0.08] via-primary/[0.03] to-transparent p-6">
                                {/* Corner marks */}
                                <div className="pointer-events-none absolute right-3 top-3">
                                    <div className="absolute right-0 top-0 h-px w-6 bg-primary/60" />
                                    <div className="absolute right-0 top-0 h-6 w-px bg-primary/60" />
                                </div>

                                {/* Badge */}
                                <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-2.5 py-1">
                                    <RiFlashlightFill className="size-3 text-primary" />
                                    <span className="text-[10px] font-black uppercase tracking-wider text-primary">
                                        Live Dispatch
                                    </span>
                                </div>

                                <h3 className="mt-4 text-lg font-bold leading-tight tracking-tight text-foreground sm:text-xl">
                                    Ready to help — anywhere in {city}.
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                    Our dispatch team is on standby 24/7. Call
                                    now and we'll send the nearest mechanic
                                    immediately.
                                </p>

                                {/* Stats */}
                                <div className="mt-5 grid grid-cols-2 gap-3">
                                    <div className="rounded-xl border border-border bg-card p-3">
                                        <p className="text-[9px] font-black uppercase tracking-wider text-muted-foreground">
                                            Response
                                        </p>
                                        <p className="mt-1 text-base font-black text-foreground">
                                            {responseTime}
                                        </p>
                                    </div>
                                    <div className="rounded-xl border border-border bg-card p-3">
                                        <p className="text-[9px] font-black uppercase tracking-wider text-muted-foreground">
                                            Availability
                                        </p>
                                        <p className="mt-1 text-base font-black text-foreground">
                                            24/7/365
                                        </p>
                                    </div>
                                </div>

                                {/* CTA */}
                                <Link
                                    href={numberCallLink}
                                    className="group mt-4 flex items-center justify-between rounded-xl border border-primary/25 bg-primary/[0.04] px-4 py-3 transition-colors hover:bg-primary/[0.08]"
                                >
                                    <div className="flex items-center gap-2">
                                        <RiPhoneFill className="size-4 text-primary" />
                                        <span className="text-sm font-bold text-primary">
                                            {displayNumber}
                                        </span>
                                    </div>
                                    <RiArrowRightLine className="size-4 text-primary transition-transform group-hover:translate-x-0.5" />
                                </Link>
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
                                    Car trouble?{" "}
                                    <span className="text-primary">
                                        We'll come to you.
                                    </span>
                                </h2>
                                <p className="mt-3 text-sm leading-relaxed text-background/60 sm:text-base">
                                    Wherever you're parked in {city} — highway
                                    shoulder, basement, or office parking — our
                                    mobile mechanics will meet you there.
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