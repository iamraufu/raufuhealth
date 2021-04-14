import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (

    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div  class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link color ms-5" aria-current="page" href="/home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link color ms-5" href="/about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link color ms-5" href="/services">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link color ms-5" href="/reviews">Reviews</a>
            </li>
            <li class="nav-item">
              <a class="nav-link color ms-5" href="/blogs">Blogs</a>
            </li>
            <li class="nav-item">
              <a class="nav-link color ms-5" href="/contact">Contact Us</a>
            </li>
          </ul>

        </div>
        </div>
    </nav>
  );
};

export default Navbar;