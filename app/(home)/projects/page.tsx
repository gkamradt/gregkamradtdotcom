import ProjectCard from "@/components/ui/project-card";

type ImagePosition = "top" | "middle" | "bottom";

type Project = {
    imageUrl: string;
    imagePosition: ImagePosition;
    title: string;
    tagline: string;
    description: string;
    link: string;
};

// Sample project data (you can replace this with actual data fetching logic)
const projects: Project[] = [
    {
        imageUrl: "/images/NeedleHaystack.png",
        imagePosition: "top",
        title: "Needle In A Haystack",
        tagline: "Testing a LLMs ability to recall information from a long context.",
        description: "I created a benchmark to test how well LLMs can recall information from a long context window. It was tested on gpt-4o & claude-2.1",
        link: "https://x.com/gregkamradt/status/1722386725635580292",
    },
    {
        imageUrl: "/images/TerraMano.jpg",
        imagePosition: "middle",
        title: "Terra Mano",
        tagline: "Handcrafted bronze maps of American terrain.",
        description: "In need of a physical project, I managed 3d printing, casting in bronze, and hand finishing maps of US mountains.",
        link: "https://terramano.co/",
    },
    {
        imageUrl: "/images/ChunkViz.png",
        imagePosition: "top",
        title: "ChunkViz",
        tagline: "Visualizing different chunking strategies.",
        description: "LLMs do better with shorter context windows. I built a tool to visualize how different chunking strategies to help you pick the one that is best for your use case.",
        link: "https://chunkviz.up.railway.app/",
    },
    {
        imageUrl: "/images/SnakeBench.png",
        imagePosition: "top",
        title: "SnakeBench",
        tagline: "Benchmarking LLM through multi-headed snake games.",
        description: "50 LLMs battle it out on Snake.",
        link: "https://x.com/gregkamradt/status/1722386725635580292",
    },
    {
        imageUrl: "/images/vibemore.png",
        imagePosition: "top",
        title: "I Vibe More Than You",
        tagline: "If you don't have 85 terminals open, are you even vibing?",
        description: "Meme site that allows you to open up as many vibe terminals you want.",
        link: "https://www.ivibemorethanyou.com/"
    }
    
];

export default function ProjectsPage() {
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-6">Projects</h1>
            <div className="space-y-6">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    );
}
