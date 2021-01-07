import "./src/styles/base.css"
// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"

import React from "react"
import Layout from "./src/components/layout/TopLayout"
import startJs from "./js_helpers"

startJs();

const pagesWithoutLayout = ['/not_wrapped_with_layout']
// Wraps every page in a component
export const wrapPageElement = (prop) => {
  const { element, props } = prop;

  if (pagesWithoutLayout.some(page => props.path.startsWith(page))) {
    return element;
  }

  return (
    <div className={`${props.path.replaceAll('/', '')}-section`}>
      <Layout {...props}>
        {element}
      </Layout>
    </div>
  );
}
