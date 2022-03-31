import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "../components/layout/NavBar";
import "./index.scss";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NavBar>
      <Component {...pageProps} />
    </NavBar>
  );
}

export default MyApp;
