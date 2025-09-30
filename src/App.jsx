import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { CarrinhoProvider } from './context/CarrinhoContext.jsx';
import { AuthProvider } from "./hooks/useAuth.js";
import './styles/Global.css';
import Home from "./pages/Home";
import Carrinho from "./pages/Carrinho";
import Ajuda from "./pages/Ajuda";
import NotFound from './pages/NotFound'


function App() {
  return (
    <>
    <AuthProvider>
      <Navbar />
      <CarrinhoProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/ajuda" element={<Ajuda />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CarrinhoProvider>
      </AuthProvider>
    </>
    
  );
}

export default App;