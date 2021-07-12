import React, { useEffect, useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import original from "react95/dist/themes/original";
import { TopBar } from "./TopBar";
import { Cutout, Divider, Button } from "react95";

const GlobalStyles = createGlobalStyle`
  body {
    background: aquamarine;
  }
`;

export const My95 = (props) => {
  const notecardState = useState(false);
  const filesState = useState(false);
  const aboutState = useState(false);

  return (
    <ThemeProvider theme={original}>
      <GlobalStyles />
      <TopBar
        openStates={{
          notecard: notecardState,
          files: filesState,
          about: aboutState,
        }}
      >
        <Divider
          orientation="vertical"
          size="26px"
          style={{ margin: "0.3rem" }}
        />
        {/* THESE ARE PLACEHOLDERS */}
        {notecardState[0] && (
          <Button
            style={{
              height: "2rem",
              marginTop: "0.2rem",
              paddingTop: "0",
              paddingBottom: "0",
              fontWeight: "bold",
              marginRight: "0.3rem",
            }}
            onClick={() => notecardState[1](!notecardState[0])}
          >
            Notecard
          </Button>
        )}
        {filesState[0] && (
          <Button
            style={{
              height: "2rem",
              marginTop: "0.2rem",
              paddingTop: "0",
              paddingBottom: "0",
              fontWeight: "bold",
              marginRight: "0.3rem",
            }}
            onClick={() => filesState[1](!filesState[0])}
          >
            Files
          </Button>
        )}
        {aboutState[0] && (
          <Button
            style={{
              height: "2rem",
              marginTop: "0.2rem",
              paddingTop: "0",
              paddingBottom: "0",
              fontWeight: "bold",
              marginRight: "0.3rem",
            }}
            onClick={() => aboutState[1](!aboutState[0])}
          >
            About
          </Button>
        )}
      </TopBar>
    </ThemeProvider>
  );
};
