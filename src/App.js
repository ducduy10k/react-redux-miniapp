import logo from './logo.svg';
import './App.css';
import React, { Suspense } from 'react';
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import AddEditPage from './features/Photo/pages/AddEdit';
import MainPage from './features/Photo/pages/Main';
import Header from './components/Header';
const Photo = React.lazy(() => import('./features/Photo'))
// const Cart = React.lazy(() => import('./features/Cart'))

function App() {

  return (
    <div className='photo-app'>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Header />
          <Routes>
            {/* Use Outlet */}
            <Route path='/photos' element={<Photo />}>
              <Route path='' element={<MainPage />}></Route>
              <Route path='add' element={<AddEditPage />}></Route>
              <Route path=':photoId' element={<AddEditPage />}></Route>
            </Route>
            <Route path='/' element={<Navigate to='/photo' replace />} />
            <Route path='*' element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
