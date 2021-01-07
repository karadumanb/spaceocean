import { Box, Divider, makeStyles, Slide, Theme, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  divider: {
    height: 40,
    margin: `0 ${theme.spacing(2)}px`,
    backgroundColor: '#fff'
  },
  categoriesWrapper: {
    flexDirection: 'row',
    [theme.breakpoints.down(theme.breakpoints.values.md)]: {
      flexDirection: 'column',
    },
  }
}));

export default function BannerDescription() {
  const { divider, categoriesWrapper } = useStyles();

  return (
    <Box display={'flex'} flexDirection={'column'}>
      <Slide
        timeout={500}
        direction='right'
        in={true}>
        <Box pb={5} maxWidth={500}>
          <Typography color='inherit' variant='h2'>
            {'Our Team'}
          </Typography>
          <Typography color='inherit' variant='body1'>
            {'Our Team consists of dynamic team members. We are eager to develop web and mobile applications with cutting edge technologies.'}<br />
            {'We constantly improve our quality. For friendly and serious atmosphere contact us.'}
          </Typography>
        </Box>
      </Slide>
      <Box display={'flex'} className={categoriesWrapper}>
        <Slide
          direction='up'
          in={true}
          timeout={700}>
          <Typography color='inherit' variant='h6'>
            {'Web Applications'}
          </Typography>
        </Slide>
        <Divider className={divider} orientation={'vertical'} />
        <Slide
          direction='up'
          in={true}
          timeout={850}>
          <Typography color='inherit' variant='h6'>
            {'IOS'}
          </Typography>
        </Slide>
        <Divider className={divider} orientation={'vertical'} />
        <Slide
          direction='up'
          in={true}
          timeout={1000}>
          <Typography color='inherit' variant='h6'>
            {'Android'}
          </Typography>
        </Slide>
      </Box>
    </Box>
  )
}
