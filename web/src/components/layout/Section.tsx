import * as React from "react"
import Typography from "@material-ui/core/Typography"
import { makeStyles, Theme } from "@material-ui/core/styles"
import { Container, Divider } from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) => ({
  sectionRoot: {
    marginBottom: theme.spacing(10),
    width: '100%'
  },
  divider: {
    margin: `${theme.spacing(2)}px 0 ${theme.spacing(4)}px`
  }
}))

interface SectionProps {
  children: React.ReactNode
  className?: string
  title?: string
}
const Section: React.FC<SectionProps> = ({ children, title }) => {
  const {sectionRoot, divider} = useStyles()

  return (
    <section className={sectionRoot}>
      <Container>
        {title && (
          <>
            <Typography variant='h6' color="secondary">{title}</Typography>
            <Divider className={divider}/>
          </>
        )}
        {children}
      </Container>
    </section>
  )
}

export default Section
