import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './App.css'

import Noticias from './components/Noticias';
import Detalles from './components/Detalles';
import Header from './components/Header';

function App() {
  
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Noticias />
    },
    {
      path: "/detalles/:id",
      element: <Detalles /> 
    },
  ]);

  return (
    <>
      <Header />
      <div className="container">
        <RouterProvider router={router} />
      </div>

    </>
  )
}

export default App
