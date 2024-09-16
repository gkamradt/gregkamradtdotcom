"use client";
import { Share } from "lucide-react";
import {
    TooltipContent,
    Tooltip,
    TooltipTrigger,
    TooltipProvider,
} from "@radix-ui/react-tooltip";

import { useState } from "react";
// import { cn } from '@/utils/cn';
import { buttonVariants } from "@/components/ui/button";

export function Control({ url }: { url: string }): React.ReactElement {
    const [open, setOpen] = useState(false);
    const onClick = (): void => {
        setOpen(true);
        void navigator.clipboard.writeText(`${window.location.origin}${url}`);
    };

    return (
        <TooltipProvider>
            <Tooltip open={open} onOpenChange={setOpen}>
                <TooltipTrigger onClick={onClick} className="flex items-center gap-2">
                    <Share className="size-4" />
                    <span>Share Post</span>
                </TooltipTrigger>
                <TooltipContent className="rounded-lg border bg-fd-popover p-2 text-sm text-fd-popover-foreground">
                    Copied
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}