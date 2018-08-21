import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 10px 10px 10px;
  border-bottom: 1px solid #eee;

  img {
    width: 48px;
    height: 48px;
    margin-right: 15px;
    border-radius: 50%;
  }

  section {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h4 {
      font-size: 16px;
      color: #333;
    }

    small {
      margin-top: 3px;
      color: #999;
      font-size: 14px;
    }
  }

  &:hover {
    background-color: #eee;
  }

  &:hover i {
    color: #ffff;
  }
`;

export const Icon = styled.div`
  width: 10%;

  i {
    display: flex;
    justify-content: flex-end;
    color: #eee;
    font-size: 12px;
    font-weight: 100;
  }
`;

export const IconClose = styled.div`
  width: 30%;

  i {
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    color: #d45454;
    font-size: 18px;
    font-weight: 100;
  }

  i:hover {
    color: #d45454 !important;
  }
`;
