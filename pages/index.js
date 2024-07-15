import { useState } from "react";
import classes from "@/pages/ut1516432/ut.module.css";

function Home() {
  const [data, changeData] = useState({
    email: "",
    pass: ""
  });

  const [passV, changePassV] = useState(false);

  const passVChange = () => changePassV(!passV);
  const changeDataFn = e => changeData(prev => ({...prev, [e.target.name]: e.target.value})); 

  function handleSubmit(e) {
    e.preventDefault();

  }

  return (
    <section>
      <div className={classes.container}>
        <span className={classes.title}>
          Welcome back
        </span>
        <span className={classes.subTitle}>
          Good to see you again.
        </span>
      </div>

      <form onSubmit={handleSubmit} className={classes.form}>
        <div className={classes.formCell}>
          <label className={classes.formCellName}>Email</label>
          <input
            name="email"
            className={classes.input}
            value={data.email}
            onChange={changeDataFn}
            type="text"
            required
          />
          {/* <span className={classes.formCellMess}>What’s your email?</span> */}
        </div>

        <div className={`${classes.formCell} ${classes.additionalInput}`}>
          <label className={classes.formCellName}>Password</label>
          <input
            name="pass"
            className={classes.input}
            value={data.pass}
            onChange={changeDataFn}
            type={ passV ? "text" : "password"}
            required
          />
          <img className={classes.imgPass} src={passV ? "/visibility_of.svg" : "/visibility.svg"} onClick={passVChange} />

          {/* <span className={classes.formCellMess}>At least 8 characters.</span> */}
        </div>

        <button className={classes.btn}>LOG IN</button>

        <a href="https://housinganywhere.com/recover-account" className={classes.subMess}>Forgot your password?</a>
      </form>

      <span className={classes.line}>OR</span>

      <div className={classes.social}>
        <button className={classes.socialBtn}>
          <img className={classes.img} src="/google.svg"/>
          <span className={classes.socialTxt}>CONTINUE WITH GOOGLE</span>
        </button>

        <button className={classes.socialBtn}>
          <img className={classes.img} src="/facebook.svg"/>
          <span className={classes.socialTxt}>
            CONTINUE WITH FACEBOOK
          </span>
          </button>

        <button className={classes.socialBtn}>
          <img className={classes.img} src="/apple.svg"/>
          <span className={classes.socialTxt}>
            CONTINUE WITH APPLE
          </span>
        </button>
      </div>

      <span className={classes.footerTxt}>Don’t have an account?  <a className={classes.footerBtn} href="https://id.housinganywhere.com">Sign Up </a></span>
    </section>
  );
}

export default Home;
