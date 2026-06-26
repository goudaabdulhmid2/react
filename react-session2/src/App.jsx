import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import LayOut from './pages/layOut/LayOut';
import Courses from './pages/courses/Courses';
import Home from './pages/home/Home';
import About from './pages/about/About';
import NotFound from './pages/not-found/NotFound';
import CoursesDetails from './pages/courses-details/CoursesDetails';
import AddCourses from './pages/add-cources/AddCourses';
import CoursesLayout from './pages/coursesLayout/CoursesLayout';

import './App.css';

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <LayOut />,
      children: [
        { index: true, element: <Home /> },
        {path:'courses', element:<CoursesLayout/>, children:[
          { index:true, element: <Courses /> },
          { path: ':id', element: <CoursesDetails /> },
          { path: 'add', element: <AddCourses /> },
        ]},
        { path: 'about', element: <About /> },
         ,
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;