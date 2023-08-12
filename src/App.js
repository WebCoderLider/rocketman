import React from 'react'
import Login from './Components/Login/Login'
import {Route, Routes} from 'react-router-dom'
import Navbar from './Components/Admin/Navbar/Navbar'
import Buyurtmalar from './Components/Admin/Buyurtmalar/Buyurtmalar'
import Mijozlar from './Components/Admin/Mijozlar/Mijozlar'
import Maxsulotlar from './Components/Admin/Maxsulotlar/Maxsulotlar'
import Takliflar from './Components/Admin/Takliflar/Takliflar'
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Buyurtmalar />} />
        <Route path='/Mijozlar' element={<Mijozlar />} />
        <Route path='/Maxsulotlar' element={<Maxsulotlar />} />
        <Route path='/takliflar' element={<Takliflar />} />
      </Routes>
    </div>
  )
}

export default App
