import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  padding: 30px;
  display: flex;
  flex-direction: column;

  strong {
    margin: 18px 0 7px;
  }

  input {
    display: block;
    width: 100%;
    height: 45px;
    padding: 0 25px;
    border: 1px solid #eee;
    background: #fff;
  }
`;

export const Avatar = styled.button`
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
