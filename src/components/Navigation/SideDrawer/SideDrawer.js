import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './SideDrawer.css'
import Aux from '../../../hoc/Aux'
import Backdrop from '../../UI/Backdrop/Backdrop'

const SideDrawer = ({ show, onClose }) => {
  const showClass = show ? 'Open' : 'Close'
  const attachedClasses = [classes.SideDrawer, classes[showClass]].join(' ')
  return (
    <Aux>
      <Backdrop show={show} onClick={onClose} />
      <div className={attachedClasses}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  )
}

export default SideDrawer
