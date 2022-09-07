import styled from "@emotion/styled";
import { Link } from 'react-router-dom';
export const Links = styled(Link)`
  text-decoration:none;
`

export const List = styled.ul`
margin-top:60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;


export const ListItem = styled.li`
  width: 380px;
  transform: scale(1);
  transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 7px 7px 34px -5px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 7px 7px 34px -5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 7px 7px 34px -5px rgba(0, 0, 0, 0.75);
  padding: 6px;
  display: flex;
  flex-direction: column;
  margin-right: 60px;
  margin-bottom: 36px;
  background: rgba(255, 255, 255, 0.178);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.075);
  border-radius:20px;
  &:hover {
    transform: scale(1.05);
    transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
`;