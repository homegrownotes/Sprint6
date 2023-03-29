import styled from "styled-components";

export const Border = styled.p`
  margin: 10px 40px;
  height: 50px;
  border: 1.5px solid black;
  border-radius: 30px;
  box-shadow: 1px 2px 5px black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: bold;
  color: black;
  background-color: ${({ active }) => (active ? "pink" : "rgba(255, 255, 255, 0.5)")};
`;

export const Button = styled.p`
  height: 30px;
  width: 44%;
  border-style: solid;
  border-width: 1px;
  border-radius: 1px;
  background-color: rgba(181,178,178, 0.5);
  color: black;
  margin-top: 5px;
  margin-bottom: 2px;
  margin-left: 2px;
  margin_right: 2px;
  padding: 15px 38px;
  display: flex;
  text-align: center;
  text-decoration: none;
  justify-content: center;
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;

export const WelcomeTitle = styled.h1`
  margin: 50px;
  color: rgba(236, 105, 172, 0.8);
  margin-left: 25%;
  margin-right: 25%;
  padding: 15px 32px;
  display: flex;
  text-align: center;
  justify-content: center;
  display: inline-block;
  font-size: 50px;
  justify: center;
`;

export const WelcomeP = styled.h3`
  color: rgba(51, 41, 46, 0.8);
  margin-left: 25%;
  margin-right: 25%;
  display: flex;
  text-align: center;
  justify-content: center;
  display: inline-block;
  font-size: 20px;
  font-family: Arial;
  justify: center;
`;

export const ButtonStart = styled.p`
  height: 30px;
  width: 100px;
  border-style: solid;
  border-width: 1px;
  border-radius: 5px;
  background-color: #b5b2b2;
  color: black;
  margin: 0 auto;
  padding: 1px;
  display: flex;
  text-align: center;
  text-decoration: none;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;

export const Active = styled.img`
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: url("${(props) => props.background}");
`;