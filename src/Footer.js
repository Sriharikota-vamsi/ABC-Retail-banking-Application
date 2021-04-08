import React from 'react';
import './App.css';

const Footer=()=>{
    return(
        <footer class="mainfooter" role="contentinfo">
        <div class="footer-middle">
        <div class="container">
          <div class="row">
            <div class="col-md-3 col-sm-6">
              
              <div class="footer-pad">
                <h4>Features</h4>
                <ul class="list-unstyled">
                  <li><a href="#"></a></li>
                  <li><a href="#">Payment Center</a></li>
                  <li><a href="#">Contact Directory</a></li>
                  <li><a href="#">Online Service</a></li>
                  <li><a href="#">News and Updates</a></li>
                  <li><a href="#">Mobile Banking</a></li>
                </ul>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              
              <div class="footer-pad">
                <h4>Get Help</h4>
                <ul class="list-unstyled">
                  <li><a href="#">Account Updates</a></li>
                  <li><a href="#">Accessibility</a></li>
                  <li><a href="#">Disclaimer</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">FAQs</a></li>
                  <li><a href="#">Check Acoount Details</a></li>
                </ul>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              
              <div class="footer-pad">
                <h4>Contact Us</h4>
                <ul class="list-unstyled">
                  <li><a href="#">banking@gmail.com</a></li>
                  <li><a href="#">+123-456-789</a></li>
                  <li><a href="#">Banking Department</a></li>
                  <li><a href="#">ABC branch</a></li>
                  <li><a href="#">ABC City </a></li>
                  <li>
                    <a href="#"></a>
                  </li>
                </ul>
              </div>
            </div>
              <div class="col-md-3">
                  <h4>Follow Us</h4>
                  <ul class="social-network social-circle">
                   <li><a href="#" class="icoFacebook" title="Facebook"><i class="fa fa-facebook"></i></a></li>
                   <li><a href="#" class="icoLinkedin" title="Linkedin"><i class="fa fa-linkedin"></i></a></li>
                  </ul>				
              </div>
          </div>
          <div class="row">
              <div class="col-md-12 copy">
                  <p class="text-center">&copy; Copyright 2021 - Company Name.  All rights reserved.</p>
              </div>
          </div>
      
      
        </div>
        </div>
      </footer>
    );
}
export default Footer;