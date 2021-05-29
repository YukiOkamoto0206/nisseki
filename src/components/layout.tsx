import Header from "./header"
import React from "react"
import { Footer } from "./footer"
import Head from "next/head"

type Props = {
  children: any
  title?: string
}

const Layout: React.VFC<Props> = ({ children, title = "Nisseki Taxi" }) => {
  return (
    <div className={"bg-black"}>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
export default Layout
