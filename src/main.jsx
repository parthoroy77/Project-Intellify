import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import AppliedJobs from './components/AppliedJobs/AppliedJobs'
import Blogs from './components/Blogs/Blogs'
import Statistic from './components/Statistic/Statistic'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('jobs.json')
      },
      {
        path: 'appliedjobs',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: 'blogs',
        element: <Blogs></Blogs>,
      },
      {
        path: 'statistic',
        element: <Statistic></Statistic>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
