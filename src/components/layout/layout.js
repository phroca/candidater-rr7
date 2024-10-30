/**
 * Layout component
 */
import * as React from "react"

import PropTypes from "prop-types"
import Footer from "../footer/footer"
import { cn } from "../../utils/cn"


const Layout = (props) => {

  return (
    <>
      <main className={cn("flex flex-col md:py-16 pt-6 pb-14 md:max-w-7xl mx-auto w-full max-w-5xl px-6", props?.noises == true ? "noises" : "")}>
        <div className="mx-auto w-full">
          {props.children}
        </div>
      </main>
      <Footer />
    </>

  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
