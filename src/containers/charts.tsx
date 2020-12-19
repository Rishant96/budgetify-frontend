import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import { COLORS } from "../constants/colors";

type PieProps = {
  title_l: string[];
  amount_l: number[];
};

type IChartsContainer = React.FC & {
  Pie: React.FC<PieProps>;
  Bar: React.FC<PieProps>;
  Line: React.FC<PieProps>;
};

export const ChartsContainer: IChartsContainer = ({
  children,
  ...restProps
}) => {
  return <div {...restProps}>{children}</div>;
};

ChartsContainer.Pie = ({ children, title_l, amount_l, ...restProps }) => {
  const data = {
    labels: title_l,
    datasets: [
      {
        data: amount_l,
        backgroundColor: COLORS
      }
    ]
  };
  return <Doughnut data={data} />;
};

ChartsContainer.Bar = ({ children, title_l, amount_l, ...restProps }) => {
  const data = {
    labels: title_l,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: amount_l
      }
    ]
  };
  return <Bar data={data} />;
};

ChartsContainer.Line = ({ children, title_l, amount_l, ...restProps }) => {
  const data = {
    labels: title_l,
    datasets: [
      {
        label: 'Dataset of Months',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: amount_l
      }
    ]
  };
  
  return <Line data={data} />;
};
