import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  .response {
    position: absolute;
    bottom: -30px;

    @media (max-width: 770px) {
      bottom: -80px;
    }
  }

  div {
    display: flex;
    align-items: center;

    padding: 16px;
    gap: 16px;
    flex: 1;

    border-radius: 16px;
    border: 1px solid var(--gray-04);
    background: var(--gray-06);

    @media (max-width: 770px) {
      padding: 8px;
    }

    label {
      scale: 0.89;
      transition: all 0.2s;

      &:hover {
        scale: 1.03;
      }
    }

    input {
      height: 100%;
      width: 100%;

      background-color: transparent;
      border: 0;
      outline: none;

      font-size: 18px;
      font-style: normal;
      font-weight: 400;

      color: #fff;
    }
  }
  button {
    display: flex;
    align-items: flex-start;

    padding: 16px;
    gap: 8px;
    scale: 0.95;

    border-radius: 16px;
    border: 1px solid var(--gray-04);
    background: var(--gray-06);

    transition: all 0.3s;

    @media (max-width: 770px) {
      padding: 8px;
    }

    &:hover {
      scale: 1;
      background: #090f1c;
    }
  }
`;
