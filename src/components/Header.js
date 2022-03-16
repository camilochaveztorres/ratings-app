import { Link } from "react-router-dom";

const Header = () => {
  //TODO skapa en länk

  return (
    <header>
      <div className="container">
        <Link to="/" style={{ textDecoration: "none", color: "#ff4893" }}>
          <h2>Ratings UI</h2>
        </Link>
      </div>
    </header>
  );
};

export default Header;
