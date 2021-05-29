import Header from "./header"
import React from "react"
import { Footer } from "./footer"


const Layout: React.FC = ({ children }) => {
  return (
    <div className={"bg-black"}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
export default Layout