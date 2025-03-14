import Window from '../components/Window';
import Button from 'react-bootstrap/Button';
import styles from './Homepage.module.css';
import Hero from '../components/Hero';
function Homepage() {
  return (
    <div className="text-center">
      <Hero />
      <div className="mx-1 mb-4">
        <img
          className={`${styles.image} pt-4 px-2 px-lg-0`}
          src="/images/logo-alt.PNG"
          alt=""
        />
        <h2 className="my-5">
          The World Is Hers in this zine dedicated entirely to Hatsune Miku!
          Featuring 40+ artworks paying tribute to her most iconic and classic
          songs. Check out the zine below!
        </h2>
        <Window title="zine.exe" bgColor={'rgba(1, 58, 104, 0.66)'}>
          <iframe
            title="zine-flipbook"
            allowFullScreen="allowfullscreen"
            src="https://heyzine.com/flip-book/d9c713693f.html"
            style={{ width: '90vw', height: '800px' }}
            // style="border: 1px solid lightgray; width: 100%; height: 406px;"
          ></iframe>
        </Window>
        <p>
          If you aren't able to view the zine, please download the PDF using the
          button below.
        </p>
        <Button style={{ backgroundColor: '#00b0ff' }}>
          <a
            href="https://drive.google.com/file/d/1YcNzcbYO1ioXNvF0BJcjE6TK3QzCSSFm/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            style={{ color: 'white' }}
          >
            Download Zine PDF
          </a>
        </Button>
      </div>
    </div>
  );
}

export default Homepage;
