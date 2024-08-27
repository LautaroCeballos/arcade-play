import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};


export type SliderItem = {
  title: string;
  description: string;
  url: string;
  img: string;
}

export type GameItem = {
  id?: number;
  created_at?: string;
  gameId: string;
  title: string;
  description: string;
  author?: string;
  img: string;
}

export type User = {
  id: string;
  name: string;
  created_at: string;
  nickname?: string;
  img?: string;
  description?: string;
  role: string;
  email: string;
}

