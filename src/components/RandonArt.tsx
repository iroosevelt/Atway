import { useEffect, useState } from "react";
import { Container, Image, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";

const RandomArt: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string>("");

  useEffect(() => {
    // Array of Cloudinary image links
    const cloudinaryImageLinks = [
      "https://res.cloudinary.com/djxd1dmvh/image/upload/v1709363640/rsfrrsdwu4xzd8qs47tf.jpg",
      "https://res.cloudinary.com/djxd1dmvh/image/upload/v1709363639/cvt47yjusyzcoulzgxrx.jpg",
      "https://res.cloudinary.com/djxd1dmvh/image/upload/v1709363639/vs0mgkkj76smdgvnihpt.jpg",
      "https://res.cloudinary.com/djxd1dmvh/image/upload/v1709363637/ntgc7ctnh4tyqlortyiq.jpg",
      "https://res.cloudinary.com/djxd1dmvh/image/upload/v1709363637/b5bi4hiwb7hx8fqf6kkh.jpg",
      "https://res.cloudinary.com/djxd1dmvh/image/upload/v1709363636/ovotpsid4uvb2yavckgs.jpg",
      "https://res.cloudinary.com/djxd1dmvh/image/upload/v1709363635/rixentfau4kp6a2j1dpf.jpg",
      
      "https://res.cloudinary.com/djxd1dmvh/image/upload/v1709363633/yxgg8ox2pja68owghny9.jpg",
      "https://res.cloudinary.com/djxd1dmvh/image/upload/v1709363633/e94nhsclgmwds8bwaaqn.jpg",
      "https://res.cloudinary.com/djxd1dmvh/image/upload/v1709363633/jwncn7pe5nvzhn2fpqir.jpg",
      "https://res.cloudinary.com/djxd1dmvh/image/upload/v1709363632/r7xc3l5tebsu2nj0bfnq.jpg",
      "https://res.cloudinary.com/djxd1dmvh/image/upload/v1709363632/t1lnjmlwsjapkmerniqq.jpg",
      "https://res.cloudinary.com/djxd1dmvh/image/upload/v1709363630/hcpigxr0sbxqwygcochz.jpg",
      "https://res.cloudinary.com/djxd1dmvh/image/upload/v1709363629/uhzo4vzybtpdaevk8b3y.jpg",
      
      "https://res.cloudinary.com/djxd1dmvh/image/upload/v1709363629/uhzo4vzybtpdaevk8b3y.jpg",
      "https://res.cloudinary.com/djxd1dmvh/image/upload/v1709363628/yp28osymockxovibysf4.jpg",
      "https://res.cloudinary.com/djxd1dmvh/image/upload/v1709363628/rqvw63qzreveug1z7ag7.jpg",
      'https://res.cloudinary.com/djxd1dmvh/image/upload/v1709363628/rqvw63qzreveug1z7ag7.jpg",

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
            <motion.div whileTap={{ scale: 0.9 }}>
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
            </motion.div>
          </Stack>
        </Container>
      </Stack>
    </Stack>
  );
};

export default RandomArt;
