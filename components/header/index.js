import Head from "next/head";
import classes from "./header.module.css";

function Header() {
  return (
    <header className={classes.container}>
      <Head>
        <title>HousingAnywhere</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <img src="/Housing.svg"/>
      // <h1><span className={classes.titleOne}>I</span><span className={classes.titleTwo}>MobileDE</span></h1>
    </header>
  )
}

export default Header;
