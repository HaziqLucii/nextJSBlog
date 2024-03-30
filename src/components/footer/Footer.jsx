import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>haziq.</div>
      <div className={styles.text}>Bla Bla © All rights reserved.</div>
    </div>
  );
};

export default Footer;
