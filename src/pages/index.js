import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>Greetings Nerds</h1>
    <p>Your one stop shop for all things Artifact</p>
    <p>Now go get good.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/hero/axe">Axe</Link>
    <Link to="/hero/bristleback">Bristleback</Link>
  </Layout>
)

export default IndexPage
