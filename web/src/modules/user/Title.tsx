import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import AnimatedText from "src/components/animation/AnimatedText";

const useStyles = makeStyles((theme) => ({
  animatedIntroText: {
    color: theme.palette.primary.dark
  }
}));

const Title = ({ user }: { user: IUser }) => {
  const { animatedIntroText } = useStyles();
  return (
    <Typography
      variant="h6"
    >
      <AnimatedText
        strings={[
          'My name is',
          'My name is ' + `<strong> ${user.first_name} ${user.last_name} </strong>`,
        ]}
        loop={false}
        showCursor={false}
        backDelay={0}
        className={animatedIntroText}
      />
    </Typography>
  );
};

export { Title as TestTitle };
export default Title;
