import {Header} from './components/Header/Header'
import {Inicio} from './components/Paginas/Inicio'
import {Hombres} from './components/Paginas/Hombres'
import {About} from './components/Paginas/About'
import {Footer} from './components/Footer/Footer'
import {HashRouter, Navigate, Route, Routes} from 'react-router-dom'
import './App.css'
function App(){
  return <>
    <HashRouter>
      <Header/>
      
      <main className='main'>
      <Routes>
        <Route path='/' element={<Inicio/>}></Route>
        <Route path='sobre-nosotros' element={<About/>}></Route>
        <Route path='Hombres' element={<Hombres/>}></Route>

        <Route path='*' element={<Navigate to='/'/>}></Route>
      </Routes>  
      </main>
      <Footer/>
    </HashRouter>
  </>
}

export default App;