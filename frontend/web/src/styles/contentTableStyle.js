import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0px 21px;

  tbody {
    background: #fff;
    font-size: 16px;
    color: #666666;

    tr td {
      height: 57px;
      padding-right: 10px;
      position: relative;

      &:first-child {
        padding-left: 25px;
      }

      &:last-child {
        padding-right: 0;
        text-align: center;
      }

      &.truncate {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 360px;
      }

      button {
        background: none;
        border: none;
      }

      .avatar {
        height: 35px;
        width: 35px;
        margin-right: 5px;
        border-radius: 50%;
        vertical-align: middle;
      }
    }
  }
`;
