import React from 'react'
import ravi from "../images/ravi.jpg";
import styles from "./Hero.module.css";


const Hero = () => {
  return (
    <section className={styles.container}><div className={styles.content} >
     <h1 className={styles.title} >Hi,I'm RaviKumar</h1>
     <p className={styles.description} >  I'm thrilled to introduce myself as a full-stack web developer. With a passion for crafting dynamic and user-friendly digital experiences, I've embarked on a journey to master both the front and back ends of web development. From designing visually stunning interfaces to implementing robust server-side functionalities. I'm excited to continue pushing the boundaries of what's possible in web development. Let's innovate and create together!</p>
     <a className={styles.contactbtn} href="#about">More About me</a>
      </div>
    
      <img className={styles.heroimg} src={ravi} alt="" />

    <div className={styles.bottomBlur}></div>
      </section>
  )
}

export default Hero
