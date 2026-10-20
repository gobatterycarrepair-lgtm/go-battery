// components/layout/navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    RiMenuLine,
    RiCloseLine,
    RiMapPinLine,
    RiPhoneFill,
    RiWhatsappFill,
    RiArrowDownSLine,
    RiArrowRightLine,
    RiArrowRightUpLine,
    RiToolsFill,
    RiFlashlightFill,
    RiCustomerServiceFill,
    RiTimeFill,
    RiShieldCheckFill,
    RiStarFill,
    RiBatteryChargeFill,
    RiCarFill,
    RiMailFill,
    RiCalendarCheckFill,
} from "@remixicon/react";
import { services } from "@/data/services/services";
import { cn } from "@/lib/utils";
import Logo from "../Logo/Logo";
import { SiteConfig } from "@/config/siteConfig";

/* ============ Service Categories for Mega Menu ============ */
const serviceCategories = [
    {
        name: "Emergency Services",
        description: "Fast roadside rescue",
        icon: RiFlashlightFill,
        range: [0, 4] as const,
    },
    {
        name: "Repair & Diagnostics",
        description: "Onsite professional fixes",
        icon: RiToolsFill,
        range: [4, 8] as const,
    },
    {
        name: "Maintenance & Care",
        description: "Keep your car running",
        icon: RiCustomerServiceFill,
        range: [8, 12] as const,
    },
];

/* ============ Nav Items ============ */
interface NavItem {
    name: string;
    href: string;
    hasDropdown?: boolean;
}

