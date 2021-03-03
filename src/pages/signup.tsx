import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';


export default function Login() {
  return (
    <div className={styles.container}>
      <form>
        <h1>Sign Up</h1>

        <label>Name</label>
        <input type="text" name="name" placeholder="Enter name" />

        <label>Email Address</label>
        <input type="text" name="email" placeholder="Enter email" />


        <label>Password</label>
        <input type="password" name="password" placeholder="Enter password" />

        <label>Confirm Password</label>
        <input type="password" name="password" placeholder="Enter password" />

        {/* <div>
          <input type="radio" />
          <label>Lembrar-me</label>
        </div> */}

        <button>Sign Up</button>

        <div>
          <span>Já tem cadastro? <Link href="/login"><a>logar</a></Link></span>
        </div>
      </form>
    </div>
  )
}
