import React from "react";
function Header(){
    return(
        <>
          <div>
          <ul className="menu">
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>
            <input className="btn-submit" type="submit"/>
            </li>
          </ul>
          </div>  
        </>
    )
}
export default Header;