/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it

// gatsby-ssr.js

const renderToString = require("react-dom/server").renderToString

const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  // i18n.loadNamespaces(['translation'], () => {
    const bodyHTML = renderToString(bodyComponent)
    replaceBodyHTMLString(bodyHTML);
  // });
};

const React = require("react")
const Layout = require("./src/components/layout/TopLayout").default

const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <Layout {...props}>{element}</Layout>
}

const { Provider } = require("react-redux")

const configureStore = require("./src/store").default
const store = configureStore()

const wrapRootElement = ({ element }) => {
  return (
    <Provider store={store}>
      {element}
    </Provider>
  )
}

export {
  replaceRenderer,
  wrapPageElement,
  wrapRootElement
}
