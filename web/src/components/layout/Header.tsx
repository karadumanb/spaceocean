import { useScrollTrigger } from "@material-ui/core"
import AppBar from "@material-ui/core/AppBar"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import { makeStyles, Theme } from "@material-ui/core/styles"
import Toolbar from "@material-ui/core/Toolbar"
import HideOnScroll from "components/animation/HideOnScroll"
import { Link } from "gatsby-theme-material-ui"
import React, { useEffect, useState } from "react"
import Logo from "../navigation/Logo"
import { useLocation } from "@reach/router"

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    backgroundColor: "transparent",
    color: theme.palette.secondary.main,
    boxShadow: "none",
  },
  headerWithBg: {
    backgroundColor: "#fff",
    color: theme.palette.secondary.main,
    boxShadow: '0 1px 4px 1px #28359329',
  },
  toolbar: {
    margin: "0 auto",
    maxWidth: theme.breakpoints.values.lg,
    width: "100%",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}))

const Header: React.FC = () => {
  const [hasBg, setHasBg] = useState(false);
  const classes = useStyles();
  const trigger = useScrollTrigger({ threshold: 400 });
  const location = useLocation();

  useEffect(() => {
    (trigger && !hasBg) && setHasBg(true)
  }, [trigger]);

  useEffect(() => {
    (hasBg) && setHasBg(false)
  }, [location]);

  return (
    <HideOnScroll direction="down">
      <AppBar className={hasBg ? classes.headerWithBg : classes.header}>
        <Toolbar className={classes.toolbar}>
          <Box
            height="75px"
            width="100%"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Logo />
            <Box>
              <Link to="/">
                <Button color="inherit">HOME</Button>
              </Link>
              <Link to="/blog">
                <Button color="inherit">BLOG</Button>
              </Link>
              <Link to="/about-us">
                <Button color="inherit">ABOUT US</Button>
              </Link>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  )
}

export default Header
