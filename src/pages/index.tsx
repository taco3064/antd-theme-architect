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
        path: '/badge',
        Component: lazy(() => import('./Badge')),
      },
      {
        path: '/button',
        Component: lazy(() => import('./Button')),
      },
      {
        path: '/calendar',
        Component: lazy(() => import('./Calendar')),
      },
      {
        path: '/card',
        Component: lazy(() => import('./Card')),
      },
      {
        path: '/cascader',
        Component: lazy(() => import('./Cascader')),
      },
      {
        path: '/checkbox',
        Component: lazy(() => import('./Checkbox')),
      },
      {
        path: '/collapse',
        Component: lazy(() => import('./Collapse')),
      },
      {
        path: '/descriptions',
        Component: lazy(() => import('./Descriptions')),
      },
      {
        path: '/divider',
        Component: lazy(() => import('./Divider')),
      },
      {
        path: '/empty',
        Component: lazy(() => import('./Empty')),
      },
      {
        path: '/form',
        Component: lazy(() => import('./Form')),
      },
      {
        path: '/list',
        Component: lazy(() => import('./List')),
      },
      {
        path: '/menu',
        Component: lazy(() => import('./Menu')),
      },
      {
        path: '/pagination',
        Component: lazy(() => import('./Pagination')),
      },
      {
        path: '/popover',
        Component: lazy(() => import('./Popover')),
      },
      {
        path: '/radio',
        Component: lazy(() => import('./Radio')),
      },
      {
        path: '/statistic',
        Component: lazy(() => import('./Statistic')),
      },
      {
        path: '/steps',
        Component: lazy(() => import('./Steps')),
      },
      {
        path: '/table',
        Component: lazy(() => import('./Table')),
      },
      {
        path: '/tabs',
        Component: lazy(() => import('./Tabs')),
      },
      {
        path: '/tag',
        Component: lazy(() => import('./Tag')),
      },
      {
        path: '/typography',
        Component: lazy(() => import('./Typography')),
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
