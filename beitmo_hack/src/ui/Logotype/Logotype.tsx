import React from "react";
import styles from "./styles.module.scss";

const Logotype = () => {
  return (
    <div className={styles.text}>
      ITMO<b className={styles.dot}>.</b>
      <br />
      EVENTS
    </div>
  );
};

export default Logotype;
