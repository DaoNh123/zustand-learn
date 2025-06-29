
import { useShallow } from "zustand/shallow";
import { useCatStore } from "../stores/catStore";

export const CatController = () => {
    // re-render more than neccessary, this Component does not need to re-render when increaseCats in general
//   const { increaseBigCats, increaseSmallCats } = useCatStore(); 

    // use createSelectors in file .ts with same name and new syntax to solve this problem => no re-render when increase cats
    // const increaseBigCats = useCatStore.use.increaseBigCats();
    // const increaseSmallCats = useCatStore.use.increaseSmallCats();


    // 4. Multi States Selector with "useShallow" to avoid re-render
    // const {increaseBigCats, increaseSmallCats} = useCatStore(
    //   useShallow((state) =>( {
    //     increaseBigCats: state.increaseBigCats,
    //     increaseSmallCats: state.increaseSmallCats,
    //   })),
    // );

    // Other way to Nulti States Selectors => using Array
    const [increaseBigCats, increaseSmallCats] = useCatStore(
      useShallow((state) => [state.increaseBigCats, state.increaseSmallCats])
    )

    
  return (
    <div className="box">
      <h1>Cat Controller</h1>
      <p>{Math.random()}</p>
      <div>
        <button onClick={increaseBigCats}>add big cats</button>
        <button onClick={increaseSmallCats}>add small cats</button>
      </div>
    </div>
  );
};