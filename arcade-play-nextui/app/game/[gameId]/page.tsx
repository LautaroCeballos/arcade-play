"use client"

import CodeSimulator from "@/components/code-simultator";
import GameSimulator from "@/components/game-simultator";
import { GameItem } from "@/types"
import { Image } from "@nextui-org/react"
import { Tabs, Tab } from "@nextui-org/react";
import { useFetchGame } from "@/hooks";


export default function GamePage({ params }: { params: { gameId: string } }) {

  const { game, error } = useFetchGame(params.gameId)
  if (error) {
    return <h1>Error fetching game: {error}</h1>
  }
  if (!game) {
    return <h1>Loading...</h1>
  }

  const { title, description, img, gameId }: GameItem = game

  return (
    <>
      <div className="my-5">
      </div>
      <Tabs fullWidth>
        <Tab key="Game" title="Game">
          <section className="grid grid-cols-2 h-screen gap-4">
            <GameSimulator gameId={gameId} />

            <div className="bg-[#f4f4f5] dark:bg-[#27272a] min-h-5 p-5 rounded-md">
              <Image src={img} alt={title} className="object-cover mb-3" width={600} height={200} />
              <h2 className="font-bold text-2xl mb-2">{title}</h2>
              <p>
                {description}
              </p>
            </div>
          </section>
        </Tab>
        <Tab key="Show-Code" title="Show Code">
          <CodeSimulator gameId={gameId} />
        </Tab>
      </Tabs >

    </>
  )
}

