export async function GET() {
  try {
    // 🔥 contoh pakai API pihak ketiga (dummy structure)
    const res = await fetch("https://instagram-scraper-api-url", {
      headers: {
        "X-API-KEY": process.env.IG_API_KEY,
      },
    });

    const data = await res.json();

    // mapping biar clean
    const posts = data.items.map((item) => ({
      image: item.image_versions2?.candidates?.[0]?.url,
      caption: item.caption?.text || "",
      likes: item.like_count,
      comments: item.comment_count,
    }));

    return Response.json(posts);
  } catch (err) {
    return Response.json({ error: "Failed to fetch IG" }, { status: 500 });
  }
}