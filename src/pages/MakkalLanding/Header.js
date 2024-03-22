import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Style from "./Header.module.css";
import Govt_Logo from "../../assets/images/logo.png";
import GlobeIcon from "../../icons/GlobeIcon";
import UserIcon from "../../assets/images/svg/user-circle-icon.svg";
import LogoImage2 from "../../assets/images/TNeGAlogo-new.png";
import Banner from "./Banner";
import vectorLogo from "../../assets/images/Vector.png";
import ServicesProvided from "./ServicesProvided/";
import AboutPortal from "./AboutPortal";
import AboutCollage from "../../assets/images/about-collage.png";
import Disclaimer from "../NewDashboard/Disclaimer";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <Navbar sticky="top" className={Style.background} expand="lg">
        <Container fluid>
          <img
            src={Govt_Logo}
            width="30"
            height="30"
            className={[Style.logo, "d-inline-block align-top"].join(" ")}
            alt="Makkal Sevai logo"
          />
          <Navbar.Brand href="#" className={Style.text}>
            Makkal Sevai Portal
          </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
          {/* <Navbar.Collapse id="navbarScroll"> */}
          {/* <Nav
            className="ml-auto d-flex "

          >
            <div class="d-flex">
            <NavDropdown title="Dropdown" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}

          <NavDropdown
            className={[Style.dropdown, "ml-auto"].join("")}
            title="Language"
            id="nav-dropdown"
          >
            <NavDropdown.Item eventKey="4.1">English</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Tamil</NavDropdown.Item>
          </NavDropdown>
          <Link to="/login">
            <img
              src={vectorLogo}
              alt="headerimage"
              className={Style.logoRight}
              width={20}
            />
          </Link>
          <img
            src={LogoImage2}
            alt="headerimage"
            className={Style.logoRight}
            width={30}
          />

          {/* </div> */}
          {/* </Nav> */}
          {/* </Navbar.Collapse> */}
        </Container>
        {/* </Navbar> */}
      </Navbar>
      <section className={[Style.wrapper, "font-avenir"].join(" ")}>
        <Banner />
      </section>
      <section className={[Style.newsUpdate, "font-avenir"].join(" ")}>
        <NewsUpdate /> 
      </section>
      <section className={[Style.helplayout, "font-avenir"].join(" ")}>
        /* <Help />
      </section>
      {/* <section className={Style.helplayout}>
        <Help/>
       </section> */}
      <ServicesProvided />
      <AboutPortal />
      <img src={AboutCollage} alt="collage-img" />
      <Disclaimer />
    </>
  );
}

export default Header;
