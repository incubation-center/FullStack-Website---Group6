import * as React from 'react';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';

const PrettoSlider = styled( Slider )( {
  color: '#30D5C8',
  height: 15,
  paddingBottom: 1,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 14,
    background: 'unset',
    padding: 0,
    width: 36,
    height: 36,
    top: '120%',
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#30D5C8',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-50deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(135deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(225deg)',
    },
  },
} );

function SlideFilter ()
{
  return (
    <div className="shrink w-full">  
      <PrettoSlider
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        defaultValue={ 0 }
      />
    </div>
  );
}

export default SlideFilter;
