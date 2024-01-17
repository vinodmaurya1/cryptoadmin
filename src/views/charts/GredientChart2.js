import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import PageContainer from '../../components/container/PageContainer';
import Breadcrumb from '../../layouts/full/shared/breadcrumb/Breadcrumb';
import ParentCard from '../../components/shared/ParentCard';
import ParentCard2 from '../../components/shared/ParentCard2';
import axios from 'axios';
import { ButtonGroup, Button } from '@mui/material';
const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Gradient Chart',
  },
];

const GredientChart2 = () => {
  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const [stokeDetails, setStokeDetails] = useState([]);
  const [currencyId, setCurrencyId] = useState('ETH');
  const [periodId, setPeriodId] = useState('12HRS');
  const [timeEnd, setTimeEnd] = useState('2024-01-16T10:00:54.836Z');
  const [timeStart, setTimeStart] = useState('2024-01-16T17:00:54.836Z')
  const [checked, setChecked] = React.useState(true);
  const [varientChecked, setVarientChecked] = React.useState('contained');
  const [selectedTime, setSelectedTime] = useState('1day');

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleTimeBtn = (e) => {
    const timeId = e.currentTarget.id;
    setSelectedTime(timeId);
    if (timeId === "1hr") {
      setPeriodId("1HRS")
      setTimeStart("2024-01-16T10:00:54.836Z")
      setTimeEnd("2024-01-16T11:00:54.836Z")
    }
  };



  const seriesgredientchart = [
    {
      name: 'Crypto Prices($)',
      data: stokeDetails.map((item) => [
        new Date(item.time_period_start).getTime(),
        item.price_open,
      ]),
      color: '#0049e6',
    },
  ];

  const getTodayDate = () => {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1; // Months are 0-indexed
    const year = today.getFullYear();

    return `${day}/${month}/${year}`;
  };

  const optionsgredientchart = {
    chart: {
      id: 'area-datetime',
      type: 'area',
      height: 350,
      foreColor: '#adb0bb',
      zoom: {
        autoScaleYaxis: true,
      },
    },
    annotations: {
      yaxis: [
        {
          y: 30,
          borderColor: '#fff',
        },
      ],
      xaxis: [
        {
          x: getTodayDate(),
          borderColor: '#fff',
        },
      ],
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
      style: 'hollow',
    },
    xaxis: {
      type: 'datetime',
      min: new Date('16 Jan 2024').getTime(),
      tickAmount: 6,
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
      x: {
        format: 'dd MMM yyyy',
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 1000],
      },
    },
    stroke: {
      show: true,
      curve: 'smooth', // or 'straight'
      lineCap: 'square', // round, square
      colors: ['red'], // Set your desired color here
      width: 5, // Set the line width
      dashArray: 0, // Set the dash array
    },
    colors: ['#ff5733'],
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
        {
          headers: {
            'X-CMC_PRO_API_KEY': '7e7bd7d4-859a-4647-8eb3-8612e1d10568a',
            'Content-Type': 'application/json',
          },
        },
      );
      const result = response.data;
      console.log('result', result); // Logging the first 5 items in the response
      console.log(result.data.length);
      // setStokeDetails(result.data)
    } catch (error) {
      console.error('Error fetching data:', error);
      if (error.response) {
        console.error('Server Error:', error.response.data);
      } else if (error.request) {
        console.error('No response received.');
      } else {
        console.error('Request failed:', error.message);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      // const symbolId = `BITSTAMP_SPOT_${currencyId}_USD`;
      const symbolId = `BITSTAMP_SPOT_ETH_USD`;
      try {
        const response = await axios.get(`https://rest.coinapi.io/v1/ohlcv/${symbolId}/history`, {
          params: {
            period_id: periodId,
            time_start: timeStart,
            time_end: timeEnd,
            limit: 100,
            include_empty_items: false,
          },
          headers: {
            // 'X-CoinAPI-Key': '5CBBAB65-DF2D-4A36-9D1E-F632786D9C45', // Replace with your actual API key
            // 'X-CoinAPI-Key': '1AB80E3C-E1E7-47AB-94FF-0968D059805C', // Replace with your actual API key
            'X-CoinAPI-Key': '04F87819-A740-449D-B543-A1D1C544D603a', // Replace with your actual API key
          },
        });

        setStokeDetails(response.data);
        console.log('new data', response.data);

        // setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        // setLoading(false);
      }
    };

    fetchData();
  }, []);

  const cuurencyValue = (val) => {
    console.log('hy e', val);
    setCurrencyId(val);
  };


  return (
    <PageContainer title="Gredient Chart" description="this is innerpage">
      {/* breadcrumb */}
      <Breadcrumb title="Gradient Chart" items={BCrumb} />
      {/* end breadcrumb */}
      <ParentCard2 title={currencyId} cuurencyValue={cuurencyValue}>
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button
            variant={selectedTime === '1hr' ? 'contained' : 'outlined'}
            id="1hr"
            onClick={(e) => {
              handleTimeBtn(e);
            }}
          >
            1Hr
          </Button>
          <Button
            variant={selectedTime === '6hr' ? 'contained' : 'outlined'}
            id="6hr"
            onClick={(e) => {
              handleTimeBtn(e);
            }}
          >
            6Hr
          </Button>
          <Button
            variant={selectedTime === '1day' ? 'contained' : 'outlined'}
            id="1day"
            onClick={(e) => {
              handleTimeBtn(e);
            }}
          >
            1Day
          </Button>
          <Button
            variant={selectedTime === '7day' ? 'contained' : 'outlined'}
            id="7day"
            onClick={(e) => {
              handleTimeBtn(e);
            }}
          >
            7Day
          </Button>
          <Button
            variant={selectedTime === '1month' ? 'contained' : 'outlined'}
            id="1month"
            onClick={(e) => {
              handleTimeBtn(e);
            }}
          >
            1Month
          </Button>
          <Button
            variant={selectedTime === '1yr' ? 'contained' : 'outlined'}
            id="1yr"
            onClick={(e) => {
              handleTimeBtn(e);
            }}
          >
            1Yr
          </Button>
        </ButtonGroup>
        <Chart
          options={optionsgredientchart}
          series={seriesgredientchart}
          type="line"
          height="300px"
        />
      </ParentCard2>
    </PageContainer>
  );
};

export default GredientChart2;
