import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp(
  {
    Component,
    pageProps,
  }: {Component: React.FunctionComponent, pageProps: unknown},
): React.ReactElement {
  return <Component {...pageProps} />;
}

export default MyApp;
