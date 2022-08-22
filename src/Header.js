import React from 'react';
import ProfilePic from './potential-profile-pic.jpg';
import EmailIcon from './email-icon.png';
import LinkedinIcon from './linkedin-icon.png';

export default function Header() {
  return (
    <nav className='header'>
      <img
        src={ProfilePic}
        alt='Joey with Veda'
        className='header--profile-pic'
      />
      <h1 className='header--name'>Joey Gibbons</h1>
      <h4 className='header--title'>Frontend Developer</h4>
      <p className='header--link'>joeygibbons.netlify.app</p>
      <div className='header--buttons'>
        <a href='jumpinjoehair80@gmail.com' target='_blank' rel='noreferrer'>
          <button className='header--email-btn'>
            <img src={EmailIcon} alt='Email Icon' /> Email
          </button>
        </a>
        <a
          href='https://www.linkedin.com/in/joey-gibbons-43392698/'
          target='_blank'
          rel='noreferrer'
        >
          <button className='header--media-btn'>
            <img src={LinkedinIcon} alt='LinkedIn Icon' /> LinkedIn
          </button>
        </a>
      </div>
    </nav>
  );
}
