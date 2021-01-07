import React from "react"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  titleBrand: {
    display: "flex",
    flexDirection: "column",
    color: theme.palette.primary.main,
    [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
      alignSelf: "center",
    },
  },
}))

type TitleBrandType = {
  lines: string[]
  className?: string
}

const TitleBrand: React.FC<TitleBrandType> = ({
  lines,
  className
}) => {
  const classes = useStyles()
  return (
    <Typography
      variant="h1"
      className={`${className || ""} ${classes.titleBrand}`}
    >
      {
        lines.map((line, i) => (
          <Box
            marginLeft={i * 4}
            alignSelf="flex-start"
            key={`line-${i}`}>
            {line}
          </Box>
        ))
      }
    </Typography>
  )
}

export { TitleBrand as TestTitleBrand }
export default TitleBrand
