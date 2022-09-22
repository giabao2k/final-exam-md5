import logo from './logo.svg';
import './App.css';
import AppContext from "./context/AppContext";
import HomePage from "./pages/Home/list"
import React from "react";
import { Route, Routes } from 'react-router-dom';
import AddProduct from './pages/Home/add';
import EditProduct from './pages/Home/edit';

function App() {
  return (
    <AppContext.Provider >
            <Routes>
                <Route path='/' element={<HomePage/>}></Route>
                <Route path='/add' element={<AddProduct/>}></Route>
                <Route path='/product/:id' element={<EditProduct/>}></Route>
            </Routes>
        </AppContext.Provider>
  );
}

export default App;
