import React from 'react';
import logo from './images/logo.png';

const NavBar = () => (
  <div className="flex justify-between">
    <div className="w-20 h-20">
      <img src={logo} alt="logo" />
    </div>

    <div className="mr-8">
      <ul className="flex  gap-4 py-4">
        <li>News</li>
        <li>Matches</li>
        <li>Teams</li>
        <li>Ticket</li>
        <li>Membership</li>
        <li>The club</li>
        <li>History</li>
      </ul>
    </div>
  </div>
);

export default NavBar;
