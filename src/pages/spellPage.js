import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import CardSet from '../../content/artifactCardSet01'

let spells = [];

for (let i = 0; i < CardSet.card_set.card_list.length; i++) {
  if (CardSet.card_set.card_list[i].card_type == "Spell") {
    spells.push(CardSet.card_set.card_list[i])
  }
}

const spellsItems = spells.map((spell) =>
<li>
  <Link to={"/" + spell.card_name.english.toLowerCase().replace(/ /g,'-') + "/"}>
    {spell.card_name.english}
  </Link>
</li>
);

const SpellPage = () => (
  <Layout>
    <h2>Spells</h2>
    <ul>{spellsItems}</ul>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SpellPage
