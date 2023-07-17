import { ArrowLeft } from "@phosphor-icons/react";
import ContainerContent from "../../components/content";
import { Divider } from "../home/styles";
import {
  Container,
  Swapper,
  NavLink,
  Code,
  DivIA,
  DivInfo,
  DivUser,
} from "./styles";

function ContainerEditImage() {
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
                <span>Olá...</span>
              </DivInfo>
              <div className="img">
                <img src="https://source.unsplash.com/random/?assistant,woman" />
              </div>
            </DivUser>
          </div>
          <DivIA>
            <div className="img">
              <img src="https://source.unsplash.com/random/?image,editor" />
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
            "Envie um arquivo com a imagem e com a descrição da edição ou digite “/” para exibir os comandos"
          }
        />
      </Swapper>
    </Container>
  );
}

export default ContainerEditImage;
