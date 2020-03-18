import styled from "styled-components";

export const ActionsList = styled.ul`
  position: absolute;
  background: #fff;
  border-radius: 4px;
  text-align: left;
  border: 1px solid #eee;
  min-width: 120px;
  left: 50%;
  transform: translateX(-50%);
  top: 90%;
  display: ${props => (props.visible ? "block" : "none")};
  z-index: 1; /* Necessary when the ul extends itself over the next table row */

  &::before {
    content: "";
    position: absolute;
    left: calc(50% - 10px);
    top: -20px;
    border: 10px solid transparent;
    border-bottom-color: #eee;
  }

  li {
    white-space: nowrap;
    margin: 0 10px;
    padding: 10px 0;

    &:not(:first-child) {
      border-top: 1px solid #eee;
    }

    button {
      display: flex;
      align-items: center;
      font-size: 16px;
      color: #999999;

      svg {
        margin-right: 10px;
      }
    }
  }
`;
