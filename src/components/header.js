import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { Container } from '../styledComponents/layout'
import SignIn from './SignIn/index'
import GoogleIcon from '../icons/Google'
import { Heading1 } from '../styledComponents/typography'

const NewContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HeaderContainer = styled.header`
  ${props => props.background};
  margin-bottom: 1.45rem;
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`

const StyledGoogleIcon = styled(GoogleIcon)`
  margin-right: 5px;
`

const BACKGROUND = 'background-color: #20232a';

const Header = ({ background, title }) => (
  <HeaderContainer background={background}>
    <NewContainer>
      <Heading1>
        <StyledLink to='/'>{title}</StyledLink>
      </Heading1>
      <SignIn
      onClick={() => (isAuthed ? signOut() : signIn('google'))}
      icon={isAuthed ? null : <StyledGoogleIcon />}
      text={isAuthed ? 'Sign Out' : 'Sign in with Google'}
      />
    </NewContainer>
  </HeaderContainer>
)

Header.propTypes = {
  background: PropTypes.string,
  signIn: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired,
  title: PropTypes.string,
  isAuthed: PropTypes.bool,
}

Header.defaultProps = {
  background: BACKGROUND,
}

export default Header
