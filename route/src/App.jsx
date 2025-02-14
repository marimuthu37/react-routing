import React from 'react' ;
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import Layout from './Layout';

const App = () => {

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, 
    children: 
    [
      {path: '/react-routing/', element: <Home />},
      { path: '/react-routing/about/', element: <About /> }, 
      { path: '/react-routing/contact/', element: <Contact /> },
      {path: '/react-routing/login/',element:<Login />},
      {path: '*', element: <h1>Not Found</h1>}
    ]
  }
])

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default App ;
 