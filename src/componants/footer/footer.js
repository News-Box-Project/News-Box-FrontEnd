import {
  MDBCol,
  MDBContainer,
  MDBFooter,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";
import React from "react";
import { SocialIcon } from "react-social-icons";
import "./footer.css";
export default class Footer extends React.Component {
  render() {
    return (
      <MDBFooter
        bgColor="dark"
        className="text-center text-lg-start text-muted"
      >
        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4 text-white footer-heading">
                  <MDBIcon icon="gem" />
                  About Info
                </h6>
                <p className="text-white">
                  Here we are to inform you what is happening in the world
                  around you. All newly received or noteworthy information,
                  especially about recent events you will found it here.
                </p>
                <div className="d-flex gap-4">
                  <SocialIcon
                    url="https://web.facebook.com/?_rdc=1&_rdr"
                    network="facebook"
                    style={{ height: 30, width: 30 }}
                    bgColor="#FFFFFF"
                  />
                  <SocialIcon
                    url="https://www.instagram.com/?hl=en"
                    network="instagram"
                    style={{ height: 30, width: 30 }}
                    bgColor="#FFFFFF"
                  />
                  <SocialIcon
                    url="https://twitter.com/?lang=en"
                    network="twitter"
                    style={{ height: 30, width: 30 }}
                    bgColor="#FFFFFF"
                  />
                </div>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4 text-white footer-heading">
                  News Box
                </h6>
                <p>
                  <a href="/" className="text-white text-decoration-none">
                    Home
                  </a>
                </p>

                <p>
                  <a href="/about" className="text-white text-decoration-none">
                    About Us
                  </a>
                </p>

                <p>
                  <a
                    href="/contact-us"
                    className="text-white text-decoration-none"
                  >
                    Contact Us
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4 text-white footer-heading">
                  Contact
                </h6>

                <p className="text-white">
                  <MDBIcon icon="home" className="me-3" />
                  Jordan , Amman, 15
                </p>

                <p className="text-white">
                  <MDBIcon icon="envelope" className="me-3" />
                  newsbox001@gmail.com
                </p>
                <p className="text-white">
                  <MDBIcon icon="phone" className="me-3" />+ 962 795 6783 04
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div
          className="text-center p-4 text-white"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          <p>
            &copy;{new Date().getFullYear()} News Box website - All Right
            Reserved
          </p>
        </div>
      </MDBFooter>
    );
  }
}
