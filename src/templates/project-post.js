import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ProjectPostTemplate = ({ data, location }) => {
  const project = data.markdownRemark
  //const { previous, next } = data

  return (
    <Layout location={location} title='Projects'>
      <Seo
        title={project.frontmatter.title}
        description={project.frontmatter.description || project.excerpt}
      />
      <div>test</div>
    </Layout>
  )
}

export default ProjectPostTemplate

export const pageQuery = graphql`
  query ProjectPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
