const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World this is Vikhyat Singh');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Usability Hub</title>
      <script src="https://kit.fontawesome.com/8d39c69c33.js" crossorigin="anonymous"></script>
      <link rel="stylesheet" href="style.css">
      <link rel="stylesheet" href="media-qureies.css">
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet">
      <style>
          /* Resets */
  
          * {
              margin: 0px;
              padding: 0px;
              box-sizing: border-box;
  
  
          }
  
          :root {
              --primary-text-color: #183b56;
              --secondary-text-color: #577592;
              --accent-color: #2294ed;
              --accent-color-dark: #1d69a3;
              --padding-inline-section: 20px;
          }
  
          body {
              font-family: 'Poopins', sans-serif;
              color: var(--primary-text-color);
              background-color: rgba(0, 255, 255, 0.173)
          }
  
          h1 {
              font-size: 3rem;
  
          }
  
          h2 {
              font-size: 2rem;
          }
  
          h3 {
              font-size: 1.3rem;
          }
  
          p {
              font-family: 'Roboto', sans-serif;
              font-size: 1.25rem;
              color: var(--secondary-text-color);
              line-height: 1.8rem;
          }
  
          a {
              text-decoration: none;
              display: inline-block;
  
          }
  
          ul {
              list-style: none;
          }
  
  
  
  
  
          /* Utilites Classes */
  
          .flex {
              display: flex;
              align-items: center;
          }
  
          .small-bold-text {
              font-size: 1rem;
              font-weight: 700;
          }
  
          .container {
              max-width: 1120px;
              margin-inline: auto;
              padding-inline: var(--padding-inline-section);
              overflow: hidden;
  
  
          }
  
          .hover-links {
              color: var(--primary-text-color);
              transition: 0.2s ease-out;
          }
  
          .hover-links:hover {
              color: var(--accent-color);
          }
  
          .primary-button {
              background-color: var(--accent-color);
              border-radius: 6px;
              font-weight: 700;
              color: white !important;
              padding: 12px 24px;
              box-shadow: 0px 0px 2px var(--secondary-text-color);
              transition: 0.2 ease-out;
          }
  
          .primary-button:hover {
              background-color: var(--accent-color-dark);
          }
  
          .secondary-button {
              border: 0.5px solid var(--secondary-text-color);
              border-radius: 6px;
              font-weight: 700;
              padding: 12px 24px;
              color: 0px 0px 2px var(--secondary-text-color);
              transition: 0.2 ease-out;
  
          }
  
          .secondary-button:hover {
              border-color: var(--accent-color-dark);
              color: var(--accent-color) !important;
          }
  
  
  
  
  
          /* Main Content */
  
  
          /* Top Banner */
          .top-banner {
              background-color: #4fb3d4;
          }
  
          .banner-text {
              color: white;
              padding: 15px 30px;
              text-align: center;
          }
  
  
          /* Main Navigation */
          .main-nav {
              margin-top: 20px;
              justify-content: space-between;
              position: relative;
          }
  
          .company-logo img {
              width: 100px;
  
          }
  
          .nav-links {
              flex-basis: 730px;
          }
  
          .nav-links ul {
              justify-content: end;
              gap: 40px;
  
          }
  
          .nav-toggle {
              display: none;
          }
  
  
  
  
          /* Hearder  */
  
          header {
              padding: 50px var(--padding-inline-section);
  
          }
  
          .header-section {
              justify-content: center;
              gap: 50px;
          }
  
          .header-left {
              max-width: 40vw;
          }
  
          .header-left h1 {
              margin-top: 20px;
          }
  
          .get-started-btn {
              margin-top: 20px;
          }
  
          .header-right img {
              width: 100%;
  
          }
  
  
          .companies-header {
              text-align: center;
              margin-block: 30px;
              color: var(--primary-text-color);
          }
  
          .logos {
              justify-content: space-evenly;
              flex-wrap: wrap;
              gap: 20px;
          }
  
          .logos img {
              width: 100px;
  
          }
  
          #microsoft {
              width: 250px;
          }
  
  
          /* Features Section */
  
          .features-section {
              padding: 0px var(--padding-inline-section);
              padding-top: 80px;
  
          }
  
          .features-header {
              text-align: center;
              margin-bottom: 40px;
          }
  
          .features-header h2 {
              margin-bottom: 20px;
          }
  
          .features-area {
              flex-wrap: wrap;
              justify-content: space-between;
              gap: 20px;
              margin-top: 20px;
          }
  
          .features-card {
              flex-direction: column;
              gap: 5px;
              max-width: 30%;
              text-align: center;
              margin-bottom: 20px;
          }
  
  
  
  
          /* Big feature section */
  
          .big-feature-section {
              padding: 30px var(--padding-inline-section) 20px;
          }
  
          .big-feature-section {
              gap: 30px;
  
          }
  
          .box {
              border: 2px solid grey;
              border-radius: 100px;
              background-color: rgba(128, 128, 128, 0.33);
          }
  
          .feature-img img {
              width: 100%;
              border-radius: 100px;
          }
  
          .feature-desc {
              flex-direction: column;
              align-items: flex-start;
          }
  
  
          /* Examples section */
  
          .examples-section {
              text-align: center;
              padding-top: 80px var(--padding-inline-section);
          }
  
          .examples-section h2 {
              padding-bottom: 20px;
          }
  
          .examples-header {
              flex-direction: column;
              gap: 20px;
              text-align: center;
          }
  
          .examples-area {
              justify-content: space-between;
              margin-block: 30px;
              flex-wrap: wrap;
          }
  
          .examples-card {
              width: 23%;
              position: relative;
              height: 300px;
  
          }
  
          .examples-card:hover {
              box-shadow: 0px 0px 10px #888;
  
  
          }
  
          .card-text {
              position: absolute;
              bottom: 20px;
              left: 20px;
              right: 20px;
              color: rgb(255, 255, 255);
  
          }
  
          #bg1::before {
              content: "";
              background-color: black;
              background-image: url(./desk-g6bea6e8c9_1280.jpg);
              background-size: cover;
              position: absolute;
              top: 0px;
              left: 0px;
              width: 100%;
              height: 100%;
              z-index: -1;
              opacity: 0.8;
          }
  
          #bg2::before {
              content: "";
              background-color: black;
              background-image: url(./student-g22d46d32c_1280.jpg);
              background-size: cover;
              position: absolute;
              top: 0px;
              left: 0px;
              width: 100%;
              height: 100%;
              z-index: -1;
              opacity: 0.8;
          }
  
          #bg3::before {
              content: "";
              background-color: black;
              background-image: url(./job-gd6e1c59c0_1280.jpg);
              background-size: cover;
              position: absolute;
              top: 0px;
              left: 0px;
              width: 100%;
              height: 100%;
              z-index: -1;
              opacity: 0.8;
          }
  
          #bg4::before {
              content: "";
              background-color: black;
              background-image: url(./office-g47cd075b9_1280.jpg);
              background-size: cover;
              position: absolute;
              top: 0px;
              left: 0px;
              width: 100%;
              height: 100%;
              z-index: -1;
              opacity: 0.8;
          }
  
  
          /* Cta Section */
  
          .cta-section {
              background-color: #183b56;
              padding: 120px var(--padding-inline-section) 80px;
  
          }
  
          .cta-section-container {
              flex-direction: column;
              gap: 30px;
              color: white;
          }
  
          .cta-section-container p {
              margin-top: 20px;
              color: white;
          }
  
  
          /* Footer Section */
          footer {
              padding: 80px 0px;
              background-color: #ebf2fa;
          }
  
          .link-coloumn {
              flex-direction: column;
              gap: 20px;
  
          }
  
          .footer-container {
              align-items: flex-start;
              justify-content: space-between;
          }
  
  
  
          /* Sub Footer */
  
          .subfooter {
              background-color: #b9cde4;
              padding: var(--padding-inline-section);
  
          }
  
          .subfooter-container {
              justify-content: center;
              gap: 30px;
  
              /* Media Quries */
  
  
  
              /* First Break Point  */
          }
  
          @media screen and (max-width:991px) {
              h3 {
                  font-size: 1.1rem;
              }
  
              h4 {
                  font-size: 0.8rem;
              }
  
              p {
                  font-size: 1.1rem;
              }
  
              .nav-toggle {
                  display: block;
                  margin-right: 20px;
  
  
              }
  
              .nav-links {
                  position: absolute;
                  background-color: rgb(0, 255, 255);
                  left: -100%;
                  width: 100%;
                  top: 100%;
                  padding-block: 20px;
                  transition: 0.2s ease-in-out;
  
  
              }
  
              .nav-links.active {
                  left: 0px;
  
  
  
              }
  
              .main-nav {
                  overflow: initial;
              }
  
              .nav-links ul {
                  flex-direction: column;
              }
  
              .examples-card {
                  width: calc(50% - 10px);
                  height: 180px;
  
  
              }
  
              .examples-area {
                  gap: 20px;
              }
  
              .cta-section {
  
                  padding-block: 80px;
  
              }
  
  
          }
  
  
          /* Second Break Point */
  
  
          @media screen and (max-width:767px) {
  
              .header-section {
                  flex-direction: column-reverse;
  
              }
  
              .header-left {
                  max-width: 100vw;
                  text-align: center;
              }
  
              .primary-button {
                  width: 100vw;
                  text-align: center;
              }
  
              .features-card {
                  min-width: calc(50% - 10px);
              }
  
              .big-feature-section {
                  flex-direction: column;
              }
  
              #box1 {
                  flex-direction: column-reverse;
              }
  
              .footer-container {
                  flex-direction: column;
                  gap: 40px;
                  align-items: center;
                  text-align: center
              }
  
              .feature-desc-flex p {
                  text-align: center;
  
              }
          }
  
  
  
          /* Third break */
  
          @media screen and (max-width:479px) {
              :root {
                  --padding-inline-section: 10px;
              }
  
              h1 {
                  font-size: 2rem;
  
              }
  
              h2 {
                  font-size: 1.5rem;
              }
  
              h3 {
                  font-size: 1.2rem;
              }
  
              p {
                  font-size: 1rem;
              }
  
              .features-card {
                  min-width: 100%;
  
              }
  
              .logos img {
                  width: 50px;
  
              }
  
              #microsoft {
                  width: 150px;
              }
  
              .examples-card {
                  width: 100%;
                  height: 180px;
  
  
              }
  
  
  
          }
      </style>
  
  </head>
  
  <body>
      <!-- top-banner -->
  
      <div class="top-banner">
          <div class="container">
  
              <div class="small-bold-text banner-text">🫣 New to Usability Hub: Open and Closed card sorting</div>
          </div>
      </div>
  
  
      <nav>
          <div class="container main-nav flex">
              <a href="#" class="company-logo">
                  <img src="../usabiity website/images/corporate-g40af3b5d1_640.png" alt="company logo">
              </a>
  
              <div class="nav-links active" id="nav-links">
                  <ul class="flex">
                      <li><a href="#" class="hover-links">Products</a></li>
                      <li><a href="#" class="hover-links">Customers</a></li>
                      <li><a href="#" class="hover-links">Pricing</a></li>
                      <li><a href="#" class="hover-links">Resource</a></li>
                      <li><a href="#" class="hover-links secondary-button">Sign In</a></li>
                      <li><a href="#" class="hover-links primary-button">Sign Up</a></li>
                  </ul>
              </div>
              <a href="#" class="nav-toggle hover-links" id="nav-toggle">
                  <i class="fa-solid fa-bars"></i> </a>
  
          </div>
      </nav>
  
      <header>
          <div class="container header-section flex">
              <div class="header-left">
                  <h1>Design Confidently</h1>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur sit reprehenderit odit ullam
                      fugiat reiciendis? Nobis, deleniti numquam.</p>
                  <a href="#" class="primary-button get-started-btn">Get Started</a>
              </div>
              <div class="header-right">
                  <img src="../usabiity website/images/meeting-gc911905fc_1280.png" alt="Meeting " srcset="">
              </div>
          </div>
      </header>
  
      <section class="companies-section">
          <div class="container">
              <div class="small-bold-text companies-header">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nulla quisquam.
              </div>
              <div class="logos flex">
                  <img src="../usabiity website/images/whatsapp-g9e067ebf8_640.png" alt="whatsapp">
                  <img src="../usabiity website/images/google-g30041c982_640.png" alt="google">
                  <img src="../usabiity website/images/microsoft-g0f6a1824b_640.png" alt="microsoft" id="microsoft">
                  <img src="../usabiity website/images/instagram-g134c68482_640.png" alt="instagram">
  
              </div>
          </div>
      </section>
  
      <section class="features-section">
          <div class="container">
              <div class="features-header">
                  <h2>Your user research Swiss Army Knife</h2>
                  <a href="#" class="secondary-button">See all feature <i class="fa-solid fa-right-long"></i></a>
              </div>
              <div class="features-area flex">
                  <div class="features-card flex">
                      <h3>Cards Sorting</h3>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, ullam.</p>
                      <a href="#" class="secondary-button">Learn More <i class="fa-solid fa-right-long"></i></a>
  
                  </div>
                  <div class="features-card flex">
                      <h3>Prototype tests</h3>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, ullam.</p>
                      <a href="#" class="secondary-button">Learn More <i class="fa-solid fa-right-long"></i></a>
  
                  </div>
                  <div class="features-card flex">
                      <h3>First Click tests</h3>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, ullam.</p>
                      <a href="#" class="secondary-button">Learn More <i class="fa-solid fa-right-long"></i></a>
                  </div>
  
                  <div class="features-card flex">
                      <h3>Design Surveys</h3>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, ullam.</p>
                      <a href="#" class="secondary-button">Learn More <i class="fa-solid fa-right-long"></i></a>
                  </div>
  
                  <div class="features-card flex">
                      <h3>Preference tests</h3>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, ullam.</p>
                      <a href="#" class="secondary-button">Learn More <i class="fa-solid fa-right-long"></i></a>
                  </div>
  
                  <div class="features-card flex">
                      <h3>Five second tests</h3>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, ullam.</p>
                      <a href="#" class="secondary-button">Learn More <i class="fa-solid fa-right-long"></i></a>
  
                  </div>
              </div>
          </div>
      </section>
  
      <section class="big-feature-section">
          <div class="container flex  big-feature-section box">
              <div class="feature-img">
                  <img src="../usabiity website/images/man-g48210519b_1280.png" alt="man">
              </div>
              <div class="feature-desc-flex">
                  <h4>
                      Effortless validation for
                  </h4>
                  <h3>Design Professionals</h3>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, consequuntur.
  
                  </p>
              </div>
          </div>
      </section>
      <section class="big-feature-section">
          <div class="container flex  big-feature-section box" id="box1">
              <div class="feature-desc-flex">
                  <h4>
                      Effortless validation for
                  </h4>
                  <h3>Design Professionals</h3>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, consequuntur.
  
                  </p>
              </div>
              <div class="feature-img">
                  <img src="../usabiity website/images/business-g719441c78_1280.png" alt="man">
              </div>
          </div>
      </section>
      <section class="big-feature-section">
          <div class="container flex  big-feature-section box">
              <div class="feature-img">
                  <img src="../usabiity website/images/presentation-g75079e68f_1280.png" alt="man">
              </div>
              <div class="feature-desc-flex">
                  <h4>
                      Effortless validation for
                  </h4>
                  <h3>Design Professionals</h3>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, consequuntur.
  
                  </p>
              </div>
          </div>
      </section>
  
  
      <section class="examples-section">
          <div class="container ">
              <div class="examples-header flex">
                  <h2 class="examples-heading-text">One plateform, endless possibilites</h2>
                  <a href="#" class="secondary-button">See more examples <i class="fa-solid fa-right-long"></i></a>
  
              </div>
              <div class="examples-area flex">
                  <a href="#" class="examples-card" id="bg1">
                      <h4 class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ipsam
                          deleniti dolorum?</h4>
                  </a>
                  <a href="#" class="examples-card" id="bg2">
                      <h4 class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum doloribus nemo
                          optio dolores fuga? Illum.</h4>
                  </a>
                  <a href="#" class="examples-card" id="bg3">
                      <h4 class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, amet?</h4>
                  </a>
                  <a href="#" class="examples-card" id="bg4">
                      <h4 class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque neque
                          blanditiis quisquam amet doloremque.</h4>
                  </a>
  
              </div>
  
  
  
  
          </div>
      </section>
  
      <section class="cta-section">
          <div class="container flex cta-section-container">
              <h2>Start texting today</h2>
              <p>Take the guess work out of design decisiom</p>
              <a href="#" class="primary-button">Get Started</a>
  
          </div>
      </section>
  
      <footer>
          <div class="container flex footer-container">
              <a href="#" class="company-logo">
                  <img src="../usabiity website/images/corporate-g40af3b5d1_640.png" alt="">
              </a>
  
              <div class="link-coloumn flex">
                  <h4>Product</h4>
                  <a href="#" class="hover-links">Overview</a>
                  <a href="#" class="hover-links">Pricing</a>
                  <a href="#" class="hover-links">Usability Hub</a>
                  <a href="#" class="hover-links">Customer Page</a>
                  <a href="#" class="hover-links">Status Page</a>
              </div>
              <div class="link-coloumn flex">
                  <h4>Methodology</h4>
                  <a href="#" class="hover-links">Overview</a>
                  <a href="#" class="hover-links">Pricing</a>
                  <a href="#" class="hover-links">Usability Hub</a>
                  <a href="#" class="hover-links">Customer Page</a>
                  <a href="#" class="hover-links">Status Page</a>
              </div>
              <div class="link-coloumn flex">
                  <h4>Resource</h4>
                  <a href="#" class="hover-links">Overview</a>
                  <a href="#" class="hover-links">Pricing</a>
                  <a href="#" class="hover-links">Usability Hub</a>
                  <a href="#" class="hover-links">Customer Page</a>
                  <a href="#" class="hover-links">Status Page</a>
              </div>
  
          </div>
      </footer>
  
      <div class="subfooter">
          <div class="container flex subfooter-container">
              </a>
              <a href="#" class="hover-links">Privacy policy</a>
              <a href="#" class="hover-links">Terms & Condition</a>
              <a href="#" class="hover-links">Security Information</a>
              <a href="#" class="hover-links"><i class="fa-brands fa-facebook"></i></a>
              <a href="#" class="hover-links"><i class="fa-brands fa-twitter"></i></a>
          </div>
      </div>
  
      <script>
          const toggleButton = document.getElementById('nav-toggle');
          const navlinks = document.getElementById('nav-links');
          toggleButton.addEventListener('click', () => { navlinks.classList.toggle('active') })
      </script>
  
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});