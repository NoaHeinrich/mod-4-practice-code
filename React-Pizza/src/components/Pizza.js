import React from "react"

const Pizza = props => {
  const {topping, size, vegetarian} = props.pizzaData
  return(
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "Vegetarian" : "Not Vegetarian"}</td>
      <td><button onClick={()=>props.populateForm(props.pizzaData)} type="button" className="btn btn-primary">Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
