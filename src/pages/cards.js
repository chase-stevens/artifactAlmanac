import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>Cards</h1>
    <ul>
      <li><Link to="/heroPage">Heroes</Link></li>
      <li><Link to="/spellPage">Spells</Link></li>
      <li><Link to="/creepPage">Creeps</Link></li>
      <li><Link to="/improvementPage">Improvements</Link></li>
      <li><Link to="/itemPage">Items</Link></li>
    </ul>
  </Layout>
)

export default IndexPage
