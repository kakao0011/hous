import Head from "next/head";
import classes from "./header.module.css";

function Header() {
  return (
    <header className={classes.container}>
      <Head>
        <title>HousingAnywhere | Log in</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <img src="/Housing.svg"/>
    </header>
  )
}

export default Header;