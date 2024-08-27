"use client"

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import NextLink from "next/link";
import { useDisclosure } from "@nextui-org/modal";
import { ThemeSwitch } from "@/components/theme-switch";
import { SearchIcon, Logo } from "@/components/icons";
import LoginModal from "@/components/login-modal";
import { Avatar } from "@nextui-org/avatar";


export const Navbar = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}

      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">ARCADE PLAY</p>
          </NextLink>
        </NavbarBrand>

      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <ul className="lg:flex gap-4 justify-start ml-2">

          <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>

          <NavbarItem>
            <NextLink
              className="data-[active=true]:text-primary data-[active=true]:font-medium"
              href="/game/create"
            >
              <Button>¡Comparte tu juego!</Button>
            </NextLink>
          </NavbarItem>

          <NavbarItem>
            <Button onPress={onOpen}>Iniciar Sesión</Button>
          </NavbarItem>

          <NavbarItem>
            <Avatar
              src="https://avatars.dicebear.com/api/avataaars/1.svg"
              alt="User Avatar"
              size="sm"
            />
          </NavbarItem>


          <NavbarItem className="hidden sm:flex gap-2">
            <ThemeSwitch />
          </NavbarItem>

        </ul>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {searchInput}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          <NavbarMenuItem>
            <Link
              href="/game/create"
              size="lg"
            >
              ¡Comparte tu juego!
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Button onPress={onOpen}>Iniciar Sesión</Button>
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
      <LoginModal isOpen={isOpen} onOpenChange={onOpenChange} />

    </NextUINavbar>
  );
};
