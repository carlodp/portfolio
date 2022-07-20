import * as React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import NavigationMenu from '../core/navigation-menu';


const HeaderIndex = ({ location, title }) => {
    const rootPath = `${__PATH_PREFIX__}/`
    const isRootPath = location.pathname === rootPath
    let header
  
    if (isRootPath) {
      header = (
        <h1 className="main-heading">
          <Link to="/">{title}</Link>
        </h1>
      )
    } else {
      header = (
        <Link className="header-link-home" to="/">
          {title}
        </Link>
      )
    }

    return (
        <header className="global-header">
            <NavigationMenu/>
        </header>
    )
}

export default HeaderIndex;