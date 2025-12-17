import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './routing/Home';
import Navbar from './routing/Navbar';
import NotFound from './routing/NotFound';
import About from './routing/About';
import Login from './auth-system/Login';
import Signup from './auth-system/Signup';
import { AuthProvider } from './auth-system/AuthContext';
import PrivateRoute from './auth-system/PrivateRoute';
import Dashboard from './auth-system/Dashboard';
import UserDetail from './auth-system/UserDetail';
import Users from './auth-system/Users';
import Counter from './testing/Counter';
function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
    <div className="App">
      <header>
        <Navbar/>
      </header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/counter' element={<Counter/>}/>
        <Route path='/dashboard' element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
        <Route path='/profiles' element={<PrivateRoute><Users/></PrivateRoute>}/>
        <Route path='/profiles/:id' element={<PrivateRoute><UserDetail/></PrivateRoute>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
    </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
