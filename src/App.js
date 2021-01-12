import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import GlobalStyles from './GlobalStyles'
import Home from './pages/HomePage/Home'

const App = () => {
  return (
    <>
      <Router>
        <GlobalStyles />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </>
  )
}

export default App
