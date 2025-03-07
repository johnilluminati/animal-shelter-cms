import { Router, Routes, Route } from 'react-router-dom';

const routes = (
  <Router>
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/login' exact element={<Login />} />
      <Route path='/signup' exact element={<SignUp />} />
    </Routes>
  </Router>
);

function App() {
  return (
    <div>{ routes }</div>
  )
}

export default App
