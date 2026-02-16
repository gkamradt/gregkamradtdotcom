import type { Metadata } from "next";
import { notFound } from "next/navigation";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { writing } from "@/app/source";
import { createMetadata } from '@/utils/metadata';
import { Control } from "@/app/(home)/writing/[slug]/page.client";

export default async function Page(props: {
    params: Promise<{ slug: string }>;
}): Promise<React.ReactElement> {
    const params = await props.params;
    const page = writing.getPage([params.slug]);

    if (!page) notFound();
    if (page.data.display === false) notFound();

    return (
        <>
            <div
                className="container mx-auto rounded-xl border py-12 md:px-8"
                style={{
                    backgroundColor: "black",
                    backgroundImage: [
                        "linear-gradient(140deg, hsla(274,94%,54%,0.3), transparent 50%)",
                        "linear-gradient(to left top, hsla(260,90%,50%,0.8), transparent 50%)",
                        "radial-gradient(circle at 100% 100%, hsla(240,100%,82%,1), hsla(240,40%,40%,1) 17%, hsla(240,40%,40%,0.5) 20%, transparent)",
                    ].join(", "),
                    backgroundBlendMode: "difference, difference, normal",
                }}
            >
                <h1 className="mb-2 text-3xl font-bold text-white">
                    {page.data.title}
                </h1>
                <p className="mb-4 text-white/80">{page.data.description}</p>
            </div>
            <article className="container mx-auto grid grid-cols-1 px-0 py-8 lg:grid-cols-[2fr_1fr] lg:px-4">
                <div className="prose p-4">
                    <page.data.body components={defaultMdxComponents} />
                </div>
                <div className="flex flex-col gap-4 border-l p-4 text-sm">
                    <div>
                        <p className="mb-1 text-fd-muted-foreground">
                            Written by
                        </p>
                        <p className="font-medium">{page.data.author}</p>
                    </div>
                    <div>
                        <p className="mb-1 text-sm text-fd-muted-foreground">
                            At
                        </p>
                        <p className="font-medium">
                            {new Date(
                                page.data.date ?? page.slugs[0]
                            ).toDateString()}
                        </p>
                    </div>
                    <Control url={page.url} />
                </div>
            </article>
        </>
    );
}

export async function generateMetadata(props: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const params = await props.params;
    const page = writing.getPage([params.slug]);

    if (!page) notFound();

    return createMetadata({
        title: page.data.title,
        description:
            page.data.description ??
            "Greg Kamradt's writing",
    });
}

export function generateStaticParams(): { slug: string }[] {
    return writing.getPages().map((page) => ({
        slug: page.slugs[0],
    }));
}
