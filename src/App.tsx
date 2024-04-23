import Routing from './routing/Routing.tsx';
import NavBar from './components/pages/molecule/NavBar.tsx';
import { BrowserRouter , Routes , Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routing />
    </BrowserRouter>
    </>
  )
}

export default App
