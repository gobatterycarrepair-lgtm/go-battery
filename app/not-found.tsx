// app/not-found.tsx

import Link from "next/link";
import {
    RiArrowRightLine,
    RiArrowRightUpLine,
    RiArrowLeftLine,
    RiHome4Fill,
    RiSearchLine,
    RiCustomerServiceFill,
    RiToolsFill,
    RiMapPinFill,
    RiWhatsappFill,
    RiCompass3Line,
    RiFlashlightFill,
    RiRouteFill,
    RiPhoneFill,
} from "@remixicon/react";
import { SiteConfig } from "@/config/siteConfig";

export default function NotFound() {
    const {
        numberCallLink,
        whatsappCallLink,
        displayNumber,
        serviceAreas,
    } = SiteConfig;

    return (
        <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-background">
            {/* ============================================================
                BACKGROUND DECORATIVE LAYER
            ============================================================ */}
            <div className="pointer-events-none absolute inset-0">
                {/* Large primary glows */}
                <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-primary/[0.08] blur-[130px]" />
                <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-primary/[0.05] blur-[120px]" />
                <div className="absolute -right-40 -top-40 h-[400px] w-[400px] rounded-full bg-primary/[0.05] blur-[120px]" />

                {/* Dot grid */}
                <div
                    className="absolute inset-0 opacity-[0.3] dark:opacity-20"
                    style={{
                        backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
                        backgroundSize: "28px 28px",
                        maskImage:
                            "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 85%)",
                        WebkitMaskImage:
                            "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 85%)",
                    }}
                />

                {/* Vertical hairlines */}
                <div className="absolute left-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-border to-transparent" />
                <div className="absolute right-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-border to-transparent" />

                {/* Top + bottom hairlines */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            </div>

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
                    
                    {/* ============================================================
                        TOP EYEBROW
                    ============================================================ */}
                    <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/[0.06] px-3.5 py-1.5 backdrop-blur-sm">
                        <span className="relative flex size-1.5">
                            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                            <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
                        </span>
                        <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
                            Error 404
                        </span>
                    </div>

                    {/* ============================================================
                        GIANT 404 VISUAL
                    ============================================================ */}
                    <div className="relative mt-8 w-full">
                        {/* Background glow */}
                        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                            <div className="h-40 w-80 rounded-full bg-primary/20 blur-[100px]" />
                        </div>

                        {/* 404 text */}
                        <div className="relative flex items-center justify-center gap-2 sm:gap-4">
                            {/* First 4 */}
                            <div className="relative">
                                <span className="block bg-gradient-to-b from-foreground via-foreground to-foreground/40 bg-clip-text text-[6rem] font-black leading-none tracking-tighter text-transparent sm:text-[9rem] lg:text-[12rem]">
                                    4
                                </span>
                                {/* Corner crop marks */}
                                <div className="absolute -right-1 top-4 size-6 sm:-right-2 sm:top-8">
                                    <div className="absolute right-0 top-0 h-px w-3 bg-primary/60" />
                                    <div className="absolute right-0 top-0 h-3 w-px bg-primary/60" />
                                </div>
                            </div>

                            {/* O — replaced with an icon */}
                            <div className="relative flex size-[5rem] items-center justify-center sm:size-[7.5rem] lg:size-[10rem]">
                                {/* Rotating ring */}
                                <div className="absolute inset-0 animate-spin rounded-full border-2 border-dashed border-primary/30 [animation-duration:20s]" />
                                {/* Inner circle */}
                                <div className="relative flex size-full items-center justify-center rounded-full border-2 border-primary/20 bg-primary/[0.06]">
                                    <div className="flex size-14 items-center justify-center rounded-full bg-primary/15 sm:size-20 lg:size-24">
                                        <RiCompass3Line className="size-7 text-primary sm:size-10 lg:size-12" />
                                    </div>
                                    {/* Pulse */}
                                    <span className="absolute inset-0 animate-ping rounded-full bg-primary/10" />
                                </div>
                            </div>

                            {/* Second 4 */}
                            <div className="relative">
                                <span className="block bg-gradient-to-b from-foreground via-foreground to-foreground/40 bg-clip-text text-[6rem] font-black leading-none tracking-tighter text-transparent sm:text-[9rem] lg:text-[12rem]">
                                    4
                                </span>
                                {/* Corner crop marks */}
                                <div className="absolute -left-1 top-4 size-6 sm:-left-2 sm:top-8">
                                    <div className="absolute left-0 top-0 h-px w-3 bg-primary/60" />
                                    <div className="absolute left-0 top-0 h-3 w-px bg-primary/60" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ============================================================
                        HEADLINE
                    ============================================================ */}
                    <h1 className="mt-8 max-w-2xl text-2xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                        Lost on the{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10 text-primary">
                                road?
                            </span>
                            <span className="absolute inset-x-0 bottom-1 z-0 h-2.5 bg-primary/15" />
                        </span>{" "}
                        We can help you get back on track.
                    </h1>

                    {/* Subtitle */}
                    <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                        The page you're looking for may have moved, been
                        renamed, or no longer exists. But just like a broken-down
                        car, we can get you moving again.
                    </p>

                    {/* ============================================================
                        PRIMARY CTAs
                    ============================================================ */}
                    <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                        <Link
                            href="/"
                            className="group inline-flex h-12 items-center justify-center gap-2.5 rounded-xl bg-primary px-6 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-200 hover:bg-primary/90 hover:shadow-primary/40"
                        >
                            <RiHome4Fill className="size-4" />
                            Back to Home
                            <RiArrowRightLine className="size-4 transition-transform group-hover:translate-x-0.5" />
                        </Link>
                        <Link
                            href="/services"
                            className="group inline-flex h-12 items-center justify-center gap-2.5 rounded-xl border-2 border-border bg-background px-6 text-sm font-bold text-foreground transition-all duration-200 hover:border-primary hover:text-primary"
                        >
                            <RiToolsFill className="size-4" />
                            Browse Services
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

/* ============================================================
    SUB-COMPONENT: Quick Link Card
============================================================ */
function QuickLink({
    icon: Icon,
    title,
    description,
    href,
}: {
    icon: React.ElementType;
    title: string;
    description: string;
    href: string;
}) {
    return (
        <Link
            href={href}
            className="group relative overflow-hidden rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md hover:shadow-primary/10"
        >
            {/* Hover gradient */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.06] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative flex items-start gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary">
                    <Icon className="size-4 text-primary transition-colors group-hover:text-primary-foreground" />
                </span>
                <div className="min-w-0 flex-1 text-left">
                    <p className="text-sm font-bold leading-tight text-foreground transition-colors group-hover:text-primary">
                        {title}
                    </p>
                    <p className="mt-0.5 text-[11px] leading-tight text-muted-foreground">
                        {description}
                    </p>
                </div>
                <RiArrowRightUpLine className="size-3.5 shrink-0 text-muted-foreground/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
            </div>
        </Link>
    );
}