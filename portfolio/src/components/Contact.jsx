import React from 'react';

import styles from "./Contact.module.css";
import linkedin from "../images/linkedinIcon.png";
import github from "../images/githubIcon.png";
import email from "../images/emailIcon.png"
const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.bottomBlur}>
        </div>
     <div className={styles.text}>
        <h2 className={styles.title}>Contact</h2>
        <p className={styles.description}>Feel Free to Reachout </p>
        <h3>click the icons</h3>
        
        </div> 
        <ul className={styles.links}>
            <li className={styles.link}>
                <a href="mailto:ravikumarmamidi17@gmail.com"><img src={email }/></a>
                <a href="mailto:ravikumarmamidi17@gmail.com">ravikumarmamidi17@gmail.com</a>
            </li>
            <li className={styles.link}>
                <a href="https://www.linkedin.com/in/ravikumar-mamidi-a26838250?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B32GFzeAXQquuj9E%2BxKCN6Q%3D%3D"  target='_blank'><img src={linkedin}/></a>
                <a href="https://www.linkedin.com/in/ravikumar-mamidi-a26838250?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B32GFzeAXQquuj9E%2BxKCN6Q%3D%3D"  target='_blank'>www.linkedin.com/Ravikumarmamidi</a>
            </li>
            <li className={styles.link}>
                <a href='https://github.com/RavikrGTX'  target='_blank'><img src={github}/></a>
                <a href='https://github.com/RavikrGTX'  target='_blank'>https://github.com/RavikrGTX</a>
            </li>
        </ul>
        <ul className={styles.iconlinks}>
            <li className={styles.ilink}>
                
                <a href="mailto:ravikumarmamidi17@gmail.com"><img src={email }/></a>
            </li>
            <li className={styles.ilink}>
               
                <a href="https://www.linkedin.com/in/ravikumar-mamidi-a26838250?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B32GFzeAXQquuj9E%2BxKCN6Q%3D%3D"  target='_blank'> <img src={linkedin}/></a>
            </li>
            <li className={styles.ilink}>
                
                <a href='https://github.com/RavikrGTX' target='_blank'> <img src={github}/></a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact
