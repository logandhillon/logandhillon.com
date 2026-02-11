"use client";

import { ProjectPreview } from "@/config/types";
import { Button, Card, CardFooter, Image } from "@heroui/react";
import { ArrowCircleDown, ArrowCircleUpRight } from "@phosphor-icons/react";
import Link from "next/link";
import { FC } from "react";

export const ProjectCover: FC<{ project: ProjectPreview }> = ({ project }) => (
  <div>
    <Card isFooterBlurred data-footer-white={project.isTextWhite} className={"group " + project.className} shadow="sm">
      <Image
        removeWrapper
        alt={project.img.alt}
        src={"/previews/project/" + project.img.src}
        isZoomed={project.img.isZoomed}
        className={"rounded-none object-cover object-top " + project.img.className}
        height={project.img.height}
        width={project.img.width}
      />
      <CardFooter className="group-data-footer-white:text-neutral-100 text-black bg-white/10 border-t-1 border-default-300 z-10 justify-between px-6"
                  as={Link} href={project.url}>
        <div className="space-y-1">
          <p className="text-xs uppercase font-bold group-data-footer-white:text-neutral-100/50 text-black/50">{project.genre}</p>
          <h4 className="font-bold text-lg">{project.name}</h4>
          <p className="text-xs group-data-footer-white:text-neutral-100/60 text-black/60">{project.description}</p>
        </div>
        {/* button doesn't do anything, as the footer is clickable; it is just there for ux */}
        <Button isIconOnly color="primary" radius="full">
          {!!project.downloadable ? (
            <ArrowCircleDown weight="fill" size={28}/>
          ) : (
            <ArrowCircleUpRight weight="fill" size={28}/>
          )}
        </Button>
      </CardFooter>
    </Card>
  </div>
);