import styled from "styled-components";

export const NavigationDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  position: fixed;
  width: 100%;
  height: 50px;
  z-index: 100;
`;

export const NavUl = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 24rem;
  height: 100%;
  background-color: #d1cfcf;
  border-radius: 0 0 10px 10px;
`;