import { useState, ReactNode } from "react";
import { IconPlus } from "@tabler/icons";
import { FabContainer, FabButton, FabAction, FabTooltip } from "./styles";

interface Props {
  actions: { label: string; icon: ReactNode; onClick: any }[];
}

const FloatingButton = ({ actions }: Props) => {
  const [open, setOpen] = useState(false);
  // Set open state to true if user hover over "ul" element
  const handleClick = () => setOpen((prev) => !prev);
  // Set open state to false if user hover out of "ul" element
  return (
    <FabContainer open={open} onClick={handleClick}>
      <FabButton open={open}>
        <IconPlus />
      </FabButton>
      {actions.map((action, index) => (
        <FabAction
          key={action.label}
          style={{ transitionDelay: `${index * 25}ms` }}
          onClick={() => {
            action.onClick();
          }}
          open={open}
        >
          <>
            {action.icon}
            <FabTooltip open={open}>{action.label}</FabTooltip>
          </>
        </FabAction>
      ))}
    </FabContainer>
  );
};

export default FloatingButton;
