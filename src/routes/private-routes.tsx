import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import LoginPage from "../pages/auth/login";
import { getItem } from '../helpers';

export interface RouteType {
  path: string;
  component: ReactNode
}

export const privateRoutes: RouteType[] = [
  {
    path: '/dashboard',
    component: <LoginPage />
  },
  {
    path: '/profile',
    component: <LoginPage />
  },
];

const PrivateRoute: FC<{children: any}> = ({ children }) => {
  const token = getItem('clientToken');
  return token ? children : <Navigate to='/' replace />;

}

export default PrivateRoute;