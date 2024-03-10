import { Stack } from "@chakra-ui/react";

const Environment = () => {
  return (
    <Stack
      position="fixed"
      maxW="100%"
      w="100%"
      minH="100vh"
      top="0"
      right="0"
      bottom="0"
      left="0"
      bg={{ base: "dark.50", md: "#1DB949" }}
      // bgImage="url(/bg-img.png)"
      bgRepeat="no-repeat"
      bgPos="center"
      bgSize="cover"
    />
  );
};

export default Environment;
