import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardContent, Divider, Box, MenuItem } from '@mui/material';
import { useSelector } from 'react-redux';
import CustomSelect from '../forms/theme-elements/CustomSelect';

const currencies = [
  {
    value: 'ETH',
    label: 'Ethereum',
  },
  {
    value: 'BTC',
    label: 'Bitcoin',
  },
  {
    value: 'USDT',
    label: 'Tether',
  },
  {
    value: 'TRX',
    label: 'Tron',
  },
];

const ParentCard2 = ({ title, children, footer,cuurencyValue }) => {
  const customizer = useSelector((state) => state.customizer);

  const [currency, setCurrency] = React.useState('ETH');

  const handleChange2 = (event) => {
    setCurrency(event.target.value);
    cuurencyValue(event.target.value)
  };

  return (
    <Card
      sx={{ padding: 0 }}
      elevation={customizer.isCardShadow ? 9 : 0}
      variant={!customizer.isCardShadow ? 'outlined' : undefined}
    >
      <Box sx={{display:"flex" , flexDirection:"row"  , justifyContent:"space-between"}}>
        <CardHeader title={title} />
        <CustomSelect
          id="standard-select-currency"
          value={currency}
          onChange={handleChange2}
         >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </CustomSelect>
      </Box>
      <Divider />

      <CardContent>{children}</CardContent>
      {footer ? (
        <>
          <Divider />
          <Box p={3}>{footer}</Box>
        </>
      ) : (
        ''
      )}
    </Card>
  );
};

ParentCard2.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  footer: PropTypes.node,
};

export default ParentCard2;
