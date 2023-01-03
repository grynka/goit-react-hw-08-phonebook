import styled from '@emotion/styled';

export const Button = styled.button`
  width: 80px;
  height: 20px;
  color: #000;
  border-radius: 5px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const BtnDel = styled.button`
  font-size: 18px;
  border: none;
  background: none;
  color: red;
  display: flex;
`;

export const Item = styled.li`
  font-size: 18px;
  padding: 0;
  display: flex;
  align-items: center;
  height: 30px;
  border-bottom: dotted 2px;
`;
