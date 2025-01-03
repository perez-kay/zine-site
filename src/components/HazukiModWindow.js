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
      <img className="w-100" src="/images/pfps/hazuki.png" alt="" />
      <div className="text-start p-3">
        <h1>Hazuki</h1>
        <h4>Head Mod & Organizer</h4>
        <div className="pb-1">
          <a className="d-block fs-5" href="https://x.com/hazukied">
            <FontAwesomeIcon icon={faTwitter} /> @hazukied
          </a>
          <a
            className="fs-5 d-block"
            href="https://bsky.app/profile/hazukied.bsky.social"
          >
            <FontAwesomeIcon icon={faBluesky} /> @hazukied
          </a>
          <a
            className="fs-5 d-block"
            href="https://www.instagram.com/hazukied/"
          >
            <FontAwesomeIcon icon={faInstagram} /> @hazukied
          </a>
        </div>
        <p className="mb-1">
          Hi there, i'm hazuki!
          <br />
          <br />
          I'm the head organizer for this zine and this is my second year
          running it. I have been an artist, creator, and Vocaloid fan for over
          10 years. My passion for digital art started and continues with my
          love for Hatsune Miku as a whole.
          <br />
          <br />I hope you can feel our love with this project!
        </p>
      </div>
    </Window>
  );
}

export default HazukiModWindow;
