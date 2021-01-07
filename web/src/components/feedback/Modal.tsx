import React from "react"
import Dialog, { DialogProps } from "@material-ui/core/Dialog"
import { motion } from "framer-motion"
import DialogTitle from "@material-ui/core/DialogTitle"
import DialogContent from "@material-ui/core/DialogContent"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import Slide from "@material-ui/core/Slide"
import { makeStyles, Theme } from "@material-ui/core/styles"
import { TransitionProps } from "@material-ui/core/transitions/transition"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { useTheme } from "@material-ui/core/styles"

const useStyles = makeStyles((theme: Theme) => ({
  modalPaper: {
    borderRadius: "16px",
    padding: `${theme.spacing(2)}px ${theme.spacing(2)}px ${theme.spacing(
      6
    )}px ${theme.spacing(2)}px`,
    [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
      padding: theme.spacing(2),
    },
  },
  modalTitle: {},
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}))

const Transition = React.forwardRef<unknown, TransitionProps>(
  function Transition(props, ref) {
    //@ts-ignore
    return <Slide direction="up" ref={ref} {...props} />
  }
)

interface ModalProps extends DialogProps {
  handleClose?: () => any
  dividers?: boolean
}

const SOModal: React.FC<ModalProps> = ({
  title = " ",
  open,
  handleClose,
  children,
  dividers = false,
  maxWidth = "md",
  ...others
}) => {
  const classes = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(
    theme.breakpoints.down(theme.breakpoints.values.sm)
  )

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
      fullWidth={isMobile}
      maxWidth={maxWidth}
      classes={{
        paper: classes.modalPaper,
      }}
      {...others}
    >
      <DialogTitle disableTypography className={classes.modalTitle}>
        {title && <Typography variant="h6">{title}</Typography>}
        {handleClose && (
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={handleClose}
          >
            <motion.img
              whileHover={{ scale: 0.75 }}
              src="assets/icons/close.svg"
            />
          </IconButton>
        )}
      </DialogTitle>
      <DialogContent dividers={title && dividers}>{children}</DialogContent>
    </Dialog>
  )
}

export default SOModal
