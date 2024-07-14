import './App.css';
import '../src/Components/sales.css';
import Dashboard from './Components/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './Components/Products';
import Sales from './Components/Sales';
import Users from './Components/Users';

import Admin from './Components/Admin';
import Saleexpense from './Components/Saleexpense';
import Login from './Components/Login';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path={"/"} element={<Login />} />
          <Route path={"/"} element={<Dashboard />} >
            <Route path={'/admin'} index element={<Admin />} />
            <Route path={"/products"} element={<Products />}></Route >
            <Route path={"/sales"} element={<Sales />}></Route >
            <Route path={"/expenses"} element={<Saleexpense />}></Route>

            {/* <Route path={"/login"} element={<Login />}></Route> */}
          </Route >
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
