import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HomePage } from './pages/Home';
import { CarinhoPage } from './pages/Carinho';
import { ContatoPage } from './pages/Contato';
import { PedidosPage } from './pages/Pedidos';

import './assets/css/normalize.css';
import './assets/css/global.css';

function App() {

  return (
      <div className="App">

          <Header />

          <main>
              <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/carinho" element={<CarinhoPage />} />
                    <Route path="/contato" element={<ContatoPage />} />
                    <Route path="/pedidos" element={<PedidosPage />} />
              </Routes>
          </main>

          <Footer />

      </div>
  )
}

export default App