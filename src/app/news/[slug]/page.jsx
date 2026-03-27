import { notFound } from "next/navigation";
import { Calendar, Tag } from "lucide-react";

// 🔥 FETCH (PRODUCTION SAFE)
async function getNews(slug) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/news`, {
    cache: "no-store",
  });

  const data = await res.json();
  return data.find((n) => n.slug === slug);
}

export default async function NewsDetail({ params }) {
  const news = await getNews(params.slug);

  if (!news) return notFound();

  return (
    <section className="bg-black text-white min-h-screen">

      {/* 🖼️ HERO IMAGE */}
      <div className="relative h-[300px] md:h-[400px]">
        <img
          src={news.image}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* CONTENT */}
      <div className="max-w-3xl mx-auto px-6 py-12">

        {/* META */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-white/60">

          {/* CATEGORY */}
          <span className="flex items-center gap-1 text-green-400">
            <Tag className="w-4 h-4" />
            {news.category}
          </span>

          {/* DATE */}
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {news.date}
          </span>

        </div>

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold mt-4 leading-tight">
          {news.title}
        </h1>

        {/* DIVIDER */}
        <div className="h-px bg-white/10 my-6" />

        {/* CONTENT */}
        <div className="space-y-4 text-white/80 leading-relaxed text-[15px] md:text-base">
          <p>{news.content}</p>
        </div>

      </div>
    </section>
  );
}