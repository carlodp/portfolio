import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from '../components/image'

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

    const logo = data.markdownRemark.frontmatter.sitelogoImage;

    return (
        <div className="site-logo">
            <Image image={logo} alt="test"/>
        </div>
    )
}

export default ComponentName

