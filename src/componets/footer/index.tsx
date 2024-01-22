import React from 'react';
import "./style.scss";

export const Footer = () => {
  return (
    <footer id="footer">
        <div className="wrapper">
            <div className="rights">
                <span>©&nbsp;</span>
                <span className="copyright-year">2024</span>
                <span> iHelp</span>
            </div>

            <div className="developerBy">
                <span>All rights reserved. </span>
                <span>Design by iHelp</span>
            </div>
        </div>
    </footer>
  )
}