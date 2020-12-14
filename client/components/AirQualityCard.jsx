import React from 'react';

const AirQualityCard = ({ data }) => {
  let parameter = data.ParameterName;
  data.ParameterName === 'O3' ? parameter = 'Ozone' : parameter;
  let category = data.Category.Name;
  if (data.Category.Name) {
    category = data.Category.Name.split(' ').join('').toLowerCase();
  }

  return (
    <div className={`aqi-card ${category}`}>
      {parameter}
      <br />
      {data.AQI}
    </div>
  );
};

export default AirQualityCard;