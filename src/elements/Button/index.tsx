import { CircularProgress } from '@mui/material';
import React from 'react';
import './styles.scss';

interface button {
  onClick?: () => void;
  title: string;
  cate: 'out-line-disable' | 'out-line' | 'standard' | 'standard-light';
  custom?: any;
  isLoading?: boolean;
  disabled?: boolean;
}

const Button = ({
  onClick,
  title,
  cate,
  custom,
  isLoading,
  disabled
}: button) => {
  let style = '';
  switch (cate) {
    case 'out-line':
      style = 'button_outline';
      break;
    case 'standard-light':
      style = 'button_standard_light';
      break;
    default:
      style = 'button_standard';
  }

  return (
    <>
      <button
        onClick={onClick}
        className={`${style} ${custom} `}
        disabled={disabled}
      >
        {isLoading ? <CircularProgress color="inherit" /> : title}
      </button>
    </>
  );
};

export default Button;
