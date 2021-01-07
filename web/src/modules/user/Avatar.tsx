import { Avatar, makeStyles, Typography } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  badge: {
    border: `1px solid ${theme.palette.primary.main}`,
    backgroundColor: "#fff"
  }
}));


export default function UserAvatar({
  user
}: { user: IUser }) {
  const { large, badge } = useStyles();

  return (
    <Badge
      overlap="circle"
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      classes={{
        badge
      }}
      badgeContent={(
        <Typography variant="button" color="primary">
          <strong>{user.seniority_level.toUpperCase()}</strong>
        </Typography>
      )}
    >
      <Avatar
        alt={user.name}
        src={user.image_url}
        className={large} />
    </Badge>
  );
}
