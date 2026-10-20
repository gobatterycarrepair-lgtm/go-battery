// app/error.tsx

"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
    RiArrowRightLine,
    RiArrowLeftLine,
    RiHome4Fill,
    RiRefreshLine,
    RiCustomerServiceFill,
    RiToolsFill,
    RiMapPinFill,
    RiWhatsappFill,
    RiFlashlightFill,
    RiAlertFill,
    RiShieldCheckFill,
    RiBugLine,
    RiTimeFill,
    RiErrorWarningLine,
    RiArrowGoBackLine,
    RiPhoneFill,
} from "@remixicon/react";
import { SiteConfig } from "@/config/siteConfig";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    const {
        numberCallLink,
        whatsappCallLink,
        displayNumber,
        serviceAreas,
    } = SiteConfig;

    // Log error for debugging (in production, send to Sentry/LogRocket)
    useEffect(() => {
        console.error("Application error:", error);
    }, [error]);

    return (
        <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-background">
            {/* ============================================================
                BACKGROUND DECORATIVE LAYER
            ============================================================ */}
            <div className="pointer-events-none absolute inset-0">
                {/* Warning-tinted glows (destructive color for error) */}
                <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-destructive/[0.06] blur-[130px]" />
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
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-destructive/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            </div>

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
                    
                    {/* ============================================================
                        TOP EYEBROW
                    ============================================================ */}
                    <div className="inline-flex items-center gap-2 rounded-full border border-destructive/25 bg-destructive/[0.06] px-3.5 py-1.5 backdrop-blur-sm">
                        <span className="relative flex size-1.5">
                            <span className="absolute inline-flex size-full animate-ping rounded-full bg-destructive/60" />
                            <span className="relative inline-flex size-1.5 rounded-full bg-destructive" />
                        </span>
                        <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-destructive">
                            System Error
                        </span>
                    </div>

                    {/* ============================================================
                        SIGNATURE VISUAL — Broken Circuit / Diagnostic Theme
                    ============================================================ */}
                    <div className="relative mt-8 w-full max-w-lg">
                        {/* Background glow */}
                        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                            <div className="h-40 w-80 rounded-full bg-destructive/15 blur-[100px]" />
                        </div>

                        <div className="relative flex items-center justify-center gap-3 sm:gap-5">
                            {/* Left: Warning icon block */}
                            <div className="relative flex size-20 items-center justify-center rounded-2xl border-2 border-destructive/20 bg-destructive/[0.06] sm:size-28">
                                {/* Corner crop marks */}
                                <div className="pointer-events-none absolute -right-1 -top-1 size-4">
                                    <div className="absolute right-0 top-0 h-px w-2 bg-destructive/60" />
                                    <div className="absolute right-0 top-0 h-2 w-px bg-destructive/60" />
                                </div>
                                <div className="pointer-events-none absolute -bottom-1 -left-1 size-4">
                                    <div className="absolute bottom-0 left-0 h-px w-2 bg-destructive/60" />
                                    <div className="absolute bottom-0 left-0 h-2 w-px bg-destructive/60" />
                                </div>

                                {/* Warning icon */}
                                <div className="relative">
                                    <span className="absolute inset-0 animate-ping rounded-full bg-destructive/20" />
                                    <RiAlertFill className="relative size-9 text-destructive sm:size-14" />
                                </div>
                            </div>

                            {/* Center: Diagnostic wave */}
                            <div className="flex flex-col items-center gap-1">
                                <div className="flex h-16 items-center gap-1 sm:h-20">
                                    {[0.4, 0.7, 1, 0.7, 0.4].map((h, i) => (
                                        <span
                                            key={i}
                                            className="w-1.5 rounded-full bg-gradient-to-t from-destructive via-primary to-primary sm:w-2"
                                            style={{
                                                height: `${h * 100}%`,
                                                opacity: 0.7,
                                                animation: `pulse 1.5s ease-in-out ${
                                                    i * 0.15
                                                }s infinite`,
                                            }}
                                        />
                                    ))}
                                </div>
                                <span className="font-mono text-[9px] font-black uppercase tracking-[0.2em] text-destructive sm:text-[10px]">
                                    ERR
                                </span>
                            </div>

                            {/* Right: Shield block */}
                            <div className="relative flex size-20 items-center justify-center rounded-2xl border-2 border-primary/20 bg-primary/[0.06] sm:size-28">
                                {/* Corner crop marks */}
                                <div className="pointer-events-none absolute -left-1 -top-1 size-4">
                                    <div className="absolute left-0 top-0 h-px w-2 bg-primary/60" />
                                    <div className="absolute left-0 top-0 h-2 w-px bg-primary/60" />
                                </div>
                                <div className="pointer-events-none absolute -bottom-1 -right-1 size-4">
                                    <div className="absolute bottom-0 right-0 h-px w-2 bg-primary/60" />
                                    <div className="absolute bottom-0 right-0 h-2 w-px bg-primary/60" />
                                </div>

                                <RiShieldCheckFill className="size-9 text-primary sm:size-14" />
                            </div>
                        </div>

                        {/* Error digest badge */}
                        {error?.digest && (
                            <div className="mt-6 flex justify-center">
                                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-1 backdrop-blur-sm">
                                    <RiBugLine className="size-3 text-muted-foreground" />
                                    <span className="font-mono text-[10px] font-bold text-muted-foreground">
                                        Error ID: {error.digest}
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* ============================================================
                        HEADLINE
                    ============================================================ */}
                    <h1 className="mt-8 max-w-2xl text-2xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                        Something went{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10 text-destructive">
                                wrong
                            </span>
                            <span className="absolute inset-x-0 bottom-1 z-0 h-2.5 bg-destructive/15" />
                        </span>{" "}
                        on our end.
                    </h1>

                    {/* Subtitle */}
                    <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                        Our team has been notified and is working on it. In the
                        meantime, try refreshing the page or use one of the
                        options below. Your car repair service is still available.
                    </p>

                    {/* ============================================================
                        PRIMARY CTAs — Retry + Home
                    ============================================================ */}
                    <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                        <button
                            onClick={reset}
                            className="group inline-flex h-12 items-center justify-center gap-2.5 rounded-xl bg-primary px-6 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-200 hover:bg-primary/90 hover:shadow-primary/40"
                        >
                            <RiRefreshLine className="size-4 transition-transform duration-300 group-hover:rotate-180" />
                            Try Again
                            <RiArrowRightLine className="size-4 transition-transform group-hover:translate-x-0.5" />
                        </button>
                        <Link
                            href="/"
                            className="group inline-flex h-12 items-center justify-center gap-2.5 rounded-xl border-2 border-border bg-background px-6 text-sm font-bold text-foreground transition-all duration-200 hover:border-primary hover:text-primary"
                        >
                            <RiHome4Fill className="size-4" />
                            Back to Home
                        </Link>
                    </div>

                    {/* ============================================================
                        WHAT YOU CAN DO — Reassurance options
                    ============================================================ */}
                    <div className="mt-12 w-full">
                        <div className="flex items-center gap-3">
                            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                                While we fix this
                            </span>
                            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
                        </div>

                        {/* <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                            <QuickLink
                                icon={RiRefreshLine}
                                title="Refresh Page"
                                description="Try reloading this page"
                                onClick={() => reset()}
                            />
                            <QuickLink
                                icon={RiToolsFill}
                                title="Browse Services"
                                description="19+ mobile car repairs"
                                href="/services"
                            />
                            <QuickLink
                                icon={RiMapPinFill}
                                title="Service Areas"
                                description={`${serviceAreas.length}+ Dubai districts`}
                                href="/area-we-serve"
                            />
                        </div> */}
                    </div>

        

                    {/* ============================================================
                        BOTTOM FOOTER
                    ============================================================ */}
                    <div className="mt-12 flex flex-col items-center gap-3">
                        <Link
                            href="/"
                            className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary"
                        >
                            <RiArrowGoBackLine className="size-3.5 transition-transform group-hover:-translate-x-0.5" />
                            Return to Homepage
                        </Link>

                        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[10px] text-muted-foreground/60">
                            <span className="inline-flex items-center gap-1.5">
                                <RiShieldCheckFill className="size-3 text-primary/60" />
                                {SiteConfig.brandName}
                            </span>
                            <span className="size-1 rounded-full bg-muted-foreground/30" />
                            <a
                                href={numberCallLink}
                                className="inline-flex items-center gap-1.5 font-semibold transition-colors hover:text-primary"
                            >
                                <RiPhoneFill className="size-3 text-primary/60" />
                                {displayNumber}
                            </a>
                            <span className="size-1 rounded-full bg-muted-foreground/30" />
                            <span>Available 24/7 across Dubai</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* ============================================================
                SUBTLE KEYFRAME ANIMATIONS
            ============================================================ */}
            <style jsx>{`
                @keyframes pulse {
                    0%,
                    100% {
                        transform: scaleY(0.7);
                        opacity: 0.5;
                    }
                    50% {
                        transform: scaleY(1.1);
                        opacity: 1;
                    }
                }
            `}</style>
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
    onClick,
}: {
    icon: React.ElementType;
    title: string;
    description: string;
    href?: string;
    onClick?: () => void;
}) {
    const content = (
        <>
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
                <RiArrowRightLine className="size-3.5 shrink-0 text-muted-foreground/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-primary" />
            </div>
        </>
    );

    const className =
        "group relative overflow-hidden rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md hover:shadow-primary/10 text-left w-full";

    if (href) {
        return (
            <Link href={href} className={className}>
                {content}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={className}>
            {content}
        </button>
    );
}