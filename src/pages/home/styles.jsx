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
  width: 1216px;
  padding: 60px;
  flex-direction: column;
  align-items: center;
  border-radius: 32px;
  gap: 40px;
  border: 1px solid var(--gray-04);
  background: rgba(2, 6, 23, 0.8);

  @media (max-width: 770px) {
    width:100%;
    padding:10px;
    gap:20px;
  }
`;

export const Texts = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 770px) {
    text-align:center;
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
    font-size:25px;
  }
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
`;

export const Buttons = styled.div`
  display: flex;
  width: 608px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  @media (max-width: 770px) {
    width:95%;
  }
`;

export const Card = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;
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
  gap: 24px;
  align-items: center;

  span {
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
  }
`;

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: #334155;
`;

export const NavLink = styled(Link)`

`;




/*
Pessoas que confirmou presença no casamento:

Alan, felipe, Carmen, Emily, Dirceu (5)
Késia, Léa, Washington, Maria Emanuelle, João e Miguel(5)
Ayres, Leticia (2)
Igor (1)
Raissa Barros, Emanuely barros (2)
Mislayine, Luciano (2)
Rose Maria (2)
Jocinei, Val,Júlia e Welinton (4)
Erika (8)
Mãe da Beatriz (3)
Joao pedro (1)
flavio (1)
Amrafel, Dani (2)
Aliaska (1)
Karyna e Douglas (2)
Taty, Alexandre e vó (3)
Fernando (1)
Raiane Deivison (2)
Fabiano Carla (2)
Jhonathan, Samuel, Ana (3)
Janaina Esposo (2)
Marisa (1)
Rogerio Esposa (2)

{por enquanto}

Total: 57{por enquanto}

*/