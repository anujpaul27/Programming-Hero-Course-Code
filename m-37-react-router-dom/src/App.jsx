
import { Route, Router, Routes } from 'react-router'
import Navbar from './Component/Navbar'
import Login from './Component/Login'
import Footer from './Component/Footer'
import Check from './Component/Check'
import Registration from './Component/Registration'

function App() {


  return (
    <div>
      <Routes>
        <Route path='/' element={<Check />}>
          <Route
            path='/login'
            element={<Login />}
            
          />

          <Route path='/registration' element={<Registration />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
