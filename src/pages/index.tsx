import {
  Box,
  Button,
  Container,
  Grid,
  HStack,
  Heading,
  Stack,
  Text,
  chakra,
} from "@chakra-ui/react";
import RandomArt from "components/RandonArt";
import Layout from "components/_app.layout";
import { IoMdArrowForward } from "react-icons/io";
// import Link from "next/link";

const Page = () => {
  return (
    <>
      <RandomArt />
    </>
  );
};

Page.Layout = Layout;
export default Page;
