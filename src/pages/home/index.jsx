import ContainerCard from "../../components/Card";
import ContainerContent from "../../components/Content";
import { Container, Swapper, Texts, Buttons, Divider, Icon } from "./styles";

import { MagicWand, Code, ImageSquare, PlayCircle, MusicNotesSimple } from "@phosphor-icons/react";

function Home() {
  return (
    <Container>
      <Swapper>
        <Texts>
          <Icon className="transparent">
            <MagicWand className="blink" size={32} color="#94a3b8" />
          </Icon>
          <h1>Experimente o poder da Inteligência Artificial</h1>
        </Texts>

        <Buttons>
          <ContainerCard
            to={"/code"}
            icon={<Code size={32} color="#94a3b8" />}
            title="Gerador de Código"
          />
          <ContainerCard
            to={"/editimage"}
            icon={<ImageSquare size={32} color="#94a3b8" />}
            title="Edição de foto"
          />
          <ContainerCard
            to={"/editvideo"}
            icon={<PlayCircle size={32} color="#94a3b8" />}
            title="Gerador de vídeos"
          />
          <ContainerCard
            to={"/generate"}
            icon={<MusicNotesSimple size={32} color="#94a3b8" />}
            title="Criador de áudios e musicas"
          />
        </Buttons>

        <Divider />

        <ContainerContent
          holder={"Envie uma mensagem ou digite “/” para exibir os comandos "}
        />
      </Swapper>
    </Container>
  );
}

export default Home;
