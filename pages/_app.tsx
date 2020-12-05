import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';
import 'normalize.css';
import type { AppProps } from 'next/app';
import {
  Container,
  Navbar,
  Nav,
} from 'react-bootstrap';

export default function App({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <>
      {/* Whole app wrapper with background color */}
      <div className="main_wrapper">
        <Container className="__container">
          <Navbar expand="lg" className="pt-4 pb-5">
            <Navbar.Brand href="/">
              Mehdi
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Component {...pageProps} />
        </Container>
      </div>
    </>
  );
}
