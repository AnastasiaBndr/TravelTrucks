import { Routes, Route } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useEffect, useState, Suspense, lazy } from 'react';

import Header from './Header';
import Home from './Home';
import Loader from './Loader';
import Camper from './Camper';

import { fetchCampers } from '../redux/campersOps';

import './App.css'
import css from "./App.module.css"


function App() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const Catalog = lazy(() => import('./Catalog'));

  useEffect(() => {
    dispatch(fetchCampers(page));
  }, [dispatch, page])

  const handleNextPage = () => {
    setPage(prev =>
      prev += 1
    );
  }

  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <div className={css["main-container"]}>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/catalog' element={<Catalog loadMore={handleNextPage} />}></Route>
            <Route path='/catalog/:id' element={<Camper />}></Route>
          </Routes>
        </div>
      </Suspense>


    </>
  )
}

export default App
