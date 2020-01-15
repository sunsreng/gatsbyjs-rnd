import React from "react"
import styles from "./title.module.scss"

export default ({ text, subtitle }) => (
  <section className={styles.container}>
    <h1 className={styles.title}>{text}</h1>
    <div className={styles.subtitle}>{subtitle}</div>
  </section>
)
