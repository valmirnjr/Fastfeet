import styled from "styled-components";
import { opacify, transparentize } from "polished";

export const Container = styled.div`
  color: ${props => props.color};
  background: ${props => transparentize(0.85, opacify(0.5, props.color))};
  width: ${props => props.size || "35px"};
  height: ${props => props.size || "35px"};
  font-size: ${props => (props.size ? "66px" : "14px")};
  border-radius: 50%;
  border: 2px dashed;
  border-color: ${props => props.color};
  text-align: center;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
`;
