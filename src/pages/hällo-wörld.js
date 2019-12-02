import { Link } from "gatsby"
import React from "react"

import Layout from "../components/layout"

export default () => (
  <Layout>
    <p>
      As you can see here, both the active link and the inactive one are colored
      red without an underline.
    </p>
    <ul>
      <li>
        <Link activeClassName={`active`} to={`/hällo-wörld`}>
          active link
        </Link>
      </li>
      <li>
        <Link activeClassName={`active`} to={`/hello-world`}>
          inactive link
        </Link>
      </li>
    </ul>
  </Layout>
)
