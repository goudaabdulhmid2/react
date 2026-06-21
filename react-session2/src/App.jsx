import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import LayOut from './pages/layOut/LayOut';
import Courses from './pages/courses/Courses';
import Home from './pages/home/Home';
import About from './pages/about/About';
import NotFound from './pages/not-found/NotFound';
import CoursesDetails from './pages/courses-details/CoursesDetails';

import './App.css';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LayOut />,
      children: [
        { index: true, element: <Home /> },
        { path: 'courses', element: <Courses /> },
        { path: 'courses/:id', element: <CoursesDetails /> },
        { path: 'about', element: <About /> },
      ],
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;