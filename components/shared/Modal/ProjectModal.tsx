// components/shared/ProjectModal/ProjectModal.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
    RiCloseLine,
    RiArrowLeftLine,
    RiArrowRightLine,
    RiMapPinFill,
    RiToolsFill,
    RiTimeFill,
    RiVerifiedBadgeFill,
    RiStarFill,
    RiFileCopyLine,
    RiShareLine,
} from "@remixicon/react";
import { Project } from "@/types/project";
import { cn } from "@/lib/utils";

export default function ProjectModal({
    project,
    currentIndex,
    totalProjects,
    onClose,
    onNavigate,
}: {
    project: Project;
    currentIndex: number;
    totalProjects: number;
    onClose: () => void;
    onNavigate: (direction: "next" | "prev") => void;
}) {
    const [imageLoaded, setImageLoaded] = useState(false);
    const folio = String(currentIndex + 1).padStart(2, "0");
    const totalFolio = String(totalProjects).padStart(2, "0");

    // ESC key to close
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowRight") onNavigate("next");
            if (e.key === "ArrowLeft") onNavigate("prev");
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [onClose, onNavigate]);

    return (
        <>
            {/* ============ Backdrop ============ */}
            <div
                className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl"
                onClick={onClose}
                aria-hidden="true"
            />

            {/* ============ Modal Wrapper ============ */}
            <div
                className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
                onClick={(e) => e.target === e.currentTarget && onClose()}
                role="dialog"
                aria-modal="true"
                aria-label={`Project: ${project.title}`}
            >
                <div className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 shadow-[0_40px_100px_-20px] shadow-primary/20">
                    
                    {/* ============ Top accent bar ============ */}
                    <div className="h-1 w-full shrink-0 bg-gradient-to-r from-primary/40 via-primary to-primary/40" />

                    {/* ============ Header bar ============ */}
                    <div className="flex shrink-0 items-center justify-between gap-3 border-b border-white/10 bg-neutral-950 px-5 py-3.5 sm:px-6">
                        {/* Left: Folio + status */}
                        <div className="flex items-center gap-3">
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1">
                                <RiVerifiedBadgeFill className="size-3 text-primary" />
                                <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                                    Case {folio} / {totalFolio}
                                </span>
                            </span>

                            <span className="hidden font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-white/40 sm:inline">
                                {project?.category || "Case Study"}
                            </span>
                        </div>

                        {/* Right: Nav + close */}
                        <div className="flex items-center gap-1.5">
                            <button
                                onClick={() => onNavigate("prev")}
                                disabled={currentIndex === 0}
                                aria-label="Previous case"
                                className={cn(
                                    "flex size-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white transition-all duration-200",
                                    currentIndex === 0
                                        ? "cursor-not-allowed opacity-30"
                                        : "hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                                )}
                            >
                                <RiArrowLeftLine className="size-4" />
                            </button>

                            <button
                                onClick={() => onNavigate("next")}
                                disabled={currentIndex === totalProjects - 1}
                                aria-label="Next case"
                                className={cn(
                                    "flex size-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white transition-all duration-200",
                                    currentIndex === totalProjects - 1
                                        ? "cursor-not-allowed opacity-30"
                                        : "hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                                )}
                            >
                                <RiArrowRightLine className="size-4" />
                            </button>

                            <div className="mx-1 h-5 w-px bg-white/10" />

                            <button
                                onClick={onClose}
                                aria-label="Close"
                                className="flex size-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white transition-all duration-200 hover:border-red-500/40 hover:bg-red-500/10 hover:text-red-400"
                            >
                                <RiCloseLine className="size-4" />
                            </button>
                        </div>
                    </div>

                    {/* ============ Scrollable Body ============ */}
                    <div className="flex-1 overflow-y-auto">
                        {/* ---------- Image ---------- */}
                        <div className="relative aspect-video w-full overflow-hidden bg-neutral-900">
                            {!imageLoaded && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="size-8 animate-spin rounded-full border-2 border-primary/30 border-t-primary" />
                                </div>
                            )}

                            <Image
                                src={project.image}
                                alt={`${project.title} — ${project.area}, Dubai`}
                                fill
                                className={cn(
                                    "object-cover transition-opacity duration-700",
                                    imageLoaded ? "opacity-100" : "opacity-0"
                                )}
                                onLoad={() => setImageLoaded(true)}
                                sizes="(max-width: 1024px) 100vw, 1024px"
                                priority
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />

                            {/* Corner crop marks */}
                            <div className="pointer-events-none absolute left-4 top-4">
                                <div className="absolute left-0 top-0 h-px w-6 bg-primary" />
                                <div className="absolute left-0 top-0 h-6 w-px bg-primary" />
                            </div>

                            {/* Rating chip */}
                            <div className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/60 px-2.5 py-1 backdrop-blur-md">
                                <div className="flex items-center gap-0.5">
                                    {[...Array(5)].map((_, i) => (
                                        <RiStarFill
                                            key={i}
                                            className="size-2.5 text-primary"
                                        />
                                    ))}
                                </div>
                                <span className="text-[10px] font-bold text-white">
                                    5.0
                                </span>
                            </div>
                        </div>

                        {/* ---------- Info strip ---------- */}
                        <div className="grid grid-cols-1 divide-y divide-white/10 border-b border-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                            <InfoCell
                                icon={RiMapPinFill}
                                label="Location"
                                value={project.area}
                            />
                            <InfoCell
                                icon={RiToolsFill}
                                label="Service"
                                value={project.service}
                            />
                            <InfoCell
                                icon={RiTimeFill}
                                label="Response Time"
                                value={
                                    project?.clientOverview?.responseTimeMinutes
                                        ? `${project.clientOverview.responseTimeMinutes} minutes`
                                        : "On-site"
                                }
                            />
                        </div>

                        {/* ---------- Content ---------- */}
                        <div className="p-6 sm:p-8">
                            {/* Title */}
                            <h2 className="text-xl font-bold leading-tight tracking-tight text-white sm:text-2xl lg:text-3xl">
                                {project.title}
                            </h2>

                            {/* Meta row */}
                            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-white/50">
                                <span className="inline-flex items-center gap-1.5">
                                    <span className="size-1.5 rounded-full bg-primary" />
                                    Verified Repair
                                </span>
                                <span className="hidden size-1 rounded-full bg-white/20 sm:inline-block" />
                                <span>Mobile Unit Dispatch</span>
                                <span className="hidden size-1 rounded-full bg-white/20 sm:inline-block" />
                                <span>Dubai, UAE</span>
                            </div>

                            {/* Description */}
                            {project?.description && (
                                <p className="mt-6 text-sm leading-relaxed text-white/70 sm:text-[15px]">
                                    {project.description}
                                </p>
                            )}

                            {/* Action row */}
                            <div className="mt-8 flex flex-wrap items-center gap-2.5">
                                <button
                                    className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 text-xs font-bold text-white transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                                    onClick={() => {
                                        navigator.clipboard?.writeText(
                                            window.location.href
                                        );
                                    }}
                                >
                                    <RiFileCopyLine className="size-3.5" />
                                    Copy Link
                                </button>

                                <button
                                    className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 text-xs font-bold text-white transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                                    onClick={() => {
                                        if (navigator.share) {
                                            navigator
                                                .share({
                                                    title: project.title,
                                                    text: `Check out this case: ${project.title}`,
                                                    url: window.location.href,
                                                })
                                                .catch(() => {});
                                        }
                                    }}
                                >
                                    <RiShareLine className="size-3.5" />
                                    Share
                                </button>

                                <div className="ml-auto hidden text-[10px] font-bold uppercase tracking-wider text-white/30 sm:block">
                                    Use ← → to navigate
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ============ Progress bar footer ============ */}
                    <div className="h-0.5 w-full shrink-0 bg-white/[0.05]">
                        <div
                            className="h-full bg-gradient-to-r from-primary/60 via-primary to-primary/60 transition-all duration-500"
                            style={{
                                width: `${
                                    ((currentIndex + 1) / totalProjects) * 100
                                }%`,
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

/* ============ Sub-component: Info Cell ============ */
function InfoCell({
    icon: Icon,
    label,
    value,
}: {
    icon: React.ElementType;
    label: string;
    value: string;
}) {
    return (
        <div className="flex items-center gap-3 px-5 py-4">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/15">
                <Icon className="size-4 text-primary" />
            </div>
            <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/40">
                    {label}
                </p>
                <p className="mt-0.5 truncate text-sm font-semibold text-white">
                    {value}
                </p>
            </div>
        </div>
    );
}