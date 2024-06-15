import { FC } from 'react';
import { ApexOptions } from 'apexcharts';
import Chart from 'react-apexcharts';

const LineChart: FC = () => {
  const series = [
    {
      name: 'Sample Data',
      data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58],
    },
  ];

  const options: ApexOptions = {
    series: series,
    chart: {
      type: 'line',
      height: 350,
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth', // Makes the line smooth
      width: 2,
      colors: ['#167EE6']
    },
    title: {
      text: 'Smooth Line Chart',
      align: 'left',
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // Alternates background color for rows
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
      ],
    },
  };



  return (
    <>
      <div className="line-chart">
        <Chart 
          options={options}
          series={series}
          type={"line"}
          height={350}
        />
      </div>
    </>
  )
}

export default LineChart;