import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage/index'
import EnDesarrollo from './pages/EnDesarrollo/index';
import Desarrollador from './pages/Desarrollador/index';
import './index.css';


const route = createBrowserRouter([
  {path:'/', element:<HomePage />},
  {path:'/catalogo', element:<EnDesarrollo />},
  {path:'/desarrollador', element:<Desarrollador />}
])

function App() {
  return <RouterProvider router={route} />
}

export default App
