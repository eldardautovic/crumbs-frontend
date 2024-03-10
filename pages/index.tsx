import { NextPage } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Home: NextPage = () => {
  return <main className={`${inter.className}`}> Elcic mafija</main>;
};

Home.activeLayout = 'Default';

export default Home;
