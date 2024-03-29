import React from 'react'
import ravi from "../images/ravi.jpg";
import styles from "./Hero.module.css";


const Hero = () => {
  return (
    <section className={styles.container}><div className={styles.content} >
     <h1 className={styles.title} >HI,Iam Ravi Kumar</h1>
     <p className={styles.description} >Iam a full-stack developer,experienced react and node.js user this is my first rect portfolio iam very much intrested in wed development ill completer y projects with keen intrest and hustle mindset</p>
     <a className={styles.contactbtn} href="hail to:ravikumarmamidi17@gmail.com">contact me</a>
      </div>
    
      <img className={styles.heroimg} src={ravi} alt="" />

    <div className={styles.bottomBlur}></div>
      </section>
  )
}

export default Hero
