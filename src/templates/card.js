/*

import React from "react";
import { graphql, Link } from "gatsby";
import Img from 'gatsby-image';

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <div className="post-container">
      <div className="post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <div className="card-data">
        </div>
        <Img fixed={frontmatter.cardimage.childImageSharp.fixed} /><br/>
        <Link to="/">
          Home Page
        </Link>
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        type
        color
        attack
        armor
        health
        cardimage {
          childImageSharp {
            fixed(width: 176, height: 299, quality: 90) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
*/