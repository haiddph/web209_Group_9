import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './pages/dashboard'
import List from './pages/category/list'
import Add from './pages/category/add'
import Update from './pages/category/update'

const routers = createBrowserRouter([

  { path: '/admin/category', element: <List /> },
  { path: '/admin/category/add', element: <Add /> },
  { path: '/admin/category/update/:id', element: <Update /> },
])
function App() {
 return   <RouterProvider router={routers} />
}

export default App
