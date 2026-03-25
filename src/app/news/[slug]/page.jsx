import { notFound } from "next/navigation";

async function getNews(slug) {
  const res = await fetch("http://localhost:3000/api/news");
  const data = await res.json();
  return data.find((n) => n.slug === slug);
}

export default async function NewsDetail({ params }) {
  const news = await getNews(params.slug);

  if (!news) return notFound();

  return (
    <section className="bg-[#0a0a0a] text-white min-h-screen">

      {/* IMAGE */}
      <div className="h-[300px]">
        <img src={news.image} className="w-full h-full object-cover" />
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12">

        <span className="text-green-400 text-sm">
          {news.category}
        </span>

        <h1 className="text-3xl font-bold mt-2">
          {news.title}
        </h1>

        <p className="text-white/50 text-sm mt-2">
          {news.date}
        </p>

        <p className="mt-6 text-white/80 leading-relaxed">
          {news.content}
        </p>

      </div>
    </section>
  );
}