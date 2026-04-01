import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Categories from './pages/Abbosbek/Categories'
import Add from './pages/Abdulloh/Add'
import Products from './pages/Abdulloh/Products'
import Dashboard from './pages/Sulaymon/Dashboard'


function App() {

  return (
    <>
      <div className='body'>
        <div className='body_text'>
          <h3>Dashboard</h3>
          <h3>Products</h3>
          <h3>Categories</h3>
        </div>
        <div>
          <hr />
        </div>
      </div>
     <Routes>
       <Route path='categories' element={<Categories/>}/>
       <Route path='add' element={<Add/>}/>
       <Route path='products' element={<Products/>}/>
       <Route path='dashboard' element={<Dashboard/>}/>
     </Routes>
    </>
  )
}

export default App