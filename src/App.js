import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AddPackage from './components/AddPackage/AddPackage';
import Booking from './components/Booking/Booking';
import Contact from './components/Contact/Contact';
import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Packages from './components/Packages/Packages';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Feedback from './components/Feedback/Feedback';
import AuthProvider from './Context/AuthProvider';
import Admin from './components/Admin/Admin';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/packages">
              <Packages></Packages>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/feedback">
              <Feedback></Feedback>
            </Route>
            <PrivateRoute exact path="/addpackage">
              <AddPackage></AddPackage>
            </PrivateRoute>
            <PrivateRoute exact path="/admin">
              <Admin></Admin>
            </PrivateRoute>
            <PrivateRoute exact path="/booking/:id">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute exact path="/contact">
              <Contact></Contact>
            </PrivateRoute>
            <PrivateRoute exact path="/my_packages">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
