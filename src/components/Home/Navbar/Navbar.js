import React from 'react';

const Navbar = () => {
  return (

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link ms-5" aria-current="page" href="1">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ms-5" href="1">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ms-5" href="1">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ms-5" href="1">Reviews</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ms-5" href="1">Blogs</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ms-5" href="1">Contact Us</a>
            </li>
          </ul>

        </div>
        </div>
    </nav>
  );
};

export default Navbar;