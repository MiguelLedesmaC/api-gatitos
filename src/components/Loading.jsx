import { Spinner } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Loading = () => {
  return (
    <div className='content-spinner-reactstrap'>
      <Spinner className='spinner-reactstrap' color='primary' />
    </div>
  )
}

export default Loading
