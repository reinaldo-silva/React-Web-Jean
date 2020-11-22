import styled from "styled-components";

export const Container = styled.div`
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
  transform: translateX(${(props) => (props.open ? props.open : "-100%")});

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
