import { NextPage } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Crumbs: NextPage = () => {
  return <main className={`${inter.className}`}> krambs</main>;
};

Crumbs.activeLayout = 'Default';

export default Crumbs;
