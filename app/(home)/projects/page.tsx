"use client";

import { useMemo, useState } from "react";
import ProjectCard from "@/components/ui/project-card";

type ImagePosition =
    | { x?: number; y?: number; zoom?: number }
    | "top"
    | "middle"
    | "bottom";

type Project = {
    imageUrl: string;
    imagePosition?: ImagePosition;
    title: string;
    tagline: string;
    description: string;
    link: string;
    // ISO date string (e.g. "2024-01"). Used for sorting and display.
    date: string;
};

// Sample project data (you can replace this with actual data fetching logic)
const projects: Project[] = [
    {
        imageUrl: "/images/NeedleHaystack.png",
        imagePosition: { x: 10, y: 20, zoom: 1.0 },
        title: "Needle In A Haystack",
        tagline: "Testing a LLMs ability to recall information from a long context.",
        description: "I created a benchmark to test how well LLMs can recall information from a long context window. It was tested on gpt-4o & claude-2.1",
        link: "https://x.com/gregkamradt/status/1722386725635580292",
        date: "2024-09-16",
    },
    {
        imageUrl: "/images/TerraMano.jpg",
        imagePosition: { x: 30, y: 55, zoom: 1.05 },
        title: "Terra Mano",
        tagline: "Handcrafted bronze maps of American terrain.",
        description: "In need of a physical project, I managed 3d printing, casting in bronze, and hand finishing maps of US mountains.",
        link: "https://terramano.co/",
        date: "2024-09-16",
    },
    {
        imageUrl: "/images/ChunkViz.png",
        imagePosition: { x: 50, y: -10, zoom: 1.1 },
        title: "ChunkViz",
        tagline: "Visualizing different chunking strategies.",
        description: "LLMs do better with shorter context windows. I built a tool to visualize how different chunking strategies to help you pick the one that is best for your use case.",
        link: "https://chunkviz.up.railway.app/",
        date: "2024-09-16",
    },
    {
        imageUrl: "/images/SnakeBench.png",
        imagePosition: { x: 50, y: 0, zoom: 1.12 },
        title: "SnakeBench",
        tagline: "Benchmarking LLM through multi-headed snake games.",
        description: "50 LLMs battle it out on Snake.",
        link: "https://x.com/gregkamradt/status/1722386725635580292",
        date: "2025-03-11",
    },
    {
        imageUrl: "/images/vibemore.png",
        imagePosition: { x: 50, y: 50, zoom: .9 },
        title: "I Vibe More Than You",
        tagline: "If you don't have 85 terminals open, are you even vibing?",
        description: "Meme site that allows you to open up as many vibe terminals you want.",
        link: "https://www.ivibemorethanyou.com/",
        date: "2025-06-16",
    },
    {
        imageUrl: "/images/ATC_OG.png",
        imagePosition: { x: 55, y: 25, zoom: 1.06 },
        title: "Agent Traffic Control",
        tagline: "A radar view of agents completing work in parallel.",
        description: "A UX exploration combining radar charts and agentic work.",
        link: "https://www.agenttrafficcontrol.com/",
        date: "2025-09-08",
    },
    {
        imageUrl: "/images/tbpnlimited.png",
        imagePosition: { x: 55, y: 55, zoom: 1 },
        title: "TBPN Limited",
        tagline: "Physical Technology Trading Cards",
        description: "Phsyical trading cards based off of popular TBPN moments",
        link: "https://www.tbpnlimited.com/",
        date: "2025-10-29",
    },
    {
        imageUrl: "/images/agnts.png",
        imagePosition: { x: 50, y: 50, zoom: 1 },
        title: "agnts.sh",
        tagline: "Plain-text links for agents.",
        description: "A link service built for agents. Every URL serves three response shapes from the same endpoint - an HTML stub for humans, raw markdown for agents, and full JSON - based on the request's Accept header. Skip the scraping, just hand your agent a link.",
        link: "https://agnts.sh/",
        date: "2026-05-21",
    },
    {
        imageUrl: "/images/InterAuth.png",
        imagePosition: { x: 50, y: 30, zoom: 1 },
        title: "InterAuth",
        tagline: "Give your AI agent scoped read access to a Google Doc in 30 seconds.",
        description: "A pass-through broker that hands your agent a disposable, read-only share address for Google Docs. No OAuth, no install, no signup - share a Doc, revoke anytime, just like with a colleague.",
        link: "https://interauth.dev/",
        date: "2026-06-08",
    },
    {
        imageUrl: "/images/ReadSide.png",
        imagePosition: { x: 45, y: 45, zoom: 1 },
        title: "ReadSide",
        tagline: "A reader for people who actually want to understand.",
        description: "Paste any article URL for a clean, distraction-free reading view, then highlight any passage to start a threaded chat about that exact section.",
        link: "https://readside.dev/",
        date: "2026-06-19",
    },
];

type SortOrder = "newest" | "oldest";

export default function ProjectsPage() {
    const [sortOrder, setSortOrder] = useState<SortOrder>("newest");

    const sortedProjects = useMemo(() => {
        return [...projects].sort((a, b) => {
            if (sortOrder === "newest") {
                return b.date.localeCompare(a.date);
            }
            return a.date.localeCompare(b.date);
        });
    }, [sortOrder]);

    return (
        <div className="container mx-auto py-8">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <h1 className="text-3xl font-bold">Projects</h1>
                <div className="flex items-center gap-2">
                    <label
                        htmlFor="sort"
                        className="text-sm text-muted-foreground"
                    >
                        Sort
                    </label>
                    <select
                        id="sort"
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value as SortOrder)}
                        className="rounded-md border bg-background px-2 py-1 text-sm"
                    >
                        <option value="newest">Newest to oldest</option>
                        <option value="oldest">Oldest to newest</option>
                    </select>
                </div>
            </div>
            <div className="space-y-6">
                {sortedProjects.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </div>
        </div>
    );
}
