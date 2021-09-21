import React from "react";
import { Link, NavLink } from "react-router-dom";
import { CartWidget } from "../Cart/CarWidget";
import { CartContext } from "../Context/CartContext";
import "./NavBar.css";

function NavBar({ searchValue, setSearchValue }) {
  const { countProducts, setOpenFormModal } = React.useContext(CartContext);
  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  };

  const onClickUserProfile = () => {
    setOpenFormModal((prevState) => !prevState);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to={`/`} className="navbar-brand" href="#">
        Anthony-Shop
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
            <NavLink to={`/`} className="nav-link" href="#">
              Home<span className="sr-only">(current)</span>
            </NavLink>
          </li>
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Categories
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">

          <NavLink to={`/category/${1}`} className="nav-link" href="#">
              White Color<span className="sr-only">(current)</span>
            </NavLink>

          </a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">

          <NavLink to={`/category/${2}`} className="nav-link" href="#">
              Black Color<span className="sr-only">(current)</span>
            </NavLink>

          </a>
        </div>
      </li>

          <li className="nav-item">
            <nav className="nav-link" onClick={onClickUserProfile} href="#">
              User Profile<span className="sr-only">(current)</span>
            </nav>
          </li>
        </ul>
        <input
          onChange={onSearchValueChange}
          value={searchValue}
          className="form-control col-4 mr-sm-2"
          type="search"
          placeholder="Search your T-shirt"
          aria-label="Search"
        />
        <Link to={`/cart`} style={{ textDecoration: "none" }}>
          <CartWidget count={countProducts()} />
        </Link>
      </div>
    </nav>
  );
}

export { NavBar };

//<Link to={`/item/${product.id}`} className="btn btn-primary">View</Link>
