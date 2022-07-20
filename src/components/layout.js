import * as React from "react"
import { Link } from "gatsby"
import globalSettings from '../../site/settings/global_settings.json'
import Footer from "../components/core/footer"
import Header from "../components/core/header"

const Layout = ({ location,  children }) => {
  return (
    <div>
      <Header location={location} />
      <main>{children}</main>
      <Footer/>
    </div>
  )
}

export default Layout
