import { useState, useEffect } from "react";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { Grid, Box, Skeleton } from "@mui/material";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";


export default function HomeLogoutAppBar() {
  const router = useRouter();
  return (
    <Toolbar sx={{ bgcolor: "white" }}>
      <Grid container>
        <Grid
          item
          xs={2}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"flex-start"}
        >
          <AppBarLogo />
        </Grid>
        {/* <Grid
          item
          xs={1}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"flex-end"}
        >
          <SearchDrawer footer={false} />
        </Grid> */}

        <Grid
          item
          xs={10}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"flex-end"}
        >
          {" "}
        </Grid>
      </Grid>
    </Toolbar>
  );
}
export function AppBarLogo() {
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <Box pt={2}>
      <Image
        alt="adnet"
        src="/assets/logo.png"
        width={70}
        height={70}
        style={{ marginRight: ".5rem" }}
        onClick={() => {
          dispatch(updatePageLoading(true));
          router.push("/");
        }}
      />
    </Box>
  );
}
