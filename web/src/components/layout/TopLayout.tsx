import React from "react"
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints"
import Header from "./Header"
import Footer from "./Footer"
import MobileHeader from "./MobileHeader"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import FeedbackProvider from "../feedback/Provider"

const useStyles = makeStyles((theme: Theme) => ({
  layout: {
    overflow: "auto",
  },
  layoutChildren: {
    padding: `${theme.spacing(4)}px 0`,
    [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
      padding: `${theme.spacing(1)}px 0`,
    },
  },
}))

type LayoutType = {
  children: React.ReactNode
  width: Breakpoint
}

const Layout: React.FC<LayoutType> = ({ children }) => {
  const classes = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(
    theme.breakpoints.down(theme.breakpoints.values.sm)
  )
  return (
    <FeedbackProvider>
      <Box
        width="100%"
        height="100%"
        marginTop={isMobile ? 0 : "75px"}
        className={`${classes.layout} main-layout`}
      >
        {isMobile ? <MobileHeader /> : <Header />}
        <main className={classes.layoutChildren}>{children}</main>
        <Footer />
      </Box>
    </FeedbackProvider>
  )
}

export { Layout as TestLayout }
export default Layout
