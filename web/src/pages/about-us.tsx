import { Box, Container, Grid, makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import Tappable from 'components/animation/Tappable';
import TitleBrand from 'components/display/TitleBrand';
import SEO from 'components/general/Seo';
import BackgroundImage from 'components/layout/BackgroundImage';
import Section from 'components/layout/Section';
import React from 'react';
import GrowOnScroll from 'src/components/animation/GrowOnScroll';
import BannerDescription from 'src/modules/about_us/BannerDescription';
import ReachUs from 'src/modules/about_us/ReachUs';
import ExperienceCard from 'src/modules/experience/Card';
import { EXPERIENCES } from 'src/modules/experience/data';
import TalentBox from 'src/modules/talent/Box';
import { TALENTS_DATA } from "src/modules/talent/data";
import Users from 'src/modules/user/Users';
import '../styles/about_us.css';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: '#fff',
    width: '100%',
    flexDirection: 'row',
    [theme.breakpoints.down(theme.breakpoints.values.md)]: {
      flexDirection: 'column-reverse',
    },
  },
  talentBoxes: {
    paddingLeft: theme.spacing(10),
    [theme.breakpoints.down(theme.breakpoints.values.md)]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      marginTop: theme.spacing(6),
    },
  }
}));

export default function AboutUs() {
  const { container, talentBoxes } = useStyles();

  const theme = useTheme()
  const isMobile = useMediaQuery(
    theme.breakpoints.down(theme.breakpoints.values.md)
  );

  return (
    <>
      <SEO title="About us" />
      <BackgroundImage src='assets/images/about_us/profile-bg.png'>
        <Container className={container}>
          <Box pt={isMobile ? 0 : 12}>
            <BannerDescription />
          </Box>
          <Box pb={isMobile ? 2 : 12}>
            <TitleBrand lines={['STRONG', 'TEAM']} />
          </Box>
        </Container>
      </BackgroundImage>
      <Section title='Recent Success Stories'>
        <Grid container spacing={6} justify="center">
          {EXPERIENCES.map((experience, index) => (
            <Grid
              item
              xs={12}
              sm={8}
              md={6}
              key={experience.title}
            >
              <Tappable>
                <GrowOnScroll timeout={(index + 1) * 400}>
                  <ExperienceCard experience={experience} />
                </GrowOnScroll>
              </Tappable>
            </Grid>
          ))}
        </Grid>
      </Section>
      <BackgroundImage src="assets/images/about_us/gray-bg.svg">
        <Section>
          <Box display="flex" flexDirection={isMobile ? "column" : "row"}>
            <ReachUs />
            <Box className={talentBoxes}>
              <Grid container spacing={isMobile ? 1 : 6} justify="center">
                {
                  TALENTS_DATA.map((talent) => (
                    <Grid
                      item
                      xs={4}
                      sm={4}
                      md={3}
                      key={talent.title}
                    >
                      <TalentBox talent={talent} />
                    </Grid>
                  ))
                }
              </Grid>
            </Box>
          </Box>
        </Section>
      </BackgroundImage>
      <Section>
        <Users/>
      </Section>
    </>
  )
}
