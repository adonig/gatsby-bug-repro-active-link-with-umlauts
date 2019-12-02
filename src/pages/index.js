import React from "react"
import { Link } from "gatsby"

export default () => (
  <div>
    <p>
      The following two pages help to reproduce a bug, where Gatsby's
      activeClassName does not get applied, when the URL contains Germanic
      umlauts.
    </p>
    <p>
      NOTE: Active links are colored green with an underline, while inactive
      links are colored green without an underline.
    </p>
    <ul>
      <li>
        <Link to={`/hello-world`}>Go to /hello-world</Link>
      </li>
      <li>
        <Link to={`/hällo-wörld`}>Go to /hällo-wörld</Link>
      </li>
    </ul>
  </div>
)
