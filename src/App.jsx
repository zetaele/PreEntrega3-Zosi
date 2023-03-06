import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './Pages/NotFound';
import CartContainer from './components/CartContainer/CartContainer';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { CartContextProvider } from './context/CartContext';

export default function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBar brand="ZetaEle" />
        <Routes>
          <Route path="/PreEntrega3-Zosi/" element={ <ItemListContainer greeting="Hola, usuario." />} />
          <Route path="/PreEntrega3-Zosi/category/:categoryId" element={ <ItemListContainer />} /> 
          <Route path="/PreEntrega3-Zosi/item/:itemId" element={ <ItemDetailContainer /> } />
          <Route path="/PreEntrega3-Zosi/cart" element={ <CartContainer /> } />

          <Route path="/PreEntrega3-Zosi/*" element={ <NotFound /> } />
        </Routes>
        <Footer />
      </CartContextProvider>
    </BrowserRouter>
  )
}
