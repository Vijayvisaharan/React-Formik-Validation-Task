
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useFormik } from 'formik';
import Home from './Home'
import Added from './Added'
import Update from './Update'
import Author from './Author'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>Home</Route>
          <Route path='/Added' element={<Added />}>Create</Route>
          <Route path='/Update/:id' element={<Update />}>Update</Route>
          <Route path='/Author/:id' element={<Author />}>Author</Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
