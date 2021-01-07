import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import React from "react"
import Tappable from "src/components/animation/Tappable"

interface TalentCardProps {
  image: string
  text?: string
  title: string
}

const TalentCard: React.FC<TalentCardProps> = ({ image, text, title }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
    >
      <Tappable whileHover={{ scale: 1.5, rotate: 20 }}>
        <img width={200} height={175} src={image} alt={`service ${title}`} />
      </Tappable>
      <Typography variant="h5">{title}</Typography>
      <Typography component="p">{text}</Typography>
    </Box>
  )
}

export default TalentCard
