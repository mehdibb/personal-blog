import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <>
      {/* Whole app wrapper with background color */}
      <div className="bg-light main_wrapper">
        {/* the main responsive container */}
        <div className="container">
          {/* the whole app column */}
          <div className="col-sm">
            {/* topbar including logo and hamburger menu */}
            <div className="row" />
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </>
  );
}
