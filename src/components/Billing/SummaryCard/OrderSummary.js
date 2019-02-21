import React from 'react'
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'

const OrderSummary = ({ onCancel, onContinue, ingredients, totalPrice }) => {
  const ingredientsSummary = Object.keys(ingredients).map(
    (ingredient, index) => (
      <li key={index}>
        <span style={{ textTransform: 'capitalize' }}>{ingredient}</span>:
        {ingredients[ingredient]}
      </li>
    )
  )
  return (
    <Aux>
      <h3> Your Order</h3>
      <p> a delicious burger with the following ingredients:</p>
      <ul>{ingredientsSummary}</ul>
      <p>
        <strong>Total Price:{totalPrice}</strong>
      </p>
      <p>Continue to Checkout ?</p>
      <Button bntType={'Danger'} onClick={onCancel}>
        Cancel
      </Button>
      <Button bntType={'Success'} onClick={onContinue}>
        Continue
      </Button>
    </Aux>
  )
}

export default OrderSummary
