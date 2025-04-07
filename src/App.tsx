import { Flip, ToastContainer } from 'react-toastify'
import Sections from './sections'

function App() {
  return (
    <>
      <main>
        <Sections />
      </main>

      <ToastContainer
        autoClose={1500}
        transition={Flip}
        position={window.innerWidth > 600 ? 'top-right' : 'bottom-center'}
      />
    </>
  )
}

export default App
