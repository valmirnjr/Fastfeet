import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  height: 100%;
  background: #7d40e7;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    background: #fff;
    height: 100%;
    max-height: 450px;
    width: 360px;
    border-radius: 4px;
    box-shadow: 0px 0px 10px #00000033;
    padding: 60px 30px;
    display: flex;
    flex-direction: column;

    img {
      width: 90%;
      margin-bottom: 25px;
      align-self: center;
    }

    strong {
      color: #444;
      line-height: 19px;
      text-align: left;
      margin-top: 14px;
      margin-bottom: 9px;
    }

    input {
      height: 45px;
      padding-left: 15px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }

    span {
      color: #f64c75;
      align-self: flex-start;
      margin-top: 5px;
      font-weight: bold;
    }

    button {
      height: 45px;
      background: #7d40e7;
      border-radius: 4px;
      border: none;
      margin-top: 16px;
      color: #fff;
      font-weight: bold;

      transition: background 0.2s;
      &:hover {
        background: ${darken(0.06, "#7d40e7")};
      }
    }
  }
`;
