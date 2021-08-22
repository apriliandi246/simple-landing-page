import React from "react";
import Layout from "./Layout";
import PostPlace from "./PostPlace";

import * as styles from "../styles/Post.module.css";

const postPlaces = [
  {
    id: 1,
    name: "nagoya",
  },
  {
    id: 2,
    name: "nigata",
  },
  {
    id: 3,
    name: "osaka",
  },
  {
    id: 4,
    name: "saitama",
  },
  {
    id: 5,
    name: "uend",
  },
  {
    id: 6,
    name: "shibuya",
  },
];

export default function Post() {
  return (
    <Layout>
      <div className={styles.post}>
        <h1 className={styles.post__title}>Today post top places to visist</h1>

        <hr className="line" />

        <div className=" grid">
          {postPlaces.map(place => (
            <PostPlace key={place.id} placeName={place.name} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
