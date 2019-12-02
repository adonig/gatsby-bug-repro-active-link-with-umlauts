import { Link } from "gatsby"
import React from "react"

import Layout from "../components/layout"

export default () => (
  <Layout>
    <p>
      As you can see here the active link is green with an underline, while the
      inactive one is not.
    </p>
    <ul>
      <li>
        <Link activeClassName={`active`} to={`/hello-world`}>
          active link
        </Link>
      </li>
      <li>
        <Link activeClassName={`active`} to={`/hällo-wörld`}>
          inactive link
        </Link>
      </li>
    </ul>
  </Layout>
)
