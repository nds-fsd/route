import './App.css';
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import About from './pages/about/about';
import User from './pages/user/user';
import Home from './pages/home/home';
import Calculadora from './pages/calculadora/calculadora';
import Navbar from './components/navbar/navbar';
import Summary from './pages/summary/summary';
import UserDetail from './pages/userDetail/userDetail';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />}/>
          <Route path="calculadora" element={<Calculadora />} />
          <Route path="users" element={<User />}>
            <Route path=":name" element={<UserDetail />} />
            <Route path="calculadora" element={<Calculadora />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
