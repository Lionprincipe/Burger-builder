import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import BurgerPriceField from '../../components/Billing/BurgerPriceField'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Billing/SummaryCard/OrderSummary'

const INGREDIENT_PRICE = {
  salad: 0.3,
  bacon: 0.2,
  cheese: 0.25,
  meat: 0.75,
}
const BURGER_BASE_PRICE = 4

export default class BurgerBuilder extends Component {
  state = {
    ingredients: { salad: 0, bacon: 0, cheese: 0, meat: 0 },
    showSummary: false,
  }

  updateIngredients = ingredients => {
    this.setState({ ingredients })
  }
  toggleSummaryHandler = () => {
    const { showSummary } = this.state
    this.setState({ showSummary: !showSummary })
  }

  IngredientsChangeHandler = (type, interval) => {
    const { ingredients } = this.state
    const newValue = ingredients[type] + interval
    const newIngredients = {
      ...ingredients,
      [type]: newValue >= 0 ? newValue : 0,
    }
    this.updateIngredients(newIngredients)
  }

  render() {
    const { ingredients, showSummary } = this.state
    const totalPrice = this.priceCalculator(ingredients) || 0
    const totalIngredients = this.countIngredients(ingredients) || 0
    return (
      <Aux>
        <Modal open={showSummary} close={this.toggleSummaryHandler}>
          <OrderSummary
            ingredients={ingredients}
            onCancel={this.toggleSummaryHandler}
            onContinue={console.log}
            totalPrice={totalPrice}
          />
        </Modal>
        <Burger ingredients={ingredients} />
        <BurgerPriceField totalPrice={totalPrice} />
        <BuildControls
          onChange={this.IngredientsChangeHandler}
          ingredients={ingredients}
          totalIngredients={totalIngredients}
          showSummary={this.toggleSummaryHandler}
        />
      </Aux>
    )
  }

  priceCalculator(ingredients) {
    return (
      ingredients &&
      Object.keys(ingredients)
        .reduce(
          (acc, curr) =>
            (acc = acc + ingredients[curr] * INGREDIENT_PRICE[curr]),
          BURGER_BASE_PRICE
        )
        .toFixed(2)
    )
  }

  countIngredients(ingredients) {
    return (
      ingredients &&
      Object.keys(ingredients).reduce(
        (acc, curr) => (acc = acc + ingredients[curr]),
        0
      )
    )
  }
}
