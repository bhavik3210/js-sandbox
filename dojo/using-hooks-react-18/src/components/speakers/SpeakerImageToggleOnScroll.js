import { useRef, useState, useEffect } from "react";

export default function SpeakerImageToggleOnScroll({
  imageUrl,
  alt,
  thumbNail,
}) {
  const inView = false;
  const imageRef = useRef(null);

  function isInView() {
    const rectangle = imageRef.current.getBoundingClientRect();
    return rectangle.top >= 0 && rectangle.bottom <= window.innerHeight;
  }

  function scrollHandler() {}

  useEffect(() => {
    setInView(isInView());
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler());
    };
  }, []);

  const grayScale = inView ? "grayscale(0%)" : "grayscale(100%)";

  return (
    <img
      src={imageUrl}
      alt={alt}
      width={thumbNail ? 50 : 200}
      height={thumbNail ? 50 : 200}
      className={
        thumbNail
          ? "img-fluid rounded-start "
          : "img-fluid rounded-start speaker-image"
      }
      style={{ filter: `${grayScale}` }}
    />
  );
}
