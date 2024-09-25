import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { DocsBody, DocsPage } from "fumadocs-ui/page";

const content = `
# Media
A collection of media I've either authored or been a part of.

**Content:**
* Youtube - [DataIndependent](https://www.youtube.com/@DataIndependent)
* Twitter - [@GregKamradt](https://twitter.com/GregKamradt)
* LinkedIn - [@GregKamradt](https://www.linkedin.com/in/gregkamradt/)

**Appearances:**

* 3/27/2024 - [Podcast] [How Businesses Are Using AI Right Now with Greg Kamradt](https://www.youtube.com/watch?v=KGhRxDgTaUw) 
* 2/14/2024 - [Meetup] [Evaluating LLMs: Needle in a Haystack](https://lu.ma/llm-haystack?hss_channel=lcp-28464994&utm_content=281011090&utm_medium=social&utm_source=linkedin) ([Video](https://youtu.be/aswbFKE_0Dg?t=2228))
* 11/23/2023 - [Podcast] [Building Defensible AI Apps // Gregory Kamradt @DataIndependent // MLOps Podcast #191](https://www.youtube.com/watch?v=oYb1SbVVnYI)
* 11/5/2023 - [Podcast] [Helping companies seize the business opportunity of AI | Greg Kamradt (Data Indy)](https://www.youtube.com/watch?v=JwCVz8x2_BA)
* 10/3/2023 - [Conference] [Introduction To Building AI Applications: LangChain 101 By Greg Kamradt](https://www.youtube.com/watch?v=fK15uqCvYA8&t=7s)
* 10/3/2023 - [Conference] [AI Unbounded: Multiplying the Collective Intelligence of Humanity By Greg Kamradt](https://www.youtube.com/watch?v=7ss28B4d9RQ)
* 8/17/2023 - [Podcast] [The Craft Podcast — Greg Kamradt](https://www.youtube.com/watch?v=l7dknjRx_iQ)
* 7/26/2023 - [Podcast] [What is LangChain and Why Will it Change the World? (Greg Kamradt) - KNN Ep. 160](https://www.youtube.com/watch?v=LAEWR-QZxZA)
* 7/24/2023 - [Podcast] [All About Language Model and AI Ecosystem | Greg Kamradt | Webkul Podcast](https://www.youtube.com/watch?v=CGJ73ExmCaE)
* 6/7/2023 - [Podcast] [Greg Kamradt and Colin Harmon on LLM Agents - Weaviate Podcast #51!) - The AI Podcast Ep. 159](https://www.youtube.com/watch?v=iB4ki6gdAdc)
* 8/24/2016 - [Conference] [Gregory Kamradt | Derivation & Presentation: How to Effectively Tell A Data Science Story](https://www.youtube.com/watch?v=wqB0qt4Oklw)
* 8/24/2016 - [Lecture] [Viking Codecast Presents Greg Kamradt: Lessons Learned the Hard Way (Hacking Your Interviews)](https://www.youtube.com/watch?v=O6nFJzW-SDg)
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
