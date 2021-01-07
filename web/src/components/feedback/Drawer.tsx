import { Drawer, DrawerProps, IconButton, makeStyles, Theme } from "@material-ui/core"
import { Close } from "@material-ui/icons";
import React from "react"

const useStyles = makeStyles((theme: Theme) => ({
  drawerClass: {
    width: 500,
    padding: `${theme.spacing(4)}px ${theme.spacing(2)}px`,
    [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
      width: '100%',
    },
  },
  closeButton: {
    position: 'absolute',
    right: 10,
    top: 10
  }
}))

const SODrawer: React.FC<DrawerProps & { onClose?: () => void }> = ({ className = '', children, onClose, ...others }) => {
  const { drawerClass, closeButton } = useStyles();

  return (
    <Drawer
      classes={{
        paper: `${drawerClass} ${className}`
      }}
      anchor={'right'}
      onClose={onClose}
      {...others}>
      <IconButton
        className={closeButton}
        onClick={onClose}>
        <Close />
      </IconButton>
      {children}
    </Drawer>
  )
}

export default SODrawer;
