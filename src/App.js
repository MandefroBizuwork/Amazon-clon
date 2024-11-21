


import MySlide from './components/Carasoulse/MySlide';
import Category from './components/Category/Category';
import Header from './components/Header/Header';
import ProductList from './components/Products/ProductList';
import './index.css'
import PageRouting from './PageRouting';
import LandingPage from './Pages/Landing/LandingPage';
import "./bootstrap-5/css/bootstrap.min.css"
import { store } from './components/UserCart/Store';
import {Provider} from   'react-redux';


function App() {
  return (
   <>
   <Provider store={store}>

   <PageRouting/>
   </Provider>
    
     {/* <MySlide/>
        <Category/>
        <ProductList/> */}
       
  {/* <LandingPage/> */}

 
    </>
  );
}

export default App;
