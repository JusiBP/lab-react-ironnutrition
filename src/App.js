import './App.css';
import AddFoodForm from './Components/AddFoodForm';
import FoodBox from './Components/FoodBox';
import foods from './foods.json';
import { useState } from "react";
import Search from './Components/Search';

let foodList = [...foods]

function App() {

  const [foodL, setFoodL] = useState(foodList);
  const [search, setSearch] = useState("");

  const addFoodHandler = (food) => {
    const foodMod = [...foodList, food];
    setFoodL(foodMod);
    }
  const searchFood = (searchValue) => {  
    console.log("SEARCH: ", searchValue)
    setSearch(searchValue);
    }
  
  const foodLS = foodL.filter((food) => food.name.includes(search))
  
  console.log("foodLS: ", foodLS)

  return (
    <>
      <br></br>
      <div>
        <AddFoodForm addFoodHandler={addFoodHandler}/>
      </div>
      <br></br>
      <div>
        <Search searchFood={searchFood}/>
      </div>
      <br></br>
      <div className="App">
      {foodLS.map((food) => {
          return (
            <FoodBox food = {food}/>)
        })}
      </div>
    </> 
  )
}
export default App;


