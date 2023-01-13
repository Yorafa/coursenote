import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './page/error';
import Course from './page/course';
import Content from './page/content';
import CourseIntro from './page/courseIntro';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: '', element: <CourseIntro />, },
      { path: 'courses', element: <CourseIntro />, },
      { path: ':courseId/', element: <Course />,},
      { path: ':courseId/:contentId/', element: <Content /> },

    ]
  }  
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
