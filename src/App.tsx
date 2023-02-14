import React, { Suspense } from 'react';
import './scss/app.scss';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Error from './pages/Error/Error';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';

const Cart = React.lazy(() => import(/* webpackChunkName: "[Cart]"*/ './pages/Cart/Cart'));
const PizzaItem = React.lazy(
  () => import(/* webpackChunkName: "[PizzaItem]"*/ './components/PizzaItem/PizzaItem'),
);

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route
          path="cart"
          element={
            <Suspense fallback={<div>Загружаем корзину...</div>}>
              <Cart />
            </Suspense>
          }
        />
        <Route path="*" element={<Error />} />
        <Route
          path="pizza/:id"
          element={
            <Suspense fallback={<div>Загружаем пиццу...</div>}>
              <PizzaItem />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
