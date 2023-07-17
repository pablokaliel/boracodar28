import { useState } from "react";
import { Content } from "./styles";
import { PaperPlaneRight, PlusCircle } from "@phosphor-icons/react";

function ContainerContent({ holder }) {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [showResponse, setShowResponse] = useState(false);

  const handleChange = (event) => {
    setMessage(event.target.value);
    setShowResponse(false);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (message === "/") {
      setResponse(
        "Para obter ajuda, digite os seguintes comandos:\n/report - Para reportar algum problema\n/contact - Para exibir nosso link de contato"
      );
      setShowResponse(true);
    } else if (message === "/contact") {
      setResponse(
        "Entre em contato conosco através do link: [Link de contato]"
      );
      setShowResponse(true);
    } else if (message === "/report") {
      setResponse("Para reportar algum problema, tire print e nos envie");
      setShowResponse(true);
    } else if (message.startsWith("/")) {
      setResponse(
        "Comando inválido, digite '/' para ver os comandos disponíveis"
      );
      setShowResponse(true);
    } else {
      setResponse("");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  return (
    <Content>
      <div>
        <label htmlFor="file-input">
          <PlusCircle size={32} color="#94a3b8" />
        </label>
        <input
          id="file-input"
          type="file"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        <input
          placeholder={holder}
          value={message}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>

      <button onClick={handleSubmit}>
        <PaperPlaneRight size={32} color="#94a3b8" />
      </button>

      {showResponse && <p className="response">{response}</p>}
    </Content>
  );
}

export default ContainerContent;
