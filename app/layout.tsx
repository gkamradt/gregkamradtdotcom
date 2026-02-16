import "./global.css";
import { RootProvider } from "fumadocs-ui/provider/next";
import { Inter } from "next/font/google";
import { type ReactNode, Suspense } from "react";
import { PHProvider } from "./providers";
import PostHogPageView from "./PostHogPageView";

const inter = Inter({
    subsets: ["latin"],
});

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" className={inter.className} suppressHydrationWarning>
            <PHProvider>
                <body>
                    <Suspense fallback={null}>
                        <PostHogPageView />
                    </Suspense>
                    <RootProvider>{children}</RootProvider>
                </body>
            </PHProvider>
        </html>
    );
}
