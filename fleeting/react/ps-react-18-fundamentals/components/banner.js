import styles from "./banner.module.css";

// const Banner = ({children, headerText}) => { can also be destructured directly from props
const Banner = (props) => {
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
        {props.headerText}
        {"\n"}
        {props.children}
        {/* {console.log(props)} */}
      </div>
    </header>
  );
};

export default Banner;
