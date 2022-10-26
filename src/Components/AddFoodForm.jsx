import { Divider, Input } from 'antd';
import { useState } from "react";
import '../App.css';

function AddFoodForm({addFoodHandler}) {

    const [foodName, setFoodName] = useState("");
    const [foodImage, setFoodImage] = useState("");
    const [foodCalories, setFoodCalories] = useState("");
    const [foodServings, setFoodServings] = useState("");

    const submitForm = (e) => {
        e.preventDefault();
        const idFood =  Math.floor(Math.random()*1e40);
        addFoodHandler({
            _id: idFood,
            name: foodName,
            image: foodImage,
            calories: foodCalories,
            servings: foodServings
        })
        console.log(idFood);
    }

    const nameHandler = (e) => {
        setFoodName (e.target.value)
    } 
    const imageHandler = (e) => {
        setFoodImage (e.target.value)
    }
    const caloriesHandler = (e) => {
        setFoodCalories (e.target.value)
    }
    const servingsHandler = (e) => {
        setFoodServings (e.target.value)
    }



    return (
        <form className='formAdd' onSubmit={submitForm}>
          <Divider>Add Food Entry</Divider>
    
          <label htmlFor="name">Name</label>
          <Input value={foodName} type="text" name="name" id="name" onChange={nameHandler} />
    
          <label htmlFor="image">Image</label>
          <Input value={foodImage} type="text" name="image" id="image" onChange={imageHandler} />
    
          <label htmlFor="calories">Calories</label>
          <Input value={foodCalories} type="number" name="calories" id="calories" onChange={caloriesHandler} />
    
          <label htmlFor="servings">Servings</label>
          <Input value={foodServings} type="number" name="servings" id="servings" onChange={servingsHandler} />
    
          <button type="submit">Create</button>
        </form>
      );
}

export default AddFoodForm;