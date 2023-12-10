import React from 'react';
import './App.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Presentation from './pages/Presentation'
import Prestation from '../src/pages/Prestation'
import Cards from './pages/Cards'
import Contact from './pages/Contact'
import Offers from './pages/Offers'
import Products from './pages/Products'
import Footer from './components/Footer';
import Home from './pages/Home';
import SoinVisage from '../src/pages/prestation/SoinVisage'
import SoinCorps from '../src/pages/prestation/SoinCorps'
import Makeup from '../src/pages/prestation/Makeup'
import Epilation from '../src/pages/prestation/Epilation'
import Teinture from '../src/pages/prestation/Teinture'
import Onglerie from '../src/pages/prestation/Onglerie'
import ScrollToTop from './components/ScrollToTop';



function App() {
  return (
    <>
     <Header/>
		 <ScrollToTop/>
		 <Home/>
	  <Routes>
			<Route exact path="/" element={<Presentation/>}/>
			<Route path="/prestation" element={<Prestation/>}/>
			<Route path="/gift-card" element={<Cards/>}/>
			<Route path="/products" element={<Products/>}/>
			<Route path="/offers" element={<Offers/>}/>
			<Route path="/contact" element={<Contact/>}/>
			<Route path="/soin_visage" element={<SoinVisage/>}/>
			<Route path="/soin_corps" element={<SoinCorps/>}/>
			<Route path="/makeup" element={<Makeup/>}/>
			<Route path="/epilation" element={<Epilation/>}/>
			<Route path="/teinture" element={<Teinture/>}/>
			<Route path="/onglerie" element={<Onglerie/>}/>
		</Routes>
		<Footer/>
    </>
  );
}

export default App;
