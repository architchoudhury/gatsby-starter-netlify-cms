import React from 'react'
import Layout from '../components/Layout'
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <div className="error-div">
      <h1>Sorry! The page could not be found :(</h1>
      <br></br>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <br/>
      <Link className="link" to="/">Read More →</Link>
      <a className="link" href="https://www.fluentup.com/">Visit FluentUp →</a>
    </div>
  </Layout>
)

export default NotFoundPage
