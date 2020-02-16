import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

export default function Index() {

  return(
    <Layout>
      <h1>Hi There</h1>
      <h2>This is the index page of our blog demo using GatsbyJS</h2>
      <div className="go-to-articles">
        <Link to="/articles">Visit our blog section</Link>
      </div>
    </Layout>
  )

}
