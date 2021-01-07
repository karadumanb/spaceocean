import { Box, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import GrowOnScroll from 'src/components/animation/GrowOnScroll';
import UserCard from 'src/modules/user/Card';
import { USERS_DATA } from 'src/modules/user/data';

const useStyles = makeStyles((theme) => ({
  userWrapper: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
      marginBottom: 0,
      marginTop: 0,
    },
  },
}));

export default function Users({ users = USERS_DATA }: { users?: IUser[] }) {
  const { userWrapper } = useStyles();

  return (
    <Box display="flex" flexDirection="row">
      <Grid container spacing={6} justify="center">
        {
          users.map((user, index) => (
            <Grid
              item
              xs={12}
              sm={8}
              md={7}
              key={`${user.name}-${index}`}
            >
              <Box className={userWrapper}>
                <GrowOnScroll timeout={(index + 1) * 400}>
                  <UserCard user={user} />
                </GrowOnScroll>
              </Box>
            </Grid>
          ))
        }
      </Grid>
    </Box>
  );
}
