import Window from './Window';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBluesky,
  faTwitter,
  faInstagram,
  faTiktok,
  faTumblr,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import {
  faPlay,
  faForward,
  faBackward,
  faMusic,
} from '@fortawesome/free-solid-svg-icons';
import styles from './ContributorCard.module.css';

function getSocialIcon(social) {
  switch (social) {
    case 'twitter':
      return faTwitter;
    case 'bluesky':
      return faBluesky;
    case 'instagram':
      return faInstagram;
    case 'tumblr':
      return faTumblr;
    case 'tiktok':
      return faTiktok;
    case 'youtube':
      return faYoutube;

    default:
      throw new Error('Unknown Social');
  }
}

function getSocialURL(social, username) {
  switch (social) {
    case 'twitter':
      return `https://x.com/${username}`;
    case 'bluesky':
      return `https://bsky.app/profile/${username}.bsky.social`;
    case 'instagram':
      return `https://www.instagram.com/${username}/`;
    case 'tumblr':
      return `https://www.tumblr.com/${username}`;
    case 'tiktok':
      return `https://www.tiktok.com/@${username}`;
    case 'youtube':
      return `https://www.youtube.com/${username}`;

    default:
      throw new Error('Unknown Social');
  }
}

function ContributorCard({ artist }) {
  const {
    name,
    social1,
    username1,
    social2,
    username2,
    social3,
    username3,
    song,
  } = artist;

  return (
    <Window title={<FontAwesomeIcon icon={faMusic} />} fullHeight>
      <img className="w-100" src={`/images/pfps/${name}.jpg`} alt="" />
      <div className="p-3">
        <h2 className="pb-2">{name}</h2>
        <h5 className="pb-2">{song}</h5>
        <div className="py-2">
          <div className={styles.musicBarDark}>
            <div className={styles.barCircle}></div>
            <div className={styles.musicBarLight}></div>
          </div>
          <div className="d-flex my-3 justify-content-around">
            <FontAwesomeIcon icon={faBackward} size="2x" />
            <FontAwesomeIcon icon={faPlay} size="2x" />
            <FontAwesomeIcon icon={faForward} size="2x" />
          </div>
        </div>
        {social1 && (
          <div className="pb-1 text-start">
            <a
              className="d-block fs-5"
              href={getSocialURL(social1, username1)}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={getSocialIcon(social1)} fixedWidth /> @
              {username1}
            </a>
            {social2 && (
              <a
                className="fs-5 d-block"
                href={getSocialURL(social2, username2)}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={getSocialIcon(social2)} fixedWidth /> @
                {username2}
              </a>
            )}
            {social3 && (
              <a
                className="fs-5 d-block"
                href={getSocialURL(social3, username3)}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={getSocialIcon(social3)} fixedWidth /> @
                {username3}
              </a>
            )}
          </div>
        )}
      </div>
    </Window>
  );
}

export default ContributorCard;
