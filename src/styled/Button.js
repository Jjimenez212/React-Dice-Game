import styled from "styled-components";

export const Button = styled.button`
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
padding: 10px 18px;
gap: 10px;
color: white;
width: 220px;
height: 44px;
min-width: 220px;
background: black;
border-radius: 5px;
border: 1px solid transparent;
cursor: pointer;
font-size: 16px;
transition: 0.4s background ease-in;
&:hover{
  background-color:white;
  border-color: 1px solid black;
  color: black;
  transition: 0.3s background ease-in;
}
`;
export const OutlineButton = styled(Button)`
background-color: white;
border: 1px solid black;
color: black;
&:hover{
  background-color: black;
  border-color: 1px solid black;
  border-color: 1px solid transparent;
  color: white;
  transition: 0.3s background ease-in;
}
`;