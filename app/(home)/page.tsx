import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { DocsBody, DocsPage } from "fumadocs-ui/page";

const content = `
# Greg Kamradt
President @ [ARC Prize Foundation](https://arcprize.org/) - A Northstar to AGI

I have been working on a series of products, investments, clients, and operating with application layer AI companies through [Leverage](https://leverage.to).

I sent updates to my friends and family, you can get a copy [here](https://mail.gregkamradt.com/).

## Projects
1. [AI Education](https://www.leverage.to/learn) - Open source and product content teaching developers how to build AI products.
2. [Leverage](https://leverage.to) - An AI Product & Education Studio.
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

export default function HomePage() {
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
