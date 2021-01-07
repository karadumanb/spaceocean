import Box from "@material-ui/core/Box"
import { makeStyles, Theme } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import { motion } from "framer-motion"
import React, { useState } from "react"

const useStyles = makeStyles((theme: Theme) => ({
  titleText: {
    fontSize: theme.typography.fontSize + 2,
    color: theme.palette.secondary.main,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  confirmedWrapper: {
    minHeight: 400,
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    color: theme.palette.secondary.main,
  },
  confirmedHeader: {
    fontSize: theme.typography.fontSize + 2,
    marginTop: 0
  }
}))

const ContactFormSuccess = () => {
  const classes = useStyles()

  const variants = {
    submitted: { opacity: 1, scale: 1 },
    notSubmitted: { opacity: 0, scale: 0.5 },
  }

  return (
    <motion.div
      initial={variants.notSubmitted}
      animate={variants.submitted}
      transition={{ duration: 0.6 }}
      className={classes.confirmedWrapper}
    >
      <h6 className={classes.confirmedHeader}>
        Your request is in the sea, on its way to us!!! :)
      </h6>
    </motion.div>
  )
}

const ContactForm = () => {
  const classes = useStyles()
  const [success, setSuccess] = useState(false)

  if (success) {
    return <ContactFormSuccess />
  }

  return (
    <Box maxWidth={400} margin="0 auto">
      <Typography variant="h6" className={classes.titleText}>
        We’ll get back to you soon!
      </Typography>
      <button onClick={() => setSuccess(true)}>success</button>
    </Box>
  )
}

export default ContactForm
