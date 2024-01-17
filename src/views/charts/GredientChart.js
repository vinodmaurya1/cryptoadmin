import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import PageContainer from '../../components/container/PageContainer';
import Breadcrumb from '../../layouts/full/shared/breadcrumb/Breadcrumb';
import ParentCard from '../../components/shared/ParentCard';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Gradient Chart',
  },
];

const GredientChart = () => {

  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  
  const optionsgredientchart = {
    chart: {
      height: 350,
      type: 'line',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: true,
        color: 'rgba(0,0,0,0.2)',
        top: 12,
        left: 4,
        blur: 3,
        opacity: 0.4,
      },
    },
    stroke: {
      width: 7,
      curve: 'smooth',
    },

    xaxis: {
      type: 'datetime',
      categories: [
        '1/11/2000',
        '2/11/2000',
        '3/11/2000',
        '4/11/2000',
        '5/11/2000',
        '6/11/2000',
        '7/11/2000',
        '8/11/2000',
        '9/11/2000',
        '10/11/2000',
        '11/11/2000',
        '12/11/2000',
        '1/11/2001',
        '2/11/2001',
        '3/11/2001',
        '4/11/2001',
        '5/11/2001',
        '6/11/2001',
      ],
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        gradientToColors: [primary],
        shadeIntensity: 1,
        type: 'horizontal',
        opacityFrom: 1,
        opacityTo: 0.9,
        stops: [0, 100, 100, 100],
      },
    },
    markers: {
      size: 4,
      opacity: 0.9,
      colors: [primary],
      strokeColor: '#fff',
      strokeWidth: 2,

      hover: {
        size: 7,
      },
    },
    yaxis: {
      min: 0,
      max: 40,
    },
    tooltip: {
      theme: 'dark',
    },
    grid: {
      show: false,
    },
  };
  const seriesgredientchart = [
    {
      name: 'Likes',
      data: [4, 3, 10, 9, 35, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
    },
  ];

  // const seriesgredientchart = {
  //   series: [{
  //     name: 'XYZ MOTORS',
  //     data: ['1/11/2000',
  //           '2/11/2000',
  //           '3/11/2000',
  //           '4/11/2000',
  //           '5/11/2000',
  //           '6/11/2000',]
  //   }],
  // }


  // const optionsgredientchart = {
  //   series: [{
  //     data: [{
  //       x: new Date('2018-02-12').getTime(),
  //       y: 76
  //     }, {
  //       x: new Date('2018-02-12').getTime(),
  //       y: 76
  //     }]
  //   }],
  //   chart: {
  //   type: 'area',
  //   stacked: false,
  //   height: 350,
  //   zoom: {
  //     type: 'x',
  //     enabled: true,
  //     autoScaleYaxis: true
  //   },
  //   toolbar: {
  //     autoSelected: 'zoom'
  //   }
  // },
  // dataLabels: {
  //   enabled: false
  // },
  // markers: {
  //   size: 0,
  // },
  // title: {
  //   text: 'Stock Price Movement',
  //   align: 'left'
  // },
  // fill: {
  //   type: 'gradient',
  //   gradient: {
  //     shadeIntensity: 1,
  //     inverseColors: false,
  //     opacityFrom: 0.5,
  //     opacityTo: 0,
  //     stops: [0, 90, 100]
  //   },
  // },
  // yaxis: {
  //   labels: {
  //     formatter: function (val) {
  //       return (val / 1000000).toFixed(0);
  //     },
  //   },
  //   title: {
  //     text: 'Price'
  //   },
  // },
  // xaxis: {
  //   type: 'datetime',
  // },
  // tooltip: {
  //   shared: false,
  //   y: {
  //     formatter: function (val) {
  //       return (val / 1000000).toFixed(0)
  //     }
  //   }
  // }
  // };


  return (
    <PageContainer title="Gredient Chart" description="this is innerpage">
      {/* breadcrumb */}
      <Breadcrumb title="Gradient Chart" items={BCrumb} />
      {/* end breadcrumb */}
      <ParentCard title='Gradient Chart'>
        <Chart
          options={optionsgredientchart}
          series={seriesgredientchart}
          type="line"
          height="300px"
        />
      </ParentCard>
    </PageContainer>
  );
};

export default GredientChart;
