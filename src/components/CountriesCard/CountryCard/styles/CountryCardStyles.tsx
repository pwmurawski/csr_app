import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  padding: 20px;
  margin: 10px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 1px 2px 0px rgba(66, 68, 90, 1);
  cursor: pointer;
  text-decoration: none;
  color: black;
  transition: background-color 500ms, transform 300ms;
  :hover {
    background-color: #eaf6ff;
    transform: scale(1.1);
  }
`;
export const Name = styled.h1`
  text-align: center;
  font-size: 20px;
  font-family: "Courier New", Courier, monospace;
`;
export const Code = styled.p`
  font-family: "Courier New", Courier, monospace;
`;
