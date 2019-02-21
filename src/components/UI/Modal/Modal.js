import React from 'react'
import classes from './Modal.css'
import Aux from '../../../hoc/Aux'
import Backdrop from '../Backdrop/Backdrop'
const Modal = ({ open, close, children }) => {
  return (
    open && (
      <Aux>
        <Backdrop show={open} onClick={close} />
        <div className={classes.Modal}>{children}</div>
      </Aux>
    )
  )
}

export default Modal
