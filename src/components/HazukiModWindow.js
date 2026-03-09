import Window from './Window';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBluesky,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

function HazukiModWindow() {
  return (
    <Window
      title="hazuki"
      bgColor="rgba(9, 73, 170, 0.6)"
      borderColor="#00b0ff"
      barBgColor="#61ceff"
    >
      <img className="w-100" src="/images/pfps/Hazuki.jpg" alt="" />
      <div className="text-start p-3">
        <h1>Hazuki</h1>
        <h4>Head Mod & Organizer</h4>
        <div className="pb-1">
          <a
            className="d-block fs-5"
            href="https://x.com/hazukied"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} /> @hazukied
          </a>
          <a
            className="fs-5 d-block"
            href="https://bsky.app/profile/hazukied.bsky.social"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faBluesky} /> @hazukied
          </a>
          <a
            className="fs-5 d-block"
            href="https://www.instagram.com/hazukied/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} /> @hazukied
          </a>
        </div>
        <p className="mb-1">
          hello, i'm hazuki!
          <br />
          <br />
          I am the head organizer for The First Sound, working alongside fellow
          Vocaloid fans & artists for our third year. I have been an artist,
          creator, and Vocaloid lover for 15 years. My passion for digital art
          started and continues with my love for Hatsune Miku and Vocaloid as a
          whole.
          <br />
          <br />
          We are so happy to be back for yet another year of celebrating Miku
          Day, and we hope you can feel the love, too!
        </p>
      </div>
    </Window>
  );
}

export default HazukiModWindow;
