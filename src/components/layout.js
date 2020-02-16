import React from 'react';
import Header from './header';
import Footer from './footer';

export default function Layout({children, ...props}) {

  return(
    <React.Fragment>
      <Header/>
      <main>
        {children}
      </main>
      <Footer/>
    </React.Fragment>
  )

}