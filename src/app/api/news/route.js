export async function GET() {
  // 🔥 bisa diganti nanti ke database / CMS
  const data = [
    {
      slug: "barcelona-win",
      title: "Barcelona Start Strong with 2-1 Win",
      image: "/news/news1.jpg",
      date: "25 Mar 2026",
      category: "Match",
      content: "Barcelona opened the tournament with a strong win...",
    },
    {
      slug: "madrid-inter-draw",
      title: "Real Madrid vs Inter Ends in Draw",
      image: "/news/news2.jpg",
      date: "25 Mar 2026",
      category: "Match",
      content: "A tight game ended with no winner...",
    },
    {
      slug: "top-players",
      title: "Top 5 Players to Watch",
      image: "/news/news3.jpg",
      date: "24 Mar 2026",
      category: "Update",
      content: "Here are the top players this season...",
    },
    {
      slug: "bayern-ready",
      title: "Bayern Ready for Championship",
      image: "/news/news4.jpg",
      date: "24 Mar 2026",
      category: "News",
      content: "Bayern looks ready...",
    },
    {
      slug: "group-prediction",
      title: "Group Stage Predictions",
      image: "/news/news5.jpg",
      date: "23 Mar 2026",
      category: "Analysis",
      content: "Experts predict...",
    },
  ];

  return Response.json(data);
}