import * as React from "react"
import { StaticQuery, graphql } from "gatsby"

const ProjectIndex = () => {
    return (
        <StaticQuery
        query={graphql`
          {
            project: allMarkdownRemark(
              limit: 2000
              sort: {fields: [frontmatter___date], order: DESC}
              filter: {fileAbsolutePath: {regex: "/(/projects/)/"}}
            ) {
              nodes {
                excerpt
                fields {
                  slug
                }
                frontmatter {
                  date(formatString: "MMMM DD, YYYY")
                  title
                  description
                }
              }
            }
          }
        `}
        render={data => <pre>{JSON.stringify(data, null, 4)}</pre>}
        ></StaticQuery>
    )
}

export default ProjectIndex;