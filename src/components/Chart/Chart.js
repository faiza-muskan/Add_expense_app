import React from "react";

import "../../css/Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointValues = props.dataPoint.map((data) => data.value);
  const maxValues = Math.max(...dataPointValues);
  console.log(maxValues, dataPointValues);
  return (
    <div className="chart">
      {props.dataPoint.map((data) => (
        <ChartBar
          key={data.label}
          value={data.value}
          label={data.label}
          maxValue={maxValues}
        />
      ))}
    </div>
  );
};

export default Chart;
