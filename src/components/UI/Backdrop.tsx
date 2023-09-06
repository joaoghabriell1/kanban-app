import { useParams, useNavigate } from "react-router-dom";
import { useQueryClient } from "react-query";
import { createPortal } from "react-dom";
import styled from "styled-components";

const Backdrop = () => {
  const { boardId } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleClick = () => {
    queryClient.removeQueries({ queryKey: ["current-task"], exact: true });
    navigate(`/${boardId}`);
  };

  return (
    <>
      <BackdropLayer onClick={handleClick}></BackdropLayer>
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
