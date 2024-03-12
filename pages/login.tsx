import { NextPage } from "next";
import Head from "next/head";

import LoginForm from "@/components/LoginForm/LoginForm";

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Crumbs | Login</title>
      </Head>
      <LoginForm />
    </>
  );
};

Login.activeLayout = "Blank";

export default Login;
