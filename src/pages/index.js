import React from 'react'
import Link from 'gatsby-link'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { Button } from '../styledComponents/theme'
import { Heading2 } from '../styledComponents/typography'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Heading2>A next gen polling application</Heading2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod placeat numquam modi similique ea, alias eos facilis ab saepe corrupti nesciunt doloribus dolore illo minus officia quo obcaecati, dolorem asperiores?</p>
    <Link to='/new'>
      <Button>New Poll</Button>
    </Link>
  </Layout>
)

export default IndexPage
