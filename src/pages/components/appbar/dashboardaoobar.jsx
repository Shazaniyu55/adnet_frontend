import { Grid, Box } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useRouter } from "next/router";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import CDashboardMenu from "../dashboard/c-dashboardmenu";

export default function DashBoardAppBar() {
  //retrive user from redux state
  const { user } = useSelector((state) => state.users);
  const router = useRouter();
  const theme = useTheme();
  return (
    <>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Grid container>
          <Grid
            item
            xs={2}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
              <Box color={theme.smnk[1000]} minHeight={"100vh"}>

                
                 <CDashboardMenu/>
                
              </Box>
          =
          </Grid>
          <Grid
            item
            xs={6}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            {/* <AppBarLogo /> */}
          </Grid>
          <Grid
            item
            xs={2}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            {/* <ChatNotification url="/chat" /> */}
          </Grid>
          <Grid
            item
            xs={2}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            {/* <DashBoardNotification /> */}
          </Grid>
        </Grid>
      </Toolbar>
    </>
  );
}