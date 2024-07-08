import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './routes/root';
import ErrorPage from './routes/error-page';
import Slide1 from './routes/Slide-1';
import Slide2 from './routes/Slide-2';
import Slide3 from './routes/Slide-3';
import Slide4 from './routes/Slide-4';
import Slide5 from './routes/Slide-5';
import Slide6 from './routes/Slide-6';
import Slide7 from './routes/Slide-7';
import Slide8 from './routes/Slide-8';
import Slide9 from './routes/Slide-9';
import Slide10 from './routes/Slide-10';
import Slide11 from './routes/Slide-11';
import Slide12 from './routes/Slide-12';
import Slide13 from './routes/Slide-13';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />
  },
  {
    path: "Slide-1",
    element: <Slide1 />
  },
  {
    path: "Slide-2",
    element: <Slide2 />
  },
  {
    path: "Slide-3",
    element: <Slide3 />
  },
  {
    path: "Slide-4",
    element: <Slide4 />
  },
  {
    path: "Slide-5",
    element: <Slide5 />
  },
  {
    path: "Slide-6",
    element: <Slide6 />
  },
  {
    path: "Slide-7",
    element: <Slide7 />
  },
  {
    path: "Slide-8",
    element: <Slide8 />
  },
  {
    path: "Slide-9",
    element: <Slide9 />
  },
  {
    path: "Slide-10",
    element: <Slide10 />
  },
  {
    path: "Slide-11",
    element: <Slide11 />
  },
  {
    path: "Slide-12",
    element: <Slide12 />
  },
  {
    path: "Slide-13",
    element: <Slide13 />
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
