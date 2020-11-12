import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import LoginForm from './components/LoginForm';
import OrderList from './components/OrderList';

function App() {
  return (
    <Router>
      <div className="alert alert-primary">
        <div className="container">
          <h1>Order details</h1>
        </div>
      </div>
      <div className="container">
        <Link to="/" >Home</Link> | 
        <Link to="/login">Login</Link> | 
        <Link to="/orders">View orders</Link>

        <Route path="/" exact={true} component={()=><h1>You are home!</h1>} />
        <Route path="/login" component={LoginForm} />
        <Route path="/orders" component={OrderList} />
      </div>
    </Router>
  );
}

export default App;
