import { Box, Grid, ThemeProvider } from "@mui/material";


import Head from "next/head";
import { useSelector } from "react-redux";
import { useTheme, useMediaQuery } from "@mui/material";
import CDashboardMenu from "./c-dashboardmenu";


export default function Layout(props) {
  const { user } = useSelector((state) => state.users);

  return (
    < >
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <Box>
        <Grid container>
         {" "}
         <CDashboardMenu />
          <Grid item xs={12} md={9}>
            <Grid container>
              <Grid item xs={12}>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  flexDirection={"column"}
                >
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}