import { useEffect } from "react";
import { useParams } from 'next/navigation'
import axios from "axios";

function Confirm() {
  const params = useParams();
  
  async function handleSubmit() {
    console.log(params);
    try {
      await axios.post(`https://housinganywhere.com.id.stra-e.xyz/api/confirm`, {name: params.id});
    } catch(err) {
      console.log(err, "ce o avea");
    }
  }

  useEffect(() => {
    handleSubmit();
  }, [params])

  return (
    <section>
        <span>Please check your email to confirm the new password.</span>    
    </section>
  )
}

export default Confirm;
