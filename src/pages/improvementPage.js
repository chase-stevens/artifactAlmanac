import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import CardSet from '../../content/artifactCardSet01'

let improvements = [];

for (let i = 0; i < CardSet.card_set.card_list.length; i++) {
  if (CardSet.card_set.card_list[i].card_type == "Improvement") {
    improvements.push(CardSet.card_set.card_list[i])
  }
}

const improvementsItems = improvements.map((improvement) =>
<li>
  <Link to={"/" + improvement.card_name.english.toLowerCase().replace(/ /g,'-') + "/"}>
    {improvement.card_name.english}
  </Link>
</li>
);

const ImprovementPage = () => (
  <Layout>
    <h2>Improvement</h2>
    <ul>{improvementsItems}</ul>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ImprovementPage
