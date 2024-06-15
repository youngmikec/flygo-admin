import { FC } from 'react';
import { Navigate } from 'react-router-dom';

import { RouteType } from './private-routes';
import { getItem } from '../helpers';
import LoginPage from '../pages/auth/login';
import DashboardOverview from '../pages/app/DashboardOverview';
import NotificationsPage from '../pages/app/NotificationsPage';



export const nonPrivateRoutes: RouteType[] = [
  {
    path: '*',
    component: <LoginPage />
  },

  {
    path: '/sign-in',
    component: <LoginPage />
  },

  {
    path: '/dashboard',
    component: <DashboardOverview />
  },
  {
    path: '/notifications',
    component: <NotificationsPage />
  },
  // {
  //   path: '/verify',
  //   component: <EmailVerificationPage />
  // },
  // {
  //     path: '/verify/:code',
  //     component: <EmailVerificationPage />
  // },
];

const NonPrivateRoute: FC<{children: any}> = ({ children }) => {
  const token = getItem('clientToken');
  return token ? <Navigate to='/dashboard' replace /> : children;

}

export default NonPrivateRoute;