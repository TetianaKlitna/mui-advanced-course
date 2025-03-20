import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { BeautifulTheme } from "../theme/BeautifulTheme";
import { useTheme } from "@mui/material/styles";
import { useState, useEffect } from "react";

import useMediaQuery from "@mui/material/useMediaQuery";

import MainBar from "../components/MainBar";
import Toolbar from "@mui/material/Toolbar";

const drawerWidth = 240;
const transitionDuration = 1000;

const themeStyles = (theme, responsiveDrawerWidth, greaterThan375) => {
  return {
    mainBar: {
      appBar: {
        zIndex: theme.zIndex.drawer + 1,
      },
      drawer: {
        width: responsiveDrawerWidth,
        "& .MuiBackdrop-root": {
          display: "none",
        },
      },
      drawerPaper: {
        width: responsiveDrawerWidth,
        backgroundColor: "rgba(120,120,120,0.2)",
      },
      menuButton: {
        marginRight: 0,
        display: greaterThan375 ? "none" : "",
      },
    },
    content: {
      marginLeft: 0,
      padding: 3,
      maxWidth: 720,
      minWidth: 375,

      height: "100vh",
      overflowY: "auto",
      overflowX: "auto",

      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: transitionDuration
      }),
    },

    contentShift: {
      marginLeft: responsiveDrawerWidth,
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: transitionDuration
      }),
    },
  };
};

const MainLayout = () => {
  const theme = useTheme();
  const greaterThan375 = useMediaQuery("(min-width: 800px)");//376
  const [open, setOpen] = useState(greaterThan375);
  const responsiveDrawerWidth = greaterThan375 ? drawerWidth : "100%";

  useEffect(() => {
    setOpen(greaterThan375);
  }, [greaterThan375]);

  const customStyle = themeStyles(theme, responsiveDrawerWidth, greaterThan375);

  return (
    <ThemeProvider theme={BeautifulTheme}>
      <MainBar sxMainBar={customStyle.mainBar} open={open} setOpen={setOpen} />
      <main style={{...customStyle.content, ...(open? customStyle.contentShift: {} )}}>
        <Toolbar />
        <Outlet />
      </main>
    </ThemeProvider>
  );
};

export default MainLayout;
