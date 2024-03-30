import React from 'react'
import styles from "./Skills.module.css";
import frontend from "../images/frontend.webp";
import backend from "../images/backend.png";
import ui from "../images/figma.jpg";
import html from "../images/html.png";
import css from "../images/css.png";
import react from "../images/react.png";
import node from "../images/node.png";

const Skills = () => {
  return (
    <div>
      <section className={styles.skills} id='about'>
        <span className={styles.title}>What I Do</span>

        <span className={styles.description}>I'm a web Designer and Developer.I thrive on collaboration, working closely with clients to bring their visions to life. Constantly evolving and embracing new trends, I'm dedicated to delivering effective solutions that leave a lasting impression. Let's collaborate and transform your online presence into something truly exceptional.



        </span>
        <div className={styles.skillimages}>
          <img src={html} />
          <img src={css} />
          <img src={react} />
          <img src={node} /></div>

        <div className={styles.skillbar}>
          <img className={styles.frontimg} src={frontend} />
          <div className={styles.skillbartext}>
            <h2>frontend development</h2>
            <p className={styles.para}>I'm an experienced frontend developer and proficient with React.js,Tailwindcss and Bootstrap </p>
          </div>



        </div>
        <div className={styles.skillbar}>
          <img className={styles.backimg} src={backend} />
          <div className={styles.skillbartext}>
            <h2>Backend devlopment</h2>
            <p>I'm a proficient backend developer specializing in Node.js and Express, with expertise in database technologies such as MongoDB for NoSQL databases or SQL for relational databases. </p>
          </div>

        </div>
        <div className={styles.skillbar}>
          <img className={styles.uiimg} src={ui} />
          <div className={styles.skillbartext}>
            <h2>UI/UX Design</h2>
            <p> I specialize in crafting designs that not only look great but also feel effortless to use. I bring ideas to life through wireframes, mockups, and prototypes </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skills

