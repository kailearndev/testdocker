import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { getUser, reset, setUser } from 'pages/User/userSlice';
import { Link, useNavigate } from 'react-router-dom';
import TokenService from 'services/token.service';
import './styles.scss';

const Header = () => {
  const navigate = useNavigate();
  const userInfo = useAppSelector(getUser);
  const user = TokenService.getUser();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user) {
      dispatch(setUser(user));
    }
  }, []);

  const logOut = () => {
    TokenService.removeUser();
    dispatch(reset());
    navigate('/');
  };

  const renderLogin = () => {
    if (userInfo?.token) {
      return (
        <>
          <p>{userInfo?.username}</p>
          <button onClick={logOut}>Log out</button>
        </>
      );
    } else {
      return <Link to="/login">Login</Link>;
    }
  };
  return (
    <header className="header">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>{renderLogin()}</li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
