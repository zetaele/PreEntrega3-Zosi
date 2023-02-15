import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './Pages/NotFound';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar brand="ZetaEle" />
      <Routes>
        <Route path="/" element={ <ItemListContainer greeting="Hola, usuario." />} />
        <Route path="/category/:categoryId" element={ <ItemListContainer />} /> 
        <Route path="/item/:itemId" element={ <ItemDetailContainer /> } />

        <Route path="*" element={ <NotFound /> } />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
