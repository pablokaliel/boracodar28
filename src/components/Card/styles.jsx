import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Card = styled(Link)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;
  opacity: 0.6;
  color: var(--gray-02);
  text-decoration:none;

  border-radius: 16px;
  border: 1px solid var(--gray-04);
  background: var(--gray-06);

  transition: all 0.3s;

  &:hover {
    opacity: 1;
    scale: 1.04;
  }

  @media (max-width: 770px) {
    padding:8px;
  }
`;

export const ContextIcon = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;

  span {
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
  }
`;

export const Icon = styled.div`
  display: flex;
  width: 64px;
  height: 64px;
  padding: 12px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  border: 1px solid var(--gray-05);
  background: var(--gray-06);

  @media (max-width: 770px) {
    height:55px;
    width:55px;
  }
`;
