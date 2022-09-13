import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <Link className="navbar-brand" to={"/"}>خانه</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className={"nav-link"} to={"/Products"}>محصولات</Link>
                    </li>
                </ul>
            </div>
            <div className={"navbar-expand-sm"}>
                <div className="input-group mx-2 w-75" dir="ltr">
      <span
          className="input-group-text btn btn-info"
          id="basic-addon1"      >
        <i className="fas fa-search"/>
      </span>
                    <input
                        dir="rtl"
                        type="text"
                        className="form-control"
                        placeholder="جستجوی محصول"
                        aria-label="Search"
                        aria-describedby="basic-addon1"
                    />
                </div>
            </div>

        </nav>
    );
};

export default Navbar;