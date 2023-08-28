import { Routes, Route } from "react-router-dom"
import Homepage from "./pages/Home"
import Shop from "./pages/Shop"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={ <Homepage/> }></Route>
      <Route path="/shop" element={<Shop/>}></Route>
    </Routes>
    </>
  )
}

export default App
