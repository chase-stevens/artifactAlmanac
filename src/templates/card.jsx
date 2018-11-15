import React from "react";
import { graphql, Link } from "gatsby";
import Img from 'gatsby-image';
import CardSet from '../../content/artifactCardSet01'

const Card = ({ pageContext: { card } }) => {

  const relatedCards = card.references.map((relatedCard) =>
    console.log(relatedCard.card_id)
  );
  /*
  const relatedCards = CardSet.card_set.card_list.references.map((card) =>
      console.log(`${card.card_id}`)
  );
  */

  function CardText() {
    return  <p>{card.card_text.english}</p>;
  }

  function CardImage() {
    return <img src={card.large_image.default} />;
  }

  return (
    <div className="post-container">
      <div className="post">
        <h1>{card.card_name.english}</h1>
        { card.large_image.default ? <CardImage/> : <CardText/> }
        <p>Related Cards</p>
        {/*<ul>{relatedCards}</ul>*/}
        <Link to="/">
          Home Page
        </Link>
      </div>
    </div>
  )
}

export default Card
