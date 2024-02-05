import { useState , useEffect } from 'react'

function useWeatherInfo(city){
    const key="b9a825a93838be6c005ba7a57fd989d6"
    const [value , setValue] =  useState({});
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        .then((response)=> response.json())
        .then((response)=> setValue(response.main))
    }, [city]);
    return value;

    // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`).then( async (res)=>{
    //   // console.log(res.json())
    //   const ans = await res.json();
    //   return ans;
    // }).then((res)=>{
    //   console.log(res.main)
    //   setValue(res.main);
    // })
    // console.log(city)
    // return value;
    
}
export default useWeatherInfo;