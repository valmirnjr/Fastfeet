import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 34px 0;
  height: 36px;
  font-size: 24px;

  > strong {
    white-space: nowrap;
    /* margin-right: 60px; */
  }

  aside {
    display: flex;
    height: 100%;
    font-size: 14px;

    button {
      background: #ccc;
      color: #fff;
      border: none;
      border-radius: 4px;
      display: flex;
      align-items: center;
      padding: 0 16px;
      margin-left: 16px;

      svg {
        margin-right: 5px;
      }

      &:hover {
        background: ${darken(0.06, "#ccc")};
      }

      &.submit {
        background: #7d40e7;

        &:hover {
          background: ${darken(0.06, "#7D40E7")};
        }
      }
    }
  }
`;
