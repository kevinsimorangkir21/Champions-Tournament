import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Tag, ArrowLeft, ArrowUpRight } from "lucide-react";

export const dynamic = "force-dynamic";

async function getNews(slug) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  if (!baseUrl || !slug) {
    return null;
  }

  try {
    const response = await fetch(`${baseUrl}/api/news`, {
      cache: "no-store",
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();

    if (!Array.isArray(data)) {
      return null;
    }

    return data.find((item) => item.slug === slug) ?? null;
  } catch (error) {
    console.error("Failed to fetch news:", error);
    return null;
  }
}

export default async function NewsDetail({ params }) {
  const { slug } = await params;
  const news = await getNews(slug);

  if (!news) {
    notFound();
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#080808] text-white">
      {/* HERO IMAGE */}
      <section className="relative isolate min-h-[350px] overflow-hidden sm:min-h-[440px]">
        {news.image ? (
          <img
            src={news.image}
            alt={news.title || "Tournament news"}
            className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
          />
        ) : (
          <div className="absolute inset-0 -z-20 bg-[#151515]" />
        )}

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/90 via-black/55 to-black/20" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#080808] via-transparent to-black/25" />

        <div className="absolute right-[-100px] top-[-120px] -z-10 h-[320px] w-[320px] rounded-full bg-[#d7ff3f]/[0.07] blur-[110px]" />

        <div className="mx-auto flex min-h-[350px] max-w-7xl flex-col justify-end px-5 pb-12 pt-32 sm:min-h-[440px] sm:px-8 sm:pb-16 lg:px-12">
          <Link
            href="/news"
            className="mb-8 flex w-fit items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-white/60 transition-colors hover:text-[#d7ff3f]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to News
          </Link>

          <div className="max-w-4xl">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="flex items-center gap-1.5 rounded-sm bg-[#d7ff3f] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-black">
                <Tag className="h-3 w-3" />
                {news.category || "News"}
              </span>

              {news.date && (
                <span className="flex items-center gap-2 text-xs font-semibold text-white/65">
                  <Calendar className="h-3.5 w-3.5" />
                  {news.date}
                </span>
              )}
            </div>

            <h1 className="text-3xl font-black uppercase leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              {news.title}
            </h1>

            <div className="mt-7 h-1 w-16 bg-[#d7ff3f]" />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#d7ff3f]/40 to-transparent" />
      </section>

      {/* ARTICLE CONTENT */}
      <article className="mx-auto max-w-7xl px-5 pb-20 pt-8 sm:px-8 sm:pt-12 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-20">
          {/* MAIN ARTICLE */}
          <div className="min-w-0">
            {news.excerpt && (
              <p className="mb-8 border-l-2 border-[#d7ff3f] pl-5 text-lg font-medium leading-8 text-white/75 sm:text-xl">
                {news.excerpt}
              </p>
            )}

            <div className="mb-8 h-px bg-white/[0.09]" />

            <div className="space-y-5 text-[15px] leading-8 text-white/70 sm:text-base">
              {typeof news.content === "string" &&
                news.content.split(/\n\s*\n/).map((paragraph, index) =>
                  paragraph.trim() ? (
                    <p
                      key={index}
                      className="whitespace-pre-line"
                    >
                      {paragraph.trim()}
                    </p>
                  ) : null
                )}
            </div>

            <div className="mt-12 border-t border-white/[0.09] pt-6">
              <Link
                href="/news"
                className="group inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.15em] text-white/60 transition-colors hover:text-[#d7ff3f]"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Explore More News
              </Link>
            </div>
          </div>

          {/* ARTICLE SIDEBAR */}
          <aside className="h-fit space-y-5 lg:sticky lg:top-24">
            <div className="border border-white/[0.09] bg-white/[0.025] p-5">
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#d7ff3f]">
                Article Details
              </p>

              <div className="space-y-5">
                <div>
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.15em] text-white/30">
                    Category
                  </p>
                  <p className="text-sm font-semibold text-white/80">
                    {news.category || "News"}
                  </p>
                </div>

                {news.date && (
                  <div>
                    <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.15em] text-white/30">
                      Published
                    </p>
                    <p className="text-sm font-semibold text-white/80">
                      {news.date}
                    </p>
                  </div>
                )}

                <div>
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.15em] text-white/30">
                    Coverage
                  </p>
                  <p className="text-sm font-semibold text-white/80">
                    Champions Tournament
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/news"
              className="group flex items-center justify-between border border-[#d7ff3f]/20 bg-[#d7ff3f]/[0.04] p-5 transition-colors hover:bg-[#d7ff3f]/[0.09]"
            >
              <div>
                <p className="text-sm font-black uppercase text-white">
                  More Stories
                </p>
                <p className="mt-1 text-xs text-white/45">
                  Explore the latest updates
                </p>
              </div>

              <ArrowUpRight className="h-5 w-5 text-[#d7ff3f] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Link>
          </aside>
        </div>
      </article>

      {/* FOOTER STRIP */}
      <div className="border-t border-white/[0.07]">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-5 py-6 text-[10px] font-bold uppercase tracking-[0.2em] text-white/25 sm:flex-row sm:px-8 lg:px-12">
          <span>Champions Tournament</span>
          <span>News &amp; Updates</span>
        </div>
      </div>
    </main>
  );
}