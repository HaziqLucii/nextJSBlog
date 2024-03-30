import Image from "next/image";
import React from "react";

import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className={styles.description}>
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precision. Were the best in the
          world. Our Special team best consulting.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of Experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of Experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of Experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="About Image" className={styles.img} fill />
      </div>
    </div>
  );
};

export default AboutPage;
