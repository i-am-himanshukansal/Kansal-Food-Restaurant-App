import React from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import data from "../../restApi.json";
import Contact from "./Contact";

const Navbar = () => {
  const [show, setShow] = React.useState(false);

  return (
    <nav>
      <div className="logo">HIMANSHU KANSAL</div>

      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
            {data?.data?.[0]?.navbarLinks?.map((element) => (
                <Link
                key={element.id}
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                >
                {element.title}
                </Link>
            ))}
        </div>
        <Link to={"menu"} className="menuBtn">Our Menu</Link>
        {/* <Link to={"contact"} className="menubtn">Contact Us</Link> */}
      </div>

      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
