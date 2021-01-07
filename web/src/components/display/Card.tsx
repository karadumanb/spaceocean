import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { ComponentProps, useMemo } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up(theme.breakpoints.values.md)]: {
      display: 'flex',
    },
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    minWidth: 300,
    minHeight: 300
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(1),
  },
  body: {
    maxHeight: 400,
    overflow: 'auto'
  },
  overflow: {
    overflow: 'auto',
  }
}));

interface Props extends ComponentProps<typeof Card> {
  info: {
    title?: string;
    imageUrl?: string;
    description: string;
    subTitle?: string;
  };
  actions: React.ReactNode;
  innerScroll?: boolean;
  layout?: 'vertical' | 'horizontal';
  descriptionCut?: number;
}

export default function SOCard({ info, actions, innerScroll, layout = "horizontal", descriptionCut, ...others }: Props) {
  const { title, description, imageUrl, subTitle } = info;
  const classes = useStyles();

  const desc = useMemo(() => descriptionCut ? `${description.slice(0, descriptionCut)}...` : description, [descriptionCut])

  return (
    <Card className={`${layout === 'horizontal' ? classes.root : ''} ${classes.overflow}`} {...others}>
      {
        imageUrl && (
          <CardMedia
            className={classes.cover}
            image={imageUrl}
            title={title}
          />
        )
      }
      <div className={classes.details}>
        <CardContent className={classes.content}>
          {title && (
            <Typography component="h5" variant="h5" color='primary'>
              {title}
            </Typography>
          )}
          {subTitle && (
            <Typography gutterBottom variant="subtitle1" color="textSecondary">
              {subTitle}
            </Typography>
          )}
          <Typography className={innerScroll ? classes.body : ''} variant="body2" color="textPrimary">
            <span dangerouslySetInnerHTML={{
              __html: desc
            }} />
          </Typography>
        </CardContent>
        {actions && (
          <div className={classes.controls}>
            {actions}
          </div>
        )}
      </div>
    </Card>
  );
}
