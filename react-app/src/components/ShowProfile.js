import React, { useState } from 'react';
import "./components.css";
import Profile from "./profile/Profile";

function ShowProfile() {
  const [isOpen, setIsOpen] = useState(true);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside className={isOpen ? 'open' : 'close'}>
        <Profile />
        <button className="toggle-button" onClick={handleButtonClick}>
            {isOpen ? '<=' : '=>'}
        </button>
    </aside>
  );
}

export default ShowProfile;
