import styled from "styled-components";

export const Container = styled.div`
  display: ${props => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);

  main {
    position: fixed;
    background: #fff;
    width: 35%;
    overflow-y: auto;
    max-height: 50%;
    min-height: min-content;
    border-radius: 4px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    padding: 25px;

    li {
      height: 100%;
      border-top: 1px solid #eee;
      margin-top: 8px;
      padding-top: 8px;

      &:first-of-type {
        border-top: none;
        margin-top: 0;
        padding-top: 0;
      }
    }

    strong {
      display: block;
      font-size: 14px;
      color: #444444;
      line-height: 19px;
      margin-bottom: 4px;
    }

    p,
    span {
      display: block;
      font-size: 16px;
      color: #666666;
      padding: 4px 0;
    }

    .align-center {
      text-align: center;
      padding-top: 15px;
    }

    img {
      display: block;
      margin: auto;
      padding-top: 15px;
      max-height: 60px;
    }
  }
`;
