import React, { useState } from 'react';
import './CountryCodeDropdown.css'

const CountryCodeDropdown = ({ countryCodes, selected, onSelect }) => {
  const [open, setOpen] = useState(false);

  const handleSelect = (code) => {
    onSelect(code);
    setOpen(false);
  };

  const selectedCountry = countryCodes.find(c => c.code === selected);

  return (
    <div className="dropdown">
      <div className="dropdown-selected" onClick={() => setOpen(!open)}>
        <img
          src={`https://flagcdn.com/w40/${selectedCountry?.iso || 'us'}.png`}
          alt="flag"
          className="flag-icon"
        />
        <span>{selectedCountry?.code}</span>
        <span className="dropdown-arrow">▼</span>
      </div>

      {open && (
        <ul className="dropdown-menu">
          {countryCodes.map((country, index) => (
            <li key={index} onClick={() => handleSelect(country.code)}>
              <img
                src={`https://flagcdn.com/w40/${country.iso}.png`}
                alt=""
                className="flag-icon"
              />
              {country.code}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CountryCodeDropdown;
