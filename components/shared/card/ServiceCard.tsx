import Link from "next/link";
import Image from "next/image";
import {
    RiArrowRightUpLine,
    RiArrowRightLine,
    RiCheckLine,
} from "@remixicon/react";
import { cn } from "@/lib/utils";
import { ServiceCardProps } from "@/types/card";


export function ServiceCard({
    name,
    slug,
    features = [],
    image,
    intro,
    className,
    index = 0,
}: ServiceCardProps) {
    const displayFeatures = features.slice(0, 3);
    const description =
        intro?.content?.split(".")[0]?.slice(0, 100) + "..." || "";
    const formattedNumber = String(index + 1).padStart(2, "0");

    return (
        <article
            className={cn(
                "group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card",
                "transition-all duration-500 ease-out",
                "hover:-translate-y-1.5 hover:border-primary/50",
                "hover:shadow-[0_20px_50px_-15px] hover:shadow-primary/20",
                className
            )}
        >
            {/* ============================================
                IMAGE SECTION
            ============================================ */}
            <div className="relative aspect-16/11 w-full overflow-hidden bg-muted">
                {image ? (
                    <Image
                        src={image}
                        alt={`${name} in Dubai`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                    />
                ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-background" />
                )}

                {/* Multi-layer gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                {/* Top-left: Number badge */}
                <div className="absolute left-4 top-4 flex items-center gap-2">
                    <span className="flex size-8 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-[11px] font-black text-white backdrop-blur-md">
                        {formattedNumber}
                    </span>
                </div>

                {/* Top-right: Same Day badge */}
                <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/50 px-2.5 py-1 backdrop-blur-md">
                    <span className="relative flex size-1.5">
                        <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/70" />
                        <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white">
                        Same Day
                    </span>
                </div>

                {/* Bottom: Title + description preview */}
                <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="text-lg font-bold leading-tight tracking-tight text-white drop-shadow-lg sm:text-xl">
                        {name}
                    </h3>
                    {description && (
                        <p className="mt-1 line-clamp-1 text-[11px] font-medium text-white/70">
                            {description}
                        </p>
                    )}
                </div>

                {/* Corner crop marks (top-left area) */}
                <div className="pointer-events-none absolute left-4 top-4 size-8 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute left-0 top-0 h-px w-4 bg-primary" />
                    <div className="absolute left-0 top-0 h-4 w-px bg-primary" />
                </div>
            </div>

            {/* ============================================
                CONTENT SECTION
            ============================================ */}
            <div className="relative flex flex-1 flex-col p-5">
                {/* Features list */}
                {displayFeatures.length > 0 && (
                    <ul className="space-y-2.5">
                        {displayFeatures.map((feature, i) => (
                            <li
                                key={i}
                                className="flex items-start gap-2.5 text-xs text-muted-foreground transition-colors group-hover:text-foreground/80"
                            >
                                <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                                    <RiCheckLine className="size-2.5 text-primary" />
                                </span>
                                <span className="line-clamp-1 font-medium">
                                    {feature}
                                </span>
                            </li>
                        ))}
                    </ul>
                )}

                {/* Spacer */}
                <div className="flex-1 py-4" />

                {/* ============================================
                    CTA ROW
                ============================================ */}
                <div className="relative flex items-center justify-between border-t border-border pt-4">
                    {/* Left: Learn more link */}
                    <Link
                        href={`/services/${slug}`}
                        className="group/link inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary transition-colors hover:text-primary/80"
                    >
                        Learn More
                        <RiArrowRightLine className="size-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5" />
                    </Link>

                    {/* Right: Arrow button */}
                    <Link
                        href={`/services/${slug}`}
                        aria-label={`View ${name}`}
                        className="relative flex size-9 items-center justify-center overflow-hidden rounded-full bg-primary text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/40"
                    >
                        <RiArrowRightUpLine className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                </div>
            </div>

            {/* ============================================
                DECORATIVE ELEMENTS
            ============================================ */}
            {/* Bottom accent line */}
            <span className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-primary to-transparent transition-transform duration-500 group-hover:scale-x-100" />

            {/* Top-right corner accent */}
            <div className="pointer-events-none absolute right-0 top-0 size-12 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute right-0 top-0 h-px w-6 bg-primary/60" />
                <div className="absolute right-0 top-0 h-6 w-px bg-primary/60" />
            </div>
        </article>
    );
}