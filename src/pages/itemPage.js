import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import CardSet from '../../content/artifactCardSet01'

let items = [];

for (let i = 0; i < CardSet.card_set.card_list.length; i++) {
  if (CardSet.card_set.card_list[i].card_type == "Item") {
    items.push(CardSet.card_set.card_list[i])
  }
}

const itemsItems = items.map((item) =>
<li>
  <Link to={"/" + item.card_name.english.toLowerCase().replace(/ /g,'-') + "/"}>
    {item.card_name.english}
  </Link>
</li>
);

const ItemPage = () => (
  <Layout>
    <h2>Items</h2>
    <ul>{itemsItems}</ul>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ItemPage
