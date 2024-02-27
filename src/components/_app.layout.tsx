import { Container } from "@chakra-ui/react";
import { Global, css } from "@emotion/react";
import React, { useState, useEffect } from "react";

type AppLayoutProps = {
  children: React.ReactElement;
  customColors?: string[];
};

const Layout = ({ children, customColors = [], ...props }: AppLayoutProps) => {
  const [backgroundColor, setBackgroundColor] = useState<string | undefined>(
    customColors.length > 0
      ? customColors[Math.floor(Math.random() * customColors.length)]
      : getRandomColor()
  );

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <>
      <Global
        styles={css`
          html {
            scroll-behavior: smooth;
          }

          body {
            background-color: #ced6e0;
          }

          ::-webkit-scrollbar {
            width: 0px;
            border-radius: 20px;
            background-color: rgba(0, 0, 0, 0.05);
          }

          ::-webkit-scrollbar-thumb {
            background-color: rgba(255, 255, 255, 12%);
          }
        `}
      />

      <Container
        maxW="100%"
        minH="100vh"
        p="0"
        m="0"
        background={backgroundColor}
        color="rgba(255, 255, 255, 80%)"
      >
        {children}
      </Container>
    </>
  );
};

export default Layout;
