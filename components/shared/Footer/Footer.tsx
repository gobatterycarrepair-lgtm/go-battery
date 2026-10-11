// components/layout/Footer.tsx
import Link from "next/link";
import {
    RiMapPinFill,
    RiPhoneFill,
    RiMailFill,
    RiShieldCheckFill,
    RiTimeFill,
    RiStarFill,
    RiArrowUpLine,
    RiWhatsappFill,
    RiArrowRightLine,
    RiArrowRightUpLine,
    RiFlashlightFill,
    RiBatteryChargeFill,
    RiVerifiedBadgeFill,
    RiGlobalLine,
    RiCustomerServiceFill,
} from "@remixicon/react";
import { SiteConfig } from "@/config/siteConfig";
import { services } from "@/data/services/services";
import Logo from "../Logo/Logo";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const {
        brandName,
        displayNumber,
        email,
        location,
        city,
        country,
        serviceAreas,
        numberCallLink,
        whatsappCallLink,
        GMB,
    } = SiteConfig;

    const quickLinks = [
        { title: "Services", href: "/services" },
        { title: "Areas We Serve", href: "/area-we-serve" },
        { title: "Projects", href: "/projects" },
        { title: "About", href: "/about" },
        { title: "Contact", href: "/contact" },
    ];

    const legalLinks = [
        { title: "Privacy Policy", href: "/privacy" },
        { title: "Terms of Service", href: "/terms" },
        { title: "Sitemap", href: "/sitemap.xml" },
    ];

    return (
        <footer className="relative overflow-hidden bg-foreground text-background">
            {/* ============================================================
                BACKGROUND DECORATIVE LAYER
            ============================================================ */}
            <div className="pointer-events-none absolute inset-0">
                {/* Top radial glow */}
                <div className="absolute left-1/2 top-0 h-[500px] w-[1000px] -translate-x-1/2 rounded-full bg-primary/[0.10] blur-[130px]" />

                {/* Bottom-left corner glow */}
                <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-primary/[0.06] blur-[120px]" />

                {/* Dot grid */}
                <div
                    className="absolute inset-0 opacity-[0.15]"
                    style={{
                        backgroundImage: `radial-gradient(circle, oklch(1 0 0) 1px, transparent 1px)`,
                        backgroundSize: "32px 32px",
                        maskImage:
                            "radial-gradient(ellipse 80% 60% at 50% 30%, black 20%, transparent 80%)",
                        WebkitMaskImage:
                            "radial-gradient(ellipse 80% 60% at 50% 30%, black 20%, transparent 80%)",
                    }}
                />

                {/* Vertical hairlines */}
                <div className="absolute left-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-background/[0.06] to-transparent" />
                <div className="absolute right-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-background/[0.06] to-transparent" />

                {/* Top hairline */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            </div>

            {/* ============================================================
                TOP: BIG CTA BANNER (Newsletter / Call to Action)
            ============================================================ */}
            <div className="relative border-b border-background/[0.08]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-start gap-6 py-10 lg:flex-row lg:items-center lg:justify-between lg:py-12">
                        {/* Left: Big statement */}
                        <div className="max-w-2xl">
                            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/[0.08] px-3 py-1 backdrop-blur-sm">
                                <span className="relative flex size-1.5">
                                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                                    <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
                                </span>
                                <span className="text-[10px] font-black uppercase tracking-[0.18em] text-primary">
                                    Available 24/7 · {city}
                                </span>
                            </div>

                            <h2 className="mt-4 text-2xl font-bold leading-[1.1] tracking-tight text-background sm:text-3xl lg:text-[2.25rem]">
                                Car trouble?{" "}
                                <span className="text-primary">
                                    We'll come to you.
                                </span>
                            </h2>

                            <p className="mt-2.5 max-w-lg text-sm leading-relaxed text-background/60 sm:text-base">
                                Certified mechanics. Genuine parts. 5–30 min
                                response. All across Dubai, 24/7.
                            </p>
                        </div>

                        {/* Right: Dual CTA */}
                        <div className="flex flex-col gap-3 sm:flex-row">
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

            {/* ============================================================
                MAIN CONTENT — Editorial 12-column grid
            ============================================================ */}
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-10 py-5 lg:grid-cols-12">
                    
                    {/* ---------- COLUMN 1: Brand (4 cols) ---------- */}
                    <div className="lg:col-span-4">
                        {/* Logo */}
                        <div className="flex w-52 sm:w-60">
                            <Logo />
                        </div>

                        {/* Description */}
                        <p className="mt-5 max-w-sm text-sm leading-relaxed text-background/60">
                            {SiteConfig.description}
                        </p>

                        {/* Contact list */}
                        <ul className="mt-6 space-y-3">
                            <ContactItem
                                icon={RiPhoneFill}
                                href={numberCallLink}
                                label="Call Now"
                                value={displayNumber}
                                highlight
                            />
                            <ContactItem
                                icon={RiMailFill}
                                href={`mailto:${email}`}
                                label="Email Us"
                                value={email}
                            />
                            <ContactItem
                                icon={RiMapPinFill}
                                href={GMB.mapsLink}
                                label="Visit Us"
                                value={`${location}, ${city}`}
                                external
                            />
                        </ul>

                        {/* Social row */}
                        <div className="mt-7">
                            <p className="mb-3 text-[10px] font-black uppercase tracking-[0.15em] text-background/40">
                                Follow Us
                            </p>
                            <div className="flex flex-wrap items-center gap-2">
                                {SiteConfig.socialLinks.map((social) => {
                                    const Icon = social.icon;
                                    if (!social.href) return null;
                                    return (
                                        <Link
                                            key={social.name}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={social.name}
                                            className="group flex size-10 items-center justify-center rounded-xl border border-background/10 bg-background/[0.03] text-background/60 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                                        >
                                            <Icon className="size-4" />
                                        </Link>
                                    );
                                })}
                                <Link
                                    href={whatsappCallLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="WhatsApp"
                                    className="group flex size-10 items-center justify-center rounded-xl border border-background/10 bg-background/[0.03] text-background/60 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                                >
                                    <RiWhatsappFill className="size-4" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* ---------- COLUMN 2: Services (3 cols) ---------- */}
                    <div className="lg:col-span-3">
                        <ColumnHeader title="Our Services" count={services.length} />
                        <ul className="mt-5 space-y-1">
                            {services.map((service) => (
                                <FooterLink
                                    key={service.slug}
                                    href={`/services/${service.slug}`}
                                    label={service.name}
                                />
                            ))}
                            <li>
                            </li>
                        </ul>
                    </div>

                    {/* ---------- COLUMN 3: Service Areas (2 cols) ---------- */}
                    <div className="lg:col-span-2">
                        <ColumnHeader title="Service Areas" count={serviceAreas.length} />
                        <ul className="mt-5 space-y-1">
                            {serviceAreas.map((area) => (
                                <FooterLink
                                    key={area.slug}
                                    href={`/area-we-serve/${area.slug}`}
                                    label={area.name}
                                />
                            ))}
                            <li>
                            </li>
                        </ul>
                    </div>

                    {/* ---------- COLUMN 4: Company + Support (3 cols) ---------- */}
                    <div className="lg:col-span-3">
                        {/* Quick Links */}
                        <ColumnHeader title="Company" />
                        <ul className="mt-5 space-y-1">
                            {quickLinks.map((item) => (
                                <FooterLink
                                    key={item.title}
                                    href={item.href}
                                    label={item.title}
                                />
                            ))}
                        </ul>

                        {/* Support Card */}
                        <div className="mt-7 overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/[0.08] via-background/[0.03] to-transparent p-4">
                            {/* Corner accent */}
                            <div className="pointer-events-none absolute right-0 top-0 size-12">
                                <div className="absolute right-0 top-0 h-px w-6 bg-primary/50" />
                                <div className="absolute right-0 top-0 h-6 w-px bg-primary/50" />
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/15">
                                    <RiCustomerServiceFill className="size-4 text-primary" />
                                </span>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-wider text-primary">
                                        24/7 Support
                                    </p>
                                    <p className="mt-1 text-xs font-semibold text-background/80">
                                        Round-the-clock emergency dispatch
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                {/* ============================================================
                    BOTTOM BAR — Copyright + Legal + Back to top
                ============================================================ */}
                <div className="relative border-t border-background/[0.08]">
                    <div className="flex flex-col items-center gap-5 py-6 lg:flex-row lg:justify-between">
                        {/* Left: Copyright */}
                        <div className="flex flex-col items-center gap-1.5 text-center lg:items-start lg:text-left">
                            <p className="text-xs text-background/50">
                                © {currentYear}{" "}
                                <span className="font-bold text-background">
                                    {brandName}
                                </span>
                                . All rights reserved.
                            </p>
                            <div className="flex items-center gap-2 text-[10px] text-background/40">
                                <span>Mobile Car Repair</span>
                                <span className="size-0.5 rounded-full bg-background/30" />
                                <span>
                                    {city}, {country}
                                </span>
                                <span className="hidden size-0.5 rounded-full bg-background/30 sm:inline-block" />
                                <span className="hidden items-center gap-1 sm:inline-flex">
                                    <RiVerifiedBadgeFill className="size-3 text-primary" />
                                    Verified Business
                                </span>
                            </div>
                        </div>

                        {/* Center/Right: Legal links */}
                        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
                            {legalLinks.map((item) => (
                                <Link
                                    key={item.title}
                                    href={item.href}
                                    className="text-xs font-semibold text-background/50 transition-colors hover:text-primary"
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

/* ============================================================
    SUB-COMPONENTS
============================================================ */

function ColumnHeader({ title, count }: { title: string; count?: number }) {
    return (
        <div className="flex items-center justify-between">
            <h3 className="text-[10px] font-black uppercase tracking-[0.18em] text-background/90">
                {title}
            </h3>
            {count !== undefined && (
                <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-[9px] font-black text-primary">
                    {count}
                </span>
            )}
        </div>
    );
}

function FooterLink({ href, label }: { href: string; label: string }) {
    return (
        <li>
            <Link
                href={href}
                className="group inline-flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-[13px] font-medium text-background/60 transition-all duration-200 hover:bg-background/[0.04] hover:pl-3 hover:text-background"
            >
                <span className="size-1 shrink-0 rounded-full bg-primary/50 transition-colors group-hover:bg-primary" />
                <span className="truncate">{label}</span>
                <RiArrowRightUpLine className="ml-auto size-3 shrink-0 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 group-hover:text-primary" />
            </Link>
        </li>
    );
}

function ContactItem({
    icon: Icon,
    href,
    label,
    value,
    highlight,
    external,
}: {
    icon: React.ElementType;
    href: string;
    label: string;
    value: string;
    highlight?: boolean;
    external?: boolean;
}) {
    return (
        <li>
            <Link
                href={href}
                {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                className="group flex items-center gap-3 rounded-xl border border-transparent p-1.5 transition-all duration-200 hover:border-background/[0.08] hover:bg-background/[0.03]"
            >
                <span
                    className={
                        highlight
                            ? "flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary shadow-lg shadow-primary/25"
                            : "flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10"
                    }
                >
                    <Icon
                        className={
                            highlight
                                ? "size-4 text-primary-foreground"
                                : "size-4 text-primary"
                        }
                    />
                </span>
                <div className="min-w-0 flex-1">
                    <p className="text-[9px] font-black uppercase tracking-[0.15em] text-background/40">
                        {label}
                    </p>
                    <p
                        className={
                            highlight
                                ? "mt-0.5 truncate text-sm font-bold text-primary"
                                : "mt-0.5 truncate text-sm font-semibold text-background"
                        }
                    >
                        {value}
                    </p>
                </div>
                <RiArrowRightUpLine className="size-3.5 shrink-0 text-background/20 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
            </Link>
        </li>
    );
}

function TrustFeature({
    icon: Icon,
    title,
    value,
}: {
    icon: React.ElementType;
    title: string;
    value: string;
}) {
    return (
        <div className="group flex items-center gap-3 p-4 transition-colors hover:bg-background/[0.02] sm:p-5">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                <Icon className="size-4 text-primary" />
            </span>
            <div className="min-w-0">
                <p className="truncate text-[10px] font-black uppercase tracking-wider text-background/40">
                    {title}
                </p>
                <p className="mt-0.5 truncate text-sm font-bold text-background">
                    {value}
                </p>
            </div>
        </div>
    );
}