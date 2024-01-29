import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 65px;
  box-sizing: border-box;
  padding: 25px 100px;
  width: 100%;  
`;
export const PageInfo = styled.div`
  
  display: flex;
`;
export const PageButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;  
  color: blue;
  width: 35px
  
`;
export const PageButtonLeft = styled(PageButton)`
  cursor: pointer;
`;
export const PageButtonRight = styled(PageButton)`
  cursor: pointer;
`;
