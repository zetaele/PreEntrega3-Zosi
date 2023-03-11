import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NotFound from './Pages/NotFound';
import CartContainer from './components/CartContainer/CartContainer';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { CartContextProvider } from './context/CartContext';

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBar brand="ZetaEle" />
        <Routes>
          <Route path="/" element={ <ItemListContainer greeting="Hola, usuario." />} />
          <Route path="/category/:categoryId" element={ <ItemListContainer />} /> 
          <Route path="/item/:itemId" element={ <ItemDetailContainer /> } />
          <Route path="/cart" element={ <CartContainer /> } />

          <Route path="/*" element={ <NotFound /> } />
        </Routes>
        <Footer />
      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App;