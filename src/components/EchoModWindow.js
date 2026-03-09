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
      <img className="w-100" src="/images/pfps/Echo.jpg" alt="" />
      <div className="text-start p-3">
        <h1>Echo</h1>
        <h4>Assistant Mod & Social Media Mod</h4>
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
          hi everyone, i’m echo! i’m one of the mods in this zine and i’m happy
          to be here for the 3rd iteration of First Sound!
          <br />
          <br />
          this era of vocaloid is what drove me to continue my creative
          endeavors. growing up with hazuki, we’d share our love for these songs
          and our passion for vocaloid with each other. First Sound is full of
          passion from so many artists & i hope it inspires you all!
        </p>
      </div>
    </Window>
  );
}

export default EchoModWindow;
