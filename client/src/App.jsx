import { Route, Routes, Navigate } from '../node_modules/react-router-dom';
import './App.css'
import NavBar from './components/NavBar';
import Chat from './pages/Chat';
import Login from './pages/Login';
import Register from './pages/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
function App() {
  return (
    <>
      <NavBar />
      <Container className='text-secondary'>
        <Routes>
          <Route path='/' element={<Chat />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<Navigate to={'/'} />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
