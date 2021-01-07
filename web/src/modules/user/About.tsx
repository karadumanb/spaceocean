import { Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import React from "react";
import GrowOnScroll from "src/components/animation/GrowOnScroll";
import BackgroundImage from "src/components/layout/BackgroundImage";
import UserAvatar from "./Avatar";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const About = ({ user }: { user: IUser }) => {

  const theme = useTheme()
  const isMobile = useMediaQuery(
    theme.breakpoints.down(theme.breakpoints.values.sm)
  );

  return (
    <GrowOnScroll timeout={400}>
      <Box display="flex" alignItems="center" justifyContent="center">
        <BackgroundImage
          src={'assets/images/user/about-bg.svg'}
          style={{
            backgroundColor: 'transparent',
            height: 'auto',
            minHeight: 'unset',
            width: isMobile ? '100%' : '80%'
          }}>
          <Box display="flex" py={isMobile ? 4 : 0} pl={isMobile ? 0 : 4} flexDirection={isMobile ? "column" : "row"}>
            <Box display="flex" alignItems="center" justifyContent="center">
              <UserAvatar user={user} />
            </Box>
            <Box color="#fff" display="flex" flexDirection="column" justifyContent="center" px={6} pr={8}>
              <Typography
                variant="h6"
                color="inherit"
              >
                {'About me'}
              </Typography>
              <Typography
                variant="body1"
                color="inherit"
              >
                {user.description}
              </Typography>
            </Box>
          </Box>
        </BackgroundImage>
      </Box>
    </GrowOnScroll>
  );
};

export default About;
