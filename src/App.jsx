import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../src/css/homestyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';
import AcercaDeNosotros from './pages/acercaDeNosotros';
import ParaAgenciasDeViaje from './pages/paraAgenciasdeViaje';
import Contactanos from './pages/contactanos';
import ScrollToTop from './components/scrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/acercaDeNosotros" element={<AcercaDeNosotros />} />
        <Route exact path="/paraAgenciasDeViaje" element={<ParaAgenciasDeViaje />} />
        <Route exact path="/contactanos" element={<Contactanos />} /> 
      </Routes>
    </Router>
  );
}

export default App;
