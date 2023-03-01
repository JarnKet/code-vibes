import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full px-4 py-6 sm:absolute sm:bottom-0">
      <h1 className="text-center font-jetMono  font-semibold">
        <span className="textGradient">CODE VIBES</span> &copy{' '}
        {new Date().getFullYear()}
      </h1>
    </footer>
  );
};

export default Footer;
