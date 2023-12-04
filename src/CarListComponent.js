import React from 'react'
const CarListComponent = ({cars}) => {

  return (
    <div>
      <h2>Car List</h2>
      {cars.map((car,index)=>(
        <li key={index}>
            {car.name}-{car.model} (Quantity of this model:{car.quantity})
        </li>
      ))}
    </div>
  )
}
export default CarListComponent;
