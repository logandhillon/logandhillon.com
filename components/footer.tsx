"use client";

import METADATA from "@/config/site";
import { Tooltip } from "@heroui/react";
import {
  EnvelopeSimple,
  GithubLogo,
  IconContext,
  LinkedinLogo,
} from "@phosphor-icons/react";
import Link from "next/link";
import { FC, ReactNode } from "react";

const FooterIconLink: FC<{
  href: string;
  tooltip: string;
  children: ReactNode;
}> = ({ href, tooltip, children }) => (
  <Link href={href}>
    <Tooltip content={tooltip} placement="bottom">
      {children}
    </Tooltip>
  </Link>
);

export default function Footer() {
  return (
    <footer className="text-background bg-black">
      <div className="container max-w-7xl text-center px-5 py-16 mx-auto grid grid-rows-2 grid-cols-1 sm:grid-cols-2 sm:grid-rows-1">
        <div className="sm:text-left max-w-lg">
          <h3 className="uppercase text-2xl font-bold py-4">Logan Dhillon</h3>
          <p className="text-default-200">
            Full-stack developer, robotics programmer, web developer, team
            manager, engineer, aspiring entrepreneur.
          </p>
        </div>

        <div className="sm:text-right mt-8 sm:mt-0 grow">
          <h3 className="uppercase text-xl sm:text-2xl font-bold py-4">
            Connect With Me
          </h3>
          <IconContext.Provider
            value={{
              weight: "fill",
              size: 24,
            }}
          >
            <div className="flex gap-4 justify-center sm:justify-end">
              <FooterIconLink
                href={"mailto:" + METADATA.email}
                tooltip={"Email " + METADATA.email}
              >
                <EnvelopeSimple />
              </FooterIconLink>
              <FooterIconLink
                href="https://github.com/logandhillon/"
                tooltip="@logandhillon on GitHub"
              >
                <GithubLogo />
              </FooterIconLink>
              <FooterIconLink
                href="https://www.linkedin.com/in/logandhillon/"
                tooltip="in/logandhillon on LinkedIn"
              >
                <LinkedinLogo />
              </FooterIconLink>
            </div>
          </IconContext.Provider>
        </div>
      </div>

      <div className="text-center">
        <div className="container max-w-7xl mx-auto p-8 border-t border-gray-700">
          <p className="text-xs text-neutral-50">
            &copy; {new Date().getFullYear()} Logan Dhillon. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
