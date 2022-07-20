import * as React from "react"
import { } from "gatsby"
import NavigationMenu from './navigation';
import globalSettings from '../../../site/settings/global_settings.json'
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";

const HeaderIndex = ({ location, title, data }) => {
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
            <div className="site-logo">
                <StaticImage src="../../static/assets/images/screenshot_51.png"/>
                {globalSettings.logoImage}
                <GatsbyImage image={globalSettings.logoImage} alt="test"/>
            </div>
            <NavigationMenu/>
        </header>
    )
}

export default HeaderIndex;