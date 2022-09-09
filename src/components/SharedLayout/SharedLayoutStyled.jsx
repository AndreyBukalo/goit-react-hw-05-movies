import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #012444;

  width: 100%;
  min-height: 100vh;
`;

export const Header = styled.header`
  height: 40px;
  background: #898a8b;
  background: -webkit-linear-gradient(0deg, #606c88 0%, #3f4c6b 100%);
  background: linear-gradient(0deg, #606c88 0%, #3f4c6b 100%);
  padding-top: 20px;
`;

export const NavBtn = styled(NavLink)`
  padding: 8px;
  margin-left: 20px;
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;
  color: orange;
  background: rgba(255, 255, 255, 0.45);
  -webkit-backdrop-filter: blur(7px);
  backdrop-filter: blur(7px);
  border: 1px solid rgba(255, 255, 255, 0.225);
  border-radius: 10px;
  &.active {
    padding: 10px;
  }
`;
