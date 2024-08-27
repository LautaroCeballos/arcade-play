"use client"

import { Image } from "@nextui-org/react";
import { sliderItems } from "@/lib/data";
import { useState } from "react";
import { Button } from "@nextui-org/button";

export default function SliderHome() {

    const [item, setItem] = useState(sliderItems[0]);

    const handleClickNext = () => {
        const index = sliderItems.indexOf(item);
        if (index < sliderItems.length - 1) {
            setItem(sliderItems[index + 1]);
        } else {
            setItem(sliderItems[0]);
        }
    }

    const handleClickPrev = () => {
        const index = sliderItems.indexOf(item);
        if (index > 0) {
            setItem(sliderItems[index - 1]);
        } else {
            setItem(sliderItems[sliderItems.length - 1]);
        }
    }

    return (
        <div className="flex justify-center items-center w-full p-0 m-0 relative">
            <ButtonSlider onClick={handleClickPrev} position="left"></ButtonSlider>

            <Image
                shadow="sm"
                radius="lg"
                width="100%"
                height="350px"

                alt={item.title}
                className="w-full object-cover h-[140px]"
                src={item.img}
            />

            <ButtonSlider onClick={handleClickNext} position="right"></ButtonSlider>
        </div>

    );
}

function ButtonSlider({ onClick, position }: { onClick: () => void, position: "left" | "right" }) {
    const positionClass = position === "left" ? "left-0" : "right-0";
    return (
        <Button
            fullWidth
            isIconOnly
            onClick={onClick}
            className={`bg-transparent rounded-none w-[50%] h-full absolute z-20 top-1/2 transform -translate-y-1/2 ${positionClass}`}
        >
        </Button>
    );
}