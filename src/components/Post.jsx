import React from "react";
import Layout from "./Layout";

import * as styles from "../styles/Post.module.css";

export default function Post() {
  return (
    <Layout>
      <div className={styles.post}>
        <h1 className={styles.post__title}>Today post top places to visist</h1>

        <div className={`${styles.post__lists} grid`}>
          {[1, 2, 3, 4, 5, 6].map(num => (
            <div className={`${styles.post__list} small`}>
              <div className={styles.post__list_img}>
                <img src="https://via.placeholder.com/500/92c952" alt="" />

                <div className={styles.post__list_detail}>
                  <h1 className={styles.post__list_place}>NAGOYA</h1>

                  <div className={styles.post__trafic}>
                    <div className={styles.post__trafic_list}>
                      <span>221</span>

                      <svg
                        width="15px"
                        viewBox="0 0 20 20"
                        fill="#fff"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>

                    <div className={styles.post__trafic_list}>
                      <span>50</span>

                      <svg
                        width="15px"
                        viewBox="0 0 20 20"
                        fill="#fff"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <p className={styles.post__list_desc}>
                Jump off balcony, onto stranger's head. Chase ball of string
                hide when guests come over. Being gorgeous with belly side up I
                could pee on this.
              </p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
