import PageNav from "../component/PageNav";
import styles from "./Login.module.css";
import { useEffect, useState } from "react";
import { useUserContext } from "../contexts/UserProviderContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("diallo@example.com");
  const [password, setPassword] = useState("qwerty");
  const {isAuthenticated,login} = useUserContext()

  const navigate = useNavigate()
  function handleLogin(e){
    e.preventDefault()
    console.log("hi")
    if(email && password){
      login(email , password)
    }
    
  }
useEffect(()=>{
  if(isAuthenticated){
navigate("/app",{replace:true})

  }

},[isAuthenticated,navigate])

  return (
    <main className={styles.login}>
      <PageNav/>
      
      <form className={styles.form}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <button onClick={(e)=>handleLogin(e)}>Login</button>
        </div>
      </form>
    </main>
  );
}
