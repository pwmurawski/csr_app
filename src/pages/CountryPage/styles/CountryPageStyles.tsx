import styled from "styled-components";

export const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 90vh;
  padding: 20px;
`;
export const Container = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
  padding: 100px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 1px 2px 0px rgba(66, 68, 90, 1);
  @media (max-width: 320px) {
    padding: 50px;
  }
`;
export const Name = styled.h1`
  font-size: 50px;
  margin: 0 0 50px 0;
  text-align: center;
  @media (max-width: 645px) {
    font-size: 5vw;
  }
`;
export const Code = styled.p``;
export const Emoji = styled.p`
  font-size: 50px;
  margin: 0;
`;
