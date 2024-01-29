import styled from "styled-components";

export const ContentBlock = styled.div`
  padding-left: calc(50% - 512px);
  padding-right: calc(50% - 512px);
  background-color: #ccc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding-top: 15px;
  padding-bottom: 15px;
  height: ${(props) => (props.mode === "load" ? "90vh" : "auto")};
`;

export const Title = styled.h1`
  font-size: 24px;
  line-height: 29px;
  font-weight: 500;
  text-align: center;
  width: 100%;
`;
export const CardsContainer = styled.div`
  display: flex;
  gap: 25px;
  width: 100%;
  height: auto;
  justify-content: ${(props) =>
    props.itemsCount < 5 ? "center" : "space-between"};
  flex-wrap: wrap;
  padding-top: 20px;
`;
export const Span = styled.span`
  color: blue;
`;
