import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99999;
  background-color: rgba(25, 24, 24, 0.63);
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  border-radius: 5px;
  width: 300px;
  height: 160px;
  background-color: #fff;

  input {
    height: 35px;
    width: 200px;
    padding: 0 20px;
    border: 0;
    border: 2px solid #eee;
    font-size: 14px;
    color: #444;
    border-radius: 3px;
  }

  div {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    margin-left: 0;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35px;
    width: 115px;
    padding: 0 15px;
    color: #fff;
    border: 0;
    font-size: 15px;
    font-weight: bold;
    border-radius: 3px;
    cursor: pointer;
  }

  h4 {
    margin: 10px 0 18px 0;
  }
`;

export const Cancel = styled.button`
  background-color: #c7c7c7;
`;

export const Save = styled.button`
  background-color: #82bf7e;

  &:hover {
    background: #76af73;
  }
`;
