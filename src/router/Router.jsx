import { BrowserRouter, Route, Routes } from "react-router-dom"
import Boards from "../components/pages/Boards"
import BoardDetails from "../components/pages/BoardDetails"

const MyRouter = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/"  element ={Boards}/>
            <Route path="/boards/:boardId" element = {<BoardDetails/>}/> // eta use korar jonno useParams use korah lage 
        </Routes>
        </BrowserRouter>
    )
}