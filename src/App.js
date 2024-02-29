import {Routes, Route } from 'react-router-dom';
import Header from './Component/Header';
import Home from './Component/Home';
import Directors from './Component/Directors';
import Heros from './Component/Heros';
import Heroines from './Component/Heroines';
import LoginForm from './Component/LoginForm';
import Notfound from './Component/Notfound';
import Products from './Component/Products';
import Gopal from './Component/Gopal';
import './App.css'

const App = () => {

  return(
    <>
   
    <Header/>
    <Routes>
    <Route path="/blogs/:id" element={<Gopal/>}/>
    <Route path="/login" element={<LoginForm/>}/>
    <Route path="/" element={<Home/>}/>
    <Route path="/heros" element={<Heros/>}/>
    <Route path="/heroines" element={<Heroines/>}/>
    <Route path="/directors" element={<Directors/>}/>
    <Route path="*" element={<Notfound/>}/>
    <Route path="products" element={<Products/>}>
         <Route path=":productsId" element={<Products/>}/>
    </Route>
    </Routes>
    
   
    </>
  )


  }

export default App;