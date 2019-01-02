import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Auth from '../containers/Auth'
import Header from './header'
import { Container } from '../styledComponents/layout'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Auth>
        {auth => {
          return (
            <>
              <Header
                background="background-color: #8BC6EC;
                      background-image: linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%);"
                title={data.site.siteMetadata.title}
                {...auth}
              />
              <Container>
                {children({
                  ...props,
                  ...auth,
                })}
              </Container>
            </>
          )
        }}
      </Auth>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
