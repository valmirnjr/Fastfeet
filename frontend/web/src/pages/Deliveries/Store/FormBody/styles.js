import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  padding: 30px;
  display: flex;
  flex-direction: column;

  strong {
    margin-bottom: 7px;
  }

  > div {
    display: flex;
    margin-bottom: 15px;

    > div {
      flex: 1;
      margin-right: 30px;

      &:last-child {
        margin-right: 0;
      }

      > div {
        margin-top: 7px;
      }
    }
  }

  .react-select__value-container {
    height: 45px;
    /* min-height: 45px; */
  }

  .react-select__control {
    height: 45px;
    /* height: 100%; */
  }

  > input {
    display: block;
    width: 100%;
    height: 45px;
    padding: 0 25px;
    border: 1px solid #eee;
    background: #fff;
  }
`;
