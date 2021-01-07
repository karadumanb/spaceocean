import React, { useState } from "react"
import { makeStyles, Theme } from "@material-ui/core/styles"
import { Link } from "gatsby-theme-material-ui"
import BottomNavigation from "@material-ui/core/BottomNavigation"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"
import HomeRoundedIcon from "@material-ui/icons/HomeRounded"
import BookRoundedIcon from "@material-ui/icons/BookRounded"
import Logo from "../navigation/Logo"
import HideOnScroll from "components/animation/HideOnScroll"

const useStyles = makeStyles((theme: Theme) => ({
  bottomNavigationRoot: {
    width: "100%",
    zIndex: 9999,
    position: "fixed",
    bottom: 0,
    boxShadow: "0 20px 50px rgba(59, 43, 91, 0.7)",
  },
  logo: {
    "&::before": {
      top: -theme.spacing(5),
      width: 90,
      height: 90,
      content: '""',
      display: "block",
      position: "absolute",
      background: "white",
      boxShadow: "0 0 5px rgba(59, 43, 91, 0.7)",
      borderRadius: "50%",
    },
    marginBottom: theme.spacing(6),
    textDecoration: "none",
    borderBottom: "none",
    boxShadow: "none",
  },
}))

const MobileHeader: React.FC = () => {
  const classes = useStyles()

  const [value, setValue] = useState(0)

  return (
    <HideOnScroll direction="up">
      <BottomNavigation
        value={value}
        onChange={(_e, newValue) => {
          setValue(newValue)
        }}
        showLabels
        classes={{
          root: classes.bottomNavigationRoot,
        }}
      >
        <BottomNavigationAction
          label="Blog"
          showLabel
          icon={<BookRoundedIcon />}
          component={Link}
          to={"/blog"}
        />
        <BottomNavigationAction
          classes={{
            root: classes.logo,
          }}
          icon={<Logo />}
          component={Link}
          to={"/"}
        />

        <BottomNavigationAction
          label="About Us"
          showLabel
          icon={<HomeRoundedIcon />}
          component={Link}
          to={"/about-us"}
        />
      </BottomNavigation>
    </HideOnScroll>
  )
}

export { MobileHeader as TestMobileHeader }
export default MobileHeader
