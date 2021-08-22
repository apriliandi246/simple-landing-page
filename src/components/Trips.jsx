import React from "react";
import Layout from "./Layout";
import TripPlace from "./TripPlace";

import * as styles from "../styles/Trip.module.css";

const tripPlaces = [
  {
    id: 1,
    name: "mount fuji",
  },
  {
    id: 2,
    name: "kyoto",
  },
  {
    id: 3,
    name: "tokyo",
  },
  {
    id: 4,
    name: "nigata",
  },
  {
    id: 5,
    name: "sappor",
  },
];

export default function Trip() {
  return (
    <Layout>
      <div className={styles.trip}>
        <h1 className={styles.trip__title}>Get inpired for your next trip</h1>

        <hr className="line" />

        <div className="grid">
          {tripPlaces.map(place => (
            <TripPlace key={place.id} placeName={place.name} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
