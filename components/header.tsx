"use client";

import siteConfig from "@/config/site";
import {
  Avatar,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem
} from "@heroui/react";
import { Envelope, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import Link from "next/link";

export const Header = () => {
  return (
    <Navbar height={72} maxWidth="xl">
      <NavbarBrand>
        <Avatar src="/memoji.jpg" />
        <div className="ml-3">
          <h1 className="text-xl font-semibold gradient-text animate-gradient">
            Logan Dhillon
          </h1>
          <p className="text-sm text-muted-foreground">Engineer & Founder</p>
        </div>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-6" justify="end">
        {siteConfig.navbar.map((item, i) => (
          <NavbarItem
            as={Link}
            key={i}
            className="hover:text-gray-900 transition-transform hover:underline hover:scale-110"
            href={item}
          >
            {i == 0 ? (
              <LinkedinLogo size={22} />
            ) : i == 1 ? (
              <GithubLogo size={22} />
            ) : (
              <Envelope size={22} />
            )}
          </NavbarItem>
        ))}
      </NavbarContent>
    </Navbar>
  );
};
