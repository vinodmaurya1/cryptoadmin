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
    title: 'Area Chart',
  },
];

const AreaChart2 = () => {
  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;
  const secondarylight = theme.palette.secondary.light;
  const errorlight = theme.palette.error.light;
  const optionsareachart = {

    chart: {
      id: 'area-chart',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      foreColor: '#adb0bb',
      zoom: {
        enabled: true,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: '3',
      curve: 'smooth',
    },
    colors: [primary, secondary],
    xaxis: {
      type: 'datetime',
      categories: [
        '2018-09-19T00:00:00',
        '2018-09-19T01:30:00',
        '2018-09-19T02:30:00',
        '2018-09-19T03:30:00',
        '2018-09-19T04:30:00',
        '2018-09-19T05:30:00',
        '2018-09-19T06:30:00',
      ],
    },
    yaxis: {
      opposite: false,
      labels: {
        show: true,
      },
    },
    legend: {
      show: true,
      position: 'top',
      width: '50px',
    },
    grid: {
      show: false,
    },
    tooltip: {
      theme: 'dark',
      fillSeriesColor: false,
    },
  };
  const seriesareachart = [
    {
      name: 'Sales Summery 1',
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: 'Crypto Currency',
      data: [54 ,59, 45,54,69,69,82],
    },
  ];

  // const optionsareachart = {
  //   chart: {
  //     type: 'area',
  //     fontFamily: "'Plus Jakarta Sans', sans-serif;",
  //     foreColor: '#adb0bb',
  //     toolbar: {
  //       show: false,
  //     },
  //     height: 60,
  //     sparkline: {
  //       enabled: true,
  //     },
  //     group: 'sparklines',
  //   },
  //   stroke: {
  //     curve: 'smooth',
  //     width: 2,
  //   },
  //   fill: {
  //     colors: [secondarylight],
  //     type: 'solid',
  //     opacity: 0.05,
  //   },
  //   markers: {
  //     size: 0,
  //   },
  //   tooltip: {
  //     theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
  //     x: {
  //       show: false,
  //     },
  //   },
  //   dataLabels: {
  //     enabled: false,
  //   },
  //   stroke: {
  //     width: '3',
  //     curve: 'smooth',
  //   },
  //   colors: [primary, secondary],
  //   xaxis: {
  //     type: 'datetime',
  //     categories: [
  //       '2018-09-19T00:00:00',
  //       '2018-09-19T01:30:00',
  //       '2018-09-19T02:30:00',
  //       '2018-09-19T03:30:00',
  //       '2018-09-19T04:30:00',
  //       '2018-09-19T05:30:00',
  //       '2018-09-19T06:30:00',
  //     ],
  //   },
  //   yaxis: {
  //     opposite: false,
  //     labels: {
  //       show: true,
  //     },
  //   },
  //   grid: {
  //     show: false,
  //   },
  //   tooltip: {
  //     theme: 'dark',
  //     fillSeriesColor: false,
  //   },

  //   //   chart: {
  //   //     id: 'area-chart',
  //   //     fontFamily: "'Plus Jakarta Sans', sans-serif",
  //   //     foreColor: '#adb0bb',
  //   //     zoom: {
  //   //       enabled: true,
  //   //     },
  //   //     toolbar: {
  //   //       show: false,
  //   //     },
  //   //   },
  //   //   dataLabels: {
  //   //     enabled: false,
  //   //   },
  //   //   stroke: {
  //   //     width: '3',
  //   //     curve: 'smooth',
  //   //   },
  //   //   colors: [primary, secondary],
  //   //   xaxis: {
  //   //     type: 'datetime',
  //   //     categories: [
  //   //       '2018-09-19T00:00:00',
  //   //       '2018-09-19T01:30:00',
  //   //       '2018-09-19T02:30:00',
  //   //       '2018-09-19T03:30:00',
  //   //       '2018-09-19T04:30:00',
  //   //       '2018-09-19T05:30:00',
  //   //       '2018-09-19T06:30:00',
  //   //     ],
  //   //   },
  //   //   yaxis: {
  //   //     opposite: false,
  //   //     labels: {
  //   //       show: true,
  //   //     },
  //   //   },
  //   //   legend: {
  //   //     show: true,
  //   //     position: 'bottom',
  //   //     width: '50px',
  //   //   },
  //   //   grid: {
  //   //     show: false,
  //   //   },
  //   //   tooltip: {
  //   //     theme: 'dark',
  //   //     fillSeriesColor: false,
  //   //   },
  //   // };
  // };

  // const seriesareachart = [
  //   {
  //     name: '',
  //     color: secondary,
  //     data: [25, 66, 20, 40, 12, 58, 20],
  //   },
  // ];



  return (
    <PageContainer title="Area Chart" description="this is innerpage">
      {/* breadcrumb */}
      {/* end breadcrumb */}
      <ParentCard title="Area Chart">
        <Chart options={optionsareachart} series={seriesareachart} type="area" height="300px" />
      </ParentCard>
    </PageContainer>
  );
};

export default AreaChart2;
