// components/shared/Loading/Loading.tsx

"use client";

import { cn } from "@/lib/utils";

/* ============================================================
    PAGE LOADER — Full-screen loading overlay
============================================================ */
export function PageLoader({
    label = "Loading...",
    sublabel,
    className,
}: {
    label?: string;
    sublabel?: string;
    className?: string;
}) {
    return (
        <div
            className={cn(
                "fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4",
                "bg-background/80 backdrop-blur-md",
                className
            )}
            role="status"
            aria-live="polite"
            aria-label={label}
        >
            {/* Ambient primary glow */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.08] blur-[120px]" />
            </div>

            {/* Loader content */}
            <div className="relative flex flex-col items-center gap-4">
                {/* Dual-ring spinner */}
                <div className="relative" aria-hidden="true">
                    {/* Outer glow ring */}
                    <div className="absolute inset-0 size-12 animate-ping rounded-full bg-primary/20" />

                    {/* Main spinner */}
                    <div className="relative size-12 animate-spin rounded-full border-[3px] border-primary/20 border-t-primary" />
                </div>

                {/* Labels */}
                {(label || sublabel) && (
                    <div className="text-center">
                        {label && (
                            <p className="text-base font-bold tracking-tight text-foreground">
                                {label}
                            </p>
                        )}
                        {sublabel && (
                            <p className="mt-1 text-xs text-muted-foreground">
                                {sublabel}
                            </p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}