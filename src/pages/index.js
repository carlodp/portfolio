import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ProjectListing from "../components/projectlisting"

// import contactInfo from '../../site/settings/contact_info.json'
import globalSettings from '../../site/settings/global_settings.json'

const HomeIndex = ({ data, location }) => {
  const posts = data.project.nodes
  return (
    <Layout location={location}>
      <Seo title={globalSettings.sitename} sitetitle={globalSettings.sitetitle} />
      <ProjectListing/>
      
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
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