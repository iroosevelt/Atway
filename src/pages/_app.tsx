import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import theme from "theme";

const LayoutDefault = ({ children }: any) => <>{children}</>;

function App({ Component, pageProps, router }: any) {
  const Layout = Component.Layout || LayoutDefault;
  const layoutProps = pageProps.layoutProps || {};

  return (
    <>
      <ChakraProvider theme={theme}>
        <Head>
          <title>All These Worlds Are Yours | Atway</title>
          <meta name="description" content="AR Art Exhibition" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <AnimatePresence mode="wait">
          <motion.div
            key={router.route}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <Layout
              customColors={["#222222", "#222222", "#222222", "#222222"]}
              {...layoutProps}
            >
              <Component {...pageProps} />
            </Layout>
          </motion.div>
        </AnimatePresence>
      </ChakraProvider>
    </>
  );
}

export default App;
