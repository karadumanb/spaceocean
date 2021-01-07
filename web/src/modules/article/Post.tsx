import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { ThumbsUpDown } from '@material-ui/icons';
import Button from 'components/general/Button';
import React from 'react';
import SOCard from 'src/components/display/Card';

export default function ArticlePost({ article }: { article: IArticle }) {
  return (
    <>
      <Typography gutterBottom component="h5" variant="h5" color='primary'>
        {article.title}
      </Typography>
      <SOCard
        info={{
          description: article.description,
          imageUrl: article.image_url
        }}
        elevation={0}
        layout="vertical"
        innerScroll
        actions={(
          <Box display="flex" justifyContent="space-between" width="100%">
            <Typography gutterBottom variant="subtitle1" color="textSecondary">
              {article.author}
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              startIcon={<ThumbsUpDown />}>
              {'Like'}
            </Button>
          </Box>
        )} />
    </>
  );
}
