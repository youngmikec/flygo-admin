import { FC } from 'react';
import { Navigate } from 'react-router-dom';

import { RouteType } from './private-routes';
import { getItem } from '../helpers';
import LoginPage from '../pages/auth/login';
import DashboardOverview from '../pages/app/DashboardOverview';
import NotificationsPage from '../pages/app/NotificationsPage';
import ReviewsPage from '../pages/app/ReviewsPage';
import AnalyticsPage from '../pages/app/AnalyticsPage';
import UsersPage from '../pages/app/UsersPage';
import SettingsPage from '../pages/app/SettingsPage';
import BookingsPage from '../pages/app/BookingsPage';
import ServicesPage from '../pages/app/ServicesPage';



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
  {
    path: '/reviews',
    component: <ReviewsPage />
  },
  {
    path: '/analytics',
    component: <AnalyticsPage />
  },
  {
    path: '/bookings',
    component: <BookingsPage />
  },
  {
    path: '/services',
    component: <ServicesPage />
  },
  {
    path: '/users',
    component: <UsersPage />
  },
  {
    path: '/settings',
    component: <SettingsPage />
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