import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

type LegacyPosition = "top" | "middle" | "bottom";

type ImagePosition = {
    // Percentages from 0 to 100. Defaults to center (50, 50)
    x?: number;
    y?: number;
    // Multiplier, where 1 = 100% (no zoom). Defaults to 1.
    zoom?: number;
};

interface ProjectCardProps {
    imageUrl: string;
    title: string;
    tagline: string;
    description: string;
    link?: string;
    // Support both the new granular object and the legacy string positions
    imagePosition?: ImagePosition | LegacyPosition;
}

function clamp(num: number, min: number, max: number) {
    return Math.min(Math.max(num, min), max);
}

function normalizePosition(pos?: ImagePosition | LegacyPosition) {
    if (!pos) {
        return { x: 50, y: 50, zoom: 1 };
    }
    if (typeof pos === "string") {
        // Legacy mapping
        const y = pos === "top" ? 0 : pos === "middle" ? 50 : 100;
        return { x: 50, y, zoom: 1 };
    }
    const x = pos.x ?? 50;
    const y = pos.y ?? 50;
    const zoom = pos.zoom ?? 1;
    return { x: clamp(x, 0, 100), y: clamp(y, 0, 100), zoom: Math.max(zoom, 0.01) };
}

export default function Component({
    imageUrl,
    title,
    tagline,
    description,
    link,
    imagePosition,
}: ProjectCardProps) {
    const { x, y, zoom } = normalizePosition(imagePosition);
    return (
        <Card className="overflow-hidden">
            <Link href={link || ""}>
                <div className="flex flex-col sm:flex-row">
                    <div className="relative w-full sm:w-1/3 h-48 sm:h-auto">
                        <Image
                            src={imageUrl}
                            alt={title}
                            fill
                            className="object-cover"
                            // Use objectPosition to shift X/Y and transform scale for zoom
                            style={{
                                objectPosition: `${x}% ${y}%`,
                                transform: `scale(${zoom})`,
                                transformOrigin: "center",
                            }}
                        />
                    </div>
                    <CardContent className="flex-1 p-4 sm:p-6">
                        <h2 className="text-2xl font-bold mb-2">{title}</h2>
                        <p className="text-sm text-muted-foreground mb-3">
                            {tagline}
                        </p>
                        <p className="text-sm text-foreground">{description}</p>
                    </CardContent>
                </div>
            </Link>
        </Card>
    );
}
