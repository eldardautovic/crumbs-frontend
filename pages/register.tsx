import { NextPage } from 'next';
import Head from 'next/head';

import RegisterForm from '@/components/RegisterForm/RegisterForm';

const Register: NextPage = () => {
  return (
    <>
      <Head>
        <title>Crumbs | Login</title>
      </Head>
      <RegisterForm />
    </>
  );
};

Register.activeLayout = 'Blank';

export default Register;
