import React from "react";
import ChartBar from "./ChartBar";
import './Chart.css';
const Chart = (props) => {
    const valarr= props.datapoints.map(point => point.value);
    const tmax = Math.max(...valarr);
  return (
    <div className="chart">
      {props.datapoints.map((dp) => (
        <ChartBar key={dp.label} 
        value={dp.value}
        maxval={tmax}
        label={dp.label}/>
      ))}
    </div>
  );
};
export default Chart;