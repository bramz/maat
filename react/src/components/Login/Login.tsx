import React, { FC } from 'react';
import { LoginWrapper } from './Login.styled';

interface LoginProps {}

const Login: FC<LoginProps> = () => (
 <LoginWrapper data-testid="Login">
    Login Component
 </LoginWrapper>
);

export default Login;
