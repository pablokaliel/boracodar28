import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;

  @media (max-width: 770px) {
    padding: 20px;
  }
`;

export const Swapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 1216px;

  padding: 60px;
  gap: 40px;

  border-radius: 32px;
  border: 1px solid var(--gray-04);
  background: #020617cc;

  @media (max-width: 770px) {
    width: 100%;
    padding: 10px;
    gap: 20px;
  }
`;

export const Texts = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 770px) {
    text-align: center;
  }

  .transparent {
    background: transparent;
    border: 0;
  }

  @keyframes blink {
    0% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  }

  .blink {
    animation: blink 1s infinite;
  }

  h1 {
    margin-top: 24px;

    @media (max-width: 770px) {
      font-size: 25px;
    }
  }
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 64px;
  height: 64px;

  padding: 12px;

  border-radius: 16px;
  border: 1px solid var(--gray-05);
  background: var(--gray-06);
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 608px;
  gap: 16px;

  @media (max-width: 770px) {
    width: 95%;
  }
`;

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 16px;
  opacity: 0.6;

  border-radius: 16px;
  border: 1px solid var(--gray-04);
  background: var(--gray-06);

  transition: all 0.3s;

  &:hover {
    opacity: 1;
    scale: 1.04;
  }
`;

export const ContextIcon = styled.div`
  display: flex;
  align-items: center;

  gap: 24px;

  span {
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
  }
`;

export const Divider = styled.div`
  height: 1px;
  width: 100%;

  background: var(--gray-04);
`;

export const NavLink = styled(Link)``;
