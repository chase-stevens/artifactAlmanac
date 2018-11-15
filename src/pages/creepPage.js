import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import CardSet from '../../content/artifactCardSet01'

let creeps = [];

for (let i = 0; i < CardSet.card_set.card_list.length; i++) {
  if (CardSet.card_set.card_list[i].card_type == "Creep") {
    creeps.push(CardSet.card_set.card_list[i])
  }
}

const creepsItems = creeps.map((creep) =>
<li>
  <Link to={"/" + creep.card_name.english.toLowerCase().replace(/ /g,'-') + "/"}>
    {creep.card_name.english}
  </Link>
</li>
);

const CreepPage = () => (
  <Layout>
    <h2>Creeps</h2>
    <ul>{creepsItems}</ul>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default CreepPage
