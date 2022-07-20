import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ComponentName = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              sitelogoImage
            }
          }
        }
      }
    }
  `)
  return (
    <div>
        <pre>{JSON.stringify(data, null)}</pre>
        {data.allMarkdownRemark.frontmatter}
    </div>
  )
}

export default ComponentName