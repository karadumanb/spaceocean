import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import SOCard from 'src/components/display/Card';

const useStyles = makeStyles({
})

interface Props {
  experience: IExperience;
}


export default function ExperienceCard({ experience }: Props) {
  const { } = useStyles();

  return (
    <SOCard
      info={{
        title: experience.title,
        imageUrl: experience.image_url,
        description: experience.description,
        subTitle: experience.categories.join(' & '),
      }}
      actions={(
        <Box width="100%" display="flex" justifyContent="space-between">
          <Typography variant='caption'>{experience.technologies.join(' | ')}</Typography>
          <Typography variant='caption'>{experience.user}</Typography>
        </Box>
      )}
    />
  )
}
