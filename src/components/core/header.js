import * as React from "react"
import { } from "gatsby"
import NavigationMenu from './navigation';
import globalSettings from '../../../site/settings/global_settings.json'

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
            <div className="site-logo">
                <img src={ globalSettings.thumbnail }/>
            </div>
            <NavigationMenu/>
        </header>
    )
}

export default HeaderIndex;