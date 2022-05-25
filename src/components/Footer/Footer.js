import React from 'react'
import logo from "../../images/mainlogo.png";
import './Footer.css'

export default function Footer() {
  return (
    <div>
        <footer className="text-center text-lg-start text-black footer">
        <section
         className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div  className="me-5 d-none d-lg-block"> 
        <span>Get connected with us on social networks:</span>
        </div>
        <div>
        <a href="/facebook"  className="me-4 text-reset">
            <i  className="fab fa-facebook-f"></i>
        </a>
        <a href="/twitter.com"  className="me-4 text-reset">
            <i  className="fab fa-twitter"></i>
        </a>
        <a href="/google.com"  className="me-4 text-reset">
            <i  className="fab fa-google"></i>
        </a>
        <a href="/instagram.com"  className="me-4 text-reset">
            <i  className="fab fa-instagram"></i>
        </a>
        <a href="/linkedin.com"  className="me-4 text-reset">
            <i  className="fab fa-linkedin"></i>
        </a>
        <a href="/github.com"  className="me-4 text-reset">
            <i  className="fab fa-github"></i>
        </a>
        </div>
    </section>
    <br/>
    <section className="container p-6 pb-10 ">
      <form action="">
        <div className="row">
          <div className="col-auto mb-2 ">
            <p className="pt-10 justify-content-center">
              <strong>Sign up for our newsletter</strong>
            </p>
          </div>

          <div className="col-lg-6 col-2">
            <div className="form-outline form-white mb-4">
              <input type="email" id="form5Example21" className="form-control" placeholder="Enter email"/>
            </div>
          </div>
          <div className="col-lg-6 col-auto">
            <button type="submit" className="btn btn-outline-light mb-4">
              Subscribe
            </button>
          </div>
        </div>

      </form>
    </section>
    <section>
        <div className="container text-center text-md-start mt-5">
        <div className="row mt-2">
            <div  className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            </div>

            <div  className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6  className="text-uppercase fw-bold mb-4">
                Home
            </h6>
            
            <p>Classes</p>
            <p>Shop</p>
            <p>About</p>
            </div>

            <div  className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6  className="text-uppercase fw-bold mb-4">
                Useful Info
            </h6>
            <p>Pricing</p>
            <p>Setting</p>
            <p>Help</p>
            </div>
            <div  className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6  className="text-uppercase fw-bold mb-4">
                Contact
            </h6>
            <p><i  className="fas fa-home me-3"></i> Lahore, COMSATS, PK</p>
            <p>
                <i  className="fas fa-envelope me-3"></i>
                info@example.com
            </p>
            <p><i  className="fas fa-phone me-3"></i> + 92 316 7728 180</p>
            <p><i  className="fas fa-print me-3"></i> + 92 316 7728 180</p>
            </div>
        </div>
        </div>
    </section>

    <div  className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
        © 2021 Copyright: TheFITLAB.com
    </div>
    </footer>


    
    </div>
  )
}
