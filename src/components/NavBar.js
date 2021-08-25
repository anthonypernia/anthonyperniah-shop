import React from "react";
import {Link} from "react-router-dom";


function NavBar({searchValue, setSearchValue}){

    const onSearchValueChange = (e) => {
      console.log(e.target.value);
      setSearchValue(e.target.value);
    }

    return(
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={`/`}  className="navbar-brand" href="#">Anthony-Shop</Link>
              
              
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link to={`/`} className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#">Disabled</a>
                </li>
              </ul>
                <input onChange={onSearchValueChange} value={searchValue} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <img />  
            </div>
          </nav>
    );
};

export { NavBar };

//<Link to={`/item/${product.id}`} className="btn btn-primary">View</Link>