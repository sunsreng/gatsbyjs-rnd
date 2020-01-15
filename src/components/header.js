import React from "react"
import { Link } from "gatsby"
import styles from "./header.module.scss"
import useMetadata from "../hooks/use-metadata"

// HeaderLink component
const HeaderLink = ({ to, text }) => (
  <Link className={styles.link} to={to}>
    {text}
  </Link>
)

// HomeButton component
const HomeButton = ({ to, text }) => (
  <Link to={to}>
    <div className={styles.button}>{text}</div>
  </Link>
)

// SocialButton component
const SocialButton = ({ site, username, children }) => {
  let style = ""
  let url = ""

  if (site === "twitter") {
    style = styles.buttonTwitter
    url = "https://twitter.com/" + username
  } else if (site === "linkedin") {
    style = styles.buttonLinkedin
    url = "https://www.linkedin.com/in/" + username
  } else if (site === "github") {
    style = styles.buttonGithub
    url = "https://www.github.com/" + username
  }

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className={style}>{children}&nbsp;</div>
    </a>
  )
}

export default () => {
  const { site } = useMetadata()
  return (
    <header className={styles.container}>
      <div className={styles.row}>
        <HomeButton to="/" text={site.siteMetadata.title} />
        <SocialButton site="github" username="sun.sreng"></SocialButton>
        <SocialButton site="linkedin" username="sun-sreng-b151214b"></SocialButton>
        <SocialButton site="twitter" username="sunsreng"></SocialButton>
      </div>

      <div className={styles.row}>
        <HeaderLink to="/" text="ARTICLES" />
        <HeaderLink to="/about" text="ABOUT" />
      </div>
    </header>
  )
}
