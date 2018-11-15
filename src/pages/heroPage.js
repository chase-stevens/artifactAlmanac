import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import CardSet from '../../content/artifactCardSet01'

let heroes = [];

for (let i = 0; i < CardSet.card_set.card_list.length; i++) {
  if (CardSet.card_set.card_list[i].card_type == "Hero") {
    heroes.push(CardSet.card_set.card_list[i])
  }
}

const heroesItems = heroes.map((hero) =>
<li>
  <Link to={"/" + hero.card_name.english.toLowerCase().replace(/ /g,'-') + "/"}>
    <img src={hero.ingame_image.default}/> {hero.card_name.english} 
  </Link>
</li>
);

const HeroPage = () => (
  <Layout>
    <h2>Heroes</h2>
    <ul>{heroesItems}</ul>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default HeroPage
