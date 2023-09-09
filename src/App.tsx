import { useState } from 'react'
import './App.css'

import React from 'react'

type MenuItem = Required<MenuProps>['items'][number]

import type { MenuProps } from 'antd'
import { Layout, Menu } from 'antd'

import { Outlet, useMatches } from 'react-router-dom'

const { Header, Content, Sider } = Layout

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}


const items: MenuProps['items'] = [
  getItem('一级1', '1', null, [
    getItem('1-1', '1-1',),
    getItem('1-2', '1-2',)
  ]),
  getItem('一级2', '2', null, [
    getItem('2-1', '2-1',),
    getItem('2-2', '2-2',)
  ]),
]

export function appLoader () {
  const info = useMatches()
  console.log(info)
  return null
}

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <Layout style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
      </Header>
      <Layout>
        <Sider width={200}>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={items}
          />
        </Sider>
        <Layout style={{ padding: '10px 10px 0' }}>
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}

          <Content
            style={{
              padding: 12,
              margin: 0,
              minHeight: 280,
              background: '#fff',
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default App
