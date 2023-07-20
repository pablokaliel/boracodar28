import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Swapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  width: 1216px;
  height: 884px;

  padding: 60px;
  gap: 40px;

  border-radius: 32px;
  border: 1px solid var(--gray-04);
  background: #020617cc;

  @media (max-width: 770px) {
    width: 95%;
    max-height: 600px;

    padding: 10px;
    overflow: scroll;
  }
`;

export const NavLink = styled(Link)`
  position: absolute;
  top: 20px;
  left: 30px;

  opacity: 0.7;
  scale: 0.9;

  transition: all 0.3s;

  &:hover {
    opacity: 1;
    scale: 1.05;
  }
`;

export const Code = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  overflow-x: auto;

  width: 100%;
  gap: 18px;

  .top {
    margin-top: 60px;
  }

  .end {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    @media (max-width: 770px) {
    }
  }
`;

export const DivIA = styled.div`
  display: flex;
  align-items: flex-start;

  width: max-content;
  gap: 30px;
  padding: 16px;

  background: #42547b;
  border-radius: 18px;

  @media (max-width: 770px) {
    width: initial;
  }

  .img {
    width: 60px;
    height: 60px;

    flex-shrink: 0;
  }

  img {
    width: 100%;
    height: 100%;

    object-fit: cover;
    border-radius: 999px;
  }
`;

export const DivUser = styled.div`
  display: flex;
  align-items: flex-end;

  width: max-content;
  gap: 30px;
  padding: 16px;

  background: #1b1d21;
  border-radius: 18px;

  @media (max-width: 770px) {
    width: initial;
  }

  .img {
    width: 60px;
    height: 60px;

    align-self: flex-start;
    flex-shrink: 0;
  }

  .edit {
    height: 300px;
    width: 300px;

    border-radius: 0;
    margin-top: 12px;

    @media (max-width: 770px) {
      width: initial;
      height: initial;
    }

    img {
      border-radius: 0;
    }
  }

  img {
    width: 100%;
    height: 100%;

    border-radius: 999px;
    object-fit: cover;
  }
`;

export const DivInfo = styled.div`
  h1 {
    font-size: 24px;
  }
`;
