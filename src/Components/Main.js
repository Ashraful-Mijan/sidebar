import React from 'react';
import { useIntl } from 'react-intl';
import Switch from 'react-switch';
import { FaBars } from 'react-icons/fa';
import './Main.css'

const Main = ({
  collapsed,
  rtl,
  image,
  handleToggleSidebar,
  handleCollapsedChange,
  handleRtlChange,
  handleImageChange,
}) => {
  const intl = useIntl();
  return (
    <main className='main'>

      <nav className="navbar navbar-expand-lg navbar-light py-3" style={{backgroundColor: '#3E64FF'}}>
        <div className="container-fluid">
          <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link text-white active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/">Pricing</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </main>
  );
};

export default Main;