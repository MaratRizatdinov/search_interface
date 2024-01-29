import styled from "styled-components";

export const ReposTable = styled.div`
  display: grid;
  grid-template-columns: 250px auto 150px;
  grid-template-rows: 50px;
  grid-auto-rows: 50px;
`;
export const ReposTableHead = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #bcc;
`;
export const ReposTableCell = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: start; 
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  box-sizing: border-box;
  max-width: 100%;
  padding-left: 5px;
  padding-right: 5px;
`;
export const RepoLoading =styled.div`
  width: 100%;  
  height: 300px;
  display: flex;
  justify-content: center; 
  align-items: center;
`
