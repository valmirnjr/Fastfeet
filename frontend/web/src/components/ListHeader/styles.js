import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  > strong {
    margin-top: 34px;
    margin-bottom: 34px;
    font-size: 24px;
    display: block;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 36px;

    form {
      position: relative;
      height: 100%;
      margin-right: 161px;
    }

    input {
      width: 237px;
      height: 100%;
      padding-left: 40px;
      padding-right: 20px;
      border-radius: 4px;
      border: 1px solid #ddd;
    }

    button#searchBtn {
      position: absolute;
      top: 7px;
      left: 10px;
      background: none;
      border: none;
    }

    aside {
      display: flex;
      height: 100%;

      a {
        display: flex;
        align-items: center;
        justify-content: space-around;
        background: #7d40e7;
        color: #fff;
        outline: none;
        border: none;
        border-radius: 4px;
        padding: 0 16px;
        width: 142px;

        &:hover {
          background: ${darken(0.06, "#7D40E7")};
        }
      }
    }
  }
`;
