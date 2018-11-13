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
        <Img fluid={frontmatter.card.childImageSharp.fluid} />
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
        card {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 90, duotone: { highlight: "#386eee", shadow: "#2323be", opacity: 40 }) {
              ...GatsbyImageSharpFluid_withWebp
            }
            resize(width: 1200, quality: 90) {
              src
            }
          }
        }
      }
    }
  }
`
