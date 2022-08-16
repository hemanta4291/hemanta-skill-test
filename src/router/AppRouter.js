import {Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Details from '../pages/details/Details'

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/details' element={<Details />} />
            {/* <Route path='*' element={<NoMatch />} /> */}
        </Routes>
    );
};

export default AppRouter;