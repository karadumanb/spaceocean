import { Box, Divider, InputAdornment, makeStyles, TextField, Theme, Typography } from '@material-ui/core';
import SlideOnScroll from 'components/animation/SlideOnScroll';
import SOButton from 'components/general/Button';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  divider: {
    height: 40,
    margin: `0 ${theme.spacing(2)}px`,
  }
}));

const Name = ({ name }: { name: string;  }) => (
  <SlideOnScroll
    direction='up'
    timeout={1000}>
    <Typography color='inherit' variant='h6'>
      {name}
    </Typography>
  </SlideOnScroll>
);

export default function ReachUs() {
  const { divider } = useStyles();


  return (
    <Box display={'flex'} flexDirection={'column'} maxWidth={500}>
      <SlideOnScroll timeout={500} direction='left'>
        <Box pb={5}>
          <Typography color='inherit' variant='h2'>
            {'Reach us'}
          </Typography>
          <Typography color='inherit' variant='body1'>
            {'Being able to provide full stack services in a range of between landing pages and complex mobile applicaitons. We are punctual, multitasking and inspirational people.'}<br />
            {'Here is few developers & designers who are eager to deliver best services and solutions.'}<br />
          </Typography>
        </Box>
      </SlideOnScroll>
      <Box display={'flex'} flexDirection={'row'} mb={3}>
        <Name name={'Baturay'}/>
        <Divider className={divider} orientation={'vertical'} />
        <Name name={'Furkan'}/>
        <Divider className={divider} orientation={'vertical'} />
        <Name name={'Batuhan'}/>
      </Box>
      <Box display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'flex-end'}>
        <TextField
          label="Drop us your email"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SOButton size='large'>
                  {'SEND!'}
                </SOButton>
              </InputAdornment>),
          }} />
      </Box>
    </Box>
  )
}
