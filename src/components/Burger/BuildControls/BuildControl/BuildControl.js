import React from 'react'
import classes from './BuildControl.css'
const BuildControl = ({ onChange, label, disable }) => {
  const plus = () => onChange(1)
  const minus = () => onChange(-1)
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{label}</div>
      <button onClick={minus} className={classes.Less} disabled={disable}>
        Less
      </button>
      <button onClick={plus} className={classes.More}>
        More
      </button>
    </div>
  )
}

export default BuildControl
