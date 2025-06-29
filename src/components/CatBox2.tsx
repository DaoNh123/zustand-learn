import { useCatStore } from '../stores/catStore'

export const CatBox2 = () => {
//     const {
//         cats: {bigCats}
//     } = useCatStore()       
// //Problems: This declaration make this Component re-render when smallCats change

    const bigCats = useCatStore((state) => state.cats.bigCats); // Basic Solution: get only what we need inside useCatStore()

  return (
    <div className='box'>
        <h1>Partial States from catStore</h1>
        <p>big cats: {bigCats}</p>
        <p>{Math.random()}</p>
    </div>
  )
}