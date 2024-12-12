import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/store/slice/userslice";
import { useRouter } from "next/router";
import { Container, Typography, Card, CardContent, Button, Grid } from "@mui/material";
import Layout from "./components/dashboard/layouts";

function Dashboard() {
  const router = useRouter()
  const dispatch = useDispatch();
  const [mounted, setMounted] = useState(false);
  const { _id, fullname, phoneNumber, email, plan, country } = useSelector((state) => state.users.user);

  useEffect(() => {
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
    <Layout>

<Container maxWidth="lg" sx={{ marginTop: 4 }}>
        <Typography variant="h4" gutterBottom>
          Dashboard
        </Typography>
        <Grid container spacing={2}>
          {/* User Info Card */}
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">User Information</Typography>
                <Typography variant="body1">ID: {_id}</Typography>
                <Typography variant="body1">Full Name: {fullname}</Typography>
                <Typography variant="body1">Phone: {phoneNumber}</Typography>
                <Typography variant="body1">Email: {email}</Typography>
                <Typography variant="body1">Country: {country}</Typography>
                <Typography variant="body1">Plan: {plan}</Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Logout Button */}
          <Grid item xs={12} sm={6} md={4}>
            <Card>
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
            </Card>
          </Grid>
        </Grid>
      </Container>
      
    </Layout>
    // <Container maxWidth="lg" sx={{ marginTop: 4 }}>
    //   <Typography variant="h4" gutterBottom>
    //     Dashboard
    //   </Typography>
    //   <Grid container spacing={2}>
    //     {/* User Info Card */}
    //     <Grid item xs={12} sm={6} md={4}>
    //       <Card>
    //         <CardContent>
    //           <Typography variant="h6">User Information</Typography>
    //           <Typography variant="body1">ID: {_id}</Typography>
    //           <Typography variant="body1">Full Name: {fullname}</Typography>
    //           <Typography variant="body1">Phone: {phoneNumber}</Typography>
    //           <Typography variant="body1">Email: {email}</Typography>
    //           <Typography variant="body1">Country: {country}</Typography>
    //           <Typography variant="body1">Plan: {plan}</Typography>
    //         </CardContent>
    //       </Card>
    //     </Grid>

    //     {/* Logout Button */}
    //     <Grid item xs={12} sm={6} md={4}>
    //       <Card>
    //         <CardContent>
    //           <Button
    //             onClick={handleLogout}
    //             fullWidth
    //             variant="contained"
    //             color="error"
    //             sx={{ mt: 2 }}
    //           >
    //             Logout
    //           </Button>
    //         </CardContent>
    //       </Card>
    //     </Grid>
    //   </Grid>
    // </Container>
  );
}

export default Dashboard;
