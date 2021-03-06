import * as React from "react"
import NavigationMenu from './navigation';
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