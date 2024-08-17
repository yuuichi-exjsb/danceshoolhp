import React from "react";
import { Link as Scroll } from "react-scroll";

const Header = () => {
  return (
    <header>
      <div class="container">
        <nav class="gnav">
          <ul class="gnav-list">
            <li class="gnav-item">
              <Scroll to="scroll_title" smooth={true} duration={600}>
                Home
              </Scroll>
            </li>
            <li class="gnav-item">
              <Scroll to="concept" smooth={true} duration={600}>
                Concept
              </Scroll>
            </li>
            <li class="gnav-item">
              <Scroll to="schedule" smooth={true} duration={600}>
                Schedule
              </Scroll>
            </li>
            <li class="gnav-item">
              <Scroll to="instractor" smooth={true} duration={600}>
                Instractor
              </Scroll>
            </li>
            <li class="gnav-item">
              <Scroll to="fee" smooth={true} duration={600}>
                Fee
              </Scroll>
            </li>
            <li class="gnav-item">
              <Scroll to="access" smooth={true} duration={600}>
                Access
              </Scroll>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

/*
const Header = () =>{
    return <div>Header</div>
}

export default Header;
*/
