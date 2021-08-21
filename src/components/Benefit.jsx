import React from "react";
import Layout from "./Layout";

import * as styles from "../styles/Benefit.module.css";

export default function Benefit() {
  return (
    <Layout>
      <div className={styles.benefit}>
        <h1 className={styles.benefit__title}>Benefits of Odigo</h1>

        <div className={styles.benefit__lists}>
          <div>
            <img alt="Castle" src="/castle.png" />

            <h1 className={styles.benefit__list_title}>Welcome to Odigo</h1>

            <p className={styles.benefit__list_description}>
              Jumb off balcony, onto strange's head. Chase ball of string hide
              when guests come over.
            </p>
          </div>

          <div>
            <img alt="Person" src="/person.png" />

            <h1 className={styles.benefit__list_title}>
              Your Personal Japan Guide
            </h1>

            <p className={styles.benefit__list_description}>
              Jumb off balcony, onto strange's head. Chase ball of string hide
              when guests come over.
            </p>
          </div>

          <div>
            <img alt="Shop" src="/Shop.png" />

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
