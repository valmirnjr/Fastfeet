import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;

  nav {
    display: flex;
    align-items: center;
    width: 100%;

    img {
      height: 26px;
      width: 165px;
      padding-right: 30px;
      border-right: 1px solid #ccc;
      margin-right: 18px;
    }

    menu {
      width: 30%;
      display: flex;
      justify-content: space-between;

      a {
        color: #999999;
        font-weight: bold;
        padding: 0 12px;
      }

      .active {
        color: #444;
      }
    }
  }

  aside {
    display: flex;
    flex-direction: column;

    strong {
      color: #666666;
      white-space: nowrap;
    }

    button {
      background: none;
      border: none;
      white-space: nowrap;
      color: #de3b3b;
    }
  }
`;
