import Typography from '@material-ui/core/Typography';
import { Link } from "gatsby-theme-material-ui";
import React from "react";

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" to="/">SpaceOcean </Link> 2020.
    </Typography>
  );
}

export default Copyright;
