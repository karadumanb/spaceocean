import Box from "@material-ui/core/Box"
import Slide from "@material-ui/core/Slide"
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import NavigationIcon from "@material-ui/icons/NavigationRounded"
import TitleBrand from "components/display/TitleBrand"
import TalentTitle from "src/modules/talent/Title"
import SOFab from "components/general/Fab"
import SEO from "components/general/Seo"
import React, { useEffect, useState } from "react"
import Section from "src/components/layout/Section"
import ContactModal from "src/modules/contact/Modal"
import Talents from "src/modules/talent/Wrapper"
import Users from "src/modules/user/Users"

const useStyles = makeStyles((theme: Theme) => ({
  homeImage: {
    [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
      margin: `${theme.spacing(4)}px 0`,
      maxWidth: "100%",
    },
  },
}))

const Home: React.FC = () => {
  const classes = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(
    theme.breakpoints.down(theme.breakpoints.values.sm)
  )

  const [contactModalOpen, setContactModalOpen] = useState(false)
  const [animate, setAnimate] = useState(false)

  const toggleContactModal = (open: boolean) => {
    setContactModalOpen(open)
  }

  useEffect(() => {
    setAnimate(true)
  }, [])

  return (
    <Box>
      <SEO title="Home" />
      <Section>
        <Box
          display="flex"
          flexDirection={isMobile ? "column" : "row"}
          justifyContent="space-between"
          alignItems="center"
        >
          <Box display="flex" flexDirection="column">
            <TitleBrand lines={["SPACE", "OCEAN"]} />
            <Box my={4}>
              <TalentTitle />
            </Box>
            <SOFab icon={<NavigationIcon />} onClick={() => toggleContactModal(true)}>
              {"Let's Talk"}
            </SOFab>
            <ContactModal
              open={contactModalOpen}
              handleClose={() => toggleContactModal(false)}
            />
          </Box>
          <Slide
            direction="left"
            in={animate}
            timeout={500}
            mountOnEnter
            unmountOnExit
          >
            <img
              width={500}
              className={classes.homeImage}
              src="assets/images/background-home.png"
              alt="Home background"
            />
          </Slide>
        </Box>
      </Section>
      <Section>
        <Talents />
      </Section>
      <Section>
        <Users />
      </Section>
    </Box>
  )
}

export { Home as TestHome }
export default Home
