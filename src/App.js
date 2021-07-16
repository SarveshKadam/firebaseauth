import Signup from "./Components/Signup";
import { Container } from "react-bootstrap";
import {Switch, Route} from 'react-router-dom'
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import Privateroute from "./Components/Privateroute";
import Forgotpassword from './Components/Forgotpassword'

function App() {
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{minHeight: '100vh' }}>
      <div className="w-100" style={{maxWidth: '400px'}}>
      <Switch>
        <Privateroute exact path='/' component={Dashboard} />
        <Route path='/signup' component={Signup}/>
        <Route path='/login' component={Login}/>
        <Route path='/forgot-password' component={Forgotpassword} />
      </Switch>    
      </div>
    </Container>
  );
}

export default App;
