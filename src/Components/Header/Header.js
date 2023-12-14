import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    console.log(`Selected option: ${selectedValue}`);

    // Use navigate to change the page and pass the selected option as a parameter
    if (selectedValue === 'option1' || selectedValue === 'option2' || selectedValue === 'option3') {
      navigate(`/productCategories/${selectedValue}`);
      // navigate("/productCategories")
    }
  };

  const navbarStyle = {
    background: 'linear-gradient(to right, #0f0c29, #302b63, #24243e)',
  };

  const selectStyle = {
    marginTop: '2px',
    backgroundColor: 'transparent',
    border: '0',
    color: 'white',
    padding: '8px',
    borderRadius: '5px',
    outline: 'none',
    // boxShadow: '0 0 5px rgba(255, 255, 255, 0.5)',
  };

  const optionStyle = {
    color: 'white',
    background: '#333',
    padding: '8px',
    marginTop:"10px"
  };

  return (
    <nav  style={navbarStyle} className="navbar navbar-expand-lg navbar-dark header-navbar navbar-css" >
      <div className="container-fluid">
        <img className="navbar-logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Swisslog_logo_2023_one_line.svg/2560px-Swisslog_logo_2023_one_line.svg.png'>
        
        </img>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item m-1">
              <Link to="/" className="nav-link text-light">
                Home
              </Link>
            </li>
            <li className="nav-item m-1">
              <a className="nav-link text-light" href="#">
                Shop
              </a>
            </li>
            <li className="nav-item m-1">
              <a className="nav-link text-light" href="#">
                Blog
              </a>
            </li>
            <li className="nav-item m-1">
              <a className="nav-link disabled text-light" aria-disabled="true">
                Disabled
              </a>
            </li>

            <li className="nav-item dropdown m-1">
  <select
  className=" selectStyle"
    style={{ ...selectStyle, border: 'none' }}  
    value={selectedOption}
    onChange={handleSelectChange}
  >
    <option style={optionStyle} value="">
      Select an option
    </option>
    <option style={optionStyle} value="option1">
      Option 1
    </option>
    <option style={optionStyle} value="option2">
      Option 2
    </option>
    <option style={optionStyle} value="option3">
      Option 3
    </option>
  </select>
</li>
          </ul>
          <div className="form-inline my-2 my-lg-0">
  <Link to="/Login">
 <button className="btn bg-danger btn-outline-success my-2 my-sm-0" type="submit">
    Login 
  </button>
  </Link>
</div>

        </div>
      </div>
    </nav>
  );
};

export default Header;
