import { Container, Heading, Stack, Text } from "@chakra-ui/react";
import Layout from "components/_app.layout";
// import Link from "next/link";

const Page = () => {
  return (
    <>
      <Container
        maxW="100%"
        h={{ base: "100%", md: "100%" }}
        p={{ base: "0 1rem", md: "0 2.75rem" }}
        m="0"
        // bg="rgba(0,0,0, 90%)"
        backdropFilter="blur(27px)"
        pos="relative"
        zIndex="4"
        // boxShadow="0px -20px 40px 0px rgba(0, 0, 0, 0.80)"
      >
        <Stack>
          <Heading
            color="#FFF"
            textAlign="center"
            fontSize={{ base: "2rem", md: "4rem" }}
            fontStyle="normal"
            fontWeight="400"
            lineHeight={{ base: "8rem", md: "12.5rem" }}
            textTransform="uppercase"
            textDecorationLine="strikethrough"
          >
            Thank you.
          </Heading>
          <Text
            textAlign="center"
            opacity="38%"
            letterSpacing="0.5px"
            fontWeight="300"
            fontSize={{ base: "xs", md: "sm" }}
          >
            You will be the first to know when we launch
          </Text>
        </Stack>
      </Container>
    </>
  );
};

Page.Layout = Layout;
export default Page;
