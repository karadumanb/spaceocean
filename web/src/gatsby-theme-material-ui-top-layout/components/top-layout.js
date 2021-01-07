import React from "react"
import { Provider } from "react-redux"
import ThemeTopLayout from "gatsby-theme-material-ui-top-layout/src/components/top-layout"
import configureStore from "src/store"

export const store = configureStore()

export default function TopLayout({ children, theme }) {

  return (
    <Provider store={store}>
      <ThemeTopLayout theme={theme}>{children}</ThemeTopLayout>
    </Provider>
  )
}
