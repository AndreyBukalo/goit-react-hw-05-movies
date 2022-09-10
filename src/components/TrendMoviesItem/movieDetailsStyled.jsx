import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #012444;

  width: 75%;
  min-height: 100vh;
`;

export const Wrapper = styled.div`
  margin-top: 25px;
  display: flex;
  align-items: flex-end;
`;

export const Image = styled.img`
  height: 540px;
  margin-left: 20px;
`;

export const Desc = styled.div`
  margin-left: 20px;
  color: white;
  font-weight: 500;
`;

export const TextWrap = styled.span`
  color: orange;
`;

export const Title = styled.h1`
  color: orange;
`;

export const BackBtn = styled(NavLink)`
  transform: scale(1);
  transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  width: 60px;
  margin-left: 20px;
  margin-top: 10px;
  text-decoration: none;
  text-align: center;
  font-weight: 500;
  color: orange;
  background: rgba(255, 255, 255, 0.45);
  -webkit-backdrop-filter: blur(7px);
  backdrop-filter: blur(7px);
  border: 1px solid rgba(255, 255, 255, 0.225);
  border-radius: 10px;
  &:hover {
    transform: scale(1.05);
    transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
`;
