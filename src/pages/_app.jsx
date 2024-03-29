import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import NavBar from "../components/NavBar";
import "../styles/globals.scss";

const App = ({ Component, pageProps }) => {
  Router.events.on("routeChangeStart", () => NProgress.start());
  Router.events.on("routeChangeComplete", () => NProgress.done());
  Router.events.on("routeChangeError", () => NProgress.done());

  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
};

export default App;
