import React, { useState } from "react";

import "./Home.scss";

import image from "../../../assets/experiance-job.jpg";

function Home() {
  const [inputValue, setInputValue] = useLocalStorage("inputValue", "Bazinga");

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="home">
      <h1 className="home__title">Will code for Work</h1>
      <div className="home__image">
        <img src={image} alt="Experience" />
      </div>

      <div className="home__form">
        <h1 className="home__term">{inputValue}</h1>

        <input
          className="home__input"
          type="text"
          value={inputValue}
          onChange={handleInputValue}
          placeholder="Input field"
        />

        <button className="home__btn">Submit</button>
      </div>
    </div>
  );
}

// Hook
function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

export default Home;
