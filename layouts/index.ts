import Blank from './blank';
import Default from './default';

export const Layouts = {
  Default,
  Blank,
};

export type LayoutName = keyof typeof Layouts;
