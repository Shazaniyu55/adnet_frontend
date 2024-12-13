import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { RootState } from "@/store";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/store/slice/userslice";
import { ListItemIcon, Typography, Box, Card, CardContent, Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonCircleIcon from "@mui/icons-material/Person2";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import PendingIcon from "@mui/icons-material/Pending";
import CreateIcon from "@mui/icons-material/Create";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import HomeIcon from "@mui/icons-material/Home";
import ChatIcon from "@mui/icons-material/Chat";
import Divider from "@mui/material/Divider";
import WalletIcon from "@mui/icons-material/Wallet";
import AddCardIcon from "@mui/icons-material/AddCard";
import UnsubscribeIcon from "@mui/icons-material/Unsubscribe";

export default function CDashboardMenu() {
  const { _id, fullname, phoneNumber, email, plan, country } = useSelector((state) => state.users.user);

  const dispatch = useDispatch();
  const router = useRouter();
  const [mounted, setMounted] = React.useState(false);

  const [openAccount, setOpenAccount] = React.useState(true);
  const [openJob, setOpenJob] = React.useState(true);

  const accountHandleClick = () => {
    setOpenAccount(!openAccount);
  };

  const jobHandleClick = () => {
    setOpenJob(!openJob);
  };

  React.useEffect(() => {
    setMounted(true); // Set mounted to true after component mounts
  }, []);

  const handleLogout = () => {
    router.push('/login')
    dispatch(logout()); // Dispatch the logout action
  };

  if (!mounted) {
    // Return null or a loading state during SSR phase
    return null;
  }

  return (
    <>
      <List
        sx={{ width: "100%", height:"100vh", maxWidth: 360, pl: 0, overflowY: "auto", backgroundColor:"black", color:"white" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {" "}
        <ListItemButton
          sx={{ ml: 0 }}
          onClick={() => {
            router.push("/");
          }}
        >
          <ListItemIcon>
            <HomeIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary={<Typography variant="body1">Home</Typography>}
          />
        </ListItemButton>
        <Divider />
        <ListItemButton sx={{ ml: 0 }} onClick={accountHandleClick}>
          <ListItemIcon>
            <PersonCircleIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary={<Typography variant="body1">Profile</Typography>}
          />
          {/* {openAccount ? <ExpandLess /> : <ExpandMore />} */}
        </ListItemButton>
        <Collapse in={openAccount} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            
            <Divider />
           
            <Divider />
          </List>
        </Collapse>
        <Divider />
        <ListItemButton sx={{ ml: 0 }} onClick={jobHandleClick}>
          <ListItemIcon>
            <WorkHistoryIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary={<Typography variant="body1">Calculate</Typography>}
          />
          {openJob ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openJob} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{ ml: 0 }}
              onClick={() => {
                router.push("/c-dashboard/job");
              }}
            >
              <ListItemIcon>
                <PendingIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="caption">Expenditure </Typography>
                }
              />
            </ListItemButton>
            <Divider />
            <ListItemButton
              sx={{ ml: 0 }}
              onClick={() => {
                router.push("/c-dashboard/job/jobs-in-progress");
              }}
            >
              <ListItemIcon>
                <PendingIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="caption">Analytics</Typography>
                }
              />
            </ListItemButton>
            <Divider />
            {/* <CreateJobLink /> */}
            <Divider />
            <ListItemButton
              sx={{ ml: 0 }}
              onClick={() => {
                router.push("/c-dashboard/job/completed-jobs");
              }}
            >
              <ListItemIcon>
                <AssignmentTurnedInIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="caption">Reviews</Typography>
                }
              />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton
          sx={{ ml: 0 }}
          onClick={() => {
            router.push("/");
          }}
        >
          <ListItemIcon>
            <ChatIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary={<Typography variant="body1">Chat</Typography>}
          />
        </ListItemButton>

        <Divider />
        <WalletLink />
        <Divider />
      
              <CardContent>
                <Button
                 onClick={handleLogout}
                  fullWidth
                  variant="contained"
                  color="error"
                  sx={{ mt: 2 }}
                >
                  Logout
                </Button>
              </CardContent>
            
      </List>
    </>
  );
}

function CreateJobLink() {
  const [verified, setVerified] = React.useState(false);
  const router = useRouter();
  const { _id } = useSelector((state) => state.users.user);

  React.useEffect(() => {
    
  }, []);
  return (
    <ListItemButton
      sx={{ ml: 0 }}
      disabled={!verified}
      onClick={() => {
        router.push("/c-dashboard/job/create-job");
      }}
    >
      <ListItemIcon>
        <CreateIcon color="primary" />
      </ListItemIcon>
      <ListItemText
        primary={<Typography variant="caption">Create New Job</Typography>}
      />
    </ListItemButton>
  );
}
export function WalletLink() {
  const router = useRouter();
  const [openWallet, setOpenWallet] = React.useState(true);

  const walletHandleClick = () => {
    setOpenWallet(!openWallet);
  };
  return (
    <>
      <ListItemButton sx={{ ml: 0 }} onClick={walletHandleClick}>
        <ListItemIcon>
          <WalletIcon color="primary" />
        </ListItemIcon>
        <ListItemText
          primary={<Typography variant="body1">Wallet</Typography>}
        />
        {openWallet ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openWallet} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            sx={{ ml: 0 }}
            onClick={() => {
              router.push("/dashboard/wallet/add-money");
            }}
          >
            <ListItemIcon>
              <AddCardIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary={<Typography variant="caption">Add Money</Typography>}
            />
          </ListItemButton>
          <Divider />
          <ListItemButton
            sx={{ ml: 0 }}
            onClick={() => {
              router.push("/dashboard/wallet/withdraw-money");
            }}
          >
            <ListItemIcon>
              <UnsubscribeIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="caption">Withdraw Money</Typography>
              }
            />
          </ListItemButton>
        </List>
      </Collapse>
      <Divider />
    </>
  );
}