import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, NavBtn } from './SharedLayoutStyled';
import Spinner from '../Spinner/Spinner'


export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <NavBtn to="/">Home</NavBtn>
          <NavBtn to="/Movie">Movie</NavBtn>
        </nav>
      </Header>
      <Suspense fallback={<Spinner/>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
