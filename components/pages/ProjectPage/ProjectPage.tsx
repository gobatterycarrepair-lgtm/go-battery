"use client";

import { useState } from "react";
import Link from "next/link";
import {
    RiArrowRightLine,
    RiArrowRightUpLine,
    RiFlashlightFill,
    RiTimeFill,
    RiCarFill,
    RiMapPinFill,
    RiGridFill,
    RiPhoneFill,
    RiVerifiedBadgeFill,
    RiStarFill,
    RiCheckboxCircleFill,
    RiWhatsappFill,
} from "@remixicon/react";
import { Project } from "@/types/project";
import { projectData } from "@/data/projectData";
import { SiteConfig } from "@/config/siteConfig";
import ProjectCard from "@/components/shared/Card/ProjectCard";
import ProjectModal from "@/components/shared/Modal/ProjectModal";

/* ============ Trust points ============ */
const TRUST_POINTS = [
    { icon: RiFlashlightFill, title: "Real Repairs", subtitle: "Documented cases" },
    { icon: RiTimeFill, title: "5–30 min", subtitle: "Response time" },
    { icon: RiMapPinFill, title: "20+ Areas", subtitle: "Across Dubai" },
    { icon: RiVerifiedBadgeFill, title: "100%", subtitle: "Verified work" },
];

