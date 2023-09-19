import { createBrowserRouter, redirect, useMatch } from 'react-router-dom'
import type { RouteObject } from 'react-router'

import NotFound from '@/views/NotFound'
import App, { appLoader } from '../App'

import Login from '@/views/Login'

import Home from '@/views/Home'

const router: any = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <NotFound />,
    loader: async ({ request, params, context }) => {
      console.log(request.url)
      // const aa = useMatch()
      // console.log(aa)
      if (request.url === 'http://localhost:5173/') {
        return redirect('/home')
      }
      return null
    },
    // loader: appLoader,
    children: [
      {
        path: '/home/:aa?',
        element: <Home/>
      }
    ]
  },
  {
    path: '/login',
    loader: async (test) => {
      console.log(test)
      return {
        name: 'test'
      }
    },
    Component: Login
    // async lazy () {
    //   // const Logina = await import('../views/Login')
    //   // console.log(Logina)
    //   return {
    //     Component: Login
    //   }
    // }
  }
] as RouteObject[])

export default router