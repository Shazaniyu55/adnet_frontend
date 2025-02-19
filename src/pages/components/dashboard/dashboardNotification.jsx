import {
    Badge,
    Box,
    Drawer,
    IconButton,
    Typography,
    Divider,
  } from "@mui/material";
  import { useEffect, useState } from "react";
  import NotificationsIcon from "@mui/icons-material/Notifications";
  import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
  import InfoAlert from "../alerts/info";
  import axios from "axios";
  import { useSelector } from "react-redux";

  
  function DashBoardNotification() {
    const [openDrawer, setOpenDrawer] = useState(false);
    const [notifications, setNotifications] = useState(null);
  
    const { _id } = useSelector((state) => state.users.user);
  
    useEffect(() => {
      
    }, []);
    return (
      <>
        <IconButton
          sx={{ color: theme.smnk[1000] }}
          onClick={async () => {
            const notIds = notifications && notifications.map((not) => not._id);
  
            try {
              const res = await axios({
                method: "POST",
                url: `${process.env.SMNK_URL}api/a-dashboard/notification/read`,
                data: { notIds, userId: _id },
              });
            } catch (err) {
              console.log(err);
              return false;
            }
  
            setOpenDrawer(true);
          }}
        >
          <Badge
            color="error"
            variant={
              notifications && notifications.length > 0 ? "dot" : "standard"
            }
          >
            {notifications && notifications.length > 0 ? (
              <NotificationsActiveIcon />
            ) : (
              <NotificationsIcon />
            )}
          </Badge>
        </IconButton>
  
        <Drawer
          anchor="right"
          open={openDrawer}
          onClose={() => {
            setOpenDrawer(false);
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: ".5rem",
              maxHeight: 400,
            }}
          >
            {Array.isArray(notifications) && notifications.length > 0 ? (
              <Notification notifications={notifications} />
            ) : (
              <InfoAlert message="No notifications" />
            )}
          </Box>
        </Drawer>
      </>
    );
  }
  
  export default DashBoardNotification;
  
  function Notification({ notifications }) {
    if (!notifications) return <p></p>;
    return (
      <Box
        display={"flex"}
        flexDirection={"column"}
        width={{ xs: 300, sm: 400, md: 600 }}
      >
        {notifications.map((notification) => (
          <Box key={notification._id} mb={2} bgcolor={"whitesmoke"}>
            <Typography variant="h6">{notification.title}</Typography>
            <Typography variant="caption">{notification.message}</Typography>
          </Box>
        ))}
      </Box>
    );
  }