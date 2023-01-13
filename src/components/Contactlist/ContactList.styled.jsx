import styled from '@emotion/styled';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

export const Trash = styled(DeleteForeverOutlinedIcon)`
color: #E6E6E6;
&:hover {
    outline: none;
    color: red;
  }
`;

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
  height: 40px;
  border-bottom: solid #E6E6E6 1px;
  width: 100%
`;

export const Circle = styled.div`
width: 25px;
height: 25px;
border-radius: 50%;
background-color: #E6E6E6;
justify-content: center;
align-items: center;
display: flex;
margin-right: 10px;
`;
