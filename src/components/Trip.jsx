import React from "react";
import Layout from "./Layout";

import * as styles from "../styles/Trip.module.css";

export default function Trip() {
  return (
    <Layout>
      <div className={styles.trip}>
        <h1 className={styles.trip__title}>Get inpired for your next trip</h1>

        <div className={`${styles.trip__lists} grid`}>
          <div className={`${styles.trip__list} large`}>
            <img
              src="https://via.placeholder.com/500/92c952"
              className={styles.trip__img_place}
              alt=""
            />

            <h1 className={styles.trip__list_place}>Mount Fuji</h1>
          </div>

          <div className={`${styles.trip__list} large`}>
            <img
              src="https://via.placeholder.com/500/92c952"
              className={styles.trip__img_place}
              alt=""
            />

            <h1 className={styles.trip__list_place}>Kyoto</h1>
          </div>

          <div className={`${styles.trip__list} small`}>
            <img
              src="https://via.placeholder.com/500/92c952"
              className={styles.trip__img_place}
              alt=""
            />

            <h1 className={styles.trip__list_place}>Tokyo</h1>
          </div>

          <div className={`${styles.trip__list} small`}>
            <img
              src="https://via.placeholder.com/500/92c952"
              className={styles.trip__img_place}
              alt=""
            />

            <h1 className={styles.trip__list_place}>Nigata</h1>
          </div>

          <div className={`${styles.trip__list} small`}>
            <img
              src="https://via.placeholder.com/500/92c952"
              className={styles.trip__img_place}
              alt=""
            />

            <h1 className={styles.trip__list_place}>Sappor</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
}
