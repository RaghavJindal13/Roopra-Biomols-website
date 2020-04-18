import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    
      <div className="footer-copyright">
        <MDBContainer fluid>
            <br></br>
          &copy; {new Date().getFullYear()} Copyright Roopra Biomols. All Rights Reserved.<br></br>

Designed by <a href="http://www.rooprabiomols.com/index.php"> Roopra Mediaworks </a>
        </MDBContainer>
        <br></br>
      </div>
    
  );
}

export default FooterPage;