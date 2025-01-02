import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Homepage from './pages/Homepage';
import About from './pages/About';
import Contributors from './pages/Contributors';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Container>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contributors" element={<Contributors />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
