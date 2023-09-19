// import { useSelector, useDispatch } from 'react-redux'
import { useAppSelector, useAppDispatch } from '@/stores/hooks'
import { decrement, increment } from '@/stores/user'
import { Button } from 'antd'
import { useParams } from 'react-router'


function btnClick (dispatch: any) {
  dispatch(increment())
}

function Home () {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()
  const params = useParams()
  console.log(params)
  return (
    <>
      <Button type="primary" onClick={() => btnClick(dispatch)}>increment</Button>
      <Button type="primary" onClick={() => dispatch(decrement())}>decrement</Button>
      <p>{ count }</p>
    </>
  )
}

export default Home