import HazukiModWindow from '../components/HazukiModWindow';
import EchoModWindow from '../components/EchoModWindow';
import KayModWindow from '../components/KayModWindow';
import FadeInSection from '../components/FadeInSection';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
  return (
    <Container className="text-center">
      <FadeInSection>
        <h1 className="p-3">Welcome to The First Sound!</h1>

        <p className="fs-5">
          This free digital zine celebrates our beloved diva, Hatsune Miku and
          features tributes to classic songs from the late 2000s to mid 2010s.
          <br />
          <br />
          The zine features 54 artists who each created a piece for a Miku song
          that's special to them in some way. Whether you've been a Vocaloid fan
          for years or days, anyone can enjoy this zine!
        </p>
        <h1>Meet Your Mods!</h1>
      </FadeInSection>

      <Row className="mb-3">
        <Col md={4}>
          <FadeInSection>
            <HazukiModWindow />
          </FadeInSection>
        </Col>
        <Col md={4}>
          <FadeInSection>
            <EchoModWindow />
          </FadeInSection>
        </Col>
        <Col md={4}>
          <FadeInSection>
            <KayModWindow />
          </FadeInSection>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
