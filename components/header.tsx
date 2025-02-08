"use client";

import siteConfig from "@/config/site";
import {
  Avatar,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/react";
import { MapPin } from "@phosphor-icons/react";
import Link from "next/link";

export const Header = () => {
  return (
    <Navbar height={72} maxWidth="2xl">
      <NavbarBrand>
        <Avatar src="/memoji.jpg" />
        <div className="ml-3">
          <p className="text-lg font-semibold">Logan Dhillon</p>
          <div className="text-xs text-default-400 flex gap-1 items-center">
            <MapPin weight="fill" />
            <p>ON, Canada</p>
          </div>
        </div>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex" justify="end">
        {Object.keys(siteConfig.navbar.links).map((item, i) => (
          <NavbarItem
            as={Link}
            key={i}
            className="hover:text-gray-900 transition-transform hover:underline hover:scale-125"
            href={
              siteConfig.navbar.links[
                item as keyof typeof siteConfig.navbar.links
              ]
            }
          >
            {item}
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenuToggle className="sm:hidden" />

      <NavbarMenu>
        {Object.keys(siteConfig.navbar.links).map((item, i) => (
          <NavbarMenuItem
            as={Link}
            key={i}
            className="hover:underline"
            href={
              siteConfig.navbar.links[
                item as keyof typeof siteConfig.navbar.links
              ]
            }
          >
            {item}
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
