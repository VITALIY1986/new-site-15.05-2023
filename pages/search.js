import { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import Layout from "../src/components/Layout";
import Serch from '../src/components/serchindex';
import Serch2 from '../src/components/serchindex2';
import { useAuth } from '../src/components/login-function/hooks';







const Nav = () => {

  
  const { isLoggedIn } = useAuth();
console.log(isLoggedIn)
  return (
  <Layout>
       {isLoggedIn ? (
          <Serch2/>
      ) : (
        <Serch/>
      )} 
    
    
        </Layout>
  );
};

export default Nav;
