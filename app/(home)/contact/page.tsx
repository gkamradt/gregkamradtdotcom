import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { DocsBody, DocsPage } from "fumadocs-ui/page";

const content = `
# Greg Kamradt
Founder @ [Leverage](https://leverage.to) - an AI Product & Education Studio.

I have been working on a series of products, investments, clients, and operating with technology companies.

I sent personal updates to my friends and family, you can get a copy of my notes [here](https://notes.gregkamradt.com).

## Projects
1. [AI Education](https://github.com/gregkamradt/ai-education) - Open source and product content teaching developers how to build AI products.
2. [ARC Prize](https://arcprize.org/) - A $1M competition to open source a solution to [ARC-AGI](https://arcprize.org/arc).
3. [Needle In A Haystack](https://github.com/gkamradt/LLMTest_NeedleInAHaystack/tree/main) - Testing a LLMs ability to recall information from a long context.
4. [Terra Mano](https://terramano.co/) - Hand crafted bronze maps of American terrain.
5. [Writing](https://gregkamradt.com/blog) - Blog and posts
6. and [others](https://gregkamradt.com/projects)

## Around the web
- GitHub: [@gregkamradt](https://github.com/gregkamradt)
- Twitter: [@gregkamradt](https://twitter.com/gregkamradt)
- LinkedIn: [in/Greg Kamradt](https://www.linkedin.com/in/gregkamradt/)
- YouTube: [@dataindependent](https://www.youtube.com/@dataindependent)
`;

export default function MediaPage() {
    return (
        <main className="mx-auto flex size-full max-w-container flex-row items-center gap-6 px-4 py-8">
            <DocsBody>
                <MDXRemote
                    source={content}
                    components={{ ...defaultMdxComponents }}
                />
            </DocsBody>
        </main>
    );
}
