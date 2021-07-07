import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import styled from 'styled-components';
import GlobalNavigationBar from './components/navBar/globalNavigationBar';
import Home from './components/home';

const Router = () => {

  return (
    <HashRouter>
      <GlobalNavigationBar />
      <Container>
        <Route exact path="/">
          <Home />
        </Route>
      </Container>
    </HashRouter>
  );
};

export default Router;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    margin: 0 auto;
  }
`;