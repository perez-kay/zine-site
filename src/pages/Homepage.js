import Header from '../components/Header';
import Button from 'react-bootstrap/Button';
function Homepage() {
  return (
    <div className="text-center">
      {/* <h1>The First Sound</h1>
      <h3>A Miku Day Zine</h3> */}
      <Header
        title="logo.png"
        bgColor={'rgba(1, 58, 104, 0.66)'}
        barBgColor={'#6fd8f7'}
        borderColor={'#007db2'}
      />
      <h5 className="my-3">
        Experience the First Sounds of Hatsune Miku in this zine! Featuring 42
        artworks paying tribute to her most iconic and classic songs
      </h5>
      <iframe
        title="zine-flipbook"
        allowFullScreen="allowfullscreen"
        src="https://heyzine.com/flip-book/f4e6bf9c74.html"
        style={{ width: '100%', height: '600px' }}
        // style="border: 1px solid lightgray; width: 100%; height: 406px;"
      ></iframe>
      <p>
        If you aren't able to view the zine, please download the PDF using the
        button below.
      </p>
      <Button>Download Zine PDF</Button>
    </div>
  );
}

export default Homepage;
