import React from 'react'

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a
        href="https://www.instagram.com/omarelnahas114?igsh=MTYwaTY1amFydjk4ag%3D%3D&utm_source=qr "
        className="home__social-link"
        target="_blanck"
      >
        <i className="fa-brands fa-instagram"></i>
      </a>
      <a
        href="https://github.com/omarelnahs"
        className="home__social-link"
        target="_blanck"
      >
        <i className="fa-brands fa-github"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/omar-el-nahas-375446318/ "
        className="home__social-link"
        target="_blanck"
      >
        <i className="fa-brands fa-linkedin"></i>
      </a>
    </div>
  );
}

export default HeaderSocials