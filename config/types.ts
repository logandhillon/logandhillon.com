import { Icon } from "@phosphor-icons/react";

/**
 * `image` type can have an array of one image, in which case only 1 image is statically rendered.
 */
type CardPreview =
  | {
  type: "video";
  src: string;
  alt: string;
}
  | {
  type: "image";
  src: string[];
  alt: string;
};

export type FeaturedWork = {
  title: string;
  time: string;
  role: string;
  description: string;
  href?: string;
  preview: CardPreview;
  tags: {
    label: string;
    className: string;
  }[];
};

export type Skill = {
  title: string;
  description: string;
  icon: Icon;
  iconClass: string;
  iconColor: string;
};

export type ProjectCategory =
  "Networking & Communication" |
  "Tools & Software" |
  "Video Games" |
  "Robotics";

export type ProjectPreview = {
  name: string,
  genre: string,
  description: string,
  category?: ProjectCategory | (string & {}),
  url: string,
  img: {
    src: string,
    alt: string,
    height?: number,
    width?: number
  },
  className?: string,
  downloadable?: boolean
  featured?: boolean,
}