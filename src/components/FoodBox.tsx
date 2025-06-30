import { shallow } from "zustand/shallow";
import { useFoodStore } from "../stores/foodStore";

export const FoodBox = () => {
    // "fish" here is reactive so it will change when anything of state change
//   const { fish, addOneFish, removeOneFish, removeAllFish } = useFoodStore();

    const fish = useFoodStore.getState().fish // non-reactive => value doesn't change when states change
    
    const addOneFish = useFoodStore((state) => state.addOneFish) 
    const removeOneFish = useFoodStore((state) => state.removeOneFish) 
    const removeAllFish = useFoodStore((state) => state.removeAllFish) 

  const add5Fish = () => {
    useFoodStore.setState((state) => ({
        fish: state.fish + 5,
    }))
  }

  return (
    <div className="box">
      <h1>Food Box</h1>
      <p>fish: {fish}</p>
      <div>
        <button onClick={addOneFish}>add one fish</button>
        <button onClick={removeOneFish}>remove one fish</button>
        <button onClick={removeAllFish}>remove all fish</button>

        <button onClick={add5Fish}>add 5 fish</button>
      </div>
    </div>
  );
};