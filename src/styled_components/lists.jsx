import styled from "styled-components";


export const CardList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;


export const CardItem = styled.li`
  display: flex;
  flex-direction: column;
  background-color: #f0f0f0;
  gap: 10px;
  border-bottom: 1px solid #000;
  border-top: 1px solid #000;
  padding-top: 1rem;
  padding-bottom: 1rem;
  width: 100%;
`;

export const RequestList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const RequestItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  border: 1px solid #000;
  width: 100%;
`;
