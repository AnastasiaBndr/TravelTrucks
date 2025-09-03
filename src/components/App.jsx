import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState, Suspense, lazy } from "react";

import Header from "./Header";
import Loader from "./Loader";
import Features from "./Features";
import Reviews from "./Reviews";

import { fetchCampers } from "../redux/campersOps";

import "./App.css";
import css from "./App.module.css";

function App() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const CatalogPage = lazy(() => import("../pages/CatalogPage"));
  const HomePage = lazy(() => import("../pages/HomePage"));
  const CamperPage = lazy(() => import("../pages/CamperPage"));
  const FeaturedPage = lazy(() => import("../pages/FeaturedPage"));

  useEffect(() => {
    dispatch(fetchCampers(page));
  }, [dispatch, page]);

  const handleNextPage = () => {
    setPage((prev) => (prev += 1));
  };

  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <div className={css["main-container"]}>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route
              path="/catalog"
              element={<CatalogPage loadMore={handleNextPage} />}
            ></Route>
            <Route path="/catalog/:id" element={<CamperPage />}>
              <Route path="reviews" element={<Reviews />}></Route>
              <Route path="features" element={<Features />}></Route>
            </Route>
            <Route path="/featured" element={<FeaturedPage />}></Route>
          </Routes>
        </div>
      </Suspense>
    </>
  );
}

export default App;
