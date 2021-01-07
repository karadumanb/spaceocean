import React from "react"
import {
  Grid,
  Typography,
  Button,
  Box,
  IconButton,
  Hidden,
  withWidth,
  isWidthUp,
  TextField,
} from "@material-ui/core"
import PhoneIcon from "@material-ui/icons/Phone"
import MailIcon from "@material-ui/icons/Mail"
import WaveBorder from "components/animation/WaveBorder"
import transitions from "@material-ui/core/styles/transitions"
import { makeStyles, Theme, withTheme } from "@material-ui/core/styles"
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints"
import AnimatedSpace from "components/animation/AnimatedSpace"
import SocialIcons from "src/modules/user/Icons"

const useStyles = makeStyles((theme: Theme) => ({
  footerInner: {
    marginTop: -5,
    position: "relative",
    color: theme.palette.background.default,
    //@ts-ignore
    backgroundColor: theme.palette.common.darkBlack,
    paddingTop: theme.spacing(8),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(6),
    [theme.breakpoints.up(theme.breakpoints.values.sm)]: {
      paddingTop: theme.spacing(10),
      paddingLeft: theme.spacing(16),
      paddingRight: theme.spacing(16),
      paddingBottom: theme.spacing(10),
    },
    [theme.breakpoints.up(theme.breakpoints.values.md)]: {
      paddingTop: theme.spacing(10),
      paddingLeft: theme.spacing(10),
      paddingRight: theme.spacing(10),
      paddingBottom: theme.spacing(10),
    },
  },
  brandText: {
    fontFamily: "'Baloo Bhaijaan', cursive",
    fontWeight: 400,
    color: theme.palette.common.white,
  },
  footerLinks: {
    marginTop: theme.spacing(2.5),
    marginBot: theme.spacing(1.5),
    color: theme.palette.common.white,
  },
  infoIcon: {
    color: `${theme.palette.common.white} !important`,
    backgroundColor: "#33383b !important",
  },
  link: {
    cursor: "Pointer",
    color: theme.palette.common.white,
    transition: transitions.create(["color"], {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.easeIn,
    }),
    "&:hover": {
      color: theme.palette.primary.light,
    },
  },
  whiteBg: {
    backgroundColor: theme.palette.common.white,
  },
}))

const infos = [
  {
    icon: <PhoneIcon />,
    description: "+1 555 123456",
  },
  {
    icon: <MailIcon />,
    description: "support@company.com",
  },
]

interface FooterProps {
  theme: Theme
  width: Breakpoint
}

const Footer: React.FC<FooterProps> = ({ theme, width }) => {
  const classes = useStyles();

  return (
    <footer>
      <WaveBorder
        reverse
        upperColor={`linear-gradient(rgb(28, 106, 130), #1d899ec4)`}
        lowerColor={theme.palette.background.default}
        animationNegativeDelay={2}
      />
      <div className={classes.footerInner}>
        <AnimatedSpace />
        <Grid
          container
          spacing={isWidthUp("md", width) ? 10 : 5}
        >
          <Grid item xs={12} md={6} lg={4}>
            <form>
              <Box display="flex" flexDirection="column">
                <Box mb={1}>
                  <TextField
                    variant="outlined"
                    multiline
                    placeholder="Get in touch with us"
                    rows={4}
                    InputProps={{ className: classes.whiteBg }}
                    fullWidth
                    required
                  />
                </Box>
                <Button color="secondary" variant="contained" type="submit">
                  Send Message
                </Button>
              </Box>
            </form>
          </Grid>
          <Hidden mdDown>
            <Grid item xs={12} md={6} lg={4}>
              <Box display="flex" justifyContent="center">
                <div>
                  {infos.map((info, index) => (
                    <Box display="flex" mb={1} key={index}>
                      <Box mr={2}>
                        <IconButton
                          className={classes.infoIcon}
                          tabIndex={-1}
                          disabled
                        >
                          {info.icon}
                        </IconButton>
                      </Box>
                      <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                      >
                        <Typography variant="h6" className="text-white">
                          {info.description}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </div>
              </Box>
            </Grid>
          </Hidden>
          <Grid item xs={12} md={6} lg={4}>
            <Typography variant="h6" paragraph className="text-white">
              About the Company
            </Typography>
            <Typography style={{ color: "#8f9296" }} paragraph>
              Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
              euismod convallis velit, eu auctor lacus vehicula sit amet.
            </Typography>
            <SocialIcons
              github_url={'https://github.com/karadumanb'}
              facebook_url={'https://www.facebook.com/baturay.karaduman'}
              twitter_url={'https://twitter.com/baturaykaraduma'}
              linkedin_url={'https://www.linkedin.com/in/baturay-serhat-karaduman-635a35131/'}
            />
          </Grid>
        </Grid>
      </div>
    </footer>
  )
}

export default withWidth()(withTheme(Footer))
