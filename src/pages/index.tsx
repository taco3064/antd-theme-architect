import { Outlet, type RouteObject } from 'react-router-dom';
import { Typography } from 'antd';
import { lazy } from 'react';

import NavMenuPage from './NavMenu';
import { App } from '~ata/containers';
import { DemoContainer } from '~ata/components';

export default [
  {
    path: '/',
    element: (
      <App>
        <Outlet />
      </App>
    ),
    children: verifyPages([
      {
        path: '/',
        element: <NavMenuPage />,
      },
      {
        path: '/auto-complete',
        Component: lazy(() => import('./AutoComplete')),
      },
      {
        path: '/button',
        Component: lazy(() => import('./Button')),
      },
      {
        path: '/form',
        Component: lazy(() => import('./Form')),
      },
      {
        path: '/menu',
        Component: lazy(() => import('./Menu')),
      },
      {
        path: '/pagination',
        Component: lazy(() => import('./Pagination')),
      },
    ]),
  },
] satisfies RouteObject[];

function verifyPages(pages: RouteObject[]) {
  const components = import.meta.env.VITE_DEMO_COMPONENTS;

  return pages.map((page) => {
    const { path } = page;
    const component = path?.replace(/^\//, '');

    if (path === '/' || (component && components.includes(component))) {
      return page;
    }

    return {
      path,
      element: (
        <DemoContainer title="Invalid Demo Component Setting">
          <Typography.Title level={4} className="text-gray text-center mt-8">
            "{component}" Is Not A Valid Demo Component.
            <br />
            Please Check "vite.config.ts".
          </Typography.Title>
        </DemoContainer>
      ),
    };
  });
}
