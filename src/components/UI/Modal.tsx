import { createPortal } from "react-dom";
import BackDropLayer from "./Backdrop";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  heigth?: string;
}

interface StyledProps {
  $height: string | undefined;
}

const Modal = ({ children, heigth }: Props) => {
  return createPortal(
    <ModalContentWrapper $height={heigth}>
      <BackDropLayer />
      {children}
    </ModalContentWrapper>,
    document.getElementById("modal-root")!
  );
};

export default Modal;

const ModalContentWrapper = styled.div<StyledProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${(props) => props.theme.colors["bg-cards"]};
  border-radius: 6px;
  width: min(480px, 100% - 2rem);
  margin-inline: auto;
  min-height: ${({ $height }) => ($height ? $height : "500px")};
  padding: 3.2rem;
`;
