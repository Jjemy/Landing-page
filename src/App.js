import './App.scss';
import React from 'react';
import CountUp from 'react-countup';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import WOW from 'wowjs';
import VisibilitySensor from 'react-visibility-sensor';
import $ from 'jquery';
import "magnific-popup";
import Particles from 'react-particles-js';

class App extends React.Component {
  componentDidMount(){

    $(document).ready(function() {
      $('.video-popup').magnificPopup({ type: 'iframe' });
    });
    
    new WOW.WOW().init();

    const menuBtn = document.querySelector('.menu-btn');
    let menuOpen = false;
    menuBtn.addEventListener('click', () => {
      if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
      } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
      }
    });

    const navbar = document.querySelector('.navbar');
    const oldBrand=document.querySelector('.navbar-brand')
    const newBrand=document.createElement('img');
    const arrow=document.querySelector('.up-arrow');
    newBrand.setAttribute("src", "img/logo-2.svg");
    window.onscroll = () => {
        if (window.scrollY > 40) {
            navbar.classList.add('nav-active');
            oldBrand.replaceWith(newBrand);
            arrow.classList.add('block');
        } else {
            navbar.classList.remove('nav-active');
            newBrand.replaceWith(oldBrand);
            arrow.classList.remove('block');
        }
    };

    SwiperCore.use([Navigation, Pagination]);
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: "auto",
      loop: true,
      pagination: { el: '.swiper-pagination', clickable: true },
      spaceBetween:11,
      centeredSlides:true,
    });
  }

  render(){
  return (
    <div className="App">
      <section id='main' className="main d-flex flex-column justify-content-center align-items-center">
        <nav className="navbar navbar-expand-lg pt-4 pb-5 text-light col-sm-10 col-11 navbar-light justify-content-between align-items-start">
          <div className="container-fluid">
            <a className="navbar-brand" href="#"><img src="img/logo.svg"/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <div className="menu-btn"><div className="menu-btn-burger"></div></div>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav d-flex justify-content-between align-items-start col-lg-7 col-12">
                  <li className='nav-item'><a href='#main'>Home</a></li>
                  <li className='nav-item'><a href='#features'>Features</a></li>
                  <li className='nav-item'><a href='#about'>About</a></li>
                  <li className='nav-item'><a href='#why'>Why</a></li>
                  <li className='nav-item'><a href='#team'>Team</a></li>
                  <li className='nav-item'><a href='#blog'>Blog</a></li>
              </ul>
              </div>
              <button className='btn text-light'>Free Trial</button>
            </div>
        </nav>
        <div id='header' className='text-light d-flex flex-column justify-content-center align-items-center col-md-9 col-8'>
          <h3  className='mt-md-5 mt-0 wow fadeInUp' data-wow-duration="1s" >Basic - SaaS Landing Page</h3>   
          <h2 className='mt-0 mb-4 wow fadeInUp' data-wow-duration="1s" data-wow-delay='.2s'>Kickstart Your SaaS or App Site</h2>
          <p  className='text-center wow fadeInUp' data-wow-duration="1s" data-wow-delay='.5s'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
          <button className='btn text-light mt-4 mb-5 col-2 wow fadeInUp' data-wow-duration="1s" data-wow-delay='.8s'>Get Started</button>
          <Particles id='particles' params={{
              "particles": {
                  "number": {
                      "value": 7,
                      "density": {
                          "enable": false
                      }
                  },
                  "size": {
                      "value": 40,
                      "random": true
                  },
                  "move": {
                      "direction": "top",
                      "out_mode": "out"
                  },
                  "line_linked": {
                      "enable": false
                  }
              }
          }}/>
        </div>
        <img id='laptop' className='wow fadeIn' src="img/header-hero.png" data-wow-duration="1s" data-wow-delay='1s' alt="" />
      </section>

      <div id='brands' className="w-100 d-flex pt-5 my-5 justify-content-center flex-wrap">
        <div className='p-3 wow fadeIn' data-wow-duration='.5s'><img src="img/brand-1.png" className='p-3' alt="" /></div>
        <div className='p-3 wow fadeIn' data-wow-duration='.5s' data-wow-delay='.2s'><img src="img/brand-2.png"className='p-3' alt="" /></div>
        <div className='p-3 wow fadeIn' data-wow-duration='.5s' data-wow-delay='.3s'><img src="img/brand-3.png"className='p-3' alt="" /></div>
        <div className='p-3 wow fadeIn' data-wow-duration='.5s' data-wow-delay='.4s'><img src="img/brand-4.png"className='p-3' alt="" /></div>
        <div className='p-3 wow fadeIn' data-wow-duration='.5s' data-wow-delay='.5s'><img src="img/brand-5.png"className='p-3' alt="" /></div>
      </div>

      <section id='features' className="features d-flex flex-column justify-content-center align-items-center pt-5 bg-light w-100">
        <div id='hr' className='my-5' />
        <h3 className="title text-center mb-5">Clean and simple design,<span className='small-span'> Comes with everything you need to get started!</span></h3>
        <div className="characterstics d-flex flex-lg-row flex-column justify-content-center align-items-center">
          <div className="characterstic d-flex flex-column justify-content-center align-items-center">
            <div className='py-4'>
              <img src="img/services-shape.svg" alt="" className="down" />
              <img src="img/services-shape-1.svg" alt="" className="up" />
              <i class="lni lni-baloon"></i>
            </div>
            <h2 className='pb-4'>Clean</h2>
            <p>Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu eirmod tempor invidunt labore.</p>
            <a href="#" className='pt-4'>Learn More <i class="lni lni-chevron-right"></i></a>
          </div>
          <div className="characterstic d-flex flex-column justify-content-center align-items-center">
            <div className='py-4'>
              <img src="img/services-shape.svg" alt="" className="down" />
              <img src="img/services-shape-2.svg" alt="" className="up" />
              <i class="lni lni-cog"></i>
            </div>
            <h2 className='pb-4'>Robust</h2>
            <p>Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu eirmod tempor invidunt labore.</p>
            <a href="#" className='pt-4'>Learn More <i class="lni lni-chevron-right"></i></a>
          </div>
          <div className="characterstic d-flex flex-column justify-content-center align-items-center">
            <div className='py-4'>
              <img src="img/services-shape.svg" alt="" className="down" />
              <img src="img/services-shape-3.svg" alt="" className="up" />
              <i class="lni lni-bolt-alt"></i>
            </div>
            <h2 className='pb-4'>Powerful</h2>
            <p>Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu eirmod tempor invidunt labore.</p>
            <a href="#" className='pt-4'>Learn More <i class="lni lni-chevron-right"></i></a>
          </div>
        </div>
      </section>

      <section id='about' className="about d-flex flex-column justify-content-between align-items-center bg-light w-100">
        <div id='innerAbout1' className='innerAbout d-flex flex-lg-row flex-column justify-content-between'>
          <div  className='text-div d-flex flex-column align-items-start wow fadeInLeft' data-wow-duration='2s' data-wow-delay='1s'>
            <div id='hr' className='my-5' />
            <h1 className='mb-4'>Quick & Easy <span className='small-span'>to Use Bootstrap Template</span></h1>
            <p className='mb-5'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing.</p>
            <button className='btn'>Try it Free</button>
          </div>
          <div  className="aboutImgs wow fadeInRight" data-wow-duration='2s' data-wow-delay='1s'>
            <img className='downImg' src="img/about-shape-1.svg" alt="" />
            <img className='topImg' src="img/about1.svg" alt="" />
          </div>
        </div>
        <div id='innerAbout2' className='innerAbout d-flex flex-lg-row flex-column justify-content-between'>
          <div id='imgs2' className="aboutImgs wow fadeInRight" data-wow-duration='2s' data-wow-delay='1s'>
            <img id='downImg2' src="img/about-shape-2.svg" alt="" />
            <img id='topImg2' className='topImg' src="img/about2.svg" alt="" />
          </div>
          <div id='text2'  className='text-div d-flex flex-column align-items-start wow fadeInLeft' data-wow-duration='2s' data-wow-delay='1s'>
            <div id='hr' className='my-5' />
            <h1 className='mb-4'>Modern design <span className='small-span'>with Essential Features</span></h1>
            <p className='mb-5'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing.</p>
            <button className='btn'>Try it Free</button>
          </div>
        </div>
        <div id='innerAbout3' className='innerAbout d-flex flex-lg-row flex-column justify-content-between'>
          <div className='text-div d-flex flex-column align-items-start wow fadeInLeft' data-wow-duration='2s' data-wow-delay='1s'> 
            <div id='hr' className='my-5' />
            <h1 className='mb-4'><span className='small-span'>Crafted for</span> SaaS, App and Software Landing Page</h1>
            <p className='mb-5'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing.</p>
            <button className='btn'>Try it Free</button>
          </div>
          <div  className="aboutImgs wow fadeInRight" data-wow-duration='2s' data-wow-delay='1s'>
            <img className='downImg' src="img/about-shape-1.svg" alt="" />
            <img className='topImg' src="img/about3.svg" alt="" />
          </div>
        </div>
      </section>

      <section  id='why' className="why bg-light d-flex flex-lg-row flex-column justify-content-between align-items-center mb-5 pb-5">
        <div  data-aos-delay='400' className="video-wrapper wow fadeIn" data-wow-delay='1s'>
          <img id='dots' src="img/dots.svg" alt="" />
          <img id='aboveDots' src="img/video.png" alt="" />
          <div id='aboveDots1'className="text-center">
            <a href="https://www.youtube.com/watch?v=r44RKWyfcFw"className='video-popup'><i className="lni lni-play"/></a>
          </div>
        </div>
        <div className='text-div d-flex flex-column align-items-start wow fadeIn' data-wow-delay='1s'>
          <div id='hr' className='my-5' />
          <h1 className='mb-4'>Cool facts <span className='small-span'>about this app</span></h1>
          <p className='mb-5'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
          <div class="row no-gutters">
            <div class="col-4">
              <div class="single-counter counter-color-1 d-flex align-items-center justify-content-center">
                <div class="counter-items text-center">
                  <span class="count"><CountUp start={0} end={125} duration={3}>
                    {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start}>
                            <span ref={countUpRef} />
                        </VisibilitySensor>
                    )}</CountUp>
                    K
                  </span>
                  <p class="text">Downloads</p>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="single-counter counter-color-2 d-flex align-items-center justify-content-center">
                <div class="counter-items text-center">
                  <span class="count"><CountUp start={0} end={87} duration={3}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start}>
                          <span ref={countUpRef} />
                      </VisibilitySensor>
                  )}</CountUp>
                  K</span>
                  <p class="text">Active Users</p>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="single-counter counter-color-3 d-flex align-items-center justify-content-center">
                <div class="counter-items text-center">
                  <span class="count"><CountUp start={0} end={4.8} duration={2} decimals={1}>
                    {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start}>
                            <span ref={countUpRef} />
                        </VisibilitySensor>
                    )}</CountUp>
                    </span>
                  <p class="text">User Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='team' className="container team d-flex flex-column align-items-center bg-light">
        <div>
          <div className="row justify-content-center my-5">
            <div className="col-lg-5 d-flex flex-column align-items-center">
              <div id="hr" className='my-4'/>
              <h1 className='mb-4 text-center'><span className='small-span'>Meet Our</span> Creative Team Members</h1>
            </div>
          </div>
          <div className="row d-flex justify-content-lg-between justify-content-center">
            <div className='col-lg-4 col-md-7 col-sm-8 wow fadeIn' data-wow-duration='.5s'>
              <div className="outer-div d-flex flex-column align-items-center">
                <div className="img-container d-flex flex-column align-items-center">
                  <img src="img/team-1.png" alt="" />
                  <div className="img-icons d-flex justify-content-between w-50">
                    <i class="fab fa-facebook-f"/>
                    <i class="fab fa-twitter"/>
                    <i class="fab fa-instagram"/>
                    <i class="fab fa-linkedin"/>
                  </div>
                </div>
                <div className="text-container text-center">
                  <h3>Isabela Moreira</h3>
                  <p>Founder and CEO</p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-7 col-sm-8 wow fadeIn' data-wow-duration='.5s' data-wow-delay='.2s'>
              <div className="outer-div d-flex flex-column align-items-center">
                <div className="img-container d-flex flex-column align-items-center">
                  <img src="img/team-2.png" alt="" />
                  <div className="img-icons d-flex justify-content-between w-50">
                    <i class="fab fa-facebook-f"/>
                    <i class="fab fa-twitter"/>
                    <i class="fab fa-instagram"/>
                    <i class="fab fa-linkedin"/>
                  </div>
                </div>
                <div className="text-container text-center">
                  <h3>Elon Musk</h3>
                  <p>Sr. Software Engineer</p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-7 col-sm-8 wow fadeIn' data-wow-duration='.5s' data-wow-delay='.4s'>
              <div className="outer-div d-flex flex-column align-items-center">
                <div className="img-container d-flex flex-column align-items-center">
                  <img src="img/team-3.png" alt="" />
                  <div className="img-icons d-flex justify-content-between w-50">
                    <i class="fab fa-facebook-f"/>
                    <i class="fab fa-twitter"/>
                    <i class="fab fa-instagram"/>
                    <i class="fab fa-linkedin"/>
                  </div>
                </div>
                <div className="text-container text-center">
                  <h3>Fiona Smith</h3>
                  <p>Business Development Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="row justify-content-center my-5">
            <div className="col-lg-5 d-flex flex-column align-items-center">
              <div id="hr" className='my-4'/>
              <h1 className='mb-4 text-center w-75'>Users sharing <span className='small-span'>their experience</span></h1>
            </div>
          </div>
          <div className="row justify-content-center wow fadeInUp" data-wow-duration='1s'>
            <div class="swiper-container">
              <div class="swiper-wrapper justify-content-start">
                <div class="swiper-slide">
                  <div className='inner-swiper d-flex flex-column align-items-center'>
                    <div className="d-flex flex-row justify-content-between w-75 pt-5">
                      <i class="lni lni-quotation"/>
                      <ul className="d-flex justify-content-center">
                        <li><i class="lni lni-star-filled"/></li>
                        <li><i class="lni lni-star-filled"/></li>
                        <li><i class="lni lni-star-filled"/></li>
                        <li><i class="lni lni-star-filled"/></li>
                        <li><i class="lni lni-star-filled"/></li>
                      </ul>
                    </div>
                    <p className='py-5 w-75'>Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu eirmod tempor invidunt labore.Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu.</p>
                    <div className="slider-img d-flex justify-content-between w-75 h-25 pb-4">
                      <img className='w-25' src="img/author-1.png" alt="" />
                      <div className="text-center">
                        <h3>Fajar Siddiq</h3>
                        <p>COO,MakerFlix</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div className='inner-swiper d-flex flex-column align-items-center'>
                    <div className="d-flex flex-row justify-content-between w-75 pt-5">
                      <i class="lni lni-quotation"/>
                      <ul className="d-flex justify-content-center">
                        <li><i class="lni lni-star-filled"/></li>
                        <li><i class="lni lni-star-filled"/></li>
                        <li><i class="lni lni-star-filled"/></li>
                        <li><i class="lni lni-star-filled"/></li>
                        <li><i class="lni lni-star-filled"/></li>
                      </ul>
                    </div>
                    <p className='py-5 w-75'>Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu eirmod tempor invidunt labore.Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu.</p>
                    <div className="slider-img d-flex justify-content-between w-75 h-25 pb-4">
                      <img className='w-25' src="img/author-2.png" alt="" />
                      <div className="text-center">
                        <h3>Fajar Siddiq</h3>
                        <p>COO,MakerFlix</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div className='inner-swiper d-flex flex-column align-items-center'>
                    <div className="d-flex flex-row justify-content-between w-75 pt-5">
                      <i class="lni lni-quotation"/>
                      <ul className="d-flex justify-content-center">
                        <li><i class="lni lni-star-filled"/></li>
                        <li><i class="lni lni-star-filled"/></li>
                        <li><i class="lni lni-star-filled"/></li>
                        <li><i class="lni lni-star-filled"/></li>
                        <li><i class="lni lni-star-filled"/></li>
                      </ul>
                    </div>
                    <p className='py-5 w-75'>Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu eirmod tempor invidunt labore.Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu.</p>
                    <div className="slider-img d-flex justify-content-between w-75 h-25 pb-4">
                      <img className='w-25' src="img/author-3.png" alt="" />
                      <div className="text-center">
                        <h3>Fajar Siddiq</h3>
                        <p>COO,MakerFlix</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div className='inner-swiper d-flex flex-column align-items-center'>
                    <div className="d-flex flex-row justify-content-between w-75 pt-5">
                      <i class="lni lni-quotation"/>
                      <ul className="d-flex justify-content-center">
                        <li><i class="lni lni-star-filled"/></li>
                        <li><i class="lni lni-star-filled"/></li>
                        <li><i class="lni lni-star-filled"/></li>
                        <li><i class="lni lni-star-filled"/></li>
                        <li><i class="lni lni-star-filled"/></li>
                      </ul>
                    </div>
                    <p className='py-5 w-75'>Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu eirmod tempor invidunt labore.Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu.</p>
                    <div className="slider-img d-flex justify-content-between w-75 h-25 pb-4">
                      <img className='w-25' src="img/author-1.png" alt="" />
                      <div className="text-center">
                        <h3>Fajar Siddiq</h3>
                        <p>COO,MakerFlix</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-pagination"/>
            </div>
          </div>
        </div>
      </section>

      <section id='blog' className="blog bg-light w-100 pb-5">
        <div className="container d-flex flex-column">
          <div className="row">
            <div id="hr" className='mx-5' />
          </div>
          <div className="row mx-4 mt-4 mb-5">
            <h1><span className='small-span'>Our Recent</span> Blog Posts</h1>
          </div>
          <div className="row align-self-center justify-content-center align-items-center d-flex flex-lg-row flex-column">
            <div className="blog-wrapper col-lg-4 d-flex justify-content-center wow fadeIn" data-aos-duration='.5s'>
              <div className="single-blog d-flex flex-column align-items-start">
                <div className="blog-img">
                  <img src="img/blog-1.jpeg" alt="" />
                </div>
                <div className="p-container d-flex justify-content-between w-75 pt-4 pb-2">
                  <p>Posted By:<a href="#">Admin</a></p>
                  <time>03 June,2023</time>
                </div>
                <h4 className='blog-h4'>Lorem ipsuamet conset sadips cing elitr seddiam nonu eirmod tempor invidunt labore.</h4>
                <a href="#" className='pt-3'>Learn More <i class="lni lni-chevron-right"></i></a>
              </div>
            </div>
            <div className="blog-wrapper col-lg-4 d-flex justify-content-center wow fadeIn" data-aos-duration='.5s' data-wow-delay='.2s'>
              <div className="single-blog d-flex flex-column align-items-start">
                <div className="blog-img">
                  <img src="img/blog-2.jpeg" alt="" />
                </div>
                <div className="p-container d-flex justify-content-between w-75 pt-4 pb-2">
                  <p>Posted By:<a href="#">Admin</a></p>
                  <time>03 June,2023</time>
                </div>
                <h4 className='blog-h4'>Lorem ipsuamet conset sadips cing elitr seddiam nonu eirmod tempor invidunt labore.</h4>
                <a href="#" className='pt-3'>Learn More <i class="lni lni-chevron-right"></i></a>
              </div>
            </div>
            <div className="blog-wrapper col-lg-4 d-flex justify-content-center wow fadeIn" data-aos-duration='.5s' data-wow-delay='.4s'>
              <div className="single-blog d-flex flex-column align-items-start">
                <div className="blog-img">
                  <img src="img/blog-3.jpeg" alt="" />
                </div>
                <div className="p-container d-flex justify-content-between w-75 pt-4 pb-2">
                  <p>Posted By:<a href="#">Admin</a></p>
                  <time>03 June,2023</time>
                </div>
                <h4 className='blog-h4'>Lorem ipsuamet conset sadips cing elitr seddiam nonu eirmod tempor invidunt labore.</h4>
                <a href="#" className='pt-3'>Learn More <i class="lni lni-chevron-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className='w-100 d-flex flex-column align-items-center'>
        <div className="popup-div d-flex flex-lg-row flex-column justify-content-center align-items-lg-center align-items-start px-5 wow fadeIn">
          <div className="col-lg-6 col-sm-8 col-11 px-1 py-lg-0 py-3">
            <h1 className='text-start d-flex flex-column'>Subscribe Our Newsletter <span className='small-span'>get regular updates</span></h1>
          </div>
          <div className="col-lg-6 col-sm-8 col-11">
            <form action="#" className='d-flex'>
              <input type="text" placeholder='Enter email' className='px-3' />
              <button className='btn'>Submit</button>
            </form>
          </div>
        </div>
        <div className="info container pb-5 d-flex flex-column align-items-center">
          <div className="row d-flex pb-5">
            <div className="col-lg-4 col-sm-10 col-12 mb-5 wow fadeIn">
              <img className='pb-5' src="img/logo.svg" alt="" />
              <p className='text-light pb-4'>Lorem ipsum dolor sit amet consetetur sadipscing elitr, sederfs diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.</p>
              <div className="footer-icons text-light fs-4 d-flex justify-content-between w-50">
                    <i class="fab fa-facebook-f"/>
                    <i class="fab fa-twitter"/>
                    <i class="fab fa-instagram"/>
                    <i class="fab fa-linkedin"/>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-6 mb-5 text-light d-flex flex-column justify-content-between wow fadeIn" data-wow-delay='.2s'>
              <h3 className='pb-4'>Quick Link</h3>
              <a>Road Map</a>
              <a>Privacy policy</a>
              <a>Refund Policy</a>
              <a>Terms of Service</a>
              <a>Pricing</a>
            </div>
            <div className="col-lg-2 col-sm-4 col-6 text-light d-flex flex-column justify-content-between wow fadeIn" data-wow-delay='.4s'>
              <h3 className='pb-4'>Resources</h3>
              <a>Home</a>
              <a>Page</a>
              <a>Portfolio</a>
              <a>Blog</a>
              <a>Contact</a>
            </div>
            <div className="col-lg-4 col-sm-4 col-8 text-light d-flex flex-column justify-content-between wow fadeIn" data-wow-delay='.6s'>
              <h3 className='pb-4'>Contact Us</h3>
              <p>+809272561823</p>
              <p>info@gmail.com</p>
              <p>www.yourweb.com</p>
              <p>123 Stree New York City , United States Of America 750.</p>
            </div>
          </div>
          <span className='text-light align-self-start mt-5'>Special Thanks for <a href="#">Uldeck</a></span>
        </div>
        <Particles id='particles' params={{
              "particles": {
                  "number": {
                      "value": 7,
                      "density": {
                          "enable": false
                      }
                  },
                  "size": {
                      "value": 40,
                      "random": true
                  },
                  "move": {
                      "direction": "top",
                      "out_mode": "out"
                  },
                  "line_linked": {
                      "enable": false
                  }
              }
          }}/>
      </footer>
      <a href='#main' className="up-arrow text-light">
        <i class="lni lni-chevron-up"/>
      </a>
    </div>
  );}
}

export default App;
