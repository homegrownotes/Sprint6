import styled from 'styled-components'

export const Border = styled.p`
  margin: 10px 40px;
  height: 50px;
  border: 1.5px solid black;
  border-radius: 30px;
  box-shadow: 1px 2px 5px black;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  background-color: ${ ({active}) => active ? 'pink' : 'white' } 
`;

export const Button = styled.p`
    height: 30px;
    width: 44%;
    border-style: solid;
    border-width: 1px;
    border-radius: 1px;
    background-color: #b5b2b2;
    color: black;
    margin-top: 5px;
    margin-bottom: 2px;
    margin-left: 2px;
    margin_right: 2px;
    padding: 15px 32px;
    display: flex;
    text-align: center;
    text-decoration: none;
    justify-content: center;
    display: inline-block;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
`;