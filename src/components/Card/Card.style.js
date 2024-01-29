import styled from "styled-components";

export const Card = styled.div`
  flex-basis: 200px;
  min-height: 200px;
  max-width: 150px;
  background-color: aqua;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 25px;
  box-sizing: border-box;
  cursor: pointer;
  box-shadow: 2px 2px 5px currentColor;
  transition:
    box-shadow 0.2s,
    background-color 0.2s;
  border-radius: 5px;
  &:hover {
    box-shadow: 7px 7px 10px currentColor;
    background-color: rgb(173, 233, 233);
  }
  &:active {
    box-shadow: 2px 2px 5px currentColor;
    background-color: aqua;
  }
`;

export const CardAvatar = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50px;
  background-color: aliceblue;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const CardTitle = styled.div`
  padding: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  box-sizing: border-box;
  max-width: 100%;
`;
