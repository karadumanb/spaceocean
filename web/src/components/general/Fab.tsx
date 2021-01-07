import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Fab from "@material-ui/core/Fab";

const useStyles = makeStyles(() => ({
  reachButton: {
    width: "150px",
    alignSelf: "center",
    justifyContent: "space-around"
  }
}));

const SOFab = ({ icon, children, ...props }) => {
  const classes = useStyles();

  return (
    <Fab
      className={classes.reachButton}
      size="large"
      variant="extended"
      color="primary"
      aria-label="add"
      {...props}
    >
      {icon}
      {children}
    </Fab>
  );
};

export default SOFab;
