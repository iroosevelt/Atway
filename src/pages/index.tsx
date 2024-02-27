import RandomArt from "components/RandonArt";
import Layout from "components/_app.layout";
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
