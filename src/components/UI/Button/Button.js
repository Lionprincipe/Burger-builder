import React from 'react'
import classes from './Button.css'

const Button = ({ onClick, bntType, children }) => {
  const btnClasses = [classes.Button, classes[bntType]].join('  ')
  console.log(btnClasses)
  return (
    <button className={btnClasses} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
