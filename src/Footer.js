import React from 'react';
import TwitterIcon from './Twitter-Icon.png';
import FacebookIcon from './Facebook-Icon.png';
import InstagramIcon from './Instagram-Icon.png';
import GitHubIcon from './GitHub-Icon.png';

export default function Footer() {
  return (
    <footer>
      <a href='https://twitter.com/home' target='_blank' rel='noreferrer'>
        <img src={TwitterIcon} alt='Twitter Icon' />
      </a>
      <a href='https://facebook.com/' target='_blank' rel='noreferrer'>
        <img src={FacebookIcon} alt='Facebook Icon' />
      </a>
      <a href='https://instagram.com/' target='_blank' rel='noreferrer'>
        <img src={InstagramIcon} alt='Instagram Icon' />
      </a>
      <a href='https://github.com/' target='_blank' rel='noreferrer'>
        <img src={GitHubIcon} alt='GitHub Icon' />
      </a>
    </footer>
  );
}
