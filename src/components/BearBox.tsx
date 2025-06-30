import { useEffect, useState } from "react";
import { useBearStore } from "../stores/bearStore"
import { useFoodStore } from "../stores/foodStore";

export const BearBox = () => {
    // The first kind of syntax to write
    // const bears = useBearStore(state => state.bears);
    // const increasePopulation = useBearStore(state => state.increasePopulation)
    // const removeAllBears = useBearStore(state=> state.removeAllBears);

    // The second kind of syntax to write
    const {bears, increasePopulation, removeAllBears} = useBearStore();

    const [bgColor, setBgColor] = useState<"lightgreen" | "lightpink">("lightpink")

    // using variable like this create unneccessary re-renders
    // const fish = useFoodStore(state => state.fish);

    useEffect(() => {
      const unsub = useFoodStore.subscribe((state, prevState) => {
        console.log(state, prevState);

        if(prevState.fish <= 5 && state.fish > 5){
          setBgColor("lightgreen");
        } else if(prevState.fish > 5 && state.fish <= 5){
          setBgColor("lightpink");
        }
      })
      return unsub;
    }, []);


  return (
    <div className='box' 
      style={{backgroundColor: bgColor}}
      >
        <h1>Bear Box</h1>
        <p>bears: {bears}</p>
        <p>{Math.random()}</p>
        <div>
            <button onClick={increasePopulation}>add bear</button>
            <button onClick={removeAllBears}>remove bear</button>
            {/* Clear storage with middleware "persist" */}
            <button onClick={useBearStore.persist.clearStorage}>
              Clear storage
            </button>
        </div>
    </div>
  )
}
function useFishStore() {
  throw new Error("Function not implemented.");
}

