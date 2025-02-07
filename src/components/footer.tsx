"use client";

import { Tooltip } from "@heroui/react";
import {
  Envelope,
  EnvelopeSimple,
  GithubLogo,
  Icon,
  IconBase,
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
    <footer className="text-gray-600 body-font bg-neutral-950 mt-32">
      <div className="text-white body-font container text-center px-5 py-16 mx-auto flex items-center sm:flex-row flex-col space-x-2">
        <div className="sm:text-left max-w-[512px]">
          <h3 className="uppercase text-2xl font-bold py-4">Logan Dhillon</h3>
          <p className="text-default-200">
            Full-stack developer, robotics programmer, web developer, team
            manager, engineer, aspiring entrepreneur.
          </p>
        </div>
        <div className="flex-grow"></div>
        <div className="sm:text-right mt-8 sm:mt-0">
          <h3 className="uppercase text-xl sm:text-2xl font-bold py-4">
            Connect With Me
          </h3>
          <IconContext.Provider
            value={{
              weight: "fill",
              size: 24,
            }}
          >
            <div className="flex gap-4 justify-end">
              <FooterIconLink
                href="mailto:logandhi64@gmail.com"
                tooltip="Email logandhi64@gmail.com"
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
        <div className="container mx-auto p-8 border-t border-gray-700">
          <p className="text-xs text-neutral-50">
            © {new Date().getFullYear()} Logan Dhillon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
