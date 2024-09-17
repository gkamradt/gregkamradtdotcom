import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { DocsBody, DocsPage } from "fumadocs-ui/page";

const content = `
# Media 2
A collection of media I've either authored or been a part of.

**Content:**
* Youtube
* Twitter

**Speaking:**
* Podcasts
* Conferences
* Meetups
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
