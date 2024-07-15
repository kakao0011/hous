import Header from "@/components/header";
import classes from "./layout.module.css";

function Layout({ children }) {
  return (
    <div className={classes.container}>
      <Header/>
      {children}
    </div>
  )
}

export default Layout;