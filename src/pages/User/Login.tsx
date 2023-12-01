import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Box } from '@mui/system';
import { Grid, Typography, IconButton } from '@mui/material';
import Input from 'elements/input';
import EyeIcon from 'assets/icons/eye';
import EyeCrossIcon from 'assets/icons/eye-cross';
import ButtonCustom from 'elements/Button';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import { getStatus, getUser } from './userSlice';
import { signIn } from './userThunk';
import { useNavigate } from 'react-router-dom';
import './styles.scss';

const SignIn = () => {
  const userInfo = useAppSelector(getUser);
  const isLoading = useAppSelector(getStatus);
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required('email is required'),
    password: Yup.string().required('password is required')
  });

  const defaultValues = {
    email: '',
    password: ''
  };

  const formOptions = {
    resolver: yupResolver(validationSchema),
    defaultValues
  };
  const { handleSubmit, formState, getValues, control } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = (data: any) => {
    dispatch(signIn(data));
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (!!userInfo?.token) {
      navigate('/');
    }
  }, [userInfo]);

  const handleClickShowPassword = () => {
    setShowPassword((s) => !s);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const EndComponent = () => {
    return (
      <IconButton
        aria-label="toggle password visibility"
        onClick={handleClickShowPassword}
        onMouseDown={handleMouseDownPassword}
        edge="end"
      >
        {showPassword ? <EyeIcon /> : <EyeCrossIcon />}
      </IconButton>
    );
  };

  const { password, email } = errors;

  return (
    <>
      <Box className="sign_in">
        <Typography className="title_signin">Brickmate Logo</Typography>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12}>
              <Input
                type="email"
                name="email"
                label="Email"
                control={control}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Input
                type={showPassword ? 'text' : 'password'}
                name="password"
                label="Password"
                control={control}
                end={EndComponent}
              />
            </Grid>
          </Grid>
          <Box className="signin_button">
            <ButtonCustom title="Login" cate="standard" isLoading={isLoading} />
          </Box>
        </form>
      </Box>
    </>
  );
};

export default SignIn;
