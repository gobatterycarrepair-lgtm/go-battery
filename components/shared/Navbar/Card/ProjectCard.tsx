// components/shared/Card/ProjectCard.tsx
"use client";

import Image from "next/image";
import {
    RiArrowRightUpLine,
    RiArrowUpLine,
    RiMapPinFill,
    RiTimeFill,
    RiVerifiedBadgeFill,
    RiToolsFill,
} from "@remixicon/react";
import { Project } from "@/types/project";
import { cn } from "@/lib/utils";
import { ProjectCardProps } from "@/types/card";

export default function ProjectCard({
    project,
    index,
    onClick,
    variant = "default",
    className,
}: ProjectCardProps) {
    const isFeatured = variant === "featured";
    const isCompact = variant === "compact";
    const folio = String(index + 1).padStart(2, "0");

    return (
        <article
            onClick={onClick}
            className={cn(
                "group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-neutral-950",
                "transition-all duration-500 ease-out",
                "hover:-translate-y-1.5 hover:border-primary/50",
                "hover:shadow-[0_25px_60px_-20px] hover:shadow-primary/25",
                className
            )}
        >
            {/* ============================================
                IMAGE LAYER
            ============================================ */}
            <div
                className={cn(
                    "relative w-full overflow-hidden bg-neutral-900",
                    isFeatured
                        ? "aspect-4/5 sm:aspect-16/11 lg:aspect-4/5"
                        : "aspect-16/11"
                )}
            >
                {/* Fallback gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 via-neutral-900 to-black" />

                {/* Image with slow zoom */}
                <Image
                    src={project.image}
                    alt={`${project.title} — ${project.area}, Dubai`}
                    fill
                    sizes={
                        isFeatured
                            ? "(max-width: 1024px) 100vw, 50vw"
                            : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    }
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />

                {/* 3-layer gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.08] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* ============ TOP ROW ============ */}
                <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-4">
                    {/* Verified + Completed badge */}
                    <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-black/60 px-2.5 py-1 backdrop-blur-md">
                        <RiVerifiedBadgeFill className="size-3 text-primary" />
                        <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                            Completed
                        </span>
                    </div>

                    {/* Folio number */}
                    <span className="flex size-7 items-center justify-center rounded-lg border border-white/15 bg-black/60 font-mono text-[10px] font-bold text-white/80 backdrop-blur-md">
                        {folio}
                    </span>
                </div>

                {/* ============ CORNER CROP MARKS ============ */}
                <div className="pointer-events-none absolute left-4 top-4 size-8 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute left-0 top-0 h-px w-4 bg-primary" />
                    <div className="absolute left-0 top-0 h-4 w-px bg-primary" />
                </div>

                {/* ============ BOTTOM: Content on image ============ */}
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                    {/* Service chip */}
                    <div className="mb-2.5 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.08] px-2.5 py-1 backdrop-blur-md">
                        <RiToolsFill className="size-2.5 text-primary" />
                        <span className="text-[10px] font-bold uppercase tracking-wider text-white/90">
                            {project.service}
                        </span>
                    </div>

                    {/* Title */}
                    <h3
                        className={cn(
                            "font-bold leading-[1.15] tracking-tight text-white",
                            isFeatured
                                ? "text-lg sm:text-xl lg:text-2xl"
                                : "text-sm sm:text-base"
                        )}
                    >
                        {project.title}
                    </h3>

                    {/* Meta row */}
                    <div className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-white/70">
                        <span className="inline-flex items-center gap-1">
                            <RiMapPinFill className="size-3 text-primary" />
                            <span className="font-medium">
                                {project.area}
                            </span>
                        </span>
                        {project?.clientOverview?.responseTimeMinutes && (
                            <>
                                <span className="size-0.5 rounded-full bg-white/30" />
                                <span className="inline-flex items-center gap-1">
                                    <RiTimeFill className="size-3 text-primary" />
                                    <span className="font-medium">
                                        {
                                            project.clientOverview
                                                .responseTimeMinutes
                                        }{" "}
                                        min
                                    </span>
                                </span>
                            </>
                        )}
                    </div>
                </div>
            </div>

            {/* ============================================
                BOTTOM ACTION BAR (Non-featured)
            ============================================ */}
            {!isFeatured && (
                <div className="flex items-center justify-between border-t border-white/[0.08] bg-neutral-950 px-4 py-3 transition-colors group-hover:bg-neutral-900">
                    {/* Category */}
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-white/40">
                        {project?.category || "Case Study"}
                    </span>

                    {/* View Case CTA */}
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-primary">
                        View Case
                        <RiArrowUpLine className="size-3 rotate-45 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                </div>
            )}

            {/* ============================================
                FEATURED: Extra info bar
            ============================================ */}
            {isFeatured && (
                <div className="flex items-center justify-between border-t border-white/[0.08] bg-neutral-950 px-4 py-3.5 transition-colors group-hover:bg-neutral-900">
                    <div className="flex items-center gap-2">
                        <span className="relative flex size-1.5">
                            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                            <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
                        </span>
                        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-white/60">
                            Featured Case
                        </span>
                    </div>

                    <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-primary">
                        Read Full Case
                        <RiArrowRightUpLine className="size-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                </div>
            )}

            {/* ============================================
                DECORATIVE ELEMENTS
            ============================================ */}
            {/* Bottom accent line */}
            <span className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-primary to-transparent transition-transform duration-500 group-hover:scale-x-100" />
        </article>
    );
}