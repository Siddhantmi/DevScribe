
//Header Navbar component
class Navbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
      <nav class="navbar-custom navbar navbar-expand-lg fixed-top" style="position: fixed; z-index: 5;">
      <div class="container-fluid">
          <a class="navbar-brand" href="#">Dev Scribe</a>
          <button class="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
              aria-expanded="false" aria-label="Toggle navigation">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#">About</a>
                  </li>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#">HTML</a>
                  </li>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#">CSS</a>
                  </li>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#">JavaScript</a>
                  </li>

                  <li class="nav-item">
                      <a class="nav-link" href="#">Webdev</a>
                  </li>

                  <li class="nav-item">
                      <a class="nav-link" href="#">Code Editor</a>
                  </li>


              </ul>

          </div>
      </div>
  </nav>      
      `;
    }
}

customElements.define('navbar-component', Navbar);










//Left Side bar component
class Sidebar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
      <div class="left-side-bar col-lg-2 col-md-2 px-1 position-fixed " id="leftSideBar" id="sticky-sidebar" style="margin-left: -11px;">
      <h2 class="sticky-top ">HTML
          Tutorial</h2>
      <div class="nav scrollbar flex-column flex-nowrap vh-100 overflow-auto text-white p-2">
        <div class="sidebar-part" style="margin-top: 0rem;">
            <h3>Basic of HTML</h3>
            <a href="./" class="nav-link">HTML Tutorials</a>
            <a href="./" class="nav-link">HTML Tutorials</a>
            <a href="./" class="nav-link">HTML Tutorials</a>
            <a href="./" class="nav-link">Link</a>
            <a href="./" class="nav-link">Link</a>
            <a href="./" class="nav-link">Link</a>
            <a href="./" class="nav-link">Link</a>
        </div>
        <div class="sidebar-part" >
            <h3>HTML Forms</h3>
            <a href="./" class="nav-link">HTML Tutorials</a>
            <a href="./" class="nav-link">HTML Tutorials</a>
            <a href="./" class="nav-link">HTML Tutorials</a>
            <a href="./" class="nav-link">Link</a>
            <a href="./" class="nav-link">Link</a>
            <a href="./" class="nav-link">Link</a>
            <a href="./" class="nav-link">Link</a>
        </div>
        <div class="sidebar-part" style="margin-bottom:10rem;">
            <h3>Basic of HTML</h3>
            <a href="./" class="nav-link">HTML Tutorials</a>
            <a href="./" class="nav-link">HTML Tutorials</a>
            <a href="./" class="nav-link">HTML Tutorials</a>
            <a href="./" class="nav-link">Link</a>
            <a href="./" class="nav-link">Link</a>
            <a href="./" class="nav-link">Link</a>
            <a href="./" class="nav-link">Link</a>
         
        </div>

          
          

      </div>
  </div>
      `;
    }
}

customElements.define('sidebar-component', Sidebar);










//Footer
class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
      <div class="my-5 offset-lg-2">
      <!-- Footer -->
      <footer class="page-footer text-center text-lg-start text-white" style="">
          <!-- Grid container -->
          <div class="container p-4 pb-0">
              <!-- Section: Links -->
              <section class="">
                  <!--Grid row-->
                  <div class="row">
                      <!-- Grid column -->
                      <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                          <h6 class="text-uppercase mb-4 font-weight-bold">
                              Dev Scribe
                          </h6>
                          <p>
                              We are on a mission to provide every content to you like you are talking to one of your
                              friend, bookish content is filled every where.
                          </p>
                      </div>
                      <!-- Grid column -->

                      <hr class="w-100 clearfix d-md-none" />

                      <!-- Grid column -->
                      <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                          <h6 class="text-uppercase mb-4 font-weight-bold">Free Courses</h6>
                          <p>
                              <a class="text-white">HTML</a>
                          </p>
                          <p>
                              <a class="text-white">CSS</a>
                          </p>
                          <p>
                              <a class="text-white">Javascript</a>
                          </p>
                          <p>
                              <a class="text-white">WebDev Projects</a>
                          </p>
                      </div>
                      <!-- Grid column -->

                      <hr class="w-100 clearfix d-md-none" />

                      <!-- Grid column -->
                      <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                          <h6 class="text-uppercase mb-4 font-weight-bold">
                              Useful links
                          </h6>
                          <p>
                              <a class="text-white" href="/index.html" >Home</a>
                          </p>
                          <p>
                              <a class="text-white">Code Editor</a>
                          </p>
                          <p>
                              <a class="text-white">About</a>
                          </p>
                          <p>
                              <a class="text-white">Privacy Policy</a>
                          </p>
                      </div>

                      <!-- Grid column -->
                      <hr class="w-100 clearfix d-md-none" />

                      <!-- Grid column -->
                      <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                          <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
                        <!--  <p><i class="fas fa-home mr-3"></i> New York, NY 10012, US</p> -->
                          <p><i class="fas fa-envelope mr-3"></i> iamdevscriber@gmail.com</p>
                      <!--    <p><i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>  -->
                      <!--    <p><i class="fas fa-print mr-3"></i> + 01 234 567 89</p> -->
                      </div>
                      <!-- Grid column -->
                  </div>
                  <!--Grid row-->
              </section>
              <!-- Section: Links -->

              <hr class="my-3">

              <!-- Section: Copyright -->
              <section class="p-3 pt-0">
                  <div class="row d-flex align-items-center">
                      <!-- Grid column -->
                      <div class="col-md-7 col-lg-8 text-center text-md-start">
                          <!-- Copyright -->
                          <div class="p-3">
                              © 2022-23 Copyright:
                              <a class="text-white" href="https://devscribe.me/">Devscribe.me</a>
                          </div>
                          <!-- Copyright -->
                      </div>
                      <!-- Grid column -->

                      <!-- Grid column -->
                      <div class="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                          <!-- Facebook -->
                          <a class="btn btn-outline-light btn-floating m-1" class="text-white" role="button"><i
                                  class="fab fa-facebook-f"></i></a>

                          <!-- Twitter -->
                          <a class="btn btn-outline-light btn-floating m-1" class="text-white" role="button"><i
                                  class="fab fa-youtube"></i></a>

                          <!-- Google -->
                          <a class="btn btn-outline-light btn-floating m-1" class="text-white" role="button"><i
                                  class="fab fa-google"></i></a>

                          <!-- Instagram -->
                          <a class="btn btn-outline-light btn-floating m-1" class="text-white" role="button"><i
                                  class="fab fa-instagram"></i></a>
                      </div>
                      <!-- Grid column -->
                  </div>
              </section>
              <!-- Section: Copyright -->
          </div>
          <!-- Grid container -->
      </footer>
      <!-- Footer -->
  </div>
  <!-- End of .container -->
      `;
    }
}

customElements.define('footer-component', Footer);