import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

export class Layout extends Component {
  state = {
    showSideDrawer: false,
  }
  toggleSideDrawer = () => {
    const { showSideDrawer } = this.state
    this.setState({ showSideDrawer: !showSideDrawer })
  }

  render() {
    const { showSideDrawer } = this.state
    return (
      <Aux>
        <Toolbar
          onclickMenu={this.toggleSideDrawer}
          showMenu={showSideDrawer}
        />
        <SideDrawer show={showSideDrawer} onClose={this.toggleSideDrawer} />
        <main className={classes.Content}> {this.props.children}</main>
      </Aux>
    )
  }
}

export default Layout
