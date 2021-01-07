import Box from "@material-ui/core/Box"
import {makeStyles, useTheme} from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import {motion} from "framer-motion"
import React from "react"
import ContactForm from "./Form"
import SOModal from "components/feedback/Modal"

const useStyles = makeStyles(theme => ({
  modalImage: {
    maxWidth: 350,
    width: "100%",
    height: "auto",
    [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
      maxWidth: 75,
      alignSelf: "center",
    },
  },
  contactModalText: {
    margin: `${theme.spacing(4)}px 0`,
  },
}))

interface ContactModalProps {
  open: boolean
  handleClose: () => any
}

const ContactModal: React.FC<ContactModalProps> = ({open, handleClose}) => {
  const classes = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(
    theme.breakpoints.down(theme.breakpoints.values.sm)
  );

  return (
    <SOModal open={open} handleClose={handleClose} maxWidth="lg">
      <Box display="flex" flexWrap="wrap" justifyContent="space-around">
        <Box
          display="flex"
          justifyContent="center"
          alignSelf="stretch"
          flex={isMobile ? "auto" : 1}
          marginRight={isMobile ? 0 : theme.spacing(1)}
        >
          <Box
            display="flex"
            flexDirection={isMobile ? "row" : "column"}
            alignSelf="stretch"
            alignItems="center"
          >
            <Box>
              <Typography
                variant={isMobile ? "h4" : "h2"}
                align={isMobile ? "left" : "center"}
              >
                GET IN TOUCH!
              </Typography>
              {!isMobile && (
                <Typography
                  variant="h6"
                  align="center"
                  className={classes.contactModalText}
                >
                  Have a question or suggestion?
                  <br/>
                  Feel free to drop us a message!
                </Typography>
              )}
            </Box>
            <motion.img
              animate={{
                scale: [1, 0.5, 1],
                rotate: [0, 360, 360],
              }}
              transition={{duration: 1.2}}
              className={classes.modalImage}
              src="assets/images/contact-us.png"
            />
          </Box>
        </Box>
        <Box flex={isMobile ? "auto" : 1}>
          <ContactForm/>
        </Box>
      </Box>
    </SOModal>
  )
}

export default ContactModal
