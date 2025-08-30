import { Routes, Route } from 'react-router-dom';
import { useDispatch } from "react-redux";

import Header from './Header';
import Home from './Home';
import Catalog from "./Catalog";

import { fetchCampers } from '../redux/campersOps';

import './App.css'
import css from "./App.module.css"
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers(2));
  }, [dispatch])

  return (
    <>
      <Header />
      <div className={css["main-container"]}>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/catalog' element={<Catalog />}></Route>
          <Route path='/catalog/:id' element={<>Catalog id!</>}></Route>
        </Routes>
      </div>

    </>
  )
}

export default App
