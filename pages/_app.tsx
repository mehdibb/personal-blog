import React, { useCallback, useMemo, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.scss';
import 'normalize.css';
import type { AppProps } from 'next/app';
import {
  Container,
  Navbar,
  Nav,
} from 'react-bootstrap';
import { Access, AccessContext, AccessType } from '_/utilities';

export default function App({ Component, pageProps }: AppProps): React.ReactElement {
  const [accessType, setAccessType] = useState<AccessType>(AccessType.User);

  const handleAccessButtonClick = useCallback(() => {
    setAccessType((previousAccessType) => {
      if (previousAccessType === AccessType.Admin) {
        return AccessType.User;
      }

      return AccessType.Admin;
    });
  }, []);

  const accessContext = useMemo((): Access => ({
    type: accessType,
  }), [accessType]);

  return (
    <>
      {/* Whole app wrapper with background color */}
      <AccessContext.Provider value={accessContext}>
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
                  <Nav.Link onClick={handleAccessButtonClick}>{accessContext.type === AccessType.Admin ? 'User' : 'Admin'}</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <Component {...pageProps} />
          </Container>
        </div>
      </AccessContext.Provider>
    </>
  );
}
