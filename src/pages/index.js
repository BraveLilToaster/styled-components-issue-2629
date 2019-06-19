import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import useMedia from "../hooks/useMedia.js"

const IndexPage = () => {
  const color = useMedia(["(min-width: 900px)"], ["green"], "red")

  return (
    <Layout>
      <SEO title="test" />
      <p>color: {color}</p>
      <ColorBox color={color}>
        <h1>box should be green on screens larger than 900px</h1>
      </ColorBox>
    </Layout>
  )
}

const ColorBox = styled.div`
  background-color: ${props => props.color};
`

export default IndexPage
