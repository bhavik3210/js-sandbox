import { useRef } from "react";

export default function Demo() {
  const imgRef = useRef();
  const mouseOverCount = useRef(0);
  return (
    <div className="container">
      <img
        src="/images/Speaker-1124.jpg"
        ref={imgRef}
        style={{ filter: "grayscale(100%)" }}
        onMouseOver={() => {
          imgRef.current.style.filter = "grayscale(0%)";
          mouseOverCount.current++;
        }}
        onMouseOut={() => {
          imgRef.current.style.filter = "grayscale(100%)";
        }}
      ></img>
      <hr />
      <button
        onClick={() => {
          alert("Registered!" + mouseOverCount.current);
        }}
      >
        Register
      </button>
    </div>
  );
}
