import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
    imageUrl: string;
    title: string;
    tagline: string;
    description: string;
    link?: string;
}

export default function Component({
    imageUrl,
    title,
    tagline,
    description,
    link,
}: ProjectCardProps) {
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
