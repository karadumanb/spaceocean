import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import AnimatedText from "src/components/animation/AnimatedText";

const useStyles = makeStyles(() => ({
  animatedIntroText: {
    display: "flex",
    flexDirection: "column"
  }
}));

const Title: React.FC = () => {
  const classes = useStyles();
  return (
    <Typography
      variant="h4"
      className={classes.animatedIntroText}
    >
      <span>Unique solutions for your needs in </span>
      <AnimatedText
        strings={[
          "web development.",
          "design.",
          "illustrations.",
          "icons.",
          "branding."
        ]}
      />
    </Typography>
  );
};

export { Title as TestTitle };
export default Title;
