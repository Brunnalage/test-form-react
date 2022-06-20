import React from 'react';
import { Header } from '../components/Header/HeaderPrincipal';
import { Form } from '../components/Form/Form';

export function Home() {

  return (
    <>
      <Header type="home" title="Sign in Up" />
      <Form />
    </>
  )
};

