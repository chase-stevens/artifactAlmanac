import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

import CardSet from '../../content/artifactCardSet01'

const listItems = CardSet.card_set.card_list.map((card) =>
  <li>
    <Link to={"/" + card.card_name.english.toLowerCase().replace(/ /g,'-') + "/"}>
      {card.card_name.english}: {card.card_type}
    </Link>
  </li>
);

const IndexPage = () => (
  <Layout>
    <h1>Greetings Nerds</h1>
    <p>Your one stop shop for all things Artifact</p>
    <p>Now go get good.</p>
    <p><Link to="/cards">Cards</Link></p>
    <p><Link to="/howToPlay">Tutorial</Link></p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
