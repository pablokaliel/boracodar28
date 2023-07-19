import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Card = styled(Link)`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 16px;
  opacity: 0.6;
  color: var(--gray-02);
  text-decoration: none;

  border-radius: 16px;
  border: 1px solid var(--gray-04);
  background: var(--gray-06);

  transition: all 0.3s;

  &:hover {
    opacity: 1;
    scale: 1.04;
  }

  @media (max-width: 770px) {
    padding: 8px;
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

export const Icon = styled.div`
  width: 64px;
  height: 64px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 12px;

  border-radius: 16px;
  border: 1px solid var(--gray-05);
  background: var(--gray-06);

  @media (max-width: 770px) {
    height: 55px;
    width: 55px;
  }
`;
