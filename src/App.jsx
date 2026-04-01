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
          <div className="text_div text_divs">
            <h3><Link to={'/categories'}>Dashboard</Link></h3>
          </div>
          <div className="text_div">
            <h3><Link to={'/products'}>Products</Link></h3>
          </div>
          <div className="text_div">
            <h3><Link to={'/categories'}>Categories</Link></h3>
          </div>
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