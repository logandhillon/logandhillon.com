"use client";

import { Button, Card, CardFooter, Image } from "@heroui/react";
import { ArrowCircleDown, ArrowCircleUpRight } from "@phosphor-icons/react";
import Link from "next/link";
import { FC } from "react";

type ProjectCoverProps = {
  title: string;
  genre: string;
  description: string;
  imgPath: string;
  href: string;
  className?: string;
  imgHeight?: number;
  isDownload?: boolean;
};

export const ProjectCover: FC<ProjectCoverProps> = ({
  title,
  genre,
  description,
  imgPath,
  href,
  className,
  imgHeight,
  isDownload,
}) => (
  <div>
    <Card isFooterBlurred className={className}>
      <Image
        removeWrapper
        alt={title + " cover image"}
        src={"/previews/project/" + imgPath}
        isZoomed
        isBlurred
        className="rounded-none object-cover object-top"
        height={imgHeight}
      />
      <CardFooter className="text-black bg-white/10 border-t-1 border-default-300 z-10 justify-between px-6">
        <div className="space-y-1">
          <p className="text-xs uppercase font-bold text-black/50">{genre}</p>
          <h4 className="font-bold text-lg">{title}</h4>
          <p className="text-xs text-black/60">{description}</p>
        </div>
        <Button isIconOnly color="primary" radius="full" as={Link} href={href}>
          {isDownload ? (
            <ArrowCircleDown weight="fill" size={28}/>
          ) : (
            <ArrowCircleUpRight weight="fill" size={28}/>
          )}
        </Button>
      </CardFooter>
    </Card>
  </div>
);