import React from 'react'
import logo from "../Fotografite/SVG/Book-Logo.svg";
import "../App.css";

const Footer = () => {
  return (
    <footer className="container d-flex justify-content-around gap-5 p-2 mt-5">
       <div className="w-25">
        <img src={logo} alt="logo" className="logoImg" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
        <p>consectetur adipiscing elit, sed do eiusmod tempor incidid</p>
       </div>
       <div className="d-flex flex-column gap-3">
        <h5 className="text-purple">QUICK LINKS</h5>
        <a href="#" className='text-decoration-none text-purple'>Home</a>
          <a href="#" className='text-decoration-none text-purple'>Contact us</a>
          <a href="#" className='text-decoration-none text-purple'>Login</a>
          <a href="#" className='text-decoration-none text-purple'>Sign up</a>
       </div>
       <div className="d-flex flex-column gap-3">
        <h5 className="text-purple">CONTACT</h5>
        <p>
            <a href="https://goo.gl/maps/E3x7UJXbo3CHr6z97" className='text-decoration-none text-purple'
              ><ion-icon name="location-outline"></ion-icon> Prishtinë,
              St.Muharrem Fejza</a
            >
          </p>
          <p>
            <a href="mailto:eBook@gmail.com" className='text-decoration-none text-purple'
              ><ion-icon name="mail-outline"></ion-icon> eBook@gmail.com</a
            >
          </p>
          <p>
            <a href="tel:+383(0)45 123 123" className='text-decoration-none text-purple'
              ><ion-icon name="call-outline"></ion-icon> +38345 123 123</a
            >
          </p>
       </div>
       <div className="d-flex flex-column gap-3">
          <h5 className="text-purple">FOLLOW US:</h5>
          <ion-icon name="logo-facebook" className="fs-2"></ion-icon>
          <ion-icon name="logo-instagram"></ion-icon>
          <ion-icon name="logo-twitter"></ion-icon>
          <ion-icon name="logo-linkedin"></ion-icon>
        </div>


    
  </footer>
  )
}

export default Footer