import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from 'react-jss';
import Home from './pages/home/Home';
import { DEFAULT } from './assets/theme';
import Achievement from './pages/achievement/Achievement';
import NavBar from './pages/NavBar';
import Hobbies from './pages/hobbies/Hobbies';
import Me from './pages/me/Me';

function App() {

  return (
    <ThemeProvider theme={DEFAULT}>
      <BrowserRouter basename='/'>
        <Routes>
          <Route path='/' element={<NavBar/>}>
            <Route path='home' element={<Home/>} />
            <Route path='achievement' element={<Achievement/>} />
            <Route path='me' element={<Me/>} />
            <Route path='hobbies' element={<Hobbies/>} />
          </Route>
        </Routes>
        </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
