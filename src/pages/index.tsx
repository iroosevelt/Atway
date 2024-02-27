import RandomArt from "components/RandonArt";
import Layout from "components/_app.layout";
import { motion } from "framer-motion";
// import Link from "next/link";

const Page = () => {
  return (
    <>
      <motion.div
        style={{ height: "100%" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <RandomArt />
      </motion.div>
    </>
  );
};

Page.Layout = Layout;
export default Page;
