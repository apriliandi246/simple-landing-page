import React from "react";
import Layout from "./Layout";

import * as styles from "../styles/Benefit.module.css";

export default function Benefit() {
  return (
    <Layout>
      <div className={styles.benefit}>
        <h1 className={styles.benefit__title}>Benefits of Odigo</h1>

        <div className={styles.benefit__lists}>
          <div className={styles.benefit__List}>
            <img alt="Castle icon" src="/castle.png" />

            <h1 className={styles.benefit__list_title}>Welcome to Odigo</h1>

            <p className={styles.benefit__list_description}>
              Jumb off balcony, onto strange's head. Chase ball of string hide
              when guests come over.
            </p>
          </div>

          <div className={styles.benefit__List}>
            <img alt="Person icon" src="/person.png" />

            <h1 className={styles.benefit__list_title}>
              Your Personal Japan Guide
            </h1>

            <p className={styles.benefit__list_description}>
              Jumb off balcony, onto strange's head. Chase ball of string hide
              when guests come over.
            </p>
          </div>

          <div className={styles.benefit__List}>
            <img alt="Shop icon" src="/Shop.png" />

            <h1 className={styles.benefit__list_title}>
              Promoting Local Businesses
            </h1>

            <p className={styles.benefit__list_description}>
              Jumb off balcony, onto strange's head. Chase ball of string hide
              when guests come over.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
