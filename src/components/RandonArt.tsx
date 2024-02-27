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
    <Container maxW="100%" h="100vh" p="0" centerContent>
      <Stack h="80vh" m="auto">
        <Image
          src={imageUrl}
          alt="Art"
          w="100%"
          h="100%"
          objectFit="contain"
          boxShadow="240px 240px 240px rgba(0, 0, 0, 0.5)"
          rounded="8px"
          //   filter="drop-shadow(240px 240px 240px rgba(0, 0, 0, 0.5))"
        />
      </Stack>
    </Container>
  );
};

export default RandomArt;
