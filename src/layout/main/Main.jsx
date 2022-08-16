import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Header from '../header/Header';
import AppRouter from "./../../router/AppRouter";
const Main = () => {
    return (
        <>
            <Header/>
            <div className='main'>
                <div className='container'>
                    <AppRouter />
                </div>
            </div>
          
        </>
    )
}

export default Main