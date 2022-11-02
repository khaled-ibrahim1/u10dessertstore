import { useLocation } from 'react-router-dom'

const Success = () => {
    const location = useLocation()
    console.log(location)
  return (
    <div>
        <h1>Thanks for your order, your will get a email when the order is ready for pick up </h1>
    </div>
  )
}

export default Success