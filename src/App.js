import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Homepage from './pages/Homepage';
import About from './pages/About';
import Artists from './pages/Artists';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/artists" element={<Artists />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
