import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';


export default function ResetPassword() {
    return (
        <div className={styles.container}>
            <form>
                <h1>Reset Password</h1>
                <label>Email Address</label>
                <input type="text" name="email" placeholder="Enter email" />

                {/* <div>
          <input type="radio" />
          <label>Lembrar-me</label>
        </div> */}

                <button>Submit</button>

                <div>
                    <Link href="/login"><img src="icons/left-arrow.svg" alt="left-arrow" /></Link>
                </div>
            </form>
        </div>
    )
}
