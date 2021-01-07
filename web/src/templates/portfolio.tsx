import { Typography } from "@material-ui/core"
import Box from "@material-ui/core/Box"
import SEO from "components/general/Seo"
import React, { useMemo } from "react"
import BackgroundImage from "src/components/layout/BackgroundImage"
import Section from "src/components/layout/Section"
import About from "src/modules/user/About"
import { USERS_DATA } from "src/modules/user/data"
import SocialIcons from "src/modules/user/Icons"
import SubTitle from "src/modules/user/SubTitle"
import Title from "src/modules/user/Title"
import Users from "src/modules/user/Users"

const Portfolio: React.FC<{ pageContext: { slug: string; } }> = ({ pageContext: { slug } }) => {

  const user = useMemo(() => USERS_DATA.find(u => u.user_name === slug), [slug])
  const otherUsers = useMemo(() => USERS_DATA.filter(u => u.user_name !== slug), [slug])

  return (
    <BackgroundImage
      src={'assets/images/user/portfolio-bg.svg'}
      style={{
        height: '100%',
        backgroundColor: '#fff',
        marginBottom: 0
      }}
    >
      <SEO title={user.name || 'Portfolio'} />
      <Box width="100%">
        <Section>
          <Box display="flex" alignItems="center" flexDirection="column">
            <Typography variant="h1" gutterBottom color='primary'>Hello</Typography>
            <Title user={user} />
            <Box maxWidth={400} textAlign={'center'} my={2}>
              <SubTitle user={user} />
            </Box>
            <SocialIcons
              github_url={user.github_url}
              facebook_url={user.facebook_url}
              twitter_url={user.twitter_url}
              linkedin_url={user.linkedin_url}
            />
          </Box>
        </Section>
        <Section>
          <About user={user} />
        </Section>
        <Section title="Other Users">
          <Box pt={6}>
            <Users users={otherUsers} />
          </Box>
        </Section>
      </Box>
    </BackgroundImage>
  )
}

export { Portfolio as TestPortfolio }
export default Portfolio
