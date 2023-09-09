// import React from 'react'
import ReactDOM from 'react-dom/client'

import { ConfigProvider } from 'antd'

import zhCN from 'antd/locale/zh_CN'
import 'antd/dist/reset.css'

import './index.css'
import {
  RouterProvider
} from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './stores'

import router from './routes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <Provider store={ store }>
    <ConfigProvider locale={zhCN}>
      <RouterProvider router={router} />
    </ConfigProvider>
  </Provider>
  // </React.StrictMode>,
)
