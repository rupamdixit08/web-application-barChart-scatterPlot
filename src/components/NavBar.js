import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <ul
        style={{
          color: "#A020F0",
          display: "flex",
          background: "#429EBD",
          justifyContent: "space-around",
          width: "50%",
          fontWeight: 600,
          fontSize: "1.5rem",
          margin: "auto",
        }}
      >
        <li>
          <Link to="/">Scatter Plot</Link>
        </li>
        <li>
          <Link to="/bargraph">Bar Graph</Link>
        </li>
      </ul>
    </div>
  );
};
export default NavBar;
