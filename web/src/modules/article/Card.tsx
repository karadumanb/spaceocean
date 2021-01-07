import { MoreRounded } from '@material-ui/icons';
import Button from 'components/general/Button';
import React from 'react';
import SOCard from 'src/components/display/Card';
import { useFeedback } from 'src/components/feedback/Provider';
import ArticlePost from './Post';

export default function ArticleCard({ article }: { article: IArticle }) {
  const { drawer } = useFeedback();

  const openDrawer = () => {
    drawer.open({
      children: <ArticlePost article={article} />
    })
  };

  return (
    <SOCard
      descriptionCut={300}
      info={{
        title: article.title,
        description: article.description,
        imageUrl: article.image_url,
        subTitle: article.author
      }}
      actions={
        <Button
          variant="outlined"
          color="primary"
          onClick={openDrawer}
          startIcon={<MoreRounded />}>
          {'Read More'}
        </Button>
      }
    />
  );
}
