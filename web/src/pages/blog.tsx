import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"
import Slide from "@material-ui/core/Slide"
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import TitleBrand from "components/display/TitleBrand"
import SEO from "components/general/Seo"
import Section from "components/layout/Section"
import React, { useEffect, useState } from "react"
import ArticleCard from "src/modules/article/Card"
import Grow from '@material-ui/core/Grow';
import { motion } from "framer-motion"
import { ARTICLES_DATA } from "src/modules/article/data"

interface BlogProps {
  location: Location
}

const useStyles = makeStyles((theme: Theme) => ({
  blogImage: {
    [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
      margin: `${theme.spacing(4)}px 0`,
      maxWidth: "100%",
    },
  },
  reachButton: {
    width: "150px",
    alignSelf: "center",
    justifyContent: "space-around",
  },
  blogText: {
    [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
      margin: `${theme.spacing(4)}px 0`,
    },
  },
  blogTitle: {
    fontSize: "3.5rem",
  },
  containerRoot: {
    display: "flex",
    flexWrap: "wrap",
  },
  postGridRoot: {
    [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  introText: {
    margin: `${theme.spacing(4)}px 0`,
    textAlign: "center",
  },
}))

const Blog: React.FC<BlogProps> = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(
    theme.breakpoints.down(theme.breakpoints.values.sm)
  )
  const classes = useStyles()
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(true)
  }, [])

  return (
    <React.Fragment>
      <SEO title="All posts" />
      <Section>
        <Box
          display="flex"
          flexDirection={isMobile ? "column" : "row"}
          justifyContent="space-between"
          alignItems="center"
        >
          <Slide
            direction="right"
            in={animate}
            timeout={500}
            mountOnEnter
            unmountOnExit
          >
            <img
              width={500}
              className={classes.blogImage}
              src="assets/images/background-blog.png"
              alt="Blog background"
            />
          </Slide>
          <Box display="flex" flexDirection="column" alignItems="flex-end">
            <TitleBrand lines={["OUR", "JOURNAL"]} />
            <Typography className={classes.introText} variant="h4">
              Sharing our thoughts about technology and life
              </Typography>
          </Box>
        </Box>
      </Section>
      <Section>
        <Grid container justify='center' spacing={6}>
          {ARTICLES_DATA.map((article, index) => (
            <Grid
              classes={{
                root: classes.postGridRoot,
              }}
              item
              xs={12}
              sm={8}
              md={8}
              key={article.title}
            >
              <Grow in={animate} timeout={(index + 1) * 600}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArticleCard article={article} />
                </motion.div>
              </Grow>
            </Grid>
          ))}
        </Grid>
      </Section>
    </React.Fragment>
  )
}

export default Blog;
