
import { useDispatch } from "react-redux";
import { logout } from "@/store/slices/userSlice";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import LogoutIcon from "@mui/icons-material/Logout";


export default function Logout() {
  const dispatch = useDispatch();

  const router = useRouter();

  return (
    <>
      <Button
        sx={{
          textTransform: "capitalize",
          color: "white",
          bgcolor: 'red',
        }}
        variant="outlined"
        size="small"
        endIcon={<LogoutIcon />}
        onClick={() => {
          if (confirm("Are you sure you want to log out?")) {
            dispatch(logout());
            router.push("/");
          }
        }}
      >
        Logout
      </Button>
    </>
  );
}