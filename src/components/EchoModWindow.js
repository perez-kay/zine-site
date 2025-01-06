import Window from './Window';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBluesky, faTwitter } from '@fortawesome/free-brands-svg-icons';

function EchoModWindow() {
  return (
    <Window
      title="echo"
      bgColor="rgba(170, 9, 122, 0.4)"
      borderColor="#ff589d"
      barBgColor="#fca3c7"
    >
      <img className="w-100" src="/images/pfps/echo.png" alt="" />
      <div className="text-start p-3">
        <h1>Echo</h1>
        <h4>Assistant & Social Media Mod</h4>
        <div className="pb-1">
          <a
            className="d-block fs-5"
            href="https://x.com/chartrocity"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} /> @chartrocity
          </a>
          <a
            className="fs-5 d-block"
            href="https://bsky.app/profile/chartrocity.bsky.social/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faBluesky} /> @chartrocity
          </a>
        </div>
        <p className="mb-1">
          hi everyone, i’m echo! i’ve dabbled in a few zines the past couple of
          years, including First Sound 2024!
          <br />
          <br />i ran my own zine (twisted lullaby) with hazuki’s assistance and
          learned so much from her, so i’m incredibly excited to be joining the
          mod team for First Sound 2025!
          <br />
          <br />
          this era of vocaloid is so special to me so i can’t wait for you all
          to see the love all of us have poured into The First Sound 2025!
        </p>
      </div>
    </Window>
  );
}

export default EchoModWindow;
