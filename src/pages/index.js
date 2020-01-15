import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Title from "../components/title"
import ArticleList from "../components/article-list"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Title text="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

    <ArticleList />

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
