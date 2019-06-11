import React, { Fragment } from 'react'

const Sushi = ({sushiData, eaten, nomSushi}) => {
  const  {img_url, id, name, price} = sushiData
  return (

    <div className="sushi">
      <div className="plate"
           onClick={() => nomSushi(sushiData)}>
        {
          eaten.includes(sushiData) ?
            null
          :
            <img src={img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi
