import ProjectCard from "@/components/ui/project-card";

// Sample project data (you can replace this with actual data fetching logic)
const projects = [
    {
        imageUrl: "/images/NeedleHaystack.png",
        title: "Needle In A Haystack",
        tagline: "Testing a LLMs ability to recall information from a long context.",
        description: "I created a benchmark to test how well LLMs can recall information from a long context window. It was tested on gpt-4o & claude-2.1",
        link: "https://terramano.co/",
    },
    {
        imageUrl: "/images/TerraMano.jpg",
        title: "Terra Mano",
        tagline: "Handcrafted bronze maps of American terrain.",
        description: "In need of a physical project, I managed 3d printing, casting in bronze, and hand finishing maps of US mountains.",
        link: "https://terramano.co/",
    },
    {
        imageUrl: "/images/ChunkViz.png",
        title: "ChunkViz",
        tagline: "Visualizing different chunking strategies.",
        description: "LLMs do better with shorter context windows. I built a tool to visualize how different chunking strategies to help you pick the one that is best for your use case.",
        link: "https://terramano.co/",
    },
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
