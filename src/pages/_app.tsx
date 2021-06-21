import "../styles/index.css"
import "tailwindcss/tailwind.css"
import { AppProps } from "next/app"

import React, { useEffect } from "react"

import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components"
import { ThemeProvider as MaterialUIThemeProvider, StylesProvider } from "@material-ui/styles"
import CssBaseline from "@material-ui/core/CssBaseline"

import theme from "../styles/theme"
import { RecoilRoot } from "recoil"

// @ts-ignore
const MyApp = ({ Component, pageProps }): JSX.Element => {
  // Remove the server-side injected CSS.(https://material-ui.com/guides/server-rendering/)
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side")
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }, [])

  return (
    <RecoilRoot>
      <StylesProvider injectFirst>
        <MaterialUIThemeProvider theme={theme}>
          <StyledComponentsThemeProvider theme={theme}>
            <div className={"md:max-w-md "}>
              <CssBaseline />
              <Component {...pageProps} />
            </div>
          </StyledComponentsThemeProvider>
        </MaterialUIThemeProvider>
      </StylesProvider>
    </RecoilRoot>
  )
}

export default MyApp
