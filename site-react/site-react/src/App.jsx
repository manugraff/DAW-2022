import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { HomePage } from "./pages/Home"

function App() {

  return (
    <div className="App">
      <Header />

    <main>
      <Routes>
        <Route peth="*"element={<HomePage}/>
      </Routes>
    </main>

     <Footer />

    </div>
  )
}

export default App
