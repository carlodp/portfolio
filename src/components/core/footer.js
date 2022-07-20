import * as React from "react"
import { } from "gatsby"
import globalSettings from '../../../site/settings/global_settings.json'


const FooterIndex = () => {
    return (
       <footer>
            {globalSettings.footertext}
       </footer>
    )
}

export default FooterIndex;