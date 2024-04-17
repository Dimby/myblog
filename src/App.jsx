import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from 'react-jss';
import Home from './pages/home/Home';
import { DEFAULT } from './assets/theme';
import Achievement from './pages/achievement/Achievement';
import NavBar from './pages/NavBar';

function App() {

  return (
    <ThemeProvider theme={DEFAULT}>
      <BrowserRouter basename='/'>
        <Routes>
          <Route path='/' element={<NavBar/>}>
            <Route path='home' element={<Home/>} />
            <Route path='test' element={<Achievement/>} />
          </Route>
        </Routes>
        </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
