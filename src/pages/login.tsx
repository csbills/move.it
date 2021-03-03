import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';


export default function Login() {
  return (
    <div className={styles.container}>
      <form>
        <h1>Sign In</h1>
        <label>Email Address</label>
        <input type="text" name="email" placeholder="Enter email" />


        <label>Password</label>
        <input type="password" name="password" placeholder="Enter password" />

        {/* <div>
          <input type="radio" />
          <label>Lembrar-me</label>
        </div> */}

        <button>Submit</button>

        <div>
          <span>Não tem uma conta? <Link href="/signup"><a>cadastre-se</a></Link></span>
        </div>

        <div>
          <span>Esqueceu a <Link href="/resetPassword"><a>senha?</a></Link></span>
        </div>        
      </form>
    </div>
  )
}
