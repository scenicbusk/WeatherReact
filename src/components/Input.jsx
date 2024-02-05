import React from "react";


function Input({ city, onCityChange, temperature }) {
  return (
    <>
      <div className="my-5">
        <div className="flex h-full w-full m-auto justify-center">
          <input
            className="border-2 border-yellow-600 p-2 rounded-lg"
            type="text"
            value={city}
            onChange={(e) => {
              onCityChange && onCityChange(e.target.value);
            }}
            placeholder="Enter City"
          />
        </div>
        <label className="text-white">{temperature}</label>
      </div>
    </>
  );
}

export default Input;
