import React from "react";

import * as styles from "../styles/Trip.module.css";

export default function TripPlace({ status, placeName }) {
  return (
    <div
      className={`${styles.trip__list} ${
        status === "large" ? "large" : "small"
      }`}
    >
      <img
        src="https://via.placeholder.com/500/92c952"
        className={styles.trip__img_place}
        alt=""
      />

      <h1 className={styles.trip__list_place}>{placeName}</h1>
    </div>
  );
}
