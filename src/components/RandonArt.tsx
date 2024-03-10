import { useEffect, useState } from "react";
import {
  Button,
  Container,
  Image,
  Stack,
  Text,
  chakra,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Menu from "./Menu";
import Link from "next/link";

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
"https://res.cloudinary.com/djxd1dmvh/image/upload/v1709363628/rqvw63qzreveug1z7ag7.jpg",
"https://res.cloudinary.com/djxd1dmvh/image/upload/v1709363626/a7vyyyhsskgeodhuhgyr.jpg",
"https://res.cloudinary.com/djxd1dmvh/image/upload/v1709363626/unhvcdrt7lfikvc5a0iz.jpg",
"https://res.cloudinary.com/djxd1dmvh/image/upload/v1709363623/ooc9kzx5kuog7itqht2r.jpg",

"https://res.cloudinary.com/djxd1dmvh/image/upload/v1709363623/nb30efw7wivvyizwfdmo.jpg",
"https://res.cloudinary.com/djxd1dmvh/image/upload/v1709363622/mr6y8pxpeaas6krxemuj.jpg",
"https://res.cloudinary.com/djxd1dmvh/image/upload/v1709363622/bi7wjhjeucl2pcwwcrkc.jpg",
"https://res.cloudinary.com/djxd1dmvh/image/upload/v1709363621/kxbsykqlq5o13zw1lupv.jpg",
"https://res.cloudinary.com/djxd1dmvh/image/upload/v1709363621/yitlvvfyxgbbytdb0cv5.jpg",
"https://res.cloudinary.com/djxd1dmvh/image/upload/v1709363620/u6wkt5ouykgpdeckkb2o.jpg",
"https://res.cloudinary.com/djxd1dmvh/image/upload/v1709363619/uficczu6gv0nwtyslkxk.jpg",

"https://res.cloudinary.com/djxd1dmvh/image/upload/v1709363617/qhptiatcimwr82cz4iur.jpg",
"https://res.cloudinary.com/djxd1dmvh/image/upload/v1709363615/dv0sh1ll6upofbszth5p.jpg",
"https://res.cloudinary.com/djxd1dmvh/image/upload/v1709363615/t7lschyl2ccjvz0ppcik.jpg",
"https://res.cloudinary.com/djxd1dmvh/image/upload/v1709363614/v3pldokfufe6yaiz42ad.jpg",
"https://res.cloudinary.com/djxd1dmvh/image/upload/v1709363614/v3pldokfufe6yaiz42ad.jpg",
"https://res.cloudinary.com/djxd1dmvh/image/upload/v1709363613/dmeguq1xjghmow40zzax.jpg",
"https://res.cloudinary.com/djxd1dmvh/image/upload/v1709363613/py7jtnbmtwzm7pfhhzzm.jpg",

"https://res.cloudinary.com/djxd1dmvh/image/upload/v1709363611/tfjsazcn9sbldynjxlnv.jpg",
"https://res.cloudinary.com/djxd1dmvh/image/upload/v1709363611/egqzdbiik7ddwxlxykfs.jpg",
"https://res.cloudinary.com/djxd1dmvh/image/upload/v1709363610/nm7rzoxipzhrtslcjdam.jpg",
"https://res.cloudinary.com/djxd1dmvh/image/upload/v1709363610/wjo1pxvy2dl5rxt9whdv.jpg",
"https://res.cloudinary.com/djxd1dmvh/image/upload/v1709363609/xdvcxo2fb9lpw9hgo7vu.jpg",
"https://res.cloudinary.com/djxd1dmvh/image/upload/v1709363607/jbg518o8434lymcvwawb.jpg",
"https://res.cloudinary.com/djxd1dmvh/image/upload/v1709363607/dywqtf8q9b473imrycgv.jpg",

"https://res.cloudinary.com/djxd1dmvh/image/upload/v1709363607/avk7jv4jzkrcu8znvmbo.jpg",
"https://res.cloudinary.com/djxd1dmvh/image/upload/v1709363604/q6x3aokaqskl6jvb8pgq.jpg",
"https://res.cloudinary.com/djxd1dmvh/image/upload/v1709363604/vq0vnxux5kj6culmiin4.jpg",
"https://res.cloudinary.com/djxd1dmvh/image/upload/v1709363603/yvvwscyr0iehuqdc4d9b.jpg",
"https://res.cloudinary.com/djxd1dmvh/image/upload/v1709363602/dhyiu1dlzye8d77xoxzf.jpg",
"https://res.cloudinary.com/djxd1dmvh/image/upload/v1709363602/l2ehip4hfz3rjfp12tbk.jpg",

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
              whileTap={{ scale: 0.9 }}
              drag
              dragConstraints={{
                top: -50,
                left: -50,
                right: 50,
                bottom: 50,
              }}
            >
              <Stack h={{ base: "100%", md: "80vh" }} m="auto">
                <Image
                  src={imageUrl}
                  alt="Art"
                  w="100%"
                  px={{ base: "1.5rem", md: "0" }}
                  h="100%"
                  objectFit="contain"
                  //   boxShadow="240px 240px 240px rgba(0, 0, 0, 0.5)"
                  rounded="8px"
                  filter="drop-shadow(240px 240px 240px rgba(0, 0, 0, 0.5))"
                />
                <Stack></Stack>
              </Stack>
            </motion.div>
            {/* <Stack
              pos={{ base: "relative", md: "relative" }}
              right="0"
              my="auto"
              h="100%"
              // top={{ base: "0", md: "1rem" }}
            >
              <Menu />
            
            </Stack> */}
          </Stack>
          <Stack
            direction="row"
            // bg="#ccc"
            fontSize="xs"
            fontWeight="300"
            justify="center"
            align="center"
            w="100%"
            pb={{ base: "1rem", md: "2rem" }}
            // pr={{ base: "0", md: "2.5rem" }}
            letterSpacing="0.5px"
            spacing="1rem"
            opacity="50%"
            // transition="all 4s ease-in-out" // Transition applied here
          >
            <Link href="/">
              <chakra.span
                bg="rgba(255,255, 255, 20%)"
                px="0.6rem"
                py="0.3rem"
                rounded="12px"
                _hover={{ bg: "rgba(255,255, 255, 16%)" }}
              >
                Become a member
              </chakra.span>
            </Link>
            {/* <Link href="/">
              <Text _hover={{ textDecoration: "underline" }}>Exhibitions</Text>
            </Link> */}
            {/* <Link href="/">Become a member</Link> */}
          </Stack>
        </Container>
      </Stack>
    </Stack>
  );
};

export default RandomArt;
