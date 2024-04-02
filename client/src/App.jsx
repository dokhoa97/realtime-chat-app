import { useContext } from 'react';
import { Route, Routes, Navigate } from '../node_modules/react-router-dom';
import './App.css'
import NavBar from './components/NavBar';
import Chat from './pages/Chat';
import Login from './pages/Login';
import Register from './pages/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import { AuthContext } from './context/AuthContext';
function App() {
  const { user } = useContext(AuthContext)
  return (
    <>
      <NavBar />
      <Container className='text-secondary'>
        <Routes>
          <Route path='/' element={user ? <Chat /> : <Login />} />
          <Route path='/register' element={user ? <Chat /> : <Register />} />
          <Route path='/login' element={user ? <Chat /> : <Login />} />
          <Route path='*' element={<Navigate to={'/'} />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
