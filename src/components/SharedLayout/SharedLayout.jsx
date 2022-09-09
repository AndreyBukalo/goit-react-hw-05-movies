import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, NavBtn } from './SharedLayoutStyled';


export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <NavBtn to="/">Home</NavBtn>
          <NavBtn to="/Movie">Movie</NavBtn>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
