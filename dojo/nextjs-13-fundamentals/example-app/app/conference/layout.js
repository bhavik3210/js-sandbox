import style from "./styles.css";

export default function ConferenceLayout({ children }) {
  return (
    <>
      <header style={style.head}>Conference Layout Root</header>
      <section>{children}</section>
    </>
  );
}
