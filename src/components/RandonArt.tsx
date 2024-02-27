import { useEffect, useState } from "react";
import { Container, Image, Stack } from "@chakra-ui/react";

const RandomArt: React.FC = () => {
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
          <Stack h="80vh" m="auto">
            <Image
              src={imageUrl}
              alt="Art"
              w="100%"
              px={{ base: "2rem", md: "0" }}
              h="100%"
              objectFit="contain"
              //   boxShadow="240px 240px 240px rgba(0, 0, 0, 0.5)"
              rounded="8px"
              filter="drop-shadow(240px 240px 240px rgba(0, 0, 0, 0.5))"
            />
          </Stack>
        </Container>
      </Stack>
    </Stack>
  );
};

export default RandomArt;
