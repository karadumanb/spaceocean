const fs = require("fs-extra")
const path = require("path")

exports.onPostBuild = () => {
  console.log("Copying locales")
  fs.copySync(
    path.join(__dirname, "/src/locales"),
    path.join(__dirname, "/public/locales")
  )
}

exports.createPages = async function ({ actions }) {
  ['karadumanbaturay', 'tanyolfurkan'].forEach(slug => {
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/portfolio.tsx`),
      context: { slug: slug },
    })
  })
}
