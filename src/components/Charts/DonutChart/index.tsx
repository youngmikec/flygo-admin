import { FC } from 'react';
import { ApexOptions } from 'apexcharts';
import Chart from 'react-apexcharts';

const DonutChart: FC = () => {
  const series = [124, 124, 60, 40];

  const options: ApexOptions = {
    chart: {
      type: 'donut'
    },
    series: [
      {
        name: 'Sample Data',
        data: [124, 124, 60, 40],
      },
    ],
    
    labels: ['Poland', 'Romania', 'Italy', ''],
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        expandOnClick: true,
        offsetX: 0,
        offsetY: 0,
        customScale: 0.8,
        dataLabels: {
          offset: 0,
          minAngleToShowLabel: 10
        }, 
        donut: {
          size: '65%',
          background: 'transparent',
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: '22px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 600,
              color: undefined,
              offsetY: -10,
              formatter: function (val) {
                return val
              }
            },
            value: {
              show: true,
              fontSize: '16px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 400,
              color: undefined,
              offsetY: 16,
              formatter: function (val) {
                return val
              }
            },
            total: {
              show: false,
              showAlways: false,
              label: 'Total',
              fontSize: '22px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 600,
              color: '#373d3f',
              formatter: function (w) {
                return w.globals.seriesTotals.reduce((a: number, b: number) => {
                  return a + b
                }, 0)
              }
            }
          }
        },      
      }
    }
  };



  return (
    <>
      <div className="line-chart">
        <Chart 
          options={options}
          series={series}
          type={"donut"}
          height={200}
        />
      </div>
    </>
  )
}

export default DonutChart;