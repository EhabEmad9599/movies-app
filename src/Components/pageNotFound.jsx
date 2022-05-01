import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const Navigate = useNavigate();
  return (
    <section
      className="d-flex flex-column justify-content-center align-items-center mt-5"
      style={{ color: "#FFF" }}
    >
      <h1>OOPS!</h1>
      <h2>404 - Page Not Found</h2>
      <p>The page you're looking for isn't here</p>
      <button
        onClick={() => Navigate("/")}
        type="button"
        class="btn btn-outline-secondary">Back To Home</button>
    </section>
  );
};
export default PageNotFound;
