import styles from './Hero.module.css';
function Hero() {
  return (
    <section
      className={`${styles.hero} px-4 py-5 text-center d-flex justify-content-center align-items-center`}
    >
      <h1 className="mx-4 p-3 fw-bold">
        Experience the First Sounds of Hatsune Miku
      </h1>
    </section>
  );
}

export default Hero;
