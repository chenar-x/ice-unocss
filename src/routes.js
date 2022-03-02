import BasicLayout from '@/layouts/BasicLayout';
import Dashboard from '@/pages/Dashboard';

import Example from './example';

import Button from '@/components/Button'

const routerConfig = [
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '/',
        component: Example,
      },
    ],
  },
];
export default routerConfig;