const navItems: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Service Area", href: "/service-area" },
    { name: "About", href: "/about-us" },
    { name: "Contact", href: "/contact-us" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
    const pathname = usePathname();

    /* ============ Scroll detection ============ */
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    /* ============ Close menus on route change ============ */
    useEffect(() => {
        setIsMobileMenuOpen(false);
        setIsMegaMenuOpen(false);
        setIsMobileServicesOpen(false);
    }, [pathname]);

    /* ============ Lock body scroll when mobile menu is open ============ */
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            {/* ============ Top Info Strip (desktop only) ============ */}
            <div className="hidden bg-foreground text-background lg:block">
                <div className="container mx-auto flex h-9 items-center justify-between px-8 text-[11px]">
                    <div className="flex items-center gap-5">
                        <span className="inline-flex items-center gap-1.5">
                            <RiMapPinLine className="size-3 text-primary" />
                            <span className="text-background/70">
                               {SiteConfig.location} — Serving all UAE
                            </span>
                        </span>
                        <span className="h-3 w-px bg-background/20" />
                        <span className="inline-flex items-center gap-1.5 text-background/70">
                            <RiTimeFill className="size-3 text-primary" />
                            24/7 Emergency Available
                        </span>
                    </div>
                    <div className="flex items-center gap-5">
                        <span className="inline-flex items-center gap-1.5 text-background/70">
                            <RiMailFill className="size-3 text-primary" />
                            {SiteConfig.email}
                        </span>
                        <span className="h-3 w-px bg-background/20" />
                        <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                                <RiStarFill key={i} className="size-2.5 text-primary" />
                            ))}
                            <span className="ml-1 text-background/70 font-medium">
                                5.0 (500+ Reviews)
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* ============ Main Header ============ */}
            <header
                className={cn(
                    "sticky top-0 z-50 bg-background/95 backdrop-blur-xl transition-all duration-300",
                    isScrolled
                        ? "border-b border-border shadow-sm shadow-black/[0.04]"
                        : "border-b border-transparent"
                )}
            >
                {/* Bottom accent hairline (only when not scrolled) */}
                <div
                    className={cn(
                        "absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent transition-opacity duration-300",
                        isScrolled ? "opacity-0" : "opacity-100"
                    )}
                />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between gap-4 lg:h-18">
                        {/* ============ Logo ============ */}
                        {/* <Link href="/" className="flex shrink-0 items-center"> */}
                            <div className="w-44 h-auto sm:w-52 md:w-60 mt-3">
                                <Logo />
                            </div>
                        {/* </Link> */}

                        {/* ============ Desktop Navigation ============ */}
                        <nav className="hidden items-center gap-0.5 lg:flex">
                            {navItems.map((item) => {
                                const isActive =
                                    pathname === item.href ||
                                    (item.href !== "/" &&
                                        pathname.startsWith(item.href));

                                return (
                                    <div
                                        key={item.name}
                                        className="relative"
                                        onMouseEnter={() =>
                                            item.hasDropdown &&
                                            setIsMegaMenuOpen(true)
                                        }
                                        onMouseLeave={() =>
                                            item.hasDropdown &&
                                            setIsMegaMenuOpen(false)
                                        }
                                    >
                                        <Link
                                            href={item.href}
                                            className={cn(
                                                "group relative flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors",
                                                isActive
                                                    ? "text-primary"
                                                    : "text-foreground/70 hover:text-foreground"
                                            )}
                                        >
                                            {item.name}
                                            {item.hasDropdown && (
                                                <RiArrowDownSLine
                                                    className={cn(
                                                        "size-3.5 transition-transform duration-200",
                                                        isMegaMenuOpen &&
                                                            "rotate-180"
                                                    )}
                                                />
                                            )}

                                            {/* Active indicator */}
                                            {isActive && (
                                                <span className="absolute inset-x-3.5 -bottom-px h-0.5 rounded-full bg-primary" />
                                            )}
                                        </Link>

                                        {/* ============ Mega Menu ============ */}
                                        {item.hasDropdown && (
                                            <div
                                                className={cn(
                                                    "absolute left-1/2 top-full -translate-x-1/2 pt-3 transition-all duration-200",
                                                    isMegaMenuOpen
                                                        ? "pointer-events-auto translate-y-0 opacity-100"
                                                        : "pointer-events-none -translate-y-1 opacity-0"
                                                )}
                                            >
                                                <div className="relative w-[880px] overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-black/[0.08] dark:shadow-black/30">
                                                    {/* Top accent bar */}
                                                    <div className="h-1 w-full bg-gradient-to-r from-primary/40 via-primary to-primary/40" />

                                                    {/* Corner accent */}
                                                    <div className="pointer-events-none absolute right-0 top-1 size-16">
                                                        <div className="absolute right-0 top-0 h-px w-10 bg-primary/50" />
                                                        <div className="absolute right-0 top-0 h-10 w-px bg-primary/50" />
                                                    </div>

                                                    {/* Categories grid */}
                                                    <div className="grid grid-cols-3 gap-7 p-7">
                                                        {serviceCategories.map(
                                                            (cat) => {
                                                                const Icon = cat.icon;
                                                                const [start, end] =
                                                                    cat.range;
                                                                const catServices =
                                                                    services.slice(
                                                                        start,
                                                                        end
                                                                    );

                                                                return (
                                                                    <div
                                                                        key={
                                                                            cat.name
                                                                        }
                                                                    >
                                                                        {/* Category header */}
                                                                        <div className="mb-4 flex items-start gap-2.5">
                                                                            <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                                                                                <Icon className="size-4 text-primary" />
                                                                            </span>
                                                                            <div>
                                                                                <h4 className="text-xs font-bold text-foreground">
                                                                                    {
                                                                                        cat.name
                                                                                    }
                                                                                </h4>
                                                                                <p className="mt-0.5 text-[10px] text-muted-foreground">
                                                                                    {
                                                                                        cat.description
                                                                                    }
                                                                                </p>
                                                                            </div>
                                                                        </div>

                                                                        {/* Services list */}
                                                                        <ul className="space-y-0.5">
                                                                            {catServices.map(
                                                                                (
                                                                                    service
                                                                                ) => (
                                                                                    <li
                                                                                        key={
                                                                                            service.slug
                                                                                        }
                                                                                    >
                                                                                        <Link
                                                                                            href={`/services/${service.slug}`}
                                                                                            className="group flex items-center gap-2 rounded-lg px-2.5 py-2 text-xs text-muted-foreground transition-colors hover:bg-primary/5 hover:text-foreground"
                                                                                        >
                                                                                            <RiArrowRightUpLine className="size-3 shrink-0 text-primary/50 transition-colors group-hover:text-primary" />
                                                                                            <span className="truncate">
                                                                                                {
                                                                                                    service.name
                                                                                                }
                                                                                            </span>
                                                                                        </Link>
                                                                                    </li>
                                                                                )
                                                                            )}
                                                                        </ul>
                                                                    </div>
                                                                );
                                                            }
                                                        )}
                                                    </div>

                                                    {/* Footer strip */}
                                                    <div className="flex items-center justify-between gap-4 border-t border-border bg-muted/40 px-7 py-3.5">
                                                        <div className="flex items-center gap-4 text-[11px] font-semibold text-muted-foreground">
                                                            <span className="inline-flex items-center gap-1.5">
                                                                <RiTimeFill className="size-3 text-primary" />
                                                                24/7 Available
                                                            </span>
                                                            <span className="inline-flex items-center gap-1.5">
                                                                <RiShieldCheckFill className="size-3 text-primary" />
                                                                Guaranteed Work
                                                            </span>
                                                            <span className="inline-flex items-center gap-1.5">
                                                                <RiBatteryChargeFill className="size-3 text-primary" />
                                                                Genuine Parts
                                                            </span>
                                                        </div>
                                                        <Link
                                                            href="/services"
                                                            className="group inline-flex items-center gap-1.5 text-xs font-bold text-primary"
                                                        >
                                                            View all services
                                                            <RiArrowRightLine className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </nav>

                        {/* ============ Right: CTA + Mobile Toggle ============ */}
                        <div className="flex items-center gap-2">
                            {/* Desktop call button */}
                            <Link
                                href={SiteConfig.numberCallLink}
                                aria-label={`Call ${SiteConfig.displayNumber}`}
                                className="group hidden items-center gap-2.5 rounded-xl border border-primary/30 bg-primary/5 px-4 py-2 transition-all duration-200 hover:border-primary/60 hover:bg-primary/10 md:inline-flex"
                            >
                                <span className="flex size-7 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-transform group-hover:scale-110">
                                    <RiPhoneFill className="size-3.5" />
                                </span>
                                <div className="hidden flex-col leading-none lg:flex">
                                    <span className="text-[9px] font-semibold uppercase tracking-wider text-primary">
                                        Call 24/7
                                    </span>
                                    <span className="mt-0.5 text-xs font-bold text-foreground">
                                        {SiteConfig.displayNumber}
                                    </span>
                                </div>
                                <span className="text-xs font-bold text-foreground lg:hidden">
                                    Call Now
                                </span>
                            </Link>

                            {/* WhatsApp — desktop */}
                            <Link
                                href={SiteConfig.whatsappCallLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Chat on WhatsApp"
                                className="hidden size-10 items-center justify-center rounded-xl border border-border bg-background text-muted-foreground transition-colors hover:border-primary/40 hover:bg-primary/5 hover:text-primary sm:inline-flex"
                            >
                                <RiWhatsappFill className="size-4" />
                            </Link>

                            {/* Divider */}
                            <div className="mx-1 hidden h-6 w-px bg-border sm:block" />

                            {/* Mobile menu toggle */}
                            <button
                                onClick={() =>
                                    setIsMobileMenuOpen((v) => !v)
                                }
                                aria-label={
                                    isMobileMenuOpen
                                        ? "Close menu"
                                        : "Open menu"
                                }
                                aria-expanded={isMobileMenuOpen}
                                className="relative flex size-10 items-center justify-center rounded-xl border border-border bg-background text-foreground transition-colors hover:border-primary/40 hover:text-primary lg:hidden"
                            >
                                {isMobileMenuOpen ? (
                                    <RiCloseLine className="size-5" />
                                ) : (
                                    <RiMenuLine className="size-5" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* ============ Mobile Menu Overlay ============ */}
            <div
                className={cn(
                    "fixed inset-x-0 top-16 z-40 bottom-0 overflow-y-auto bg-background transition-opacity duration-200 lg:hidden",
                    isMobileMenuOpen
                        ? "pointer-events-auto opacity-100"
                        : "pointer-events-none opacity-0"
                )}
            >
                {/* Background decoration */}
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
                    <div
                        className="absolute inset-0 opacity-30"
                        style={{
                            backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
                            backgroundSize: "28px 28px",
                            maskImage:
                                "radial-gradient(ellipse at center, black 20%, transparent 75%)",
                            WebkitMaskImage:
                                "radial-gradient(ellipse at center, black 20%, transparent 75%)",
                        }}
                    />
                </div>

                <div className="relative container mx-auto px-4 py-6 sm:px-6">
                    {/* Nav links */}
                    <nav className="space-y-1.5">
                        {navItems.map((item) => {
                            const isActive =
                                pathname === item.href ||
                                (item.href !== "/" &&
                                    pathname.startsWith(item.href));

                            return (
                                <div key={item.name}>
                                    {item.hasDropdown ? (
                                        <>
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setIsMobileServicesOpen(
                                                        (v) => !v
                                                    )
                                                }
                                                className={cn(
                                                    "flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-3.5 text-left transition-colors",
                                                    isMobileServicesOpen
                                                        ? "border-primary/40 bg-primary/5"
                                                        : "border-border bg-card"
                                                )}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10">
                                                        <RiToolsFill className="size-3.5 text-primary" />
                                                    </span>
                                                    <span
                                                        className={cn(
                                                            "text-sm font-semibold",
                                                            isMobileServicesOpen
                                                                ? "text-primary"
                                                                : "text-foreground"
                                                        )}
                                                    >
                                                        {item.name}
                                                    </span>
                                                </div>
                                                <RiArrowDownSLine
                                                    className={cn(
                                                        "size-4 text-primary transition-transform duration-200",
                                                        isMobileServicesOpen &&
                                                            "rotate-180"
                                                    )}
                                                />
                                            </button>

                                            {/* Services list */}
                                            <div
                                                className={cn(
                                                    "grid overflow-hidden transition-[grid-template-rows,opacity] duration-200",
                                                    isMobileServicesOpen
                                                        ? "grid-rows-[1fr] opacity-100"
                                                        : "grid-rows-[0fr] opacity-0"
                                                )}
                                            >
                                                <div className="min-h-0">
                                                    <div className="mt-2 space-y-3 rounded-xl border border-border bg-muted/40 p-3">
                                                        {serviceCategories.map(
                                                            (cat) => {
                                                                const Icon =
                                                                    cat.icon;
                                                                const [
                                                                    start,
                                                                    end,
                                                                ] = cat.range;
                                                                const catServices =
                                                                    services.slice(
                                                                        start,
                                                                        end
                                                                    );

                                                                return (
                                                                    <div
                                                                        key={
                                                                            cat.name
                                                                        }
                                                                    >
                                                                        <div className="mb-2 flex items-center gap-2 px-2 pt-1">
                                                                            <Icon className="size-3 text-primary" />
                                                                            <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                                                                                {
                                                                                    cat.name
                                                                                }
                                                                            </span>
                                                                        </div>
                                                                        <ul className="space-y-0.5">
                                                                            {catServices.map(
                                                                                (
                                                                                    service
                                                                                ) => (
                                                                                    <li
                                                                                        key={
                                                                                            service.slug
                                                                                        }
                                                                                    >
                                                                                        <Link
                                                                                            href={`/services/${service.slug}`}
                                                                                            className="flex items-center gap-2 rounded-lg px-2.5 py-2 text-xs text-muted-foreground transition-colors hover:bg-primary/5 hover:text-foreground"
                                                                                            onClick={() =>
                                                                                                setIsMobileMenuOpen(
                                                                                                    false
                                                                                                )
                                                                                            }
                                                                                        >
                                                                                            <RiArrowRightUpLine className="size-3 shrink-0 text-primary/60" />
                                                                                            <span className="truncate">
                                                                                                {
                                                                                                    service.name
                                                                                                }
                                                                                            </span>
                                                                                        </Link>
                                                                                    </li>
                                                                                )
                                                                            )}
                                                                        </ul>
                                                                    </div>
                                                                );
                                                            }
                                                        )}

                                                        <Link
                                                            href="/services"
                                                            onClick={() =>
                                                                setIsMobileMenuOpen(
                                                                    false
                                                                )
                                                            }
                                                            className="mt-1 flex items-center justify-between rounded-lg border border-primary/30 bg-primary/5 px-3 py-2.5 text-xs font-bold text-primary"
                                                        >
                                                            View All Services
                                                            <RiArrowRightLine className="size-3.5" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            onClick={() =>
                                                setIsMobileMenuOpen(false)
                                            }
                                            className={cn(
                                                "flex items-center justify-between rounded-xl border px-4 py-3.5 text-sm font-semibold transition-colors",
                                                isActive
                                                    ? "border-primary/40 bg-primary/5 text-primary"
                                                    : "border-border bg-card text-foreground hover:border-primary/30 hover:text-primary"
                                            )}
                                        >
                                            {item.name}
                                            <RiArrowRightUpLine
                                                className={cn(
                                                    "size-4",
                                                    isActive
                                                        ? "text-primary"
                                                        : "text-muted-foreground"
                                                )}
                                            />
                                        </Link>
                                    )}
                                </div>
                            );
                        })}
                    </nav>

                    {/* Divider */}
                    <div className="my-6 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

                    {/* Trust chips */}
                    <div className="mb-6 flex flex-wrap gap-2">
                        <MiniChip
                            icon={<RiTimeFill className="size-3" />}
                            label="24/7 Available"
                        />
                        <MiniChip
                            icon={<RiShieldCheckFill className="size-3" />}
                            label="Guaranteed"
                        />
                        <MiniChip
                            icon={<RiStarFill className="size-3" />}
                            label="5.0 Rated"
                        />
                        <MiniChip
                            icon={<RiBatteryChargeFill className="size-3" />}
                            label="Genuine Parts"
                        />
                    </div>

                    {/* Location info */}
                    <div className="mb-4 flex items-center gap-2 text-xs text-muted-foreground">
                        <RiMapPinLine className="size-3.5 text-primary" />
                        <span>
                            {SiteConfig.location}, Dubai — Serving all of 
                        </span>
                    </div>

                    {/* Dual CTA */}
                    <div className="grid grid-cols-2 gap-3">
                        <Link
                            href={SiteConfig.numberCallLink}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-primary/30 bg-primary/5 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
                        >
                            <RiPhoneFill className="size-4" />
                            Call Now
                        </Link>
                        <Link
                            href={SiteConfig.whatsappCallLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                        >
                            <RiWhatsappFill className="size-4" />
                            WhatsApp
                        </Link>
                    </div>

                    {/* Footer note */}
                    <p className="mt-6 text-center text-[11px] text-muted-foreground">
                        {SiteConfig.brandName} · {SiteConfig.city}, UAE
                    </p>
                </div>
            </div>
        </>
    );
}

/* ============ Sub-component ============ */
function MiniChip({
    icon,
    label,
}: {
    icon: React.ReactNode;
    label: string;
}) {
    return (
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-2.5 py-1 text-[10px] font-semibold text-muted-foreground">
            <span className="text-primary">{icon}</span>
            {label}
        </span>
    );
}