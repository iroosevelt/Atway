import { Box, Heading, Stack } from "@chakra-ui/react";
import RandomArt from "components/RandonArt";
import SignupForm from "components/Signup";
import Layout from "components/_app.layout";
import { motion } from "framer-motion";
// import Link from "next/link";

const Page = () => {
  return (
    <Stack
      pos="relative"
      justify="space-between"
      h="100%"
      spacing={{ base: "8rem", md: "2rem" }}
    >
      <Box>
        <Heading
          textAlign="center"
          fontSize={{ base: "6rem", sm: "6rem", lg: "20rem" }}
        >
          ATWAY
        </Heading>
      </Box>
      <motion.div
        style={{ height: "100%" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <SignupForm />
      </motion.div>
    </Stack>
  );
};

Page.Layout = Layout;
export default Page;
