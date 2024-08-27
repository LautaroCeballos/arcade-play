"use client"

import CardList from "@/components/card-list";
import SliderHome from "@/components/slider-home";
import { useFetchGames } from "@/hooks";

export default function Home() {

  const { games, error } = useFetchGames()

  if (error) {
    return <h1>Error fetching games: {error}</h1>
  }

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-0 md:py-10">
      <SliderHome />

      <h2 className="text-3xl font-bold mt-4 w-full text-left">Ultimos juegos</h2>
      <CardList games={games} />

      <h2 className="text-3xl font-bold mt-4 w-full text-left">Mas jugados</h2>
      <CardList games={games} />

      <h2 className="text-3xl font-bold mt-4 w-full text-left">Mejor Valorados</h2>
      <CardList games={games} />
    </section>
  );
}
