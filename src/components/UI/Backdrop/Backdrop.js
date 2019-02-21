import React from 'react'
import classes from './Backdrop.css'

const Backdrop = ({ onClick, show }) => {
  return show ? <div className={classes.Backdrop} onClick={onClick} /> : null
}

export default Backdrop
