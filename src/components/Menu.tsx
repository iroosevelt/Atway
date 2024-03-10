import {
  IconButton,
  chakra,
  HStack,
  Tooltip,
  Image,
  Stack,
  Divider,
} from "@chakra-ui/react";
import Link from "next/link";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { AiFillHome, AiOutlineFolder } from "react-icons/ai"; // React Icons for placeholders
import {
  IoChatbubblesSharp,
  IoPerson,
  IoPersonCircle,
  IoPersonCircleOutline,
} from "react-icons/io5";

const Menu: React.FC = () => {
  const router = useRouter();

  const MenuBtn = ({ icon, tooltip }: any) => {
    return (
      // <NextLink href={href} passHref>
      <Tooltip
        label={tooltip}
        aria-label={tooltip}
        bg="rgba(255,255,255,16%)"
        color="rgba(255,255,255,80%)"
        rounded="full"
        size="xs"
        backdropFilter="blur(27px)"
        placement="top"
        fontSize="xs"
        fontWeight="300"
        letterSpacing="0.15px"
        // hasArrow
      >
        <IconButton
          aria-label={tooltip}
          icon={icon}
          variant="primary"
          width="48px"
          height="48px"
          // rounded={{ base: "full", md: "16px" }}
          rounded={{ base: "full", md: "full" }}
          bg="rgba(255, 255, 255, 8%)"
          border="0.5px solid rgba(255, 255, 255, 0.2)"
          // backgroundBlendMode="color-dodge, lighten"
          // bgColor={
          //   // router.pathname === href
          //     ? "rgba(255, 255, 255, 12%)"
          //     : "transparent"
          // }
          color="#FFFFFF"
          fontSize={{ base: "14px", md: "1.4rem" }}
        />
      </Tooltip>
      // </NextLink>
    );
  };

  return (
    <chakra.nav
      // bg="rgba(255, 255, 255, 8%)"
      rounded={{ base: "full", md: "full" }}
      // backdropFilter="blur(27px)"
      // border="0.5px solid rgba(255, 255, 255, 0.2)"
      pos="sticky"
      bottom={{ base: "0", md: "0.45rem" }}
      zIndex="2"
      w={{ base: "100%", md: "fit-content" }}
      my="auto"
    >
      <Stack
        direction={{ base: "row-reverse", md: "column" }}
        align="center"
        spacing={{ base: "1.2rem", md: "1rem" }}
      >
        <MenuBtn
          icon={
            <Image
              src="heart-add.svg"
              w="24px"
              h="24px"
              alt="Collect"
              userSelect="none"
            />
          }
          tooltip="Collect"
        />

        <MenuBtn
          icon={
            <Image
              src="send.svg"
              w="26px"
              h="26px"
              alt="Share"
              userSelect="none"
            />
          }
        />
      </Stack>
    </chakra.nav>
  );
};

export default Menu;
