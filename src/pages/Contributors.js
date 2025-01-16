import ContributorCard from '../components/ContributorCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pagination from 'react-bootstrap/Pagination';
import PageItem from 'react-bootstrap/PageItem';
import { CONTRIBUTOR_DATA } from '../data/ContributorData';
import { useEffect, useState } from 'react';

const NUM_ARTISTS = CONTRIBUTOR_DATA.length;
const ARTISTS_PER_PAGE = 8;
const MAX_PAGES = Math.ceil(NUM_ARTISTS / ARTISTS_PER_PAGE);

function Contributors() {
  const [activeTab, setActiveTab] = useState(1);
  const dataSlice = CONTRIBUTOR_DATA.slice(
    ARTISTS_PER_PAGE * (activeTab - 1),
    ARTISTS_PER_PAGE * activeTab
  );

  useEffect(() => window.scroll(0, 0), [activeTab]);

  return (
    <Container className="text-center px-4 px-md-0">
      <h1>Contributors</h1>
      <h5 className="mb-3">
        Please check out all of the amazing artists that contributed to our
        zine!
      </h5>
      <Row>
        {dataSlice.map((artist, i) => (
          <Col md="6" lg="3" key={`col${i}`}>
            <ContributorCard artist={artist} key={artist.name} />
          </Col>
        ))}
      </Row>
      <Pagination className="justify-content-center">
        <Pagination.Prev
          onClick={() => setActiveTab(activeTab - 1)}
          disabled={activeTab === 1}
        />
        {[...Array(MAX_PAGES).keys()].map((i) => (
          <PageItem
            active={i + 1 === activeTab}
            value={i + 1}
            onClick={(e) => setActiveTab(Number(e.target.text))}
            key={`pageTab${i + 1}`}
          >
            {i + 1}
          </PageItem>
        ))}
        <Pagination.Next
          onClick={() => setActiveTab(activeTab + 1)}
          disabled={activeTab === MAX_PAGES}
        />
      </Pagination>
    </Container>
  );
}

export default Contributors;
