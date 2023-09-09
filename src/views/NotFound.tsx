import { useRouteError } from 'react-router-dom'


function NotFound() {
  const error = useRouteError()
  
  console.error(error)

  return (
    <h2>找不到页面</h2>
  )
}

export default NotFound