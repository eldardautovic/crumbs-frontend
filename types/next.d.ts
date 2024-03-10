/* eslint-disable @typescript-eslint/ban-types */
import { LayoutName } from '@/layouts';
import type { NextComponentType, NextLayoutComponentType, NextPageContext } from 'next';
import type { AppProps } from 'next/app';

declare module 'next' {
  type NextPageComponentType<P = {}> = NextComponentType<NextPageContext, any, P>;
  type NextPage<P = {}> = NextPageComponentType<P> & {
    activeLayout?: LayoutName;
  };
}

declare module 'next/app' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type AppLayoutProps<P = {}> = AppProps & {
    Component: NextLayoutComponentType;
  };
}
