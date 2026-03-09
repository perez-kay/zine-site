import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import CountdownTimer from './components/CountdownTimer';

import Homepage from './pages/Homepage';
import About from './pages/About';
import Contributors from './pages/Contributors';
import NavBar from './components/NavBar';
import Countdown from 'react-countdown';

const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    return (
      <BrowserRouter>
        <NavBar />
        <Container fluid className="p-0">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contributors" element={<Contributors />} />
          </Routes>
        </Container>
      </BrowserRouter>
    );
  } else {
    return <CountdownTimer hours={hours} minutes={minutes} seconds={seconds} />;
  }
};

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <NavBar />
        <Container fluid className="p-0">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contributors" element={<Contributors />} />
          </Routes>
        </Container>
      </BrowserRouter> */}
      <Countdown
        date={new Date('March 9, 2026 12:00:00 GMT-7')}
        renderer={renderer}
      />
      {/* <Countdown date={new Date('March 8, 2026 19:17:00 GMT-7')}>
        <BrowserRouter>
          <NavBar />
          <Container fluid className="p-0">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contributors" element={<Contributors />} />
            </Routes>
          </Container>
        </BrowserRouter>
      </Countdown> */}
    </>
  );
}

export default App;
