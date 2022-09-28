import React from "react";

const Header = () => {
  return (
    <header class="header">
      <a href="#" class="logo">
        <i class="fa-solid fa-droplet"></i> Blood Bank{" "}
      </a>
      <nav1 class="navbar">
        <a href="#home">home</a>
        <a href="#aboutus">About Us</a>
        <a href="#services">Services</a>
        <a href="#contactus">Contact Us</a>
        <a href="#main">Main Information</a>
      </nav1>
      <div class="icons">
        <div class="fas fa-bars" id="menu-btn"></div>
        <div class="fas fa-search" id="search-btn"></div>
      </div>

      <form action="" class="search-form">
        <input
          type="search"
          id="search-box"
          placeholder="search here..."
        ></input>
        <label for="search-box" class="fas fa-search"></label>
      </form>
    </header>
  );
};

export default Header;
