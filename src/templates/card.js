import React from "react";
import { graphql, Link } from "gatsby";
import Img from 'gatsby-image';

export default ({ pageContext: { card } }) => (
  <div className="post-container">
    <div className="post">
      <h1>{card.card_name.english}</h1>
      <p>Type: {card.card_type}</p>
      <Link to="/">
        Home Page
      </Link>
    </div>
  </div>
)
