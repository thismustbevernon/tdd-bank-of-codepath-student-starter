import * as React from "react";
import FilterInput from "../FilterInput/FilterInput";
import codepath from "../../assets/codepath.svg";
import avatar from "../../assets/avatar.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

const handleOnInputChange = (change) => {
  props.setFilterInputValue(change);
};

export default function Navbar(props) {
  return (

    <nav className="navbar">
      {/* <a className="logo">Logo</a> */}
      <Logo className="Logo" path="/" />

      <div className="search">
      <FilterInput inputPutValue={props.filterInputValue} handleOnInputChange = {handleOnInputChange}/>
      </div>

      <div className="user">
        <div className="notifications">
          <i className="material-icons md-36">notifications</i>
          <div className="green-dot" />
        </div>
        <div className="avatar">
          <img src={avatar} alt="avatar" />
          <div className="info">
            <p>Person McPerson</p>
            <span>ID: 12345567</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function Logo(props) {
  return (
    <Link to={props.path} className="logo">
      <img src={codepath} alt="logo" />
    </Link>
  );
}
