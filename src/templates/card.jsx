import React from "react";
import { graphql, Link } from "gatsby";
import Img from 'gatsby-image';
import CardSet from '../../content/artifactCardSet01'

const Card = ({ pageContext: { card } }) => {

  let relatedCardsArray = [];

  for (let i = 0; i < card.references.length; i++) {
    for (let j = 0; j < CardSet.card_set.card_list.length; j++) {
      if (CardSet.card_set.card_list[j].card_id == card.references[i].card_id) {
        relatedCardsArray.push(CardSet.card_set.card_list[j])
      }
    }
  }

  const relatedCards = relatedCardsArray.map((card) =>
    <li>
      <Link to={"/" + card.card_name.english.toLowerCase().replace(/ /g,'-') + "/"}>
        {card.card_name.english}: {card.card_type}
      </Link>
      <p>{card.card_text.english}</p>
    </li>
  );


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
        <ul>{relatedCards}</ul>
        <Link to="/">
          Home Page
        </Link>
      </div>
    </div>
  )
}

export default Card
