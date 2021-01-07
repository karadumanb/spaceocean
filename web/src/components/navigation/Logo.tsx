import React from "react"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import Avatar from "@material-ui/core/Avatar"
import Box from "@material-ui/core/Box"
import { Link } from "gatsby-theme-material-ui"

const SOLogoAway = "assets/images/logo_away.svg"
const SOLogoHome = "assets/images/logo_home.svg"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    large: {
      width: theme.spacing(6),
      height: theme.spacing(6),
      [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
        width: theme.spacing(7),
        height: theme.spacing(7),
      },
    },
    avatarImg: {
      margin: 0,
    },
  })
)

type LogoType = {
  away?: boolean
  marginTop?: number | string
}

const Logo: React.FC<LogoType> = ({ away, ...rest }) => {
  const classes = useStyles()

  return (
    <Box className={classes.root} {...rest}>
      <Link to={'/'}>
        <Avatar
          alt="Space Ocean Logo"
          classes={{
            img: classes.avatarImg,
          }}
          src={away ? SOLogoAway : SOLogoHome}
          className={classes.large}
        />
      </Link>
    </Box>
  )
}

export { Logo as TestLogo }
export default Logo
