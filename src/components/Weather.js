import React from "react";

const Weather = ({ data }) => {
  const temp = []
  const weather = []
  const wind = []
  let today = false;
  let tomorrow = false;
  let thirdDay = false;
  for (let i = 0; i < 3; i++) {
    if (i == 0) {
      today = true
      tomorrow = false;
      thirdDay = false;
    } else if (i == 1) {
      tomorrow = true
      today = false
      thirdDay = false
    } else {
      thirdDay = true
      today = false
      tomorrow = false
    }
    let day = today ? "Today" : tomorrow ? "Tomorrow" : thirdDay ? "Third Day" : null
    temp.push(
      <div className="col-md-4" >
        <div style={{ display: "grid" }}>
          <p className="weather__key">
            {`Temp - ${day}`}
          </p>
          <span className="weather__value"> {data.list[i].main.temp} &deg;C </span>
        </div>
      </div>
    )

    weather.push(
      <div className="col-md-4" >
        <div style={{ display: "grid" }}>
          <p className="weather__key">
            {`Weather - ${day}`}
          </p>
          <span className="weather__value"> {data.list[i].weather[0].main} </span>
        </div>
      </div>
    )
    wind.push(
      <div className="col-md-4" >
        <div style={{ display: "grid" }}>
          <p className="weather__key">
            {`Wind - ${day}`}
          </p>
          <span className="weather__value"> {data.list[i].wind.speed} </span>
        </div>
      </div>
    )
  }

  return (
    <div className="weather__info">
      <p className="weather__key">
        Location:
        <span className="weather__value">
          {data.city.name}, {data.city.country}
        </span>
      </p>
      {data.list.length > 0 && (
        <>
          <div className="row">
            {temp}
          </div>
          <div className="row">
            {weather}
          </div>
          <div className="row">
            {wind}
          </div>
        </>
      )}
    </div>
  )
};

export default Weather;
