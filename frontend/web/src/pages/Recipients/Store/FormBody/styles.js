import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 9px;

  &:last-child {
    margin-bottom: 0;
  }

  .longer-input {
    width: 150%;
  }

  div {
    flex-grow: 1;
    margin-right: 16px;

    &:last-child {
      margin-right: 0;
    }

    input {
      height: 45px;
      width: 100%;
      margin-top: 9px;
      padding: 0 25px;
      border: 1px solid #eee;
      border-radius: 4px;
    }
  }
`;
