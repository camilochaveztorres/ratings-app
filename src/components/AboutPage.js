import { Link } from "react-router-dom";
const AboutPage = () => {
  return (
    <div className="about">
      <h1>About Page</h1>
      <Link to="/" style={{ textDecoration: "none", color: "#ff4893" }}>
        <p>Back to Home</p>
      </Link>
    </div>
  );
};

export default AboutPage;
