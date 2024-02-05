  import React, { useState } from "react";

  import Input from "./components/Input";
  import useWeatherInfo from "./hooks/useWeatherInfo"

  function App() {


    const [city, setCity] = useState("delhi")
    const [temperature, setTemperature]= useState(0);

    const weatherInfo= useWeatherInfo(city);
    const getWeather=()=>{
      // console.log(city)
      setTemperature(weatherInfo.temp)
      console.log(weatherInfo.temp);
    }
    return (
      <>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            getWeather();
          }}
        >
          <Input
            city={city}
            onCityChange={(city) => setCity(city)}
            temperature={temperature}
          ></Input>
          <button className="bg-white rounded-lg ms-3 w-20" onClick={getWeather} type="submit">
            Submit
          </button>
        </form>
      </>
    );
  }

  export default App;
