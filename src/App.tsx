import { BearBox } from "./components/BearBox"
import { CatBox } from "./components/CatBox"
import { CatBox2 } from "./components/CatBox2"


function App() {
  return (
    <div className="container">
      <h1>Zustand Tutorial</h1>
      <div>
        {/* <BearBox/> */}
        <CatBox/>
        <CatBox2/>
      </div>
    </div>
  )
}

export default App
