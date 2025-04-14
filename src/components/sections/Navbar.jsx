import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { PATHS } from "../../routes/paths";
import { BiLink } from "react-icons/bi";
import Optionals from "../common/Optionals";
// import Contact from "../models/Contact";

const menuItems = [
  { type: "link", label: "Mission Statement", to: "mission" },
  { type: "link", label: "How it works", to: "how-it-works" },
  { type: "link", label: "Our Services", to: "services" },
  { type: "link", label: "Our Partners", to: "partners" },
  { type: "link", label: "CTA", to: "cta" },
];

const menuItemsAbout = [
  { type: "link", label: "About us", to: "aboutus" },
  { type: "link", label: "Meet Our Team", to: "team" },
  { type: "link", label: "Testimonials", to: "testimonials" },
  { type: "link", label: "Vision and Mission", to: "vision-mission" },
];

const menuItemsService = [
  { type: "link", label: "Consultancy", to: "consultancy" },
  { type: "link", label: "Get Records", to: "records" },
];

const menuItemsContacts = [
  { type: "link", label: "FAQs", to: "faqs" },
  { type: "link", label: "Contact Form", to: "contacts" },
  { type: "link", label: "News Letter", to: "news-letter" },
  { type: "link", label: "Social Links", to: "social-links" },
];

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const openForm = () => {
    setShowForm(true);
    setMenu(false);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <div className=" sticky w-full top-0 z-10 text-white">
      <div>
        <div className=" flex flex-row justify-between p-5 md:px-32 px-5 bg-backgroundColor shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          <div className=" flex flex-row items-center cursor-pointer">
            <Link to={PATHS.HOME}>
              <h1 className=" text-2xl font-semibold">GolvHealth</h1>
            </Link>
          </div>

          <nav className=" hidden lg:flex flex-row items-center text-lg font-medium gap-8">
            <Link
              to={PATHS.HOME}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              <Optionals title="Home" items={menuItems} />
            </Link>
            <Link
              to={PATHS.ABOUT}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              <Optionals title="About us" items={menuItemsAbout} />
            </Link>
            <Link
              to={PATHS.SERVICES}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              <Optionals title="Services" items={menuItemsService} />
            </Link>
            {/* <Link
              to="doctors"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Doctors
            </Link> */}
            <Link
              to={PATHS.BLOG}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Blog
            </Link>
          </nav>

          <div className=" hidden lg:flex">
            <Link
              className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-white hover:text-hoverColor transition duration-300 ease-in-out"
              to={PATHS.CONTACT}
            >
              <Optionals title="Contacts" items={menuItemsContacts} />
            </Link>
          </div>

          {/* {showForm && <Contact closeForm={closeForm} />} */}

          <div className=" lg:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={28} onClick={handleChange} />
            ) : (
              <AiOutlineMenu size={28} onClick={handleChange} />
            )}
          </div>
        </div>

        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-backgroundColor text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link
            to={PATHS.HOME}
            className=" hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to={PATHS.ABOUT}
            className=" hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            About Us
          </Link>
          <Link
            to={PATHS.SERVICES}
            className=" hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Services
          </Link>
          {/*  <Link
            to="doctors"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Doctors
          </Link> */}
          <Link
            to={PATHS.BLOG}
            className=" hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Blog
          </Link>

          <div className=" lg:hidden">
            <Link
              className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
              to={PATHS.CONTACT}
              onClick={closeMenu}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
