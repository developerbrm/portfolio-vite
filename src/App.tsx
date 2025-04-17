import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Flip, ToastContainer } from 'react-toastify'
import Sections from './sections'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <Sections />
      </main>

      <ToastContainer
        autoClose={1500}
        transition={Flip}
        position={window.innerWidth > 600 ? 'top-right' : 'top-center'}
      />
    </QueryClientProvider>
  )
}

export default App
