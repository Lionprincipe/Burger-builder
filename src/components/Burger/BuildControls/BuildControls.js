import React from 'react'
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'
const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
]
const BuildControls = ({
  onChange,
  ingredients,
  totalIngredients,
  showSummary,
}) => {
  return (
    <div className={classes.BuildControls}>
      {controls.map(ctrl => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          onChange={interval => onChange(ctrl.type, interval)}
          disable={!ingredients[ctrl.type]}
        />
      ))}

      <button
        className={classes.OrderButton}
        disabled={!totalIngredients}
        onClick={showSummary}
      >
        ORDER NOW
      </button>
    </div>
  )
}

export default BuildControls
