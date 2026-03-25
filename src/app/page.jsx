"use client";

import Hero from "@/components/Hero";
import LiveMatch from "@/components/LiveMatch";
import TournamentInfo from "@/components/TournamentInfo";
import SchedulePreview from "@/components/SchedulePreview";
import Teams from "@/components/Teams";
import BracketPreview from "@/components/BracketPreview";
import News from "@/components/News";
import InstagramPosts from "@/components/InstagramPosts";

export default function Home() {
  return (
    <>
      <Hero />
      <BracketPreview />
      <SchedulePreview />
      <Teams />
      <InstagramPosts />
      <News />
    </>
  );
}