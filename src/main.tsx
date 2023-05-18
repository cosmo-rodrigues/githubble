import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { User } from './routes/User/index.tsx';
import { Home } from './routes/Home/index.tsx';
import { NotFound } from './routes/NotFound/index.tsx';
import { UserDetails } from './routes/UserDetails/index.tsx';
import { Provider } from "react-redux";
import { store } from "./store/store";

const router = createBrowserRouter([{ path: '/', element: <App />, children: [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/user',
    element: <User />,
  },
  {
    path: '/user/:id',
    element: <UserDetails />,
  },
  {
    path: '*',
    element: <NotFound />,
  }
] }]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
