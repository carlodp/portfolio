import * as React from "react"
import { useStaticQuery } from "gatsby"
import NavigationMenu from './navigation';
import globalSettings from '../../../site/settings/global_settings.json'
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";
import Sitelogo from '../sitelogo'

const HeaderIndex = ({ location, title }) => {
    // const rootPath = `${__PATH_PREFIX__}/`
    // const isRootPath = location.pathname === rootPath
    // let header
  
    // if (isRootPath) {
    //   header = (
    //     <h1 className="main-heading">
    //       <Link to="/">{title}</Link>
    //     </h1>
    //   )
    // } else {
    //   header = (
    //     <Link className="header-link-home" to="/">
    //       {title}
    //     </Link>
    //   )
    // }

    return (
        <header className="global-header">
            <Sitelogo/>
            <NavigationMenu/>
        </header>
    )
}

export default HeaderIndex;