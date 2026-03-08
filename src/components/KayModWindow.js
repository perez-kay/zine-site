import Window from './Window';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBluesky,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

function KayModWindow() {
  return (
    <Window
      title="kay"
      bgColor="rgba(98, 9, 170, 0.6)"
      borderColor="#7e51ea"
      barBgColor="#c4a8fb"
    >
      <img className="w-100" src="/images/pfps/Kay.jpg" alt="" />
      <div className="text-start p-3">
        <h1>Kay</h1>
        <h4>Assistant Mod & Web Developer</h4>
        <div className="pb-1">
          <a
            className="d-block fs-5"
            href="https://x.com/kaypxz"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} /> @kaypxz
          </a>

          <a
            className="fs-5 d-block"
            href="https://www.instagram.com/kay.pxz/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} /> @kay.pxz
          </a>
        </div>
        <p className="mb-1">
          Hi I'm Kay! I'm so happy to be back for another year of The First
          Sound! &lt;3
          <br />
          <br />
          This is my third time running First Sound with Hazuki, and our fourth
          project together overall! This era of Vocaloid is so nostalgic for me.
          I spent my teens playing hours and hours of Project Diva F and F2nd on
          the PS3, so these songs means so so much to me!
          <br />
          <br />
          I'm so excited for you all to see the work we've put into this
          project!!!
        </p>
      </div>
    </Window>
  );
}

export default KayModWindow;
