import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <h2>تفرجگاه ساحلی | رزرو اتاق هتل</h2>
      <p>
        &copy; <span>{year}</span> FereshteMoafi.com - All Rights Copyright
        Reserved To{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/FereshteMoafi"
        >
          Fereshte Moafi
        </a>
      </p>
    </footer>
  );
}
