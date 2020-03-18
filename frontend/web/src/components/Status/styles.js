import styled from "styled-components";

export const Container = styled.div`
  display: table;
  height: 27px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;

  background: ${props => props.status.bgColor};
  color: ${props => props.status.textColor};
  font-size: 14px;
  font-weight: bold;
  border-radius: 12px;
  position: relative;
  height: inherit;
  text-align: center;

  &::before {
    content: "";
    border-radius: 50%;
    background: ${props => props.status.textColor};
    height: 10px;
    width: 10px;
    position: absolute;
    left: 6px;
    top: calc(50% - 6px);
  }

  span {
    margin-left: 22px;
    margin-right: 10px;
  }
`;
