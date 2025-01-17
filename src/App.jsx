
import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './router/router'
import { Toaster } from 'react-hot-toast'

function App() {
 
  return (
    <div>
      <RouterProvider router={router} />
      <Toaster/>
    </div>
  )
}

export default App
