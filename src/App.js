import './App.css';
import AddCarComponent from './AddCarComponent';
import CarListComponent from './CarListComponent';
import React,{useState} from 'react';

const App = () => {
  const [carList, setCarList]=useState([]);

  const handleAddCar = (newCar) =>{
    const existingCarIndex = carList.findIndex((car)=>car.name===newCar.name && car.model===newCar.model);
    if (existingCarIndex!==-1){
      const updatedCars = [...carList];
      updatedCars[existingCarIndex].quantity += newCar.quantity;
      setCarList(updatedCars);

    }else{
      setCarList([...carList, newCar]);
    }
  }
  return (
    <div>
    <h1>Add your desired Cars:</h1>
    <AddCarComponent onAddCar={handleAddCar}/>
    <CarListComponent cars={carList} />
    </div>
  )
}

export default App
