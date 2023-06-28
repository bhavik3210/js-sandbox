import styles from "./banner.module.css";

const Banner = () => {
  const subtitleStyle = {
    fontStyle: "italic",
    fontSize: "x-large",
    color: "coral",
  };

  return (
    <header className="row mb-4">
      <div className="col-5">
        <img className={styles.logo} src="./GloboLogo.png" alt="logo" />
      </div>
      <div
        className="col-7 mt-5"
        // style={{ fontStyle: "italic", fontWeight: "bold" }}
        style={subtitleStyle}
      >
        Providing houses all over the world
      </div>
    </header>
  );
};

export default Banner;
