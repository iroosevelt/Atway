import { useEffect, useState } from "react";
import { Avatar, Button, Container, Image, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Menu from "./Menu";

const UserProfile: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string>("");

  useEffect(() => {
    // Array of Cloudinary image links
    const cloudinaryImageLinks = [
      "https://res.cloudinary.com/dzj0s8xyz/image/upload/v1709060863/Art/Poster1-1_l4udw1.png",
      "https://res.cloudinary.com/dzj0s8xyz/image/upload/v1709060863/Art/Poster1_vcb5zu.png",
      "https://res.cloudinary.com/dzj0s8xyz/image/upload/v1709060863/Art/Poster2_n20fiv.png",
      "https://res.cloudinary.com/dzj0s8xyz/image/upload/v1709060863/Art/Poster2-1_ekokwm.png",
      // Add more Cloudinary image links here
    ];

    // Choose a random image link from the array
    const randomIndex = Math.floor(Math.random() * cloudinaryImageLinks.length);
    const randomImageUrl = cloudinaryImageLinks[randomIndex];

    // Set the random image URL
    setImageUrl(randomImageUrl);
  }, []); // Fetch random image when component mounts

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
      bg={`url(${imageUrl})`}
      bgRepeat="no-repeat"
      bgPos="center"
      bgSize="cover"
      // bgGradient="linear-gradient(to bottom, #FFFFFF, #FFFFFF)"
    >
      <Stack
        position="fixed"
        width="100%"
        minH="100vh"
        // bg="rgba(0, 0, 0, 80%)"
        bg="rgba(0, 0, 0, 50%)"
        backdropFilter="blur(8px)"
      >
        <Container maxW="100%" h="100vh" p="0" centerContent>
          <Stack
            // bg="#ccc"
            w={{ base: "100%", md: "40%" }}
            justify="center"
            align="center"
            h="80vh"
            m="auto"
            // spacing="0"
            pos="relative"
            direction={{ base: "column", md: "row" }}
          >
            <motion.div
            //   whileTap={{ scale: 0.9 }}
            //   drag
            //   dragConstraints={{
            //     top: -50,
            //     left: -50,
            //     right: 50,
            //     bottom: 50,
            //   }}
            >
              <Stack h={{ base: "100%", md: "80vh" }} m="auto">
                <Stack
                  //   src={imageUrl}
                  //   alt="Art"
                  bgColor="rgba(255, 255, 255, 8%)"
                  w={{ base: "100%", md: "400px" }}
                  px={{ base: "2rem", md: "0" }}
                  h="100%"
                  objectFit="contain"
                  //   boxShadow="240px 240px 240px rgba(0, 0, 0, 0.5)"
                  rounded="8px"
                  filter="drop-shadow(240px 240px 240px rgba(0, 0, 0, 0.5))"
                >
                  <Avatar name="user" src="/profile.svg" />
                </Stack>
                <Stack></Stack>
              </Stack>
            </motion.div>
            <Stack
              pos={{ base: "relative", md: "relative" }}
              right="0"
              my="auto"
              h="100%"
              // top={{ base: "0", md: "1rem" }}
            >
              <Menu />
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </Stack>
  );
};

export default UserProfile;
