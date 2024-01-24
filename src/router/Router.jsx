import { BrowserRouter, Route, Routes } from "react-router-dom"
import Boards from "../components/pages/Boards"

const MyRouter = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/"  element ={Boards}/>
        </Routes>
        </BrowserRouter>
    )
}