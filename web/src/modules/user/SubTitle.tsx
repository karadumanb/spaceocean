import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import SlideOnScroll from "src/components/animation/SlideOnScroll";
import { Box, Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  textStyle: {
    color: theme.palette.primary.light
  },
  divider: {
    width: '100%',
    backgroundColor: theme.palette.primary.light,
  }
}));

const SubTitle = ({ user }: { user: IUser }) => {
  const { textStyle, divider } = useStyles();
  return (
    <SlideOnScroll direction={'up'}>
      <div>
        <Typography
          variant="subtitle2"
          className={textStyle}
        >
          {user.description_short} - {user.seniority_level}
        </Typography>
        {
          user.talents.map((talent, index) => (
            <Box mr={1} px={2}>
              <Typography
                variant="caption"
                className={textStyle}
                key={talent.title_short}
              >
                {talent.title}
              </Typography>
              {(index !== user.talents.length - 1) && <Divider className={divider} orientation={'horizontal'} />}
            </Box>
          ))
        }
      </div>
    </SlideOnScroll>
  );
};

export default SubTitle;
