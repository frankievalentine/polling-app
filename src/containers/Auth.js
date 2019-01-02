import React, { Component } from 'react'
import PropTypes from 'prop-types'

const INITIAL_STATE = {
  uid: '',
  isAnonymous: null,
  // some other properties from the user object that may be useful
  // email: '',
  // displayName: '',
  // photoURL: '',
}

class Auth extends React.Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
  }

  static contextType = {
    firebase: PropTypes.object,
  }

  state = INITIAL_STATE

  componentDidMount() {
    const { auth } = this.context.firebase
    // onAuthStateChanged returns an unsubscribe method
    this.stopAuthListener = auth().onAuthStateChanged(user => {
      if (user) {
        // if user exists sign-in
        this.signIn(user)
      } else {
        // if not sign out
        this.signOut()
      }
    })
  }

  componentWillUnmount() {
    this.stopAuthListener()
  }

  handleSignIn = provider => {
    const { auth } = this.context.firebase

    switch (provider) {
      // the auth listener will handle the success cases
      case 'google':
        return auth()
          .signInWithPopup(new auth.GoogleAuthProvider())
          .catch(error => {
            // eslint-disable-next-line no-console
            console.error(error)
            // TODO: notify user of errror
            return error
          })

      case 'anonymous':
        return auth()
          .signInAnonymously()
          .catch(error => {
            // eslint-disable-next-line no-console
            console.error(error)
            // TODO: notify user of errror
            return error
          })

      default:
        const reason = 'Invalid provider passed to signIn method'
        // eslint-disable-next-line no-console
        console.error(reason)
        return Promise.reject(reason)
    }
  }

  handleSignOut = () => {
    const { auth } = this.context.firebase

    return auth().signOut()
  }

  signIn(user) {
    const { uid, Anonymous } = user

    this.setState({
      uid,
      Anonymous,
    })
  }

  signOut() {
    this.setState(INITIAL_STATE)
  }

  render() {
    // If uid doesn't exist in state, the user is not signed in.
    // A uid will exist if the user is signed in anonymously.
    // We'll consider anonymous users as unauthed for this variable.
    const isAuthed = !!(this.state.uid && !this.state.isAnonymous)

    return this.props.children({
        ...this.state,
        signIn: this.handleSignIn,
        signOut: this.handleSignOut,
        isAuthed,
    })
  }
}

export default Auth
