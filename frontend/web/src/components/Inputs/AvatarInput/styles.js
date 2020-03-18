import styled from "styled-components";

export const Container = styled.div`
  align-self: center;
  margin-bottom: 30px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      height: 150px;
      width: 150px;
      border-radius: 50%;
      border: 3px dashed #eee;
      background: #eee;
    }

    input {
      display: none;
    }
  }
`;

export const Avatar = styled.div`
  margin: auto;

  height: 150px;
  width: 150px;
  border-radius: 75px;
  border: 2px dashed #eee;
  background: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  strong {
    color: #ddd;
    font-size: 16px;
  }
`;
