import "../styles/Navbar.css";
import Button from "./Button";
function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-icon">
        <img src="http://web.archive.org/web/20221117021711im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7cd432feb68e_bonsai-logo.svg" />
      </div>
      <div className="nav-links">
        <a href="/product">Product</a>
        <a href="/templates">Templates</a>
        <a href="/pricing">Pricing</a>
        <a href="/reviews">Reviews</a>
      </div>
      <div className="nav-btns">
        <Button
          text="LOG IN "
          onClick={() => {}}
          backgroundColor="transparent"
          color="#00b289"
          width="100px"
        />
        <Button text="START FREE" onClick={() => {}} width="200px" />
      </div>
    </div>
  );
}
export default Navbar;
