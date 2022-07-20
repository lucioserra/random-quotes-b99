import {BrowserRouter, Route, Routes} from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import CharacterQuotes from "./pages/CharacterQuotes"

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":character" element={<CharacterQuotes />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
