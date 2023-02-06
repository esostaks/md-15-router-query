import Home from '../src/Components/Home/Home'
import About from '../src/Components/About/About'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import Characters from './Components/Characters/Characters'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// import './App.css'

function App() {

  const client = new QueryClient() 


 
  return (
    <QueryClientProvider client={client}>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/characters">Characters</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <hr />
          </div>
          <div></div>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/characters" element={<Characters />}/>
            <Route path="/about" element={<About />}/>
          </Routes>
          
      </Router>
    </QueryClientProvider>
    
  )
}

export default App
