import { Routes, Route } from "react-router-dom"
import Home from "./home/home"
import SingleFamily from "../components/singlePage"
const RouteController = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/:familyname" element={<SingleFamily/>} />
    </Routes>
  )
}

export default RouteController