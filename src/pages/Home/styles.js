import styled from "styled-components";
import { FiPlusCircle } from "react-icons/fi";
import { CgCloseO } from "react-icons/cg";

export const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: #fff;
  overflow-x: hidden;

  .sec1 {
    height: 50vh; //largura
    width: 100vw;
    background: #2a2c2e;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-top: 20px;
    flex-direction: column;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 100;

    button {
      width: 50px;
      height: 50px;
      background: none;
      border: none;
      cursor: pointer;
      position: absolute;
      right: 40vh;
      top: 50px;
    }
  }

  .sec2 {
    margin-top: 25vh;
    min-height: 60vh;
    width: 100vw;
    padding: 0px 15vw;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
  }
`;

export const Title = styled.span`
  font-family: Montserrat, sans-serif;
  width: ${(props) => (props.width ? props.width : "100%")};
  font-size: 30px;
  font-weight: ${(props) => (props.bolder ? "bolder" : "none")};
  text-align: center;
  color: ${(props) => (props.color ? props.color : "#FFF")};
  margin-top: 30px;
`;

export const Card = styled.div`
  position: relative;
  width: 325px;
  height: 280px;
  margin: 50px;
  background: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 1px 5px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  z-index: 110;

  div {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 30px;
  }

  section {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0px 30px;
    flex-direction: column;
  }
`;

export const Label = styled.label`
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  color: #000;
  font-weight: bold;
  padding-bottom: 3px;
`;

export const Text = styled.label`
  font-family: Montserrat, sans-serif;
  padding-bottom: 10px;
  font-size: 16px;
  color: #000;
`;

export const Add = styled(FiPlusCircle)`
  color: #09d9fe;
  height: 50px;
  width: 50px;
`;

export const Close = styled(CgCloseO)`
  color: #09d9fe;
  height: 50px;
  width: 50px;
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  z-index: 200;
  background: rgba(0, 0, 0, 0.4);

  width: 100vw;
  height: 100%;
  transition: 0.4s;
  transform: translateX(${(props) => (props.open ? "0%" : "100%")});

  .close {
    width: 50px;
    height: 50px;
    background: none;
    border: none;
    cursor: pointer;
    position: absolute;
    right: 10vh;
    top: 50px;
  }

  .header {
    height: 170px;
    background: #2a2c2e;
    width: 770px;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-direction: column;
    padding: 10px 90px;
    border-radius: 5px 5px 0px 0px;

    img {
      width: 50px;
      height: 50px;
    }
  }

  form {
    width: 770px;
    height: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    background: #fff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12),
      0px 1px 5px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    padding: 10px 90px;

    div {
    }
  }

  section {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
  }

  button {
    width: 270px;
    height: 50px;
    cursor: pointer;
    background: #09d9fe;
    border: none;
    border-radius: 5px;
    color: #fff;
    font-weight: bold;
    font-size: 24px;
    line-height: 40px;
    margin: 20px 0px;
  }
`;

export const Input = styled.div`
  width: ${(props) => (props.widthLabel ? props.widthLabel : "100%")};
  display: flex;
  flex-direction: column;
  justify-content: center;

  label {
    font-weight: bold;
    margin-bottom: 3px;
  }

  input {
    height: 40px;
    width: ${(props) => (props.width ? props.width : "100%")};
    margin-bottom: 15px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    padding: 0px 10px;
    font-family: Montserrat, sans-serif;

    &::placeholder {
      color: #ccc;
      font-family: Montserrat, sans-serif;
    }
  }

  textarea {
    height: 100px;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    margin-bottom: 15px;
    padding: 10px 10px;
    font-family: Montserrat, sans-serif;

    &::placeholder {
      color: #ccc;
      font-family: Montserrat, sans-serif;
    }
  }
`;

export const Body = styled.div`
  display: flex;
  height: auto;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;
