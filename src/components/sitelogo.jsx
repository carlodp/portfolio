import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ComponentName = () => {
    const data = useStaticQuery(graphql`
    {
        markdownRemark(frontmatter: {templateKey: {eq: "global-settings"}}) {
        frontmatter {
            sitelogoImage
        }
        }
    }
    `)

    const logo = getImage(data.markdownRemark.frontmatter.sitelogoImage)

    return (
        <div className="site-logo">
            <GatsbyImage image={logo} alt="test"/>
        </div>
    )
}

export default ComponentName

