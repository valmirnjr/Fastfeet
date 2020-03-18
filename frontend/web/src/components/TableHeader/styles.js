import styled from "styled-components";

export const Thead = styled.thead`
  font-size: 16px;
  font-weight: bold;
  color: #444444;

  tr th {
    padding-top: 22px;
    padding-right: 10px;
    text-align: left;

    &:first-child {
      padding-left: 25px;
    }

    &:last-child {
      padding-right: 0;
      text-align: center;
    }
  }
`;
