import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

const CookieConsent = () => {
  const [cookies, setCookie] = useCookies(["cookieConsent"]);
  const giveCookieConsent = () => {
    setCookie("cookieConsent", true, { path: "/" });
  };

  return (
    <div className="cookie-consent">
      <p>
        We use cookies to enhance your user experience. By using our website,
        you agree to our use of cookies.{" "}
        <Link ref={"/privacy-policy"} to={"/privacy-policy"}>
          Learn more.
        </Link>
      </p>
      <button onClick={giveCookieConsent}>Accept</button>
    </div>
  );
};

export default CookieConsent;
