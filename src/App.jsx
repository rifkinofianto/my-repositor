import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Jujutsu from './Pages/Jujutsu'
import Kimetsu from './Pages/Kimetsu'

const App = () => {
  return(
    <>
    <Router>
      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='/jujutsukaisen' element= {<Jujutsu/>} />
        <Route path='/kimetsunoyaiba' element= {<Kimetsu/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App