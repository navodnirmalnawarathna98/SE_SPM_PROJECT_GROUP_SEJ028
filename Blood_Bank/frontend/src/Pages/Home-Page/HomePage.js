import React from 'react'
import img1 from '../../images/home-img/09.png'
import img2 from '../../images/home-img/10.png'
import img3 from '../../images/home-img/11.png'

import img4 from '../../images/home-img/05-donor.png'
import img5 from '../../images/home-img/06-seeker.png'
import img6 from '../../images/home-img/07-blood-bank.png'
import img7 from '../../images/home-img/08-institution.png'

import img8 from '../../images/home-img/01-blood.png'
import img9 from '../../images/home-img/02-people.png'
import img10 from '../../images/home-img/03-clock.png'
import img11 from '../../images/home-img/04-blood_bagpng.png'


import "./style.css"


const HomePage = () => {
  return (
    <div>
      {/* header section starts */}
      <header class="header">
        <a href="#" class="logo"><i class="fa-solid fa-droplet"></i> Blood Bank  </a>
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
          <input type="search" id="search-box" placeholder="search here..."></input>
          <label for="search-box" class="fas fa-search"></label>
        </form>
      </header>
      {/* header section starts */}

      {/* <!-- home section starts  --> */}
      <section class="home" id="home">
        <class class="content">
          <h3>fresh and <span>organic</span> products for your</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero nostrum veniam facere tempore nisi.</p>
          <a href="#" class="btn">shop now</a>
        </class>
      </section>
      {/* <!-- home section ends --> */}

      {/* <!-- features section starts  --> */}
      <section class="features" id="aboutus">
        <h1 class="heading"> <span>About Us</span> </h1>
        <div class="box-container">
          <div class="box">
             <img src={img1} alt=""/>
            <h3>About Blood</h3>
            <p>The ABO blood group system was discovered by Karl Landsteiner in 1900.
              46 years later (1946) the Blood Transfusion Service was formed.
              In 1996 the National Blood Service was formed to collect and provide blood supplies for all the hospitals.</p>
            <a href="#" class="btn">read more</a>
          </div>
          <div class="box">
          <img src={img2} alt=""/>
            <h3>Components of Blood</h3>
            <p>When we receive your donation we separate it into individual components by spinning it in a machine called a centrifuge. The individual components are red cells,
              white cells, platelets and plasma. These can all be put to different uses.
            </p>
            <br />
            <a href="#" class="btn">read more</a>
          </div>
          <div class="box">
          <img src={img3} alt=""/>
            <h3>Replace Blood</h3>
            <p>During a whole blood donation we aim to take just under a pint (about 470mls) of blood, which works out at no more than 13 per cent of your blood volume. After donation,
              your body has an amazing capacity to replace all the cells and fluids that have been lost.</p>
            <a href="#" class="btn">read more</a>
          </div>
        </div>
      </section>
      {/* <!-- features section ends --> */}

      {/* <!-- services section ends --> */}
      <section class="categories" id="services">
        <h1 class="heading"><span>Services</span> </h1>
        <div class="box-container">
          <div class="box">
            <h3>Donor</h3>
            <img src={img4} alt=""/>
            <p>upto 45% off</p>
            <a href="/doner" class="btn">Doner (Mohan)</a> <br />
          </div>
          <div class="box">
            <h3>Seeker</h3>
            <img src={img5} alt=""/>
            <p>upto 45% off</p>
            <a href="/seeker" class="btn">Seeker (Tharindu)</a> <br />
          </div>
          <div class="box">
            <h3>Blood Bank</h3>
            <img src={img6} alt=""/>
            <p>upto 45% off</p>
            <a href="/admindashboard" class="btn">Admin Dashboard (Dil)</a> <br />
          </div>
          <div class="box">
            <h3>Institutions</h3>
            <img src={img7} alt=""/>
            <p>upto 45% off</p>
            <a href="/reqtable"  class="btn">Institution (Nova)</a> <br />
            <a href="/institution" class="btn">Register </a>
          
          </div>
        </div>
      </section>
      {/* <!-- services section ends --> */}

      {/* <!-- blogs section starts  --> */}
      <section class="blogs" id="contactus">

        <h1 class="heading"><span>Contact Us</span> </h1>
        <div class="contain">

          <div class="wrapper">

            <div class="form">
              <h4>GET IN TOUCH</h4>
              <h2 class="form-headline">Send us a message</h2>
              <form id="submit-form" action="">
                <p>
                  <input id="name" class="form-input" type="text" placeholder="Your Name*" />
                  <small class="name-error"></small>
                </p>
                <p>
                  <input id="email" class="form-input" type="email" placeholder="Your Email*" />
                  <small class="name-error"></small>
                </p>
                <p class="full-width">
                  <input id="company-name" class="form-input" type="text" placeholder="Company Name*" required />
                  <small></small>
                </p>
                <p class="full-width">
                  <textarea minlength="20" id="message" cols="30" rows="7" placeholder="Your Message*" required></textarea>
                  <small></small>
                </p>
                <p class="full-width">
                  <input type="checkbox" id="checkbox" name="checkbox" checked /> Yes, I would like to receive communications by call / email about Company's services.
                </p>
                <p class="full-width">
                  <input type="submit" class="submit-btn" value="Submit" />
                </p>
              </form>
            </div>

            <div class="contacts contact-wrapper">

              <ul>
                <li>We've driven online revenues of over <span class="highlight-text-grey">$2
                  billion</span> for our clients. Ready to know
                  how we can help you?</li>
                <span class="hightlight-contact-info">
                  <li class="email-info"><i class="fa fa-envelope" aria-hidden="true"></i> info@demo.com</li>
                  <li><i class="fa fa-phone" aria-hidden="true"></i> <span class="highlight-text">+91 11 1111 2900</span></li>
                </span>
              </ul>
            </div>
          </div>
        </div>

      </section>
      {/* <!-- blogs section ends --> */}

      {/* <!-- Main section ends --> */}
      <section class="categories" id="main">

        <h1 class="heading"><span>Main Information</span> </h1>

        <div class="box-container">

          <div class="box">
            <img src={img8} alt="" />
            <h3>100</h3>
            <p>100% of Sri Lankan blood donors are voluntory non rermunerated donors.</p>
            {/* <!-- <a href="#" class="btn">shop now</a> --> */}
          </div>

          <div class="box">
            <img src={img9} alt="" />
            <h3>3</h3>
            <p>Your precious donation of blood can save as many as 3 lives.</p>
            {/* <!-- <a href="#" class="btn">shop now</a> --> */}
          </div>

          <div class="box">
            <img src={img10} alt="" />
            <h3>4</h3>
            <p>You can donate blood in every 4 months time</p>
            {/* <!-- <a href="#" class="btn">shop now</a> --> */}
          </div>

          <div class="box">
            <img src={img11} alt="" />
            <h3>14th JUNE</h3>
            <p>World Blood Donor Day.</p>
            {/* <!-- <a href="#" class="btn">shop now</a> --> */}
          </div>

        </div>

      </section>
      {/* <!-- Main section ends --> */}

      {/* <!-- footer section starts  --> */}
      <section class="footer">

        <div class="box-container">

          <div class="box">
            <h3>contact info</h3>
            <a href="#" class="links"> <i class="fas fa-phone"></i> 0702298135 </a>
            <a href="#" class="links"> <i class="fas fa-phone"></i> 0767419179 </a>
            <a href="#" class="links"> <i class="fas fa-envelope"></i> bloodbank@gmail.com </a>
            <a href="#" class="links"> <i class="fas fa-map-marker-alt"></i>Colombo 3 </a>
          </div>

          <div class="box">
            <h3>quick links</h3>
            <a href="#" class="links"> <i class="fas fa-arrow-right"></i> home </a>
            <a href="#aboutus" class="links"> <i class="fas fa-arrow-right"></i> About Us </a>
            <a href="#services" class="links"> <i class="fas fa-arrow-right"></i> Services </a>
            <a href="#contactus" class="links"> <i class="fas fa-arrow-right"></i> Contact Us </a>
          </div>

          <div class="box">
            <div class="share">
              <a href="#" class="fab fa-facebook-f"></a>
              <a href="#" class="fab fa-twitter"></a>
              <a href="#" class="fab fa-instagram"></a>
              <a href="#" class="fab fa-linkedin"></a>
            </div>
          </div>
        </div>

        <div class="credit"> created by <span> @SEJ028 </span> | all rights reserved </div>

      </section>
      {/* <!-- footer section ends --> */}

    </div>
  )
}

export default HomePage