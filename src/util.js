import React from "react";
import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";
import "./Map.css";

export const sortData = (data) => {
  const sortedData = [...data];

  sortedData.sort((a, b) => {
    if (a.cases > b.cases) {
      return -1;
    } else {
      return 1;
    }
  });
  return sortedData;
};

export const prettyPrintStat = (stat) =>
  stat ? `+${numeral(stat).format("0,0a")}` : "+0";

export const prettyPrintStats = (stat) => numeral(stat).format("+0,0");

const casesTypeColors = {
  cases: {
    hex: "#CC1034",
    multiplier: 800,
  },
  recovered: {
    hex: "#7dd71d",
    multiplier: 1200,
  },
  deaths: {
    hex: "#fb4443",
    multiplier: 2000,
  },
};

export const showDataOnMap = (data, casesType = "cases") =>
  data.map((country) => (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      color={casesTypeColors[casesType].hex}
      fillColor={casesTypeColors[casesType].hex}
      fillOpacity={0.4}
      radius={
        Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
      }
    >
      <Popup>
        <div className="info__container">
          <div
            className="info__flag"
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          />
          <div className="info__name">{country.country}</div>
          <div className="info__confirmed">
            Cases:{" "}
            <span className="popup__numbers">
              {numeral(country.cases).format("0,0")}
            </span>
          </div>
          <div className="info__recovered">
            Recovered:{" "}
            <span className="popup__numbers">
              {numeral(country.recovered).format("0,0")}
            </span>
          </div>
          <div className="info__deaths">
            Deaths:{" "}
            <span className="popup__numbers">
              {numeral(country.deaths).format("0,0")}
            </span>
          </div>
          <div className="info__deaths">
            Population:{" "}
            <span className="popup__numbers">
              {numeral(country.population).format("0,0")}
            </span>
          </div>
        </div>
      </Popup>
    </Circle>
  ));
