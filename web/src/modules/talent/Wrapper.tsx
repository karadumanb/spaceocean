import React from "react"
import TalentCard from "./Card"
import Grid from "@material-ui/core/Grid"
import GrowOnScroll from "src/components/animation/GrowOnScroll"

const iconDev = "assets/images/icon-dev.svg"
const iconBranding = "assets/images/icon-branding.svg"
const iconDesign = "assets/images/icon-design.svg"
const iconIllustration = "assets/images/icon-illustration.svg"

const Services = () => {
  return (
    <Grid container>
      {infoComponents.map((infoComponent, i) => (
        <Grid item xs={12} sm={6} md={3} key={`talent-${i}`}>
          <GrowOnScroll timeout={(i + 1) * 600}>
            <TalentCard {...infoComponent} />
          </GrowOnScroll>
        </Grid>
      ))}
    </Grid>
  )
}

const infoComponents = [{
  image: iconDev,
  title: "Development"
}, {
  image: iconIllustration,
  title: "Illustration / Icon"
}, {
  image: iconDesign,
  title: "Design"
}, {
  image: iconBranding,
  title: "Branding"
}]

export default Services
