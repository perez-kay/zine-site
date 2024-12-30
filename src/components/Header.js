import Window from './Window';
import styles from './Header.module.css';
function Header({ title, barBgColor, bgColor, borderColor }) {
  return (
    <Window
      title={title}
      bgColor={bgColor}
      barBgColor={barBgColor}
      borderColor={borderColor}
    >
      <img className={styles.image} src="/images/logo-alt.PNG" alt="" />
    </Window>
  );
}

export default Header;
