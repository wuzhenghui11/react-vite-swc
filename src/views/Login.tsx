
import './Login.css'

import { Button, Checkbox, Form, Input } from 'antd'
import { useLoaderData, useMatches } from 'react-router-dom'
import { 
  useState,
  useReducer,
  useContext,
  createContext,
  forwardRef,
  useRef,
  useImperativeHandle,
  useEffect,
  /* experimental_useEffectEvent as useEffectEvent */
} from 'react'
import { useImmer, useImmerReducer } from 'use-immer'

const initialTasks = [
  {id: 0, text: '参观卡夫卡博物馆', done: true},
  {id: 1, text: '看木偶戏', done: false},
  {id: 2, text: '打卡列侬墙', done: false},
];

const LevelContext = createContext(1)

function tasksReducer (draft: any, action: any) {
  switch (action.type) {
    case 'added': {
      draft.push({
        id: action.id,
        text: action.text,
        done: false,
      })
      break;
    }
    case 'changed': {
      const index = draft.findIndex((t: any) => t.id === action.task.id);
      draft[index] = action.task;
      break;
    }
    case 'deleted': {
      return draft.filter((t: any) => t.id !== action.id);
    }
    default: {
      throw Error('未知 action: ' + action.type);
    }
  }
}

export default function Login () {
  const [index, setIndex] = useState(0)
  const [tasks, dispatch] = useImmerReducer(tasksReducer, initialTasks)

  const level = useContext(LevelContext)

  useEffect(() => {
    console.log('渲染完成')
  })
  console.log(tasks)

  let ptindex = 0

  const data = useLoaderData()
  console.log(data)
  const aa = useMatches()
  console.log(aa)

  const onFinish = (values: any) => {
    console.log('Success:', values)
  }
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  

  function onReset () {
    setIndex(index + 1)
    ptindex += 1
    console.log(index)
  }
  

  return (
    <div className="login">
      <Form
        className="l-form"
        name="basic"
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 19 }}
        style={{ minWidth: 380 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off">
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}>
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox>{ ptindex }记住我{ index }</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">登录</Button>
          <Button style={{ marginLeft: 20 }} type="primary" onClick={onReset}>重置</Button>
        </Form.Item>
      </Form>
    </div>
  )
}
