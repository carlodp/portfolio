import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ProjectListing from "../components/projectlisting"
import Intro from "../components/intro"
import Preloader from "../components/preloader"

import '../styles/global.scss';
import '../styles/index.scss';

// import contactInfo from '../../site/settings/contact_info.json'
import globalSettings from '../../site/settings/global_settings.json'

const HomeIndex = ({ data, location }) => {
  const posts = data.project.nodes

  return (
    <Layout location={location}>
      <Seo title={globalSettings.sitename} sitetitle={globalSettings.sitetitle} />
      <Preloader/>
      <Intro />
      <ol>
        {posts.map((post, i) => {
          return (
            <ProjectListing
              key = { i }
              title = { post.frontmatter.title }
              slug = { post.fields.slug }
              date ={ post.frontmatter.date }
              description = { post.frontmatter.description }
            />
          )
        })}
      </ol>
    </Layout>
  )
}

export default HomeIndex

export const pageQuery = graphql`
query IndexQuery {
  project: allMarkdownRemark(
    limit: 2000
    sort: { fields: [frontmatter___date], order: DESC }
    filter: { fileAbsolutePath: {regex: "/projects/" }}
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
`