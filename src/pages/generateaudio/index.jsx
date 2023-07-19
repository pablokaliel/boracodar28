import { ArrowLeft, PlayPause } from "@phosphor-icons/react";
import ContainerContent from "../../components/Content";
import { Divider } from "../home/styles";
import { Container, Swapper, NavLink, Code, DivIA, DivInfo, DivUser, DivMusic, DivInfoMusic } from "./styles";

function ContainerGenerateAudio() {
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
                <span>Olá...poderia tirar o som de fundo da musica</span>
              </DivInfo>
              <div className="img">
                <img src="https://source.unsplash.com/random/?assistant,woman" />
              </div>
            </DivUser>
          </div>

          <div className="end">
            <DivMusic>
              <img src="https://source.unsplash.com/random/?music,phone" />
              <DivInfoMusic>
                <PlayPause size={32} color="#ffffff" style={{cursor:"pointer"}}/>
                <span>00:00</span>
                <div />
                <span>4:53</span>
              </DivInfoMusic>
            </DivMusic>
          </div>

          <DivIA>
            <div className="img">
              <img src="https://source.unsplash.com/random/?music" />
            </div>
            <DivInfo>
              <h1>Assistente IA</h1>
              <span>
                Olá! No momento, estou em desenvolvimento e não consigo
                responder.
              </span>
            </DivInfo>
          </DivIA>
        </Code>

        <Divider />

        <ContainerContent
          holder={
            "Envie um arquivo com a descrição da maneira desejada para criação ou digite “/” para exibir os comandos"
          }
        />
      </Swapper>
    </Container>
  );
}

export default ContainerGenerateAudio;
