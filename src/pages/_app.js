import "@/styles/globals.css";
import Providers from "@/store/provider";
import { createTheme } from '@mui/material/styles';

const smnkColors = {
  100: "#ECEDFD",
  200: "#C7C8FA",
  300: "#A1A3F7",
  400: "#5659F0",
  500: "#1013BC",
  600: "#0F11A9",
  700: "#0D0F96",
  800: "#0B0D83",
  900: "#0A0C71",
  1000: "#080A5E",
  1100: "#07084B",
  1200: "#04052E",
  1300: "#04023B",
  1400: "#030426",
};

// Create the theme
export const theme = createTheme({
  palette: {
    smnk: smnkColors,
  },
});

 

export default function App({ Component, pageProps }) {
  return(
    <Providers>
      <Component {...pageProps} />
    </Providers>
  ); 
}
