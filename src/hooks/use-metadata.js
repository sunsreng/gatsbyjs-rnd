import { useStaticQuery, graphql } from "gatsby"

const useMetadata = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)
  return data
}

export default useMetadata
