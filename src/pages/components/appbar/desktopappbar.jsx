import { Grid, Box } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import { useRouter } from "next/router";
import Image from "next/image";


export default function DesktopDashboardAppBar() {
  const router = useRouter();
  return (
    <>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          bgcolor:"blue"
        }}
      >
        <Grid container>
          <Grid
            item
            md={4}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"flex-start"}
          >
            {/* <AppBarLogo /> */}
          </Grid>
          <Grid
            item
            md={8}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"flex-end"}
          >
            {/* <ChatNotification url="/chat" /> <DashBoardNotification /> */}
          </Grid>
        </Grid>
      </Toolbar>
    </>
  );
}