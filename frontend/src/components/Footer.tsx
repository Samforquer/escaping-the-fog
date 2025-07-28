import React from 'react'

export const Footer: React.FC = () => (
  <footer className="bg-dark text-white py-4 mt-5">
    <div className="container-fluid text-center">
      <div className="mb-3">
        <a
          href="https://www.instagram.com/your_instagram_handle"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white mx-3"
        >
          <i className="fab fa-instagram fa-lg"></i>
        </a>
        <a
          href="mailto:your.email@example.com"
          className="text-white mx-3"
        >
          <i className="fas fa-envelope fa-lg"></i>
        </a>
      </div>
      <p className="mb-0 small">&copy; {new Date().getFullYear()} Samuel Forquer. All rights reserved.</p>
    </div>
  </footer>
)
