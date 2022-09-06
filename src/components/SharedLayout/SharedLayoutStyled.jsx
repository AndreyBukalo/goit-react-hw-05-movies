import styled from "@emotion/styled";
import { Outlet, NavLink } from 'react-router-dom';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
    height:40px;
    background-color:grey;
    padding-top:20px;
`

export const NavBtn = styled(NavLink)`

padding:8px;
  margin-left: 20px;
  text-decoration: none;
  font-size:20px;
  font-weight:500;
  color:white;
  border:1px solid red;
  &.active {
    background-color:red;
  }
`;