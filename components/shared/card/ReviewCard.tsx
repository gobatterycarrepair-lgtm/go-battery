// components/shared/Card/ReviewCard.tsx
"use client";

import {
    RiDoubleQuotesL,
    RiMapPinFill,
    RiStarFill,
    RiStarHalfFill,
    RiVerifiedBadgeFill,
    RiTimeFill,
    RiThumbUpFill,
} from "@remixicon/react";
import { cn } from "@/lib/utils";
import { Review } from "@/types/review";

interface ReviewCardProps {
    review: Review;
    index?: number;
    variant?: "default" | "featured" | "compact";
    className?: string;
}

export default function ReviewCard({
    review,
    index = 0,
    variant = "default",
    className,
}: ReviewCardProps) {
    const isFeatured = variant === "featured";
    const isCompact = variant === "compact";
    const initial = review.name.charAt(0).toUpperCase();
    const folio = String(index + 1).padStart(2, "0");

    return (
        <article
            className={cn(
                "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card",
                "transition-all duration-300 ease-out",
                "hover:-translate-y-1 hover:border-primary/40",
                "hover:shadow-[0_20px_50px_-15px] hover:shadow-primary/15",
                isFeatured ? "p-6 sm:p-7" : "p-5 sm:p-6",
                className
            )}
        >
            {/* ============================================
                TOP ACCENT BAR
            ============================================ */}
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/40 via-primary to-primary/40" />

            {/* ============================================
                CORNER CROP MARKS
            ============================================ */}
            <div className="pointer-events-none absolute right-3 top-3">
                <div className="absolute right-0 top-0 h-px w-5 bg-primary/60" />
                <div className="absolute right-0 top-0 h-5 w-px bg-primary/60" />
            </div>

            {/* ============================================
                FADED GIANT QUOTE
            ============================================ */}
            <RiDoubleQuotesL
                aria-hidden="true"
                className={cn(
                    "pointer-events-none absolute select-none text-primary/[0.06] transition-colors duration-500 group-hover:text-primary/[0.10]",
                    isFeatured
                        ? "-right-4 -top-4 size-28"
                        : "-right-2 -top-3 size-20"
                )}
            />

            <div className="relative flex flex-1 flex-col">
                {/* ============================================
                    RATING ROW + FOLIO
                ============================================ */}
                <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                        {/* Stars */}
                        <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => {
                                if (i < review.rating) {
                                    return (
                                        <RiStarFill
                                            key={i}
                                            className="size-3.5 text-primary"
                                        />
                                    );
                                }
                                return (
                                    <RiStarFill
                                        key={i}
                                        className="size-3.5 text-muted-foreground/20"
                                    />
                                );
                            })}
                        </div>

                        {/* Numeric rating badge */}
                        <span className="inline-flex items-center rounded-md bg-primary/10 px-1.5 py-0.5 font-mono text-[10px] font-black text-primary">
                            {review.rating}.0
                        </span>
                    </div>

                    {/* Folio (skip on compact) */}
                    {!isCompact && (
                        <span className="font-mono text-[10px] font-black uppercase tracking-wider text-muted-foreground/40">
                            {folio}
                        </span>
                    )}
                </div>

                {/* ============================================
                    QUOTE TEXT
                ============================================ */}
                <p
                    className={cn(
                        "mt-4 flex-1 leading-relaxed text-foreground/80",
                        isFeatured ? "text-base sm:text-lg" : "text-sm"
                    )}
                >
                    &ldquo;{review.text}&rdquo;
                </p>

                {/* ============================================
                    AUTHOR FOOTER
                ============================================ */}
                <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                    {/* Avatar with initial */}
                    <div className="relative shrink-0">
                        <div className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 ring-1 ring-primary/20 transition-transform duration-300 group-hover:scale-105">
                            <span className="text-sm font-black text-primary">
                                {initial}
                            </span>
                        </div>
                        {/* Verified check badge */}
                        <span className="absolute -bottom-1 -right-1 flex size-4 items-center justify-center rounded-full border-2 border-card bg-primary">
                            <RiVerifiedBadgeFill className="size-2.5 text-primary-foreground" />
                        </span>
                    </div>

                    {/* Name + location */}
                    <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5">
                            <p className="truncate text-sm font-bold tracking-tight text-foreground">
                                {review.name}
                            </p>
                        </div>
                        <div className="mt-0.5 flex items-center gap-1.5 text-[11px] text-muted-foreground">
                            <RiMapPinFill className="size-3 shrink-0 text-primary" />
                            <span className="truncate font-medium">
                                {review.area}
                            </span>
                        </div>
                    </div>

                    {/* Thumbs up badge */}
                    <div className="hidden shrink-0 items-center gap-1 rounded-full border border-border bg-muted/40 px-2 py-1 sm:flex">
                        <RiThumbUpFill className="size-2.5 text-primary" />
                        <span className="font-mono text-[9px] font-black text-muted-foreground">
                            {8 + (index % 12)}
                        </span>
                    </div>
                </div>

                {/* ============================================
                    VERIFIED STRIP (featured only)
                ============================================ */}
                {isFeatured && (
                    <div className="mt-4 flex items-center justify-between rounded-xl border border-primary/20 bg-primary/[0.04] px-3 py-2">
                        <div className="flex items-center gap-1.5">
                            <RiTimeFill className="size-3 text-primary" />
                            <span className="text-[10px] font-black uppercase tracking-wider text-primary">
                                Verified Repair
                            </span>
                        </div>
                        <span className="font-mono text-[10px] font-bold text-muted-foreground">
                            2 weeks ago
                        </span>
                    </div>
                )}
            </div>

            {/* ============================================
                BOTTOM ACCENT LINE
            ============================================ */}
            <span className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-primary to-transparent transition-transform duration-500 group-hover:scale-x-100" />
        </article>
    );
}