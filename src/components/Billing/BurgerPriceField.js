import React from 'react'

const BurgerPriceField = ({ totalPrice }) => {
  const priceLabel = `Price : ${totalPrice || 0}  €`
  return <div>{priceLabel}</div>
}

export default BurgerPriceField
