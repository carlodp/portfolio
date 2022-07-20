import * as React from "react"
import { Link } from "gatsby"
import globalSettings from '../../../site/settings/global_settings.json'

import '../../assets/styles/navigation.scss';

const MenuItems = globalSettings.navigation_menu;

const NavigationIndex = () => {
    const listMenuItems = MenuItems.map((menuItem, index) => (
        <Link className="nav-link" key={index} to={menuItem.path}>
          <span>0{index+1}.</span> {menuItem.label}
        </Link>
    ))

    return (
        <nav className="navigation">
            {listMenuItems}
        </nav>
    )
}

export default NavigationIndex;