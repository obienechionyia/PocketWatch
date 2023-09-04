import logo from "../expensetrackerlogo.png";

const Header = (props) => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={logo} className="logo" alt="pocketwatch logo" />
      </div>

      <h2>{props.title}</h2>
    </div>
  );
};

export default Header;
