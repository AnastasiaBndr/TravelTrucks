import { Routes, Route } from 'react-router-dom';
import { useDispatch } from "react-redux";

import Header from './Header';
import Home from './Home';
import Catalog from "./Catalog";

import { fetchCampers } from '../redux/campersOps';

import './App.css'
import css from "./App.module.css"
import { useEffect, useState } from 'react';

function App() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchCampers(page));
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
