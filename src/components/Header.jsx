import React from "react";
import Layout from "./Layout";

import * as styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <Layout>
        <div className={styles.header__wrapper}>
          <img
            src="/logo.png"
            className={styles.header__logo}
            alt="Adigo logo"
          />

          <h1 className={styles.header__title}>
            Discover Amazing places in Japan
          </h1>

          <p className={styles.header__description}>
            Jump off balcony, onto stranger's head. Chase ball of string hide
            when guests come over. Being gorgeous with belly side up I could pee
            on this if I had the energy but under the bed, for attack the child,
            open the door.
          </p>
        </div>
      </Layout>
    </div>
  );
}
