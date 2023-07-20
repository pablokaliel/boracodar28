import { useState } from "react";
import { ArrowLeft } from "@phosphor-icons/react";
import ContainerContent from "../../components/Content";
import { Divider } from "../home/styles";
import { Container, Swapper, NavLink, Code, DivIA, DivInfo, DivUser,} from "./styles";

function ContainerCode() {
  const [spanValue, setSpanValue] = useState("...");
  const [showDivIA, setShowDivIA] = useState(false);

  const updateSpanValue = (value) => {
    setSpanValue(value );
    setShowDivIA(value !== "");
  };

  return (
    <Container>
      <Swapper>
        <NavLink to={"/"}>
          <ArrowLeft size={32} color="#94a3b8" />
        </NavLink>

        <Code>
          <div className="end">
            <DivUser>
              <DivInfo>
                <h1>Usuário</h1>
                <span>{spanValue}</span>
              </DivInfo>
              <div className="img">
                <img
                  src="https://source.unsplash.com/random/?assistant"
                  alt="Imagem do assistente"
                />
              </div>
            </DivUser>
          </div>
          {showDivIA && (
            <DivIA>
              <div className="img">
                <img
                  src="https://source.unsplash.com/random/?programming,code"
                  alt="Imagem de códigos aleatória"
                />
              </div>
              <DivInfo>
                <h1>Assistente IA</h1>
                <span>
                  Olá! No momento, estou em desenvolvimento e não consigo
                  responder.
                </span>
              </DivInfo>
            </DivIA>
          )}
        </Code>

        <Divider />

        <ContainerContent
          holder={
            "Envie um trecho de código com sua dúvida ou digite “/” para exibir os comandos"
          }
          updateSpanValue={updateSpanValue}
        />
      </Swapper>
    </Container>
  );
}

export default ContainerCode;
