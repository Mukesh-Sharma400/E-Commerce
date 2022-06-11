import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocationIcon from "@mui/icons-material/PinDropRounded";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ cart, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header--logo"
          src="https://cdn.iconscout.com/icon/free/png-256/remove-cart-2130851-1794982.png"
          alt="amazon"
        />
      </Link>
      <div className="header--option">
        <LocationIcon />
      </div>
      <div id="location--icon" className="header--option">
        <span className="header--optionLineOne">Deliver to</span>
        <span className="header--optionLineTwo">
          {!user ? "Your Location" : "Mukesh"}
        </span>
      </div>
      <div className="header--search">
        <select className="header--dropdown">
          <option value="All">All</option>
          <option value="Phones">Phones</option>
          <option value="Earphones">Earphones</option>
          <option value="Watches">Watches</option>
        </select>
        <input
          className="header--searchInput"
          type="text"
          placeholder="Search for Phones, Watches and Other Products..."
        />
        <SearchIcon className="header--searchIcon" />
      </div>

      <div className="header--nav">
        <Link to={user ? "/" : "/Login"}>
          <div onClick={handleAuthentication} className="header--option">
            <span className="header--optionLineOne">
              {!user ? "Hello, User" : "Hi, " + user.email}
            </span>
            <span className="header--optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <div className="header--option">
          <span className="header--optionLineOne">Return</span>
          <span className="header--optionLineTwo">& Order</span>
        </div>

        <div className="header--option">
          <span className="header--optionLineOne">
            {!user ? "Membership" : "Your"}
          </span>
          <span className="header--optionLineTwo">
            {!user ? "Join Now" : "Membership"}
          </span>
        </div>
      </div>

      <div className="header--optionBasket">
        <Link to="/checkout">
          <ShoppingCartIcon />
          <span className="header--optionLineTwo header--basketCount">
            {cart?.length}
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
