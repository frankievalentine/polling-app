import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { Container } from '../styledComponents/layout'
import { Heading1 } from '../styledComponents/typography'

const HeaderContainer = styled.header`
  ${props => props.background};
  margin-bottom: 1.45rem;
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`

const BACKGROUND = 'background-color: #20232a';

const Header = ({ background, title }) => (
  <HeaderContainer background={background}>
    <Container>
      <Heading1>
        <StyledLink to='/'>{title}</StyledLink>
      </Heading1>
    </Container>
  </HeaderContainer>
)

Header.propTypes = {
  background: PropTypes.string,
  title: PropTypes.string,
}

Header.defaultProps = {
  background: BACKGROUND,
  title: "Polling App",
}

export default Header
