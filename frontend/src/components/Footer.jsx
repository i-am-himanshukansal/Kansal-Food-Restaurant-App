import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="banner">
          <div className="left"><b>HIMASHU KANSAL</b></div>
          <div className="right">
            <p>Ghaziabad(NCR), UP, India</p>
            <p>Open: 24x7</p>
          </div>
        </div>

        <div className="banner">
          <div className="left">Developed by <b>Himanshu Kansal</b></div>
          <div className="right">
            <p>
              © {new Date().getFullYear()} Himanshu Kansal. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
