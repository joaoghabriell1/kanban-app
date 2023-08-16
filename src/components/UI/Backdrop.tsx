import { useParams, useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import styled from "styled-components";

interface Props {
  onClick: () => void;
}

enum Actions {
  addnewboard = "addnewboard",
}

const Backdrop = () => {
  const { boardId } = useParams();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${boardId}`);
  };

  return (
    <>
      <BackdropLayer onClick={handleClick}></BackdropLayer>;
    </>
  );
};

const BackDropLayer = () => {
  return (
    <>{createPortal(<Backdrop />, document.getElementById("backdrop-root")!)}</>
  );
};

const BackdropLayer = styled.div`
  position: absolute;
  inset: 0;
  background: #000;
  opacity: 0.5;
`;

export default BackDropLayer;
