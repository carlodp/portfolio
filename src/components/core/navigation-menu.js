import * as React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import globalSettings from '../../../site/settings/global_settings.json'

const MenuItems = globalSettings.navigation_menu;

const NavigationIndex = () => {
    const listMenuItems = MenuItems.map((menuItem, index) => (
        <Link key={index} to={menuItem.path}>
          {menuItem.label}
        </Link>
    ))

    return (
        <nav>
            {listMenuItems}
        </nav>
    )
}

export default NavigationIndex;