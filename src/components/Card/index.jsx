import { Card, ContextIcon, Icon } from "./styles";
import { ArrowRight } from "@phosphor-icons/react";

function ContainerCard({ to, icon, title }) {
  return (
    <Card to={to}>
      <ContextIcon>
        <Icon>{icon}</Icon>
        <span>{title}</span>
      </ContextIcon>
      <ArrowRight size={32} color="#94a3b8" />
    </Card>
  );
}

export default ContainerCard;
