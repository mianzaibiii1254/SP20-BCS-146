import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../Header';
function Layout(props) {
  return (
    <div>
      <Header/>
      <Container>
      {props.children}
      </Container>
    </div>
    );
}

export default Layout;