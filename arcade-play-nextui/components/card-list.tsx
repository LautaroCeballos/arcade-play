import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import Link from "next/link";
import { GameItem } from "@/types";

export default function CardList({ games }: { games: GameItem[] }) {

    return (
        <div className="gap-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {
                games.map((item, index) => (
                    <Link key={index} href={`/game/${item.gameId}`}>
                        <Card shadow="sm" isPressable>
                            <CardBody className="overflow-visible p-0">
                                <Image
                                    shadow="sm"
                                    radius="lg"
                                    width="100%"
                                    alt={item.gameId}
                                    className="w-full object-cover h-[140px]"
                                    src={item.img}
                                />
                            </CardBody>
                            <CardFooter className="text-small justify-between">
                                <b>{item.title}</b>
                                <p className="text-default-500">🌟</p>
                            </CardFooter>
                        </Card>
                    </Link>
                ))
            }
        </div >
    );


}
