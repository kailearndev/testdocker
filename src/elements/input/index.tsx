import React from 'react';
import { Box, InputAdornment, InputLabel, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import './styles.scss';

interface input {
  type: string;
  label: string;
  control: any;
  name: string;
  start?: any;
  end?: any;
  element?: any;
  error?: boolean;
  isDirty?: boolean;
}

const Input = ({
  type,
  label,
  control,
  name,
  start,
  end,
  element,
  error,
  isDirty
}: input) => {
  return (
    <Box className="input_wrapper">
      <InputLabel htmlFor={name} color="info" className="label">
        {label}
      </InputLabel>
      <Box className="container">
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              id={name}
              type={type}
              onChange={onChange}
              value={value}
              className="input"
              error={error}
              focused={!error && isDirty}
              fullWidth
              InputProps={{
                startAdornment: start && (
                  <InputAdornment position="start">{start()}</InputAdornment>
                ),
                endAdornment: end && (
                  <InputAdornment position="end">{end()}</InputAdornment>
                )
              }}
            />
          )}
        />
        {element && element()}
      </Box>
    </Box>
  );
};

export default Input;