export default function ProjectsPage() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const { city, responseTime, serviceAreas, displayNumber, numberCallLink, whatsappCallLink } = SiteConfig;

    const openProject = (project: Project) => {
        const index = projectData.findIndex((p) => p.title === project.title);
        setCurrentIndex(index >= 0 ? index : 0);
        setSelectedProject(project);
        document.body.style.overflow = "hidden";
    };

    const closeProject = () => {
        setSelectedProject(null);
        document.body.style.overflow = "";
    };

    const navigateProject = (direction: "next" | "prev") => {
        if (direction === "next" && currentIndex < projectData.length - 1) {
            const next = projectData[currentIndex + 1];
            setCurrentIndex(currentIndex + 1);
            setSelectedProject(next);
        }
        if (direction === "prev" && currentIndex > 0) {
            const prev = projectData[currentIndex - 1];
            setCurrentIndex(currentIndex - 1);
            setSelectedProject(prev);
        }
    };

    /* Featured project (first) + rest */
    const featuredProject = projectData[0];
    const allProjects = projectData.slice(1);

    return (
        <main className="relative w-full overflow-hidden bg-neutral-950">
            {/* ============================================================
                HERO SECTION (Compact, Professional)
            ============================================================ */}
            <section className="relative w-full overflow-hidden border-b border-white/[0.08]">
                {/* Background decorations */}
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute left-1/2 top-0 h-[400px] w-[900px] -translate-x-1/2 rounded-full bg-primary/[0.10] blur-[120px]" />
                    <div className="absolute -right-40 bottom-0 h-[300px] w-[300px] rounded-full bg-primary/[0.06] blur-[100px]" />

                    {/* Dot grid */}
                    <div
                        className="absolute inset-0 opacity-[0.20]"
                        style={{
                            backgroundImage: `radial-gradient(circle, oklch(1 0 0) 1px, transparent 1px)`,
                            backgroundSize: "28px 28px",
                            maskImage:
                                "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 85%)",
                            WebkitMaskImage:
                                "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 85%)",
                        }}
                    />

                    {/* Top hairline */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                </div>

                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                    <div className="flex flex-col items-start gap-6 lg:items-center lg:text-center">
                        {/* Eyebrow */}
                        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/[0.08] px-3.5 py-1.5 backdrop-blur-sm">
                            <span className="relative flex size-1.5">
                                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                                <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
                            </span>
                            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
                                Portfolio
                            </span>
                        </div>

                        {/* Headline */}
                        <h1 className="max-w-3xl text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl">
                            Real Repairs from{" "}
                            <span className="relative inline-block">
                                <span className="relative z-10 text-primary">
                                    Dubai Roads
                                </span>
                                <span className="absolute inset-x-0 bottom-1.5 z-0 h-3 bg-primary/20" />
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <p className="max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
                            {projectData.length}+ documented mobile car repair
                            cases from real drivers across {city} — with full
                            diagnostics, parts used, and verified outcomes.
                        </p>

                        {/* Trust badges */}
                        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                            {[
                                "Real Repairs",
                                "Verified Outcomes",
                                "Full Diagnostics",
                            ].map((badge) => (
                                <span
                                    key={badge}
                                    className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-[11px] font-semibold text-white/80 backdrop-blur-sm"
                                >
                                    <RiCheckboxCircleFill className="size-3 text-primary" />
                                    {badge}
                                </span>
                            ))}
                        </div>

                        {/* Stats row */}
                        <div className="mt-4 grid w-full grid-cols-2 gap-3 pt-4 sm:grid-cols-4">
                            {[
                                { value: `${projectData.length}`, label: "Cases" },
                                { value: responseTime.split(" ")[0], label: "Response" },
                                { value: `${serviceAreas.length}+`, label: "Areas" },
                                { value: "100%", label: "Verified" },
                            ].map((stat, i) => (
                                <div
                                    key={i}
                                    className="flex flex-col items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-2.5 backdrop-blur-sm"
                                >
                                    <p className="text-base font-black leading-none text-white sm:text-lg">
                                        {stat.value}
                                    </p>
                                    <p className="mt-1 text-[9px] font-bold uppercase tracking-wider text-white/50">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================================
                PROJECTS GRID
            ============================================================ */}
            <section className="relative w-full py-14 sm:py-16 lg:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section header */}
                    <div className="mb-10 lg:mb-12">
                        <div className="flex items-center gap-4">
                            <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 backdrop-blur-sm">
                                <RiGridFill className="size-3 text-primary" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/60">
                                    All Cases
                                </span>
                            </span>
                            <div className="h-px flex-1 bg-gradient-to-r from-primary/40 via-white/10 to-transparent" />
                            <span className="hidden text-[10px] font-bold uppercase tracking-wider text-white/40 sm:inline">
                                {projectData.length} Cases · {city}
                            </span>
                        </div>

                        <h2 className="mt-5 text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl">
                            Documented{" "}
                            <span className="text-primary">Repair Portfolio</span>
                        </h2>
                        <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">
                            Every case below was performed on-site by our
                            certified mechanics — with real diagnostics, parts,
                            and outcomes.
                        </p>
                    </div>

                    {/* ============================================================
                        FEATURED PROJECT (Hero Card)
                    ============================================================ */}
                    <div className="mb-5">
                        <ProjectCard
                            project={featuredProject}
                            index={0}
                            variant="featured"
                            onClick={() => openProject(featuredProject)}
                        />
                    </div>

                    {/* ============================================================
                        ALL PROJECTS GRID
                    ============================================================ */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-5">
                        {allProjects.map((project, idx) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                index={idx + 1}
                                onClick={() => openProject(project)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================================================
                TRUST BAR
            ============================================================ */}
            <section className="relative w-full border-y border-white/[0.08] bg-white/[0.02]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 divide-x divide-white/[0.08] sm:grid-cols-4">
                        {TRUST_POINTS.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={i}
                                    className="group flex items-center gap-3 p-4 transition-colors hover:bg-white/[0.03] sm:p-5"
                                >
                                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/15 transition-colors group-hover:bg-primary">
                                        <Icon className="size-4 text-primary transition-colors group-hover:text-primary-foreground" />
                                    </span>
                                    <div className="min-w-0">
                                        <p className="text-sm font-black leading-none text-white">
                                            {item.title}
                                        </p>
                                        <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-white/50">
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
                    <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/[0.10] via-neutral-950 to-neutral-950 p-7 sm:p-9 lg:p-12">
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

                        {/* Decorative car icon */}
                        <RiCarFill className="pointer-events-none absolute -right-8 -top-8 size-56 text-primary/[0.05]" />

                        <div className="relative flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
                            <div className="max-w-2xl">
                                <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1">
                                    <RiVerifiedBadgeFill className="size-3 text-primary" />
                                    <span className="text-[10px] font-black uppercase tracking-wider text-primary">
                                        Trusted by 500+ Drivers
                                    </span>
                                </div>
                                <h2 className="mt-4 text-2xl font-bold leading-[1.1] tracking-tight text-white sm:text-3xl lg:text-[2.25rem]">
                                    Want your case{" "}
                                    <span className="text-primary">
                                        featured next?
                                    </span>
                                </h2>
                                <p className="mt-3 text-sm leading-relaxed text-white/60 sm:text-base">
                                    Book a repair and join the {projectData.length}+
                                    documented cases from real drivers across{" "}
                                    {city}.
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
                                        <span className="ml-1.5 text-[11px] font-bold text-white/80">
                                            5.0 Rated
                                        </span>
                                    </div>
                                    <span className="size-1 rounded-full bg-white/30" />
                                    <span className="text-[11px] font-medium text-white/60">
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
                                    className="inline-flex h-12 items-center justify-center gap-2.5 rounded-xl border-2 border-white/15 bg-transparent px-6 text-sm font-bold text-white transition-all duration-200 hover:border-primary hover:text-primary"
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
                MODAL
            ============================================================ */}
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    currentIndex={currentIndex}
                    totalProjects={projectData.length}
                    onClose={closeProject}
                    onNavigate={navigateProject}
                />
            )}
        </main>
    );
}