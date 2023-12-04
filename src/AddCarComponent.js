import React, { useState } from 'react'

const AddCarComponent = ({ onAddCar }) => {
    const [name, setName] = useState('');
    const [model, setModel] = useState('');
    const [quantity, setQuantity] = useState('');

    const addCar = () => {
        if (name && model && quantity) {
            onAddCar({ name, model, quantity: parseInt(quantity) });
            setName('');
            setModel('');
            setQuantity('');
        }
    };
    return (
        <div>
            <input type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder='model' value={model} onChange={(e) => setModel(e.target.value)} />
            <input type="text" placeholder='quantity' value={quantity} onChange={(e) => setQuantity(e.target.value)} />
            <button onClick={addCar}>Add item</button>
        </div>
    )
}
export default AddCarComponent;
